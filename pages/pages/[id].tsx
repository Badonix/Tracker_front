import { Navbar } from "@/components";
import { Table } from "@/components/Table";
import { useGetSinglePage } from "@/hooks";

export const singlePage = () => {
  const { pageData, loading } = useGetSinglePage();
  return (
    <>
      <Navbar />
      <section className="bg-grayish h-screen pt-20 px-4">
        {loading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          <>
            <div>
              <h2>{pageData?.domain}</h2>
              <h3>{pageData?.apiKey}</h3>
            </div>
            <Table />
          </>
        )}
      </section>
    </>
  );
};

export default singlePage;
