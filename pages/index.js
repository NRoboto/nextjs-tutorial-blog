import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>This is a Next.js site created by following the basics tutorial</p>
      <Link href="/posts/first-post">
        <a>Read this post!</a>
      </Link>
    </section>
  </Layout>
);

export default Home;
