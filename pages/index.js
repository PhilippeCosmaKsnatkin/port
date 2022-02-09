import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Je m'appelle Philippe Ksnatkin, et j'aspire à devenir développeur full stack</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>A propos de moi :</h2>
        <p>
          Je suis étudiant à l'école d'ingénieur EFREI Paris dans le cursus concepteur developpeur global programming
        </p>
        <p>
          Mes langues : Français, Anglais, Russe
        </p>
        <p>
          Langages de programmation : Python, C, Java, Javascript & frameworks
        </p>
        <p>
          Base de données : SQL et NSQL
        </p>
        <p>
          Mes projets : vous pouvez voir tous mes projets sur {' '}
          <a href="https://github.com/PhilippeCosmaKsnatkin">mon github</a>.)
        </p>
      </section>
    </Layout>
  )
}
/*

*/