import ExcelJS from "exceljs"

export const file_upload_service = async (payload: any) => {
    try {

        const fileBuffer = payload.buffer
        if (!fileBuffer) {
            return {
                type: "error",
                message: "File not found...!!!",
                componentData: null
            }
        }

        const workbook = new ExcelJS.Workbook();

        const fileData = await workbook.xlsx.load(fileBuffer);
        const worksheet_data = fileData.worksheets[0];

        const headers = worksheet_data.getRow(1).values as ExcelJS.CellValue[];

        const excelData: Record<string, unknown>[] = [];
        worksheet_data.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return;
            const rowValues = row.values as ExcelJS.CellValue[];
            const rowObject: Record<string, unknown> = {};
            headers.slice(1).forEach((header, index) => {
                rowObject[String(header)] = rowValues[index + 1] ?? null;
            });
            excelData.push(rowObject);
        });

        return {
            type: "Success",
            message: "File data retrived successfully...!!!",
            componentData: {
                file_data : excelData
            }
        }
    } catch (error: any) {
        return {
            type: "error",
            message: error.message,
            componentData: null
        }
    };
};