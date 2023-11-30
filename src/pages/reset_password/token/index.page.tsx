import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

export default function Token() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const router = useRouter();

  async function handleResetPassword() {
    setIsAuthenticate(true);
    await router.push("/");
  }

  return (
    <>
      <Head>
        <title>Recuperar senha | eFunny</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main>
          <section>
            <span>
              Insira o codigo enviado por email
            </span>
            <p>Codigo</p>
          </section>
          <input type="text" name="token"/>
          <button type="button" onClick={handleResetPassword}>
            Verificar codigo
          </button>
        </main>
      </div>
    </>
  );
}
