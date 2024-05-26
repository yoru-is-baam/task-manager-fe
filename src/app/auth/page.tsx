import FormLogin from "@/components/organisms/FormLogin";
import FormRegister from "@/components/organisms/FormRegister";
import styles from "@/styles/pages/auth.module.scss";

export const metadata = {
	title: "Login - Registration",
};

export default function Auth() {
	return (
		<div className={styles["auth-wrapper"]}>
			<div className={styles["auth-container"]}>
				<div className={styles["auth-forms"]}>
					<FormLogin />
					<FormRegister />
				</div>
				<div className="panels-auth-container"></div>
			</div>
		</div>
	);
}
