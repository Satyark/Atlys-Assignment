import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/Login";
import { ReactElement } from "react";
import Layout from "@/components/layout/Layout";


const inter = Inter({ subsets: ["latin"] });

const LandingPage= ()=> {

  return (
    <Layout>
    <Login/>
    </Layout>
  );
}


export default LandingPage;
