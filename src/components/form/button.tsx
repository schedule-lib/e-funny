import styles from "./form.module.scss";

interface FormButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isLoading?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

export function FormButton({
  isLoading,
  text,
  type = "submit",
  ...rest
}: FormButtonProps) {
  return (
    <div className={styles.formController}>
      <button type={type} disabled={isLoading} {...rest}>
        {text}{" "}
        {isLoading && (
          <span className={styles.loader}>
            <div className={styles.spinner}></div>
          </span>
        )}
      </button>
    </div>
  );
}
