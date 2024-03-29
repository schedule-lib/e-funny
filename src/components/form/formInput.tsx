import styles from "./form.module.scss";

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  spanLabel?: string;
  spanLabelHref?: string;
}

export function FormInput({
  label,
  spanLabel,
  spanLabelHref,
  htmlFor,
  ...rest
}: FormInputProps) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputGroupMeta}>
        <label htmlFor={htmlFor}>{label}</label>
        {!!spanLabel && (
          <span>
            {!!spanLabelHref ? (
              <a className={styles.redirectable} href={spanLabelHref}>
                {spanLabel}
              </a>
            ) : (
              spanLabel
            )}
          </span>
        )}
      </div>
      <input {...rest} />
    </div>
  );
}
