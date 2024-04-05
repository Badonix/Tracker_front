import { PageType } from "@/types";

export const PageCard = ({ page }: { page: PageType }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{page.domain}</h2>
        <p>{page.apiKey.slice(0, 8)}********</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
          <button className="btn btn-ghost">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
