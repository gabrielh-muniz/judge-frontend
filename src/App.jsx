import Wrapper from "./components/Wrapper";
import InputText from "./components/InputText";

function App() {
  return (
    <Wrapper>
      <div className="max-w-sm w-full space-y-3 bg-white p-8 rounded-lg shadow-md">
        <header className="flex justify-center">
          <img src="/logo" alt="Logo" />
        </header>

        <h1 className="text-center text-2xl font-semibold">Sign up</h1>

        <form className="mt-6 space-y-2">
          <InputText
            id="username"
            name="username"
            type="text"
            required={true}
          />

          <InputText
            id="email"
            name="email"
            type="email"
            required={true}
            autoComplete="email"
          />

          <InputText
            id="password"
            name="password"
            type="password"
            required={true}
            autoComplete="password"
          />

          <InputText
            id="confirm-password"
            name="confirm-password"
            type="password"
            required={true}
            autoComplete="new-password"
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
