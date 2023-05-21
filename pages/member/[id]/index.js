import Layout from "@/components/Layout"
import Link from "next/link";
import styles from '@/styles/List.module.css';


export default function castMember({castMember}){
  console.log(castMember)
  return (
    <Layout>
      <main className="container">
        <h1>{castMember.name}</h1>
        <p className={styles.h1}>{castMember.bio}</p>
        <dl>
          <dt className={styles.title}>origin</dt>
          <dd>{castMember.origin}</dd>
          <dt className={styles.title}>eyes</dt>
          <dd>{castMember.eyes}</dd>
          <dt className={styles.title}>hobby</dt>
          <dd>{castMember.hobby}</dd>
        </dl>
        <p><Link href="/">home</Link></p>
      </main>
    </Layout>
  )
}


export const getServerSideProps = async(context) => {
 const res = await fetch('https://aestas-site.s3.ap-northeast-2.amazonaws.com/data1.json');
 const data = await res.json();
 const castMember = data.filter(item => item.id == context.params.id);

 return {
  props:{
    castMember : castMember[0]
  }
 }
}