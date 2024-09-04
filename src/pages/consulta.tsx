import { Search } from "@/components/search";
import Image from "next/image";
import Link from "next/link";

export default function Lookup() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="grid grid-cols-2 gap-5 pt-6 px-6 mt-[5.25rem] pb-[7rem] w-full">
        {Array(8).fill(1).map((_, i) =>
          <div
            key={i}
            className="flex flex-col w-full rounded-lg shadow-base border border-custom-lightGray"
          >
            <img
              // width={180}
              // height={160}
              src="https://m.media-amazon.com/images/I/81Q2+mMrj0L._AC_UF1000,1000_QL80_.jpg"
              alt="Book cover"
              className="w-full object-cover aspect-square rounded-t-lg border-b border-b-custom-lightGray"
            />
            <div className="flex flex-col p-[0.625rem] pb-4">
              <h1 className="text-sm font-bold text-custom-black leading-4 line-clamp-3">Os Irmãos Karamazov</h1>
              <p className="mt-1 text-xs font-medium text-custom-darkGray">Fiódor Dostoiévski</p>
              <p className="mt-2 text-xs font-medium text-custom-darkGray">
                <b className="text-custom-black">Ano:</b>&nbsp;1º ed. 1998
              </p>
              <p className="text-xs font-medium text-custom-darkGray">
                <b className="text-custom-black">Por:</b>&nbsp;editora 34
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}