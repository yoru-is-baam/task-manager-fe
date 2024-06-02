import { IconProps } from "@/interfaces";
import { icons } from "lucide-react";

export default function Icon({ icon, color, size }: IconProps) {
	const LucideIcon = icons[icon];

	return <LucideIcon color={color} size={size} />;
}
