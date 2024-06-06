import styles from "./styles.module.scss";
import classNames from "classnames";
import { AuthFormProps } from "@/interfaces";

export default function AuthForm({
	onSubmit,
	className,
	children,
}: AuthFormProps) {
	return (
		<form onSubmit={onSubmit} className={classNames(styles.form, className)}>
			{children}
		</form>
	);
}
