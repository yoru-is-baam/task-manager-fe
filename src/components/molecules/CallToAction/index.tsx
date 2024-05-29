import { CallToActionProps } from "@/types";
import styles from "./styles.module.scss";

export default function CallToAction({
	question,
	actionText,
}: CallToActionProps) {
	return (
		<div className={styles["call-to-action"]}>
			<span>{question}</span>
			<button>{actionText}</button>
		</div>
	);
}
