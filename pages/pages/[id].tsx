import { Navbar } from "@/components";
import { useGetSinglePage } from "@/hooks";

export const singlePage = () => {
  const {
    copied,
    pageData,
    loading,
    formatKey,
    showing,
    handleCopy,
    setShowing,
    trackingsData,
    trackingsDataLoading,
  } = useGetSinglePage();
  return (
    <>
      <Navbar />
      <section className="flex justify-center bg-grayish h-screen pt-20 px-4 pb-5">
        <div className="shadow-lg rounded-lg max-w-5xl bg-background w-full h-full md:h-3/4 px-3 py-2">
          {loading || trackingsDataLoading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            <>
              <div>
                <h2 className="mb-2 font-bold text-lg text-primary text-center">
                  {pageData?.domain}
                </h2>
                <hr />
                <div className="mt-6">
                  <div className="flex  md:flex-row flex-col md:justify-start justify-center items-center md:items-center gap-3 flex-wrap">
                    <button
                      onClick={() => setShowing((prev) => !prev)}
                      className="btn btn-primary mr-3 w-40"
                    >
                      {showing ? "Hide" : "Show key"}
                    </button>
                    <div className="uto">
                      <h3 className="text-sm sm:text-lg">
                        {showing
                          ? pageData?.apiKey
                          : formatKey(pageData?.apiKey)}
                      </h3>
                    </div>
                    <button onClick={handleCopy} className="btn btn-outline">
                      {copied ? "Copied ✅" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
              <section className="mt-4">
                <div className="overflow-x-auto overflow-y-auto max-h-96">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>N</th>
                        <th>IP</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody className="overflow-y-auto max-h-full">
                      {trackingsData?.map((el, index) => {
                        return (
                          <>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                            <tr key={el._id}>
                              <th>{index + 1}</th>
                              <th>{el.ip_address}</th>
                              <th>{el.createdAt}</th>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default singlePage;
