import Icon from "@/components/atoms/Icon";
import { Chip, MenuItem, Typography } from "@/components/material-tailwind";
import { TaskStatus } from "@/constants/enum";
import { colors } from "@material-tailwind/react/types/generic";

type FullStatusMenuItem = {
	label: string;
	value: TaskStatus;
	color: colors;
};

export default function FullStatusMenuItem({
	label,
	value,
	color,
}: FullStatusMenuItem) {
	return (
		<MenuItem className="flex items-center justify-between">
			<Typography variant="small" className="font-semibold w-[40%] pr-1">
				{label}
			</Typography>
			<div className="flex items-center justify-start gap-2 w-[60%]">
				<Icon icon="ArrowRight" size={16} strokeWidth={3} />
				<Chip variant="ghost" size="sm" value={value} color={color} />
			</div>
		</MenuItem>
	);
}
