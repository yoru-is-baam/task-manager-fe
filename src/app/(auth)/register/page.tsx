import FormGroup from "@/components/molecules/FormGroup";
import AuthForm from "@/components/organisms/AuthForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata = {
	title: "Registration",
};

export default async function Register() {
	const { data } = await register();
	console.log(data.accessToken);

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

async function register() {
	const res = await fetch("http://localhost:3000/api/v1/auth/register", {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({ email: "kiet@gmail.com" }),
	});

	return res.json();
}
