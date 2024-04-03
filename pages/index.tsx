import { Navbar } from "@/components";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-grayish h-screen pt-15">
        <div className="hero h-full bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">Welcome to Tracker</h1>
              <p className="py-6">
                Tracker is a simple tool which allows you to track visitors of
                your website. The main feature of Tracker is its simplicity and
                it's cute dashboard
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
