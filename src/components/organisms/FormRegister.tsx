import Button from "../atoms/Button";
import FormTitle from "../atoms/FormTitle";
import FormGroup from "../molecules/FormGroup";

export default function FormRegister() {
	return (
		<form action="" className="form-register">
			<FormTitle title="Sign Up" />
			<FormGroup name="User" type="text" placeholder="Username" />
			<FormGroup name="Mail" type="email" placeholder="Email" />
			<FormGroup name="Lock" type="password" placeholder="Password" />
			<Button title="Register" />
		</form>
	);
}
