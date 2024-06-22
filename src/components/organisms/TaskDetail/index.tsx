import Icon from "@/components/atoms/Icon";
import { Button, Chip, Typography } from "@/components/material-tailwind";

export default function TaskDetail() {
	return (
		<div className="h-full w-full p-10">
			<Typography variant="h3" color="blue-gray" className="mb-2">
				This is a title header!! Could you click on this one?
			</Typography>
			<Typography variant="h6">
				The place is close to Barceloneta Beach and bus stop just 2 min by walk
				and near to &quot;Naviglio&quot; where you can enjoy the main night life
				in Barcelona. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Pariatur quo, ab magni reiciendis quasi autem nam quidem dolores?
				Doloremque ullam obcaecati iste mollitia, unde praesentium modi
				provident blanditiis iure quisquam.
			</Typography>
			<div className="grid grid-cols-2 gap-4 mt-4">
				<div className="flex items-center gap-4">
					<Typography variant="h5" color="black">
						Status:
					</Typography>
					<Chip variant="ghost" size="md" value="To Do" color="blue-gray" />
				</div>
				<div className="flex items-center gap-4">
					<Typography variant="h5" color="black">
						Deadline:
					</Typography>
					<Typography variant="paragraph">May 24th, 2024</Typography>
				</div>
				<div className="flex items-center">
					<Button
						variant="gradient"
						color="light-blue"
						className="flex items-center gap-2"
						size="md"
					>
						<Icon icon="CornerDownLeft" size={20} />
						Back
					</Button>
				</div>
				<div className="flex items-center gap-4">
					<Typography variant="h5" color="black">
						Last Update:
					</Typography>
					<Typography variant="paragraph">May 24th, 2024</Typography>
				</div>
			</div>
		</div>
	);
}
