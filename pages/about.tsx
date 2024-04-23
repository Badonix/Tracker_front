import { Navbar } from "@/components";

export const about = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 px-8 min-h-screen w-full bg-base-200">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://tracker.netlify.app</div>
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-16 bg-base-200">
            <h2>Hey!</h2>
            <p>I'm Nick</p>
            <p className="mt-4">
              I created this little buggy service which has no real potential
              use just for challenging myself and maybe for using it in personal
              projects.
            </p>
            <p>
              The serverside code is living (if its not dead already) in vercel
              free tier servers, so please dont mind if its a little slow.
            </p>
            <p>
              All of the code is open source, you can check them on my gitub, or
              here is
              <a
                href="https://github.com/badonix/Tracker_back"
                className="mx-2 text-cyan-200 hover:text-cyan-400 transition-colors"
                target="_blank"
              >
                Link for back
              </a>
              and
              <a
                href="https://github.com/badonix/Tracker_front"
                className="mx-2 text-cyan-200 hover:text-cyan-400 transition-colors"
                target="_blank"
              >
                Link for front
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default about;
