import { ActivitiesTableProps } from '@/types/types';
import { FC } from 'react';
import ExitButton from './ExitButton';

const EntrancesTable: FC<ActivitiesTableProps> = ({ columns, headers, data }) => {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mt-4">
            <table className="min-w-full table-auto">
                <thead className="bg-[#0F907C] text-white">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 text-center">
                                {header}
                            </th>
                        ))}
                        <th className='px-4 py-2 text-center'>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-[#05161A] text-white">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#072E33]' : 'bg-[#294D61]'} >
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-4 py-2 text-center">
                                    {
                                        typeof row[col] === 'boolean' ? (
                                            row[col] ? 'Si' : 'No'
                                        ) : (
                                            row[col]
                                        )
                                    }
                                </td>
                            ))}
                            <td className="px-4 py-2 text-center">
                                <div className="flex justify-center space-x-2">
                                    {
                                        row.insideLibrary ? (
                                            <ExitButton id={Number(row.id)} />
                                        ) : (
                                            <p>
                                                No hay acciones disponibles
                                            </p>
                                        )
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EntrancesTable;
