import { BookCopyIcon, LibraryBigIcon, TextSearchIcon, User2Icon } from "lucide-react";


export const routes = [
  {
    name: "Consulta",
    path: "/",
    Icon: <LibraryBigIcon size={18} />,
  },
  {
    name: "Busca",
    path: "/busca",
    Icon: <TextSearchIcon size={18} />
  },
  {
    name: "Empréstimos",
    path: "/emprestimo",
    Icon: <BookCopyIcon size={18} />
  },
  {
    name: "Perfil",
    path: "/perfil",
    Icon: <User2Icon size={18} />
  },
];
