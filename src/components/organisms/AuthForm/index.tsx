import Button from "@/components/atoms/Button";
import FormTitle from "@/components/atoms/FormTitle";
import CallToAction from "@/components/molecules/CallToAction";
import styles from "./styles.module.scss";
import classNames from "classnames";

type AuthFormProps = {
	className?: string;
	children?: React.ReactNode;
	formTitle: string;
	btnTitle: string;
	question: string;
	actionText: string;
};

export default function AuthForm({
	className,
	children,
	formTitle,
	btnTitle,
	question,
	actionText,
}: AuthFormProps) {
	return (
		<form action="" className={classNames(className, styles.form)}>
			<FormTitle title={formTitle} />
			<div className={styles["form-groups"]}>{children}</div>
			<Button title={btnTitle} />
			<CallToAction question={question} actionText={actionText} />
		</form>
	);
}
