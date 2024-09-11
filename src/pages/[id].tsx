
// import { Container } from './styles';

import { Menu } from "@/components/menu";
import { useBooks } from "@/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Page() {
  const { query: { id }, back} = useRouter();

  const { data, bookingAsync } = useBooks();

  const book = data?.find((book) => book.id.toString() === id);

  if (!book) {
    return null;
  }

  const { author, cover, name, publisher, year } = book;

  async function booking() {
    if (typeof id !== "string") {
      return;
    }
    await bookingAsync(id),
    toast.success("Livro reservado com sucesso!")
    back();
  }

  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="gap-5 pt-6 px-6 pb-[7rem] w-full">
        <Image
          width={180}
          height={160}
          src={cover}
          alt="Book cover"
          className="w-full object-cover aspect-square rounded-t-lg border-b border-b-custom-lightGray"
        />
        <div className="flex flex-col p-[0.625rem] pb-4">
          <h1 className="text-sm font-bold text-custom-black leading-4 line-clamp-3">{name}</h1>
          <p className="mt-1 text-xs font-medium text-custom-darkGray">{author}</p>
          <p className="mt-2 text-xs font-medium text-custom-darkGray">
            <b className="text-custom-black">Ano:</b>&nbsp;{year}
          </p>
          <p className="text-xs font-medium text-custom-darkGray">
            <b className="text-custom-black">Por:</b>&nbsp;{publisher}
          </p>
        </div>
        <button className="w-full p-2 bg-primary text-background rounded-lg mt-4" onClick={booking}>Pegar emprestado</button>
      </div>
      <Menu />
    </main>
  )
}
