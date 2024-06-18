import Icon from "@/components/atoms/Icon";
import {
	Chip,
	IconButton,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Tooltip,
	Typography,
} from "@/components/material-tailwind";
import { TaskStatus } from "@/constants/enum";
import { Task } from "@/constants/types";
import classNames from "classnames";
import { format } from "date-fns";
import FullStatusMenuItem from "../FullStatusMenuItem";

type TaskRowProps = {
	isLastClasses?: string;
	task: Task;
	handleTaskDialogOpen: (task?: Task) => void;
};

export default function TaskRow({
	isLastClasses,
	task,
	handleTaskDialogOpen,
}: TaskRowProps) {
	return (
		<tr>
			<td className={classNames(isLastClasses, "w-4/12")}>
				<Typography variant="small" color="blue-gray" className="font-normal">
					{task.title}
				</Typography>
			</td>
			<td className={classNames(isLastClasses, "w-2/12")}>
				<div className="flex items-center justify-between">
					<div className="w-max">
						<Chip
							variant="ghost"
							size="sm"
							value={task.status}
							color={task.status === TaskStatus.DONE ? "green" : "blue-gray"}
						/>
					</div>
					<Menu placement="bottom-end">
						<MenuHandler>
							<IconButton variant="text">
								<Icon icon="ChevronDown" size={16} fill="#111" />
							</IconButton>
						</MenuHandler>
						<MenuList>
							<FullStatusMenuItem
								label="To Do"
								value={TaskStatus.DONE}
								color="blue-gray"
							/>
							<MenuItem className="flex items-center justify-between">
								<Typography
									variant="small"
									className="font-semibold w-[40%] pr-1"
								>
									In Progress
								</Typography>
								<div className="flex items-center justify-start gap-2 w-[60%]">
									<Icon icon="ArrowRight" size={16} strokeWidth={3} />
									<Chip
										variant="ghost"
										size="sm"
										value="in progress"
										color="yellow"
									/>
								</div>
							</MenuItem>
							<MenuItem className="flex items-center justify-between">
								<Typography
									variant="small"
									className="font-semibold w-[40%] pr-1"
								>
									Duplicate
								</Typography>
								<div className="flex items-center justify-start gap-2 w-[60%]">
									<Icon icon="ArrowRight" size={16} strokeWidth={3} />
									<Chip
										variant="ghost"
										size="sm"
										value="duplicate"
										color="orange"
									/>
								</div>
							</MenuItem>
							<MenuItem className="flex items-center justify-between">
								<Typography
									variant="small"
									className="font-semibold w-[40%] pr-1"
								>
									Done
								</Typography>
								<div className="flex items-center justify-start gap-2 w-[60%]">
									<Icon icon="ArrowRight" size={16} strokeWidth={3} />
									<Chip variant="ghost" size="sm" value="done" color="green" />
								</div>
							</MenuItem>
							<MenuItem className="flex items-center justify-between">
								<Typography
									variant="small"
									className="font-semibold w-[40%] pr-1"
								>
									Incomplete
								</Typography>
								<div className="flex items-center justify-start gap-2 w-[60%]">
									<Icon icon="ArrowRight" size={16} strokeWidth={3} />
									<Chip
										variant="ghost"
										size="sm"
										value="incomplete"
										color="blue"
									/>
								</div>
							</MenuItem>
							<MenuItem className="flex items-center justify-between">
								<Typography
									variant="small"
									className="font-semibold w-[40%] pr-1"
								>
									Won&apos;t fix
								</Typography>
								<div className="flex items-center justify-start gap-2 w-[60%]">
									<Icon icon="ArrowRight" size={16} strokeWidth={3} />
									<Chip
										variant="ghost"
										size="sm"
										value="won't fix"
										color="red"
									/>
								</div>
							</MenuItem>
							<MenuItem className="flex items-center justify-between">
								<Typography
									variant="small"
									className="font-semibold w-[40%] pr-1"
								>
									Review
								</Typography>
								<div className="flex items-center justify-start gap-2 w-[60%]">
									<Icon icon="ArrowRight" size={16} strokeWidth={3} />
									<Chip variant="ghost" size="sm" value="review" color="pink" />
								</div>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</td>
			<td className={classNames(isLastClasses, "w-2/12")}>
				<Typography variant="small" color="blue-gray" className="font-normal">
					{format(new Date(task.deadline), "dd/MM/yyyy")}
				</Typography>
			</td>
			<td className={classNames(isLastClasses, "w-2/12")}>
				<Typography variant="small" color="blue-gray" className="font-normal">
					{format(new Date(task.updatedAt!), "dd/MM/yyyy")}
				</Typography>
			</td>
			<td className={classNames(isLastClasses, "w-2/12")}>
				<Tooltip content="Update Task">
					<IconButton variant="text" onClick={() => handleTaskDialogOpen(task)}>
						<Icon icon="Pencil" size={16} fill="#111" />
					</IconButton>
				</Tooltip>
			</td>
		</tr>
	);
}
