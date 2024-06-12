import { TaskStatus } from "../enum";

export type Task = {
	id?: number;
	title: string;
	status: TaskStatus;
	description: string | null;
	deadline: string;
	createdAt?: string;
	updatedAt?: string;
};
