import { FormInputProps } from "@/types";

export default function FormInput({ type, placeholder }: FormInputProps) {
	return <input type={type} placeholder={placeholder} />;
}
