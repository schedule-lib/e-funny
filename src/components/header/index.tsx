import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <span className={styles.logo}>eFunny</span>

        <nav>
          <ul>
            <li>
              <a href="/compose/meme">add meme</a>
            </li>
            <li>
              <a href="/sessions/authentication">login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
