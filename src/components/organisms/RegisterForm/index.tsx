import FormTitle from "@/components/atoms/FormTitle";
import Button from "@/components/atoms/Button";
import CallToAction from "@/components/molecules/CallToAction";
import FormGroups from "@/components/molecules/FormGroups";
import AuthForm from "../AuthForm";

import { FormGroupProps } from "@/interfaces";

const formGroups: FormGroupProps[] = [
	{
		icon: "User",
		type: "text",
		placeholder: "Your name",
	},
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

export default function RegisterForm() {
	return (
		<AuthForm>
			<FormTitle>Sign Up</FormTitle>
			<FormGroups className="my-7" formGroups={formGroups}></FormGroups>
			<Button className="mb-7" type="submit">
				Register
			</Button>
			<CallToAction
				href="/login"
				question="Already have an account?"
				actionText="Sign In"
			/>
		</AuthForm>
	);
}
