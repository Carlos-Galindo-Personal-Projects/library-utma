import axiosInstance from "@/axios/axios";
import { BookSelector } from "@/types/responses";
import { AxiosError } from "axios";
import debounce from "just-debounce-it";
import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";

const InputBook: FC<{ setBookOptions: Dispatch<SetStateAction<BookSelector[]>> }> = ({ setBookOptions }) => {

  const [bookTitle, setBookTitle] = useState<string>("");

  const debouncedGetBooks = useCallback(
    debounce(async (title: string) => {
      try {
        if (title === "") {
          setBookOptions([]);
          return;
        }
        const response = await axiosInstance.get('/Books', {
          params: {
            title
          }
        }
        );
        setBookOptions(response.data);
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
    const newTitle = e.target.value;
    setBookTitle(newTitle);
    debouncedGetBooks(newTitle);
  }

  return (
    <input
      id="bookTitle"
      type="text"
      value={bookTitle}
      onChange={handleChange}
      className="w-full rounded-md h-8 px-3 text-black mt-1"
      placeholder="Buscar libro por título"
    />
  )
}

export default InputBook
