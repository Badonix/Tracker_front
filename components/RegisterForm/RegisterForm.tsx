import { ErrorMessage } from "@hookform/error-message";
import useRegisterForm from "./useRegisterForm";
import { RegisterInputs } from "./types";

export const RegisterForm = () => {
  const { passwordValue, isLoading, errors, handleSubmit, onSubmit, register } =
    useRegisterForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          disabled={isLoading}
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
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
          placeholder="Randomusername"
          className={`input input-bordered ${
            errors["username"] && "input-error"
          }`}
        />
      </div>{" "}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          disabled={isLoading}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Not valid email",
            },
            minLength: {
              value: 3,
              message: "Minimum of 3 characters",
            },
            maxLength: {
              value: 80,
              message: "Maximum of 80 characters",
            },
          })}
          placeholder="randomguy@email.com"
          className={`input input-bordered ${errors["email"] && "input-error"}`}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          disabled={isLoading}
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "Minimum of 6 characters",
            },
            maxLength: {
              value: 25,
              message: "Maximum of 25 characters",
            },
            validate: (val) => {
              let containsNumber = /\d/.test(val);
              if (!containsNumber) {
                return "At least one number";
              }
            },
          })}
          type="password"
          placeholder="**********"
          className={`input input-bordered ${
            errors["password"] && "input-error"
          }`}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Repeat Password</span>
        </label>
        <input
          disabled={isLoading}
          {...register("repeatPassword", {
            required: {
              value: true,
              message: "Please repeat password",
            },
            minLength: {
              value: 3,
              message: "Minimum of 3 characters",
            },
            maxLength: {
              value: 25,
              message: "Maximum of 25 characters",
            },
            validate: (val) => {
              if (passwordValue != val) {
                return "Passwords do not match";
              }
            },
          })}
          type="password"
          placeholder="**********"
          className={`input input-bordered ${
            errors["password"] && "input-error"
          }`}
        />
      </div>
      <div className="form-control mt-6">
        <button disabled={isLoading} className="btn btn-primary">
          {isLoading && <span className="loading loading-spinner"></span>}
          Register
        </button>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="toast">
          <div className="alert alert-error">
            {Object.keys(errors).length > 0 && (
              <div className="toast">
                <div className="alert alert-error">
                  {(Object.keys(errors) as Array<keyof RegisterInputs>).map(
                    (errorKey, index) => {
                      if (index === 0) {
                        return (
                          <ErrorMessage
                            key={errorKey}
                            errors={errors}
                            name={errorKey}
                          />
                        );
                      }
                    },
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </form>
  );
};
export default RegisterForm;
