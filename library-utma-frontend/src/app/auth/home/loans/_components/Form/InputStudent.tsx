import axiosInstance from "@/axios/axios";
import { StudentSelector } from "@/types/responses";
import { AxiosError } from "axios";
import debounce from "just-debounce-it";
import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";

const InputStudent: FC<{ setStudentOptions: Dispatch<SetStateAction<StudentSelector[]>> }> = ({ setStudentOptions }) => {

  const [studentID, setStudentID] = useState<string>("");

  const debouncedGetStudents = useCallback(
    debounce(async (id: string) => {
      try {
        if (id === "") {
          setStudentOptions([]);
          return;
        }
        const response = await axiosInstance.get('/Students', {
          params: {
            id
          }
        }
        );
        setStudentOptions(response.data);
      } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) {
          alert(error.response?.data);
          return;
        }
        alert("Ha ocurrido un error");
      }
    }, 1000),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newID = e.target.value;
    setStudentID(newID);
    debouncedGetStudents(newID);
  }

  return (
    <input
      id="studentID"
      type="text"
      value={studentID}
      onChange={handleChange}
      className="w-full rounded-md h-8 px-3 text-black mt-1"
      placeholder="Buscar estudiante por matrícula"
    />
  )
}

export default InputStudent
