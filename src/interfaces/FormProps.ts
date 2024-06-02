import React from "react";
import { IconProps } from "./IconProps";

export interface FormTitleProps extends React.ComponentProps<"h2"> {}

export interface FormInputProps
	extends Omit<React.ComponentProps<"input">, "size"> {}

export interface FormGroupProps extends FormInputProps, IconProps {}
