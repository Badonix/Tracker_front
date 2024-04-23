import Head from "next/head";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Tracker" />
        <meta
          property="og:description"
          content="Service which allows you to track visitors of your website"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/cTMMFDW/wp1833262.jpg"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
