import { ErrorMessage } from "@hookform/error-message";
import { useAddPageModal } from "./useAddPageModal";
import { useClickOutside } from "@/hooks";
import { useRef } from "react";

export const AddPageModal = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef(null);
  const { register, errors, onSubmit, handleSubmit } = useAddPageModal();
  useClickOutside(modalRef, () => {
    setModal(false);
  });
  return (
    <div className="h-screen z-30 w-screen fixed backdrop-blur-md top-0 left-0 flex items-center justify-center">
      <div
        ref={modalRef}
        className="py-4 bg-background rounded-xl shadow-lg w-full max-w-lg"
      >
        <h3 className="md:ml-8">Add Page</h3>
        <form className="card-body py-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Domain</span>
            </label>
            <input
              placeholder="domain.com"
              {...register("domain", {
                required: {
                  value: true,
                  message: "Domain is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
                  message: "Not valid domain",
                },
              })}
              className={`input input-bordered ${errors["domain"] && "input-error"}`}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      {errors["domain"] && (
        <div className="toast">
          <div className="alert alert-error">
            <p>
              <ErrorMessage errors={errors} name="domain" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPageModal;
