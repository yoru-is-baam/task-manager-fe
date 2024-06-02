import { FormInputProps } from "@/interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function FormInput({
	type,
	placeholder,
	className,
}: FormInputProps) {
	return (
		<input
			className={classNames(styles.input, className)}
			type={type}
			placeholder={placeholder}
		/>
	);
}
