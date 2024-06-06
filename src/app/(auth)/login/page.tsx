import AuthTemplate from "@/components/templates/AuthTemplate";
import { Suspense } from "react";
import Loading from "./loading";
import LoginForm from "@/components/organisms/LoginForm";

export const metadata = {
	title: "Login",
};

export default async function Login() {
	return (
		<AuthTemplate>
			<Suspense fallback={<Loading />}>
				<LoginForm />
			</Suspense>
		</AuthTemplate>
	);
}
