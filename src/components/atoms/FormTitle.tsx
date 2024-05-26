import { FormTitleProps } from "@/types";
import styles from "@/styles/components/form-title.module.scss";

export default function FormTitle({ title }: FormTitleProps) {
	return <h2 className={styles["form-title"]}>{title}</h2>;
}
