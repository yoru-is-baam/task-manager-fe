import classNames from "classnames";

export default function MaxWidthWrapper({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={classNames("max-w-screen-xl mx-auto w-full", className)}>
			{children}
		</div>
	);
}
