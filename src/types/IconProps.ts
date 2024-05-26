import { icons } from "lucide-react";

export type IconProps = {
	name: keyof typeof icons;
	color?: string;
	size?: string;
};
