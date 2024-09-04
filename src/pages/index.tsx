"use client";

import { Search } from "@/components/search";
import { BookCopyIcon, FolderInputIcon, User2Icon, UserPlus2Icon } from "lucide-react";
import Link from "next/link";

export default function Page() {  
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Search />
      <div className="flex flex-col gap-5 pt-6 px-7 mt-[5.25rem] pb-[7rem] w-full">
        <Link href="/consulta" className="w-full px-8 py-5 bg-custom-white rounded-lg flex items-center gap-4 border border-custom-lightGray shadow-base text-2xl font-bold text-primary">
          <UserPlus2Icon size={32} />
          Cadastro
        </Link>
        <Link href="/consulta" className="w-full px-8 py-5 bg-custom-white rounded-lg flex items-center gap-4 border border-custom-lightGray shadow-base text-2xl font-bold text-primary">
          <BookCopyIcon size={32} />
          Empréstimo
        </Link>
        <Link href="/consulta" className="w-full px-8 py-5 bg-custom-white rounded-lg flex items-center gap-4 border border-custom-lightGray shadow-base text-2xl font-bold text-primary">
          <FolderInputIcon size={32} />
          Devolução
        </Link>
        <Link href="/consulta" className="w-full px-8 py-5 bg-custom-white rounded-lg flex items-center gap-4 border border-custom-lightGray shadow-base text-2xl font-bold text-primary">
          <User2Icon size={32} />
          Consulta
        </Link>
      </div>
    </main>
  )
}
