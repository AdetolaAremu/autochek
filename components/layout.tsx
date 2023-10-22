import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vehicleTypes from "@/utils/Pseudo";
import Head from "next/head";

interface LayoutMeta {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<LayoutMeta> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer categories={vehicleTypes} />
    </>
  );
};

export default Layout;
