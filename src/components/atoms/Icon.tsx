import { IconProps } from "@/interfaces";
import { icons } from "lucide-react";

export default function Icon({
	icon,
	color,
	size,
	style,
	strokeWidth,
	className,
}: IconProps) {
	const LucideIcon = icons[icon];

	return (
		<LucideIcon
			color={color}
			size={size}
			style={style}
			strokeWidth={strokeWidth}
			className={className}
		/>
	);
}
