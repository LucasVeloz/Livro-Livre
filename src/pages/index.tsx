"use client";

import { Menu } from "@/components/menu";
import { Search } from "@/components/search";
import { BookCopyIcon, User2Icon, UserPlus2Icon } from "lucide-react";
import Link from "next/link";

export const routes = [
  {
    name: "Cadastro",
    path: "/cadastro",
    Icon: <UserPlus2Icon size={32} />,
  },
  {
    name: "Empréstimo",
    path: "/emprestimo",
    Icon: <BookCopyIcon size={32} />
  },
  // {
  //   name: "Devolução",
  //   path: "/devolucao",
  //   Icon: <FolderInputIcon size={32} />
  // },
  {
    name: "Consulta",
    path: "/consulta",
    Icon: <User2Icon size={32} />
  },
];


export default function Page() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Search />
      <div className="flex flex-col gap-5 pt-6 px-7 mt-[5.25rem] pb-[7rem] w-full">
        {routes.map(({ name, path, Icon }, index) => (
          <Link key={name + index} href={path} className="w-full px-8 py-5 bg-custom-white rounded-lg flex items-center gap-4 border border-custom-lightGray shadow-base text-2xl font-bold text-primary">
          {Icon}
          {name}
        </Link>
        ))}
      </div>
      <Menu />
    </main>
  )
}
