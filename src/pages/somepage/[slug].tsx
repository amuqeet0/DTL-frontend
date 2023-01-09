import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  console.log("router query slug: ", router.query.slug);
  return (
    <>
      <div>some random page</div>
    </>
  );
}
