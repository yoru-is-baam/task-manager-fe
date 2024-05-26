import { IconProps } from "./IconProps";

export type FormTitleProps = {
	title: string;
};

export type FormInputProps = {
	type: string;
	placeholder: string;
};

export type FormGroupProps = FormInputProps & IconProps;
