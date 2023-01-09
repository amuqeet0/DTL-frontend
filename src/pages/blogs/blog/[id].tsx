import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log("router query slug: ", router.query.slug);
  return <div>some random page</div>;
}
