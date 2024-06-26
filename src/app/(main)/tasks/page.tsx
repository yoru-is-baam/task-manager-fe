import TaskTable from "@/components/organisms/TaskTable";
import MaxWidthWrapper from "@/components/templates/MaxWidthWrapper";
import TaskTemplate from "@/components/templates/TaskTemplate";

export const metadata = {
	title: "List Of Tasks",
};

export default function Tasks() {
	return (
		<MaxWidthWrapper>
			<TaskTemplate>
				<TaskTable />
			</TaskTemplate>
		</MaxWidthWrapper>
	);
}
