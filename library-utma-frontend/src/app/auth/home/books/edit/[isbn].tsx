import { useRouter } from "next/router";

const EditBook = () => {
  const router = useRouter();
  const { isbn } = router.query;

  console.log(isbn);

  return <div>Editando el libro con ISBN: {isbn}</div>;
};

export default EditBook;
