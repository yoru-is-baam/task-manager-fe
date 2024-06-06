import TaskTable from "@/components/organisms/TaskTable";
import MaxWidthWrapper from "@/components/templates/MaxWidthWrapper";

export const metadata = {
	title: "List Of Tasks",
};

export default function Tasks() {
	return (
		<MaxWidthWrapper>
			<TaskTable />
		</MaxWidthWrapper>
	);
}
