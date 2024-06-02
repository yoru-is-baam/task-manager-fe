import FormGroup from "@/components/molecules/FormGroup";
import AuthForm from "@/components/organisms/AuthForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata = {
	title: "Login",
};

export default async function Login() {
	return (
		<AuthTemplate>
			<AuthForm
				className="form-login"
				title="Get Started"
				btnContent="Login"
				question="Don't have an account yet?"
				actionText="Sign Up"
				href="/register"
			>
				<FormGroup icon="Mail" type="email" placeholder="Email" />
				<FormGroup icon="Lock" type="password" placeholder="Password" />
			</AuthForm>
		</AuthTemplate>
	);
}
