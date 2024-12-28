import { SkeletonTableProps } from "@/types/components";
import { FC } from "react";

const SkeletonTable: FC<SkeletonTableProps> = ({ columns }) => {
    return (
        <>
            <div className="flex justify-center items-center animate-pulse">
                <div className="h-10 bg-gray-200 rounded-lg px-28 mb-6"></div>
            </div>

            <div className="flex justify-center items-center space-x-8 animate-pulse">
                <div className="h-10 w-10 bg-gray-200 transition rounded-lg px-6"></div>
                <div className="h-10 w-10 bg-gray-200 transition rounded-lg px-6"></div>
            </div>
            <div className="shadow-md rounded-lg mt-4 overflow-x-hidden">
                <table className="min-w-full table-auto divide-y divide-[#0F907C]">
                    <thead>
                        <tr>
                            {Array.from({ length: columns }).map((_, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-3 bg-[#0F907C] text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                                >
                                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-[#072E33] divide-y divide-[#072E33]">
                        {Array.from({ length: 4 }).map((_, rowIndex) => (
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
        </>
    );
};

export default SkeletonTable;
