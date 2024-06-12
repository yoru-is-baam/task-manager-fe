"use client";

import DatePicker from "@/components/atoms/DatePicker";
import Icon from "@/components/atoms/Icon";
import {
	Button,
	Dialog,
	Typography,
	Input,
	Textarea,
	DialogFooter,
	DialogHeader,
	DialogBody,
	IconButton,
} from "@/components/material-tailwind";
import { TaskStatus } from "@/constants/enum";
import { Task } from "@/constants/types";
import { useEffect, useState } from "react";

type TaskDialogProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	task?: Task;
	onSave: (task: Task) => void;
};

export function TaskDialog({ open, setOpen, task, onSave }: TaskDialogProps) {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [deadline, setDeadline] = useState<Date | undefined>(new Date());

	useEffect(() => {
		if (task) {
			setTitle(task.title);
			setDescription(task.description ?? "");
			setDeadline(new Date(task.deadline));
		} else {
			setTitle("");
			setDescription("");
			setDeadline(new Date());
		}
	}, [task]);

	const handleOpen = () => setOpen(!open);

	const handleSave = () => {
		const newTask: Task = {
			title,
			description,
			status: task?.status ?? TaskStatus.TO_DO,
			deadline: deadline?.toLocaleString() || new Date().toLocaleString(),
		};
		onSave(newTask);
	};

	return (
		<Dialog size="md" open={open} handler={handleOpen}>
			<div className="flex items-center justify-between">
				<DialogHeader className="flex flex-col items-start">
					<Typography className="mb-1" variant="h4">
						{!task ? "Create Task" : "Edit Task"}
					</Typography>
				</DialogHeader>
				<IconButton variant="text" className="mr-3" onClick={handleOpen}>
					<Icon icon="X" size={20} />
				</IconButton>
			</div>
			<DialogBody>
				<div className="grid gap-6">
					<Typography className="-mb-2" color="blue-gray" variant="h6">
						Title
					</Typography>
					<Input
						label="Title"
						crossOrigin={undefined}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Typography className="-mb-2" color="blue-gray" variant="h6">
						Description
					</Typography>
					<Textarea
						id="description"
						label="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<DatePicker date={deadline} setDate={setDeadline} />
				</div>
			</DialogBody>
			<DialogFooter className="space-x-2">
				<Button variant="text" color="gray" onClick={handleOpen}>
					cancel
				</Button>
				<Button variant="gradient" color="gray" onClick={handleSave}>
					Save
				</Button>
			</DialogFooter>
		</Dialog>
	);
}
