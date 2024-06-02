import FormGroup from "@/components/molecules/FormGroup";
import AuthForm from "@/components/organisms/AuthForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata = {
	title: "Registration",
};

export default function Register() {
	return (
		<AuthTemplate>
			<AuthForm
				className="form-register"
				title="Sign Up"
				btnContent="Register"
				question="Already have an account?"
				actionText="Sign In"
				href="/login"
			>
				<FormGroup icon="User" type="text" placeholder="Your name" />
				<FormGroup icon="Mail" type="email" placeholder="Email" />
				<FormGroup icon="Lock" type="password" placeholder="Password" />
			</AuthForm>
		</AuthTemplate>
	);
}
