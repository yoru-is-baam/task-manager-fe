import Button from "../atoms/Button";
import FormTitle from "../atoms/FormTitle";
import FormGroup from "../molecules/FormGroup";

export default function FormLogin() {
	return (
		<form action="" className="form-login">
			<FormTitle title="Sign In" />
			<FormGroup name="Mail" type="email" placeholder="Email" />
			<FormGroup name="Lock" type="password" placeholder="Password" />
			<Button title="Login" />
		</form>
	);
}
