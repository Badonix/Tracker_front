import { AddPageModal, PageSkeleton, Navbar, PageCard } from "@/components";
import { useDashboard } from "@/hooks";
import { PageType } from "@/types";

export const dashboard = () => {
  const { addModal, setAddModal, pages, pagesLoading } = useDashboard();
  return (
    <>
      <Navbar />
      <div className="py-24 px-8 min-h-screen w-full bg-base-200">
        {addModal && <AddPageModal setModal={setAddModal} />}
        <div className="w-full mb-4 flex items-center justify-between">
          <h2 className="text-xl">Your Pages</h2>
          <button
            onClick={() => setAddModal(true)}
            className="btn btn-outline btn-primary"
          >
            Add Page
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          {pagesLoading ? (
            <div className="flex flex-wrap items-center gap-8">
              <PageSkeleton />
              <PageSkeleton />
              <PageSkeleton />
              <PageSkeleton />
              <PageSkeleton />
            </div>
          ) : (
            pages?.map((page: PageType) => {
              return <PageCard key={page._id} page={page} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default dashboard;
