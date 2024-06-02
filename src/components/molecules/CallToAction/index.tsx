import { CallToActionProps } from "@/interfaces";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function CallToAction({
	question,
	actionText,
	href,
}: CallToActionProps) {
	return (
		<div className={styles["call-to-action"]}>
			{question}{" "}
			<Link href={href} className={styles["action-text"]}>
				{actionText}
			</Link>
		</div>
	);
}
