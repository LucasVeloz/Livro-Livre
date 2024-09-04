import Link from "next/link";
import { BookCopyIcon, LibraryBigIcon, TextSearchIcon, User2Icon } from "lucide-react";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 w-full px-8 py-5 bg-custom-white rounded-t-lg flex items-center justify-between border border-custom-lightGray shadow-base">
      <Link
        href="/consulta"
        className={`flex flex-col text-xs leading-none font-semibold ${pathname === "/consulta" ? "text-primary" : "text-tertiary"} items-center gap-[0.375rem]`}
      >
        <LibraryBigIcon size={18} />
        <p>Consulta</p>
      </Link>
      <Link
        href="/busca"
        className={`flex flex-col text-xs leading-none font-semibold ${pathname === "/busca" ? "text-primary" : "text-tertiary"} items-center gap-[0.375rem]`}
      >
        <TextSearchIcon size={18} />
        <p>Busca</p>
      </Link>
      <Link
        href="/consulta"
        className={`flex flex-col text-xs leading-none font-semibold ${pathname === "/" ? "text-primary" : "text-tertiary"} items-center gap-[0.375rem]`}
      >
        <BookCopyIcon size={18} />
        <p>Empréstimos</p>
      </Link>
      <Link
        href="/consulta"
        className={`flex flex-col text-xs leading-none font-semibold ${pathname === "/" ? "text-primary" : "text-tertiary"} items-center gap-[0.375rem]`}
      >
        <User2Icon size={18} />
        <p>Perfil</p>
      </Link>
    </div>
  )
}