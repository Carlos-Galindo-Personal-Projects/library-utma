import { SkeletonTableProps } from "@/types/types";
import { FC } from "react";

const SkeletonTable: FC<SkeletonTableProps> = ({ columns }) => {
    return (
        <div className="shadow-md rounded-lg mt-4 overflow-x-hidden">
            <table className="min-w-full table-auto divide-y divide-[#0F907C]">
                <thead>
                    <tr>
                        {Array.from({ length: columns }).map((_, index) => (
                            <th
                                key={index}
                                className="px-4 py-2 bg-[#0F907C] text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                            >
                                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-[#072E33] divide-y divide-[#0F907C]">
                    {Array.from({ length: 7 }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <td key={colIndex} className="px-4 py-3 whitespace-nowrap">
                                    <div className="h-4 bg-gray-500 rounded animate-pulse"></div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonTable;
