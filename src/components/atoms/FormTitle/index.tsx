import { FormTitleProps } from "@/types";
import styles from "./styles.module.scss";

export default function FormTitle({ title }: FormTitleProps) {
	return <h2 className={styles["form-title"]}>{title}</h2>;
}
