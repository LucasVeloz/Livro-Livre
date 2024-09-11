import { Menu } from "@/components/menu";
import { Search } from "@/components/search";
import { useBooks } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Lookup() {
  const { data } = useBooks();

  return (
    <main className="flex flex-col w-full min-h-screen">
      <Search />
      <div className="grid grid-cols-2 gap-5 pt-6 px-6 mt-[5.25rem] pb-[7rem] w-full">
        {data?.map(({ author, cover, id, name, publisher, year }) =>
          <Link
            href={`${id}`}
            key={id}
            className="flex flex-col w-full rounded-lg shadow-base border border-custom-lightGray"
          >
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
          </Link>
        )}
      </div>
      <Menu />
    </main>
  )
}
