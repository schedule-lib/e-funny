import styles from "./appLoading.module.scss";

export function AppLoading() {
  return (
    <div className={styles.container}>
      <main>
        <h1>eFunny</h1>
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
        </div>
      </main>
    </div>
  );
}
