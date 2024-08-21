import { KohaApiResponse, Casa } from "./types";

function factory(): KohaApiResponse {
  return {
    me: {
      async get(): Promise<Casa> {

          try{
            const response = await fetch("viacep.com.br/ws/01001000/json/");
            
            if(!response.ok){
              throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const data: Casa = await response.json();

            return data;
          } catch (error){
            console.error("Erro ao buscar CEP:", error);
            throw error;
          }

      }
    },
  };
}

export const KohaApi = factory();
