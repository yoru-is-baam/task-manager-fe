import RegisterForm from "@/components/organisms/RegisterForm";
import AuthTemplate from "@/components/templates/AuthTemplate";

export const metadata = {
	title: "Registration",
};

export default async function Register() {
	return (
		<AuthTemplate>
			<RegisterForm />
		</AuthTemplate>
	);
}
