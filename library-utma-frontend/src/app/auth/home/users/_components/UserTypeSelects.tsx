import { UserTypeSelectorProps } from "@/types/components"
import { FC } from "react"

const UserTypeSelects: FC<UserTypeSelectorProps> = ({register, userTypeOptions}) => {
    return (
        <select
            id="userTypeId"
            className="w-full rounded-md h-8 px-3 text-black mt-1"
            {...register("userTypeId", {
                setValueAs: value => Number(value)
            })}
        >
            {
                userTypeOptions.length > 0 ? (
                    userTypeOptions.map((userType) => (
                        <option key={userType.id} value={userType.id}>
                            {userType.name}
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

export default UserTypeSelects
