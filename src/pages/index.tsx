import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  anchor,
  card,
  cardDescription,
  cardTitle,
  code,
  container,
  description,
  footer,
  grid,
  logo,
  main,
  title,
  titleLink,
} from "~/styles/home.css";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={container}>
      <Head>
        <title>vanilla-extract with Next.js</title>
        <meta
          name="description"
          content="Example of vanilla-extract with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={main}>
        <h1 className={title}>
          Welcome to{" "}
          <a className={titleLink} href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className={description}>
          Get started by editing <code className={code}>pages/index.tsx</code>
        </p>

        <div className={grid}>
          <a href="https://nextjs.org/docs" className={card}>
            <h2 className={cardTitle}>Documentation &rarr;</h2>
            <p className={cardDescription}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={card}>
            <h2 className={cardTitle}>Learn &rarr;</h2>
            <p className={cardDescription}>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={card}
          >
            <h2 className={cardTitle}>Examples &rarr;</h2>
            <p className={cardDescription}>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={card}
          >
            <h2 className={cardTitle}>Deploy &rarr;</h2>
            <p className={cardDescription}>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={footer}>
        <a
          className={anchor}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
