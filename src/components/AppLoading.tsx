import styles from "../styles/components/AppLoading.module.scss";

export function AppLoading() {
  return (
    <div className={styles.container}>
      <main>
        <h1>Rede Social</h1>
        <div>loading...</div>
      </main>
    </div>
  );
}
