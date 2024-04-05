import { Navbar, PageCard } from "@/components";
import { PageSkeleton } from "@/components/PageSkeleton";
import { useDashboard } from "@/hooks";
import useGetUser from "@/hooks/useGetUser";
import { PageType } from "@/types";

export const dashboard = () => {
  const { loading: userLoading, user } = useGetUser();
  const { pages, pagesLoading } = useDashboard();
  console.log(user);
  return (
    <>
      <Navbar />
      <div className="py-24 px-8 min-h-screen w-full bg-base-200">
        <div className="w-full mb-4 flex items-center justify-between">
          <h2 className="text-xl">Your Pages</h2>
          <button className="btn btn-outline btn-primary">Add Page</button>
        </div>
        <div className="flex items-center gap-8">
          {pagesLoading ? (
            <div className="flex items-center gap-8">
              <PageSkeleton />
              <PageSkeleton />
              <PageSkeleton />
              <PageSkeleton />
              <PageSkeleton />
            </div>
          ) : (
            pages?.map((page: PageType) => {
              return <PageCard page={page} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default dashboard;
