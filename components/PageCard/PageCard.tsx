import { PageType } from "@/types";
import Link from "next/link";
import { usePageCard } from "./usePageCard";

export const PageCard = ({ page }: { page: PageType }) => {
  const { loading, confirm, setConfirm, handleDelete } = usePageCard();
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{page.domain}</h2>
        <p>{page.apiKey.slice(0, 8)}********</p>
        <div className="card-actions justify-end">
          <Link href={`/pages/${page._id}`} className="btn btn-primary">
            View
          </Link>
          {!confirm && (
            <button onClick={() => setConfirm(true)} className="btn btn-ghost">
              Delete
            </button>
          )}
          {confirm && (
            <button
              className="btn btn-error"
              onClick={() => {
                handleDelete(page._id);
              }}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Confirm"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageCard;
