import { Navbar } from "@/components";
import Link from "next/link";

export const contact = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 px-8 min-h-screen w-full bg-base-200">
        <div className="flex flex-col gap-3">
          <div className="w-16">
            <a
              className="block text-cyan-100 hover:text-cyan-400 transition-colors"
              href="https://github.com/Badonix"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="w-16">
            <a
              href="https://www.linkedin.com/in/nickdanelia"
              target="_blank"
              className="block text-cyan-100 hover:text-cyan-400 transition-colors"
            >
              Linkedin
            </a>
          </div>
          <div className="w-16">
            <a
              className="block text-cyan-100 hover:text-cyan-400 transition-colors"
              href="https://www.instagram.com/nickdanee/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              className="inline text-cyan-100 hover:text-cyan-400 transition-colors"
              href="https://badonix.netlify.app"
              target="_blank"
            >
              Personal Website
            </a>
          </div>
          <p>nikdanelia@gmail.com</p>
        </div>
      </div>
    </>
  );
};
export default contact;
