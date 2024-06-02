import { FormGroupProps } from "@/interfaces";
import styles from "./styles.module.scss";
import Icon from "@/components/atoms/Icon";
import FormInput from "@/components/atoms/FormInput";

export default function FormGroup({
	size,
	color = styles.clrNeutral700,
	type,
	placeholder,
	icon,
}: FormGroupProps) {
	return (
		<div className={styles["form-group"]}>
			<span className={styles["form-icon"]}>
				<Icon icon={icon} color={color} size={size} />
			</span>
			<FormInput type={type} placeholder={placeholder} />
		</div>
	);
}
