import { BookCopyIcon, LibraryBigIcon, ScanQrCodeIcon, SearchIcon, TextSearchIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Lookup() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="fixed top-0 left-0 w-full px-4 py-5 bg-custom-white rounded-b-lg flex items-center gap-3 border border-custom-lightGray shadow-base">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center h-10 gap-[0.625rem] w-full px-3 rounded-md border border-custom-darkGray"
        >
          <SearchIcon size={18} className="text-secondary" />
          <input
            name="search"
            type="text"
            className="w-full bg-transparent text-xs placeholder:text-custom-darkGray"
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
      <div className="grid grid-cols-2 gap-5 pt-6 px-6 mt-[5.25rem] pb-[7rem] w-full">
        {Array(8).fill(1).map((b, i) =>
          <div
            key={i}
            className="flex flex-col w-full rounded-lg shadow-base"
          >
            <img
              // width={180}
              // height={160}
              src="https://m.media-amazon.com/images/I/81Q2+mMrj0L._AC_UF1000,1000_QL80_.jpg"
              alt="Book cover"
              className="w-full object-cover aspect-square rounded-t-lg border-b border-b-custom-lightGray"
            />
            <div className="flex flex-col p-[0.625rem] pb-4">
              <h1 className="text-sm font-bold text-custom-black">Os Irmãos Karamazov</h1>
              <p className="text-xs font-medium text-custom-darkGray">Fiódor Dostoiévski</p>
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full px-8 py-5 bg-custom-white rounded-t-lg flex items-center justify-between border border-custom-lightGray shadow-base">
        <button onClick={() => {}} className="flex flex-col text-xs leading-none font-semibold text-primary items-center gap-[0.375rem]">
          <LibraryBigIcon size={18} />
          <p>Consulta</p>
        </button>
        <button onClick={() => {}} className="flex flex-col text-xs leading-none font-semibold text-tertiary items-center gap-[0.375rem]">
          <TextSearchIcon size={18} />
          <p>Busca</p>
        </button>
        <button onClick={() => {}} className="flex flex-col text-xs leading-none font-semibold text-tertiary items-center gap-[0.375rem]">
          <BookCopyIcon size={18} />
          <p>Empréstimos</p>
        </button>
        <button onClick={() => {}} className="flex flex-col text-xs leading-none font-semibold text-tertiary items-center gap-[0.375rem]">
          <User2Icon size={18} />
          <p>Perfil</p>
        </button>
      </div>
    </main>
  )
}