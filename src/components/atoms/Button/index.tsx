import styles from "./styles.module.scss";
import classNames from "classnames";
import { ButtonProps } from "@/types";

export default function Button({ title, variant }: ButtonProps) {
	return (
		<button
			className={classNames(styles.btn, {
				[styles["btn-accent-900"]]: variant === "accent-900",
			})}
			type="submit"
		>
			{title}
		</button>
	);
}
