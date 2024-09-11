
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import ExcelDownload from "../DownloadData";

interface ChartWrapperProps {
	header: string;
	description: string;
	footerTitle?: React.ReactNode;
	footerDescription?: string;
	data: unknown[],
	fileName: string,
	children: React.ReactNode
}

export default function ChartWrapper({
	header,
	description,
	footerTitle,
	footerDescription,
	data,
	fileName,
	children
}: ChartWrapperProps) {
	return (
		<Card className="flex flex-col">
			<CardHeader className="flex md:flex-row md:justify-between">
				<div>
					<CardTitle className="text-2xl font-bold">{header}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</div>
				<ExcelDownload data={data} fileName={fileName} />
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