import { FormGroupProps } from "@/types";
import styles from "./styles.module.scss";
import Icon from "@/components/atoms/Icon";
import FormInput from "@/components/atoms/FormInput";

export default function FormGroup({
	name,
	size,
	color,
	type,
	placeholder,
}: FormGroupProps) {
	return (
		<div className={styles["form-group"]}>
			<span className={styles["form-icon"]}>
				<Icon name={name} color="#666" />
			</span>
			<FormInput type={type} placeholder={placeholder} />
		</div>
	);
}
