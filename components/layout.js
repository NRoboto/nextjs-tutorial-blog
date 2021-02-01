import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Mike";
export const siteTitle = "Example Site";

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Site created by following Next.js tutorial"
      />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2X1}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home ? (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    ) : null}
  </div>
);

export default Layout;
