import classNames from "classnames";
import styles from "./styles.module.scss";
import { FormGroupProps } from "@/interfaces";
import FormGroup from "../FormGroup";

interface FormGroupsProps {
	className?: string;
	formGroups: FormGroupProps[];
}

export default function FormGroups({ className, formGroups }: FormGroupsProps) {
	return (
		<div className={classNames(styles["form-groups"], className)}>
			{formGroups.map((formGroup) => {
				return (
					<FormGroup
						key={formGroup.icon}
						icon={formGroup.icon}
						type={formGroup.type}
						placeholder={formGroup.placeholder}
					/>
				);
			})}
		</div>
	);
}
