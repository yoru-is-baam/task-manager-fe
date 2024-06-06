import FormTitle from "@/components/atoms/FormTitle";
import FormGroup from "@/components/molecules/FormGroup";
import Button from "@/components/atoms/Button";
import CallToAction from "@/components/molecules/CallToAction";
import FormGroups from "@/components/molecules/FormGroups";
import AuthForm from "../AuthForm";

import { FormGroupProps } from "@/interfaces";

const formGroups: FormGroupProps[] = [
	{
		icon: "Mail",
		type: "email",
		placeholder: "Email",
	},
	{
		icon: "Lock",
		type: "password",
		placeholder: "Password",
	},
];

export default function LoginForm() {
	return (
		<AuthForm>
			<FormTitle>Sign In</FormTitle>
			<FormGroups className="my-7" formGroups={formGroups} />
			<Button className="mb-7" type="submit">
				Login
			</Button>
			<CallToAction
				href="/register"
				question="Don't have an account yet?"
				actionText="Sign Up"
			/>
		</AuthForm>
	);
}
