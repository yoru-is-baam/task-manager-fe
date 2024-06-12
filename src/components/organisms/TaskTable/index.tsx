"use client";

import Icon from "@/components/atoms/Icon";
import {
	Button,
	Card,
	CardHeader,
	Input,
	ThemeProvider,
	Typography,
	CardBody,
	Chip,
	Tooltip,
	IconButton,
	CardFooter,
} from "@/components/material-tailwind";
import Pagination from "@/components/molecules/Pagination";
import StatusMenu from "@/components/molecules/StatusMenu";
import { TaskDialog } from "@/components/organisms/Dialogs";
import { TaskStatus } from "@/constants/enum";
import { Task } from "@/constants/types";
import { format } from "date-fns";
import { useState } from "react";

const TABLE_HEAD = ["Title", "Status", "Deadline", "Last Update", ""];
const TABLE_ROWS: Task[] = [
	{
		id: 1,
		title: "This is a title one",
		description: null,
		status: TaskStatus.TO_DO,
		deadline: "2024-06-23",
		updatedAt: "2024-06-22",
	},
	{
		id: 2,
		title: "This is a title two",
		description: null,
		status: TaskStatus.DONE,
		deadline: "2024-06-23",
		updatedAt: "2024-06-22",
	},
];

export default function TaskTable() {
	const [selectedTask, setSelectedTask] = useState<Task>();
	const [status, setStatus] = useState<TaskStatus | "all">("all");
	const [isTaskDialogOpen, setIsTaskDialogOpen] = useState<boolean>(false);

	const handleTaskDialogOpen = (task?: Task) => {
		setSelectedTask(task);
		setIsTaskDialogOpen(true);
	};

	const handleTaskSave = (newTask: Task) => {
		console.log(selectedTask);
	};

	return (
		<ThemeProvider>
			<TaskDialog
				open={isTaskDialogOpen}
				setOpen={setIsTaskDialogOpen}
				task={selectedTask}
				onSave={handleTaskSave}
			/>
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<div className="mb-8 flex items-center justify-between gap-8">
						<div>
							<Typography variant="h5" color="blue-gray">
								Tasks list
							</Typography>
							<Typography color="gray" className="mt-1 font-normal">
								See information about all tasks
							</Typography>
						</div>
						<Button
							className="flex items-center gap-3"
							size="md"
							onClick={() => handleTaskDialogOpen()}
						>
							<Icon icon="ListPlus" size={16} /> Create task
						</Button>
					</div>
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-4">
							<StatusMenu status={status} setStatus={setStatus} />
						</div>
						<div className="w-72">
							<Input
								label="Search"
								icon={<Icon icon="Search" size={20} />}
								crossOrigin={undefined}
							/>
						</div>
					</div>
				</CardHeader>
				<CardBody className="overflow-scroll px-0">
					<table className="mt-4 w-full min-w-max table-auto text-left">
						<thead>
							<tr>
								{TABLE_HEAD.map((head, index) => {
									return (
										<th
											key={head}
											className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
										>
											<Typography
												variant="small"
												color="blue-gray"
												className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
											>
												{head}{" "}
												{index !== TABLE_HEAD.length - 1 && (
													<Icon
														icon="ChevronsUpDown"
														size={16}
														style={{ strokeWidth: 2 }}
													/>
												)}
											</Typography>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{TABLE_ROWS.map((row, index) => {
								const isLast = index === TABLE_ROWS.length - 1;
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50";

								return (
									<tr key={row.id}>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{row.title}
											</Typography>
										</td>
										<td className={classes}>
											<div className="w-max">
												<Chip
													variant="ghost"
													size="sm"
													value={row.status}
													color={
														row.status === TaskStatus.DONE
															? "green"
															: "blue-gray"
													}
												/>
											</div>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{format(new Date(row.deadline), "dd/MM/yyyy")}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{format(new Date(row.updatedAt!), "dd/MM/yyyy")}
											</Typography>
										</td>
										<td className={classes}>
											<Tooltip content="Update Task">
												<IconButton
													variant="text"
													onClick={() => handleTaskDialogOpen(row)}
												>
													<Icon icon="Pencil" size={16} fill="#111" />
												</IconButton>
											</Tooltip>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</CardBody>
				<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
					<Pagination />
				</CardFooter>
			</Card>
		</ThemeProvider>
	);
}
