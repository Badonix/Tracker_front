import { Navbar } from "@/components";
import { SyntaxBlock } from "@/components";
import Head from "next/head";

export const docs = () => {
  return (
    <>
      <Head>
        <title>Documentation</title>
      </Head>
      <Navbar />
      <section className="flex justify-center bg-grayish min-h-screen pt-20 px-4 pb-5">
        <div className="py-4 max-w-full">
          <h2 className="text-white text-2xl text-center">Docs</h2>
          <div className="max-w-full mt-8">
            <p className="max-w-4xl">
              To track users on your website just send post request with your
              apiKey in request body to the following url:
              https://tracker-back-flax.vercel.app/record
            </p>
            <p className="mt-3">example:</p>
            <SyntaxBlock
              code={`axios.post("https://tracker-back-flax.vercel.app/record", {
    apiKey: //YOUR API KEY HERE
})
`}
            />
            <div className="mt-8">
              <p>Here is example react code</p>
              <SyntaxBlock
                code={`const Track = async () => {
  try {
    const response = await axios.post("https://tracker-back-flax.vercel.app/record", {
      apiKey: "vsZ+DDa5aoAcT3FZH2Z6wsStTcStkNG1lLNnugJnjgs="
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

useEffect(() => {
  try {
    Track();
  } catch (error) {
    console.log(error);
  }
}, []);
`}
              />
            </div>
            <div>
              <h2 className="text-yellow-400">
                Warning: Make your code run only on inital load, otherwise you
                will get rate limited
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default docs;
