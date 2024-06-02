import { icons } from "lucide-react";

export interface IconProps {
	icon: keyof typeof icons;
	color?: string;
	size?: string;
}
