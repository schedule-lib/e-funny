import styles from "./form.module.scss";

interface FormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, ...rest }: FormProps) {
  return (
    <form {...rest} className={styles.formContainer}>
      {children}
    </form>
  );
}
