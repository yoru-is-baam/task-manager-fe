import { Card } from "@/components/material-tailwind";

export default function TaskTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Card className="h-full w-full">{children}</Card>;
}
