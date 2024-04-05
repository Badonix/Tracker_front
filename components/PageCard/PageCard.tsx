import { PageType } from "@/types";
import Link from "next/link";

export const PageCard = ({ page }: { page: PageType }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{page.domain}</h2>
        <p>{page.apiKey.slice(0, 8)}********</p>
        <div className="card-actions justify-end">
          <Link href={`/pages/${page._id}`} className="btn btn-primary">
            View
          </Link>
          <button className="btn btn-ghost">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
