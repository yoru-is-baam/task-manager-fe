import { IconProps } from "@/types";
import { icons } from "lucide-react";

export default function Icon({ name, color, size }: IconProps) {
	const LucideIcon = icons[name];

	return <LucideIcon color={color} size={size} />;
}
