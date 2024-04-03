import { LoginForm, Navbar } from "@/components";

export default function login() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="max-w-xl py-6">
              To star using Tracker you need log in otherwise you won't be able
              to use our features
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
