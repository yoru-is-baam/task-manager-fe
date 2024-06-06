import { icons, LucideProps } from "lucide-react";

export interface IconProps extends LucideProps {
	icon: keyof typeof icons;
}
