import FormGroup from "@/components/molecules/FormGroup";
import AuthForm from "@/components/organisms/AuthForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata = {
	title: "Login - Registration",
};

export default function Auth() {
	return (
		<AuthTemplate>
			<AuthForm
				className="form-login"
				formTitle="Get Started"
				btnTitle="Login"
				question="Don't have an account yet?"
				actionText="Sign Up"
			>
				<FormGroup name="Mail" type="email" placeholder="Email" />
				<FormGroup name="Lock" type="password" placeholder="Password" />
			</AuthForm>
			<AuthForm
				className="form-register"
				formTitle="Sign Up"
				btnTitle="Register"
				question="Already have an account?"
				actionText="Sign In"
			>
				<FormGroup name="User" type="text" placeholder="Username" />
				<FormGroup name="Mail" type="email" placeholder="Email" />
				<FormGroup name="Lock" type="password" placeholder="Password" />
			</AuthForm>
		</AuthTemplate>
	);
}
