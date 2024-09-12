import React from 'react';
import * as XLSX from 'xlsx';

interface ExcelDownloadProps {
	data: unknown[];
	fileName: string;
}

const ExcelDownload: React.FC<ExcelDownloadProps> = ({ data, fileName }) => {
	const downloadExcel = () => {
		const worksheet = XLSX.utils.json_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

		const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

		const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${fileName}.xlsx`;
		link.click();

		URL.revokeObjectURL(url);
	};

	return (
		<button onClick={downloadExcel} className="px-2 font-bold text-white transition duration-300 bg-green-700 rounded hover:bg-green-600">
			Download Excel File
		</button>
	);
};

export default ExcelDownload;

