import { CallToActionProps } from "./CallToActionProps";

export interface AuthFormProps
	extends React.ComponentProps<"form">,
		CallToActionProps {
	title: string;
	btnContent: string;
}
