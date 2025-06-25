import Wrapper from "../components/Wrapper";
import InputText from "../components/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { signup } from "@/api/auth";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(50),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    "confirm-password": z.string(),
  })
  .refine((data) => data.password === data["confirm-password"], {
    message: "Passwords do not match",
    path: ["confirm-password"],
  });

function SignupPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    //console.log(data);
    // TODO: call the API to create a new user and redirect to the login page
    // if not successful, show an error message from the server
    const [error, response] = await signup(data);
    if (error) {
      console.error("Signup failed:", error);
      // TODO: handle error with toast notification
      return;
    }
    navigate("/");
  };

  return (
    <Wrapper>
      <div className="max-w-sm w-full space-y-3 bg-white p-8 rounded-lg shadow-md">
        <header className="flex justify-center">
          <img src="/logo" alt="Logo" />
        </header>

        <h1 className="text-center text-2xl font-semibold">Sign up</h1>

        <form className="mt-6 space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <InputText
            id="username"
            name="username"
            type="text"
            register={register}
            errors={errors}
            touchedFields={touchedFields}
          />

          <InputText
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            register={register}
            errors={errors}
            touchedFields={touchedFields}
          />

          <InputText
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            register={register}
            errors={errors}
            touchedFields={touchedFields}
          />

          <InputText
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            register={register}
            errors={errors}
            touchedFields={touchedFields}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-3 flex justify-center py-2 px-4 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer"
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
          </Button>
        </form>
      </div>
    </Wrapper>
  );
}

export default SignupPage;
