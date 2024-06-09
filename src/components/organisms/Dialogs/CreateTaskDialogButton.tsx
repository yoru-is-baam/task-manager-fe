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
import { useState } from "react";

export function CreateTaskDialogButton() {
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen((cur) => !cur);

	return (
		<>
			<Button
				className="flex items-center gap-3"
				size="md"
				onClick={handleOpen}
			>
				<Icon icon="ListPlus" size={16} /> Create task
			</Button>
			<Dialog size="md" open={open} handler={handleOpen}>
				<div className="flex items-center justify-between">
					<DialogHeader className="flex flex-col items-start">
						{" "}
						<Typography className="mb-1" variant="h4">
							Create Task{" "}
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
						<Input label="Title" crossOrigin={undefined} />
						<Typography className="-mb-2" color="blue-gray" variant="h6">
							Description
						</Typography>
						<Textarea label="Description" />
						<DatePicker />
					</div>
				</DialogBody>
				<DialogFooter className="space-x-2">
					<Button variant="text" color="gray" onClick={handleOpen}>
						cancel
					</Button>
					<Button variant="gradient" color="gray" onClick={handleOpen}>
						Create
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
