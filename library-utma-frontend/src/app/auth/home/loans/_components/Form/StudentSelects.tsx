import { StudentSelectorProps } from '@/types/components'
import React, { FC } from 'react'

const StudentSelects: FC<StudentSelectorProps> = ({register, studentOptions}) => {
    return (
        <select
            id="studentId"
            className="w-full rounded-md h-8 px-3 text-black mt-1"
            {...register("studentId")}
        >
            {
                studentOptions.length > 0 ? (
                    studentOptions.map((student) => (
                        <option key={student.id} value={student.id}>
                            {student.name}
                        </option>
                    ))
                ) : (
                    <option value="" disabled>
                        No hay resultados
                    </option>
                )
            }
        </select>
    )
}

export default StudentSelects
