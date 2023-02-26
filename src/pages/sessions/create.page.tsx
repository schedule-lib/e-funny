import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Form } from "../../components/form";

import { FormButton } from "../../components/form/button";
import { FormInput } from "../../components/form/formInput";

import styles from "./authentication.module.scss";

export default function Create() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const router = useRouter();

  async function handleCreation() {
    setIsAuthenticate(true);
    await router.push("/");
  }

  useEffect(() => {
    return () => setIsAuthenticate(false);
  }, []);

  return (
    <>
      <Head>
        <title>Cadastrar-se | eFunny</title>
      </Head>

      <div className={styles.container}>
        <main>
          <div>
            <h1>Criar conta na plataforma</h1>
          </div>
          <Form method="POST" onSubmit={handleCreation}>
            <FormInput
              label="Nome"
              htmlFor="name"
              id="name"
              type="name"
              autoComplete="name"
            />
            <FormInput
              label="Nome de usuário"
              htmlFor="username"
              id="username"
              autoComplete="email"
            />
            <FormInput
              label="Senha"
              htmlFor="password"
              id="password"
              type="password"
              autoComplete="current-password"
            />

            <FormButton
              isLoading={isAuthenticate}
              type="submit"
              text="Criar Conta"
            />
          </Form>
          <footer>
            <p>
              Já possui uma conta?{" "}
              <Link href="/sessions/authentication" passHref>
                fazer login
              </Link>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
