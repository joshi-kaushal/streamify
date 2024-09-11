import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

interface ChartWrapperProps {
	header: string;
	description: string;
	footerTitle?: React.ReactNode;
	footerDescription?: string;
	children: React.ReactNode
}

export default function ChartWrapper({
	header,
	description,
	footerTitle,
	footerDescription,
	children
}: ChartWrapperProps) {
	return (
		<Card className="flex flex-col">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">{header}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				{children}
			</CardContent>

			{
				(footerTitle || footerDescription) && (
					<CardFooter className="flex-col gap-2 text-sm">
						<div className="flex items-center gap-2 font-medium leading-none">
							{footerTitle}
						</div>
						<div className="leading-none text-muted-foreground">
							{footerDescription}
						</div>
					</CardFooter>
				)
			}
		</Card>
	)
}