import { KohaApiResponse } from "./types";

function factory(): KohaApiResponse {
  return {
    me: {
      get() {
        return {
          name: "John Doe",
        };
      },
    },
  };
}

export const KohaApi = factory();
