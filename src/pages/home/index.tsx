import Head from "next/head";
import { useEffect, useState } from "react";

import { AppLoading } from "../../components/AppLoading";
import { Header } from "../../components/header";

import styles from "./styles.module.scss";

export default function Home() {
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(async () => {
      setAppIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>eFunny</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {appIsLoading ? (
        <AppLoading />
      ) : (
        <div className={styles.container}>
          <Header />

          <main className={styles.content}>
            <aside className={styles.aside}>
              <nav>
                <ul>
                  <li className={styles.active}>
                    <a href="/">destaques</a>
                  </li>
                  <li>
                    <a href="/">mais recentes</a>
                  </li>
                  <li>
                    <a href="/">carros</a>
                  </li>
                </ul>
              </nav>
            </aside>
            <button id={styles.button}>teste</button>
            

            <section></section>
          </main>
        </div>
      )}
    </>
  );
}
