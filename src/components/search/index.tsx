import { ScanQrCodeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

export function Search() {
  return (
    <div className="fixed top-0 left-0 w-full px-4 py-5 bg-custom-white rounded-b-lg flex items-center gap-3 border border-custom-lightGray shadow-base">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center h-10 gap-[0.625rem] w-full px-3 rounded-md border border-custom-darkGray"
      >
        <SearchIcon size={18} className="text-secondary" strokeWidth={3} />
        <input
          name="search"
          type="text"
          className="w-full bg-transparent text-sm placeholder:text-custom-darkGray"
          placeholder="Procure um livro pelo título ou autor"
        />
      </form>
      <Link
        href="/qr-code"
        className="flex flex-col items-center w-10"
      >
        <ScanQrCodeIcon size={20} className="text-secondary" />
        <p className="text-[0.625rem] font-bold text-secondary">
          Ler QR
        </p>
      </Link>
    </div>
  )
}