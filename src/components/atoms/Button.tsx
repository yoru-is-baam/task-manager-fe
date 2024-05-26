import styles from "@/styles/components/button.module.scss";
import classNames from "classnames";
import { ButtonProps } from "@/types";

export default function Button({ title, variant }: ButtonProps) {
	return (
		<button
			className={classNames(styles.btn, {
				[styles["btn-neutral"]]: variant === "neutral",
			})}
			type="submit"
		>
			{title}
		</button>
	);
}
