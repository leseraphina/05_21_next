import Head from "next/head";
import Layout from "@/components/Layout";
import CastList from "@/components/CaseList";

export default function Home({cast}) {
  // console.log(cast)
  return (
    <Layout>
      <Head>
        <title>cast member</title>
      </Head>
     <main>
      <h1>cast Member</h1>
      <CastList cast={cast} />
     </main>
    </Layout>
  )
}

export async function getStaticProps(){

  const res = await fetch('https://aestas-site.s3.ap-northeast-2.amazonaws.com/data1.json');
  const data = await res.json();
  return {
    props:{
      cast:data
    }
  }
}

