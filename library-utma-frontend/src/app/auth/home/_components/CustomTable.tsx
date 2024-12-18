
import { CustomTableProps } from '@/types/types';
import { FC } from 'react';

const CustomTable: FC<CustomTableProps> = ({ columns, headers, data }) => {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mt-4">
            <table className="min-w-full table-auto">
                <thead className="bg-[#0F907C] text-white">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 text-left">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-[#05161A] text-white">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#072E33]' : 'bg-[#294D61]'} >
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-4 py-2 text-left">
                                    {
                                        typeof row[col] === 'boolean' ? (
                                            row[col] ? 'Si' : 'No'
                                        ) : (
                                            row[col]
                                        )
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;

