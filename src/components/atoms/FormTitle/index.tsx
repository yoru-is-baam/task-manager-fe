import { FormTitleProps } from "@/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function FormTitle({ children, className }: FormTitleProps) {
	return (
		<h2 className={classNames(styles["form-title"], className)}>{children}</h2>
	);
}
