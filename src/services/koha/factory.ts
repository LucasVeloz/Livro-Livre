import { SignUpParams } from "./types";

import axios from "axios";

function factory() {
  // const baseUrl = "https://kpro.tamil.fr/api/v1";
  // const baseUrl = "http://biblioteca-intra.fac.unb.br/api/v1/";
  // const api = axios.create({
  //   baseURL: baseUrl,
  //   auth: {
  //     username: "demo",
  //     password: "demo",
  //   },
  // });

  const books = [
    {
      id: 1,
      name: "Os Irmãos Karamazov",
      author: "Fiódor Dostoiévski",
      publisher: "editora 34",
      year: "1º ed. 1998",
      cover:
        "https://m.media-amazon.com/images/I/81Q2+mMrj0L._AC_UF1000,1000_QL80_.jpg",
    },
  ];
  return {
    user: {
      signUp: async (params: SignUpParams) => {
        // const { data } = await api.post<SignUpParams>("patrons", params);
        // return data;
        return await setTimeout(() => ({ status: 200 }), 3000);
      },
    },
    books: {
      search() {
        return new Array(8).fill(1).map((_, i) => ({
          ...books[0],
          name: `${books[0].name} ${i + 1}`,
          id: i + 1,
        }));
      },
    },
  };
}

export const KohaApi = factory();
