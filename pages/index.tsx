import { Navbar } from "@/components";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tracker</title>
      </Head>
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
              <Link href="/dashboard" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
