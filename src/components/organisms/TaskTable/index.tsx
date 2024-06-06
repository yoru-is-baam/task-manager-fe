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
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@/components/material-tailwind";
import { useState } from "react";
import { DateRange } from "react-date-range";

interface TaskTableProps {
	children?: React.ReactNode;
	className?: string;
}

const TABLE_HEAD = ["Title", "Status", "Deadline", "Last Update", ""];
const TABLE_ROWS = [
	{
		id: 1,
		title: "This is a title one",
		status: "To Do",
		deadline: "23/06/2024",
		lastUpdate: "22/06/2024",
	},
	{
		id: 2,
		title: "This is a title two",
		status: "Done",
		deadline: "23/06/2024",
		lastUpdate: "22/06/2024",
	},
];

export default function TaskTable({ children }: TaskTableProps) {
	const [state, setState] = useState<
		{
			startDate: Date;
			endDate: Date | null;
			key: string;
		}[]
	>([
		{
			startDate: new Date(),
			endDate: null,
			key: "selection",
		},
	]);

	return (
		<ThemeProvider>
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
						<Button className="flex items-center gap-3" size="md">
							<Icon icon="ListPlus" size={16} /> Create task
						</Button>
					</div>
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-4">
							<Menu>
								<MenuHandler>
									<Button
										size="md"
										variant="outlined"
										className="flex items-center gap-3"
									>
										<span className="block h-2 w-2 rounded-full bg-green-400 content-['']" />
										All Status
										<Icon icon="ChevronDown" size={16} />
									</Button>
								</MenuHandler>
								<MenuList className="p-1">
									<MenuItem className="flex items-center gap-3">
										<span className="block h-2 w-2 rounded-full bg-yellow-400 content-['']" />
										Done
									</MenuItem>
									<MenuItem className="flex items-center gap-3">
										<span className="block h-2 w-2 rounded-full bg-red-400 content-['']" />
										To Do
									</MenuItem>
									<MenuItem className="flex items-center gap-3">
										<span className="block h-2 w-2 rounded-full bg-purple-400 content-['']" />
										In Progress
									</MenuItem>
								</MenuList>
							</Menu>
							<DateRange
								editableDateInputs={true}
								onChange={(item) => setState([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={state}
							/>
						</div>
						<div className="w-72">
							<Input label="Search" icon={<Icon icon="Search" size={20} />} />
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
													color={row.status === "Done" ? "green" : "blue-gray"}
												/>
											</div>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{row.deadline}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{row.lastUpdate}
											</Typography>
										</td>
										<td className={classes}>
											<Tooltip content="Update Task">
												<IconButton variant="text">
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
					<Button variant="outlined" size="sm">
						Previous
					</Button>
					<div className="flex items-center gap-2">
						<IconButton variant="outlined" size="sm">
							1
						</IconButton>
						<IconButton variant="text" size="sm">
							2
						</IconButton>
						<IconButton variant="text" size="sm">
							3
						</IconButton>
						<IconButton variant="text" size="sm">
							...
						</IconButton>
						<IconButton variant="text" size="sm">
							8
						</IconButton>
						<IconButton variant="text" size="sm">
							9
						</IconButton>
						<IconButton variant="text" size="sm">
							10
						</IconButton>
					</div>
					<Button variant="outlined" size="sm">
						Next
					</Button>
				</CardFooter>
			</Card>
		</ThemeProvider>
	);
}
