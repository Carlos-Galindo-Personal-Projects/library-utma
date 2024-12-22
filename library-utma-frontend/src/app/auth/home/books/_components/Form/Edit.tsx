"use client"

import axiosInstance from "@/axios/axios";
import { BookForm } from "@/types/requests";
import { AxiosError } from "axios";
import { FC, useEffect, useState } from "react";
import EditBookForm from "./EditBookForm";
import { Genre } from "@/types/responses";
import FormSkeleton from "../UI/FormSkeleton";

const Edit: FC<{ isbn: string }> = ({ isbn }) => {
    const [book, setBook] = useState<BookForm>({} as BookForm);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBook() {
            try {
                setLoading(true);
                const response = await axiosInstance.get(`/Books/${isbn}`);
                setBook(response.data.book);
                setGenres(response.data.genres);
            } catch (error) {
                if (error instanceof AxiosError) {
                    alert(error.response?.data);
                    return
                }
                alert("Ha ocurrido un error desconocido");
            } finally {
                setLoading(false);
            }
        }
        fetchBook();
    }, [isbn]);

    if(loading) return <FormSkeleton />;

    return <EditBookForm book={book} genres={genres} />;
};

export default Edit;

