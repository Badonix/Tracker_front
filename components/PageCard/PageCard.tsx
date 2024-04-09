import { PageType } from "@/types";
import Link from "next/link";
import { usePageCard } from "./usePageCard";

export const PageCard = ({ page }: { page: PageType }) => {
  const { loading, handleDelete } = usePageCard();
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{page.domain}</h2>
        <p>{page.apiKey.slice(0, 8)}********</p>
        <div className="card-actions justify-end">
          <Link href={`/pages/${page._id}`} className="btn btn-primary">
            View
          </Link>
          <button
            onClick={() => {
              handleDelete(page._id);
            }}
            className="btn btn-ghost"
          >
            {loading ? (
              <span className="loading loading-spiner"></span>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
