import styles from "./styles.module.scss";

export default function AuthTemplate({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={styles["auth-wrapper"]}>
			<div className={styles["auth-container"]}>
				<div className={styles["auth-forms"]}>{children}</div>
				<div className="panels-auth-container"></div>
			</div>
		</div>
	);
}
