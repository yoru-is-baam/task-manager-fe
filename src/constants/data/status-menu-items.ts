import { TaskStatus } from "../enum";

type StatusMenuItem = {
	id: TaskStatus | "all";
	backgroundColor: string;
	content: string;
};

export const FULL_STATUS_MENU_ITEMS = [
	{
		label: "To Do",
		value: "to-do",
	},
];

export const STATUS_MENU_ITEMS: StatusMenuItem[] = [
	{
		id: TaskStatus.DONE,
		backgroundColor: "bg-green-400",
		content: "Done",
	},
	{
		id: TaskStatus.TO_DO,
		backgroundColor: "bg-blue-gray-400",
		content: "To Do",
	},
	{
		id: TaskStatus.IN_PROGRESS,
		backgroundColor: "bg-yellow-400",
		content: "In Progress",
	},
	{
		id: "all",
		backgroundColor: "bg-black",
		content: "All Status",
	},
];
