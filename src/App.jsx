import Wrapper from "./components/Wrapper";
import InputText from "./components/InputText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // TODO: call the API to create a new user
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
          />

          <InputText
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            register={register}
            errors={errors}
          />

          <InputText
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            register={register}
            errors={errors}
          />

          <InputText
            label="Confirm Password"
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            register={register}
            errors={errors}
          />

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Sign up
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default App;
