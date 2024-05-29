import { FormInputProps } from "@/types";
import styles from "./styles.module.scss";

export default function FormInput({ type, placeholder }: FormInputProps) {
	return (
		<input className={styles.input} type={type} placeholder={placeholder} />
	);
}
