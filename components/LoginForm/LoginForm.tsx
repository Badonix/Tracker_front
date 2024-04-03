import { ErrorMessage } from "@hookform/error-message";
import useLoginForm from "./useLoginForm";

export const LoginForm = () => {
  const { errors, handleSubmit, onSubmit, register } = useLoginForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Login</span>
        </label>
        <input
          {...register("login", {
            required: {
              value: true,
              message: "Login is required",
            },
            minLength: {
              value: 3,
              message: "Minimum of 3 characters",
            },
            maxLength: {
              value: 25,
              message: "Maximum of 25 characters",
            },
          })}
          placeholder="email or username"
          className={`input input-bordered ${errors["login"] && "input-error"}`}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 3,
              message: "Minimum of 3 characters",
            },
            maxLength: {
              value: 25,
              message: "Maximum of 25 characters",
            },
          })}
          type="password"
          placeholder="password"
          className={`input input-bordered ${
            errors["password"] && "input-error"
          }`}
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
      {errors["login"] && (
        <div className="toast">
          <div className="alert alert-info">
            <ErrorMessage errors={errors} name="login" />
          </div>
        </div>
      )}
      {errors["password"] && (
        <div className="toast">
          <div className="alert alert-error">
            <p>
              <ErrorMessage errors={errors} name="password" />
            </p>
          </div>
        </div>
      )}
    </form>
  );
};
export default LoginForm;
