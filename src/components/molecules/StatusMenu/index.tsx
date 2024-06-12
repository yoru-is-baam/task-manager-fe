import Icon from "@/components/atoms/Icon";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
} from "@/components/material-tailwind";
import { STATUS_MENU_ITEMS } from "@/constants/data/status-menu-items";
import { TaskStatus } from "@/constants/enum";

type StatusMenuProps = {
	status: TaskStatus | "all";
	setStatus: (status: TaskStatus | "all") => void;
};

export default function StatusMenu({ status, setStatus }: StatusMenuProps) {
	const currentStatus = STATUS_MENU_ITEMS.find((item) => item.id === status);

	return (
		<Menu>
			<MenuHandler>
				<Button
					size="md"
					variant="outlined"
					className="flex items-center gap-3"
				>
					<span
						className={`block h-2 w-2 rounded-full ${currentStatus?.backgroundColor} content-['']`}
					/>
					{currentStatus?.content}
					<Icon icon="ChevronDown" size={16} />
				</Button>
			</MenuHandler>
			<MenuList className="p-1">
				{STATUS_MENU_ITEMS.map(({ id, backgroundColor, content }) => {
					return (
						<MenuItem
							key={id}
							className="flex items-center gap-3"
							onClick={() => setStatus(id)}
						>
							<span
								className={`block h-2 w-2 rounded-full ${backgroundColor} content-['']`}
							/>
							{content}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}
