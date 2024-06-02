import Button from "@/components/atoms/Button";
import FormTitle from "@/components/atoms/FormTitle";
import CallToAction from "@/components/molecules/CallToAction";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { AuthFormProps } from "@/interfaces";

export default function AuthForm({
	onSubmit,
	className,
	children,
	title,
	btnContent,
	question,
	href,
	actionText,
}: AuthFormProps) {
	return (
		<form onSubmit={onSubmit} className={classNames(styles.form, className)}>
			<FormTitle>{title}</FormTitle>
			<div className={classNames(styles["form-groups"])}>{children}</div>
			<Button className="mb-7" type="submit">
				{btnContent}
			</Button>
			<CallToAction href={href} question={question} actionText={actionText} />
		</form>
	);
}
