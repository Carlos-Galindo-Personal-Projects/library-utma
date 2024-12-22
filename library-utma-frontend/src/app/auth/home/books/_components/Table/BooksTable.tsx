import { FC } from 'react';
import DeleteBook from './DeleteButton';
import EditButton from './EditButton';
import { BooksTableProps } from '@/types/components';

import { bookHeaders as headers, bookColumns as columns } from '@/utils/tableHeaders';

const BooksTable: FC<BooksTableProps> = ({ data, setPage }) => {
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
                    {
                        data && data.length > 0 ? (
                            data.map((row, rowIndex) => (
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
                                            <EditButton isbn={row.isbn} />
                                            <DeleteBook isbn={row.isbn} setPage={setPage} />
                                        </div>
                                    </td>
                                </tr>
                            ))) : (
                            <tr>
                                <td colSpan={columns.length + 1} className="text-center py-4">
                                    No hay libros registrados en la base de datos
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksTable;
