import TaskDetail from "@/components/organisms/TaskDetail";
import MaxWidthWrapper from "@/components/templates/MaxWidthWrapper";
import TaskTemplate from "@/components/templates/TaskTemplate";

export default function Task() {
	return (
		<MaxWidthWrapper>
			<TaskTemplate>
				<TaskDetail />
			</TaskTemplate>
		</MaxWidthWrapper>
	);
}
