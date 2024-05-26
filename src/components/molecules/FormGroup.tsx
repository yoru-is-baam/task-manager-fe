import { FormGroupProps } from "@/types";
import FormInput from "../atoms/FormInput";
import Icon from "../atoms/Icon";
import styles from "@/styles/components/form-group.module.scss";

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
