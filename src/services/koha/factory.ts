import { SignUpParams } from "./types";

import axios from "axios";

function factory() {
  const baseUrl = "https://kpro.tamil.fr/api/v1";
  // const baseUrl = "http://biblioteca-intra.fac.unb.br/api/v1/";
  const api = axios.create({
    baseURL: baseUrl,
    auth: {
      username: "demo",
      password: "demo",
    },
  });
  return {
    user: {
      signUp: async (params: SignUpParams) => {
        // const { data } = await api.post<SignUpParams>("patrons", params);
        // return data;
        return await setTimeout(() => ({ status: 200 }), 3000);
      },
    },
  };
}

export const KohaApi = factory();
