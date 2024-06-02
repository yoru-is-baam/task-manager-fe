import styles from "./styles.module.scss";
import classNames from "classnames";
import { ButtonProps } from "@/interfaces";

export default function Button({
	className,
	variant,
	fullWidth,
	type,
	style,
	children,
}: ButtonProps) {
	return (
		<button
			className={classNames(styles.btn, className, {
				[styles["btn-accent-900"]]: variant === "accent-900",
				"w-full": fullWidth,
			})}
			type={type}
			style={style}
		>
			{children}
		</button>
	);
}
