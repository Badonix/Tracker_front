import { LoginForm, Navbar } from "@/components";
import { RegisterForm } from "@/components/RegisterForm";

export const register = () => {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="max-w-xl py-6">
              You need an account to start using Tracker, you can create one
              here. Just try to remember password cause there is no password
              recovery function yet
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default register;
