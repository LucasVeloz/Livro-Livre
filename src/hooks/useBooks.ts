import { KohaApi } from "@/services";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useBooks() {
  const client = useQueryClient();

  const search = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      return await KohaApi.books.search();
    },
    initialData: [],
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["books"],
    mutationFn: async (id: string) => {
      return await setTimeout(() => {}, 1000);
    },
    onSuccess: async (_, variables) => {
      const filteredData = search.data?.filter((book) =>
        book.name.toLocaleLowerCase().includes(variables.toLocaleLowerCase())
      );
      if (!variables || !filteredData?.length) {
        const data = await KohaApi.books.search();
        client.setQueryData(["books"], data);
        return;
      }
      client.setQueriesData(["books"], filteredData);
    },
  });

  const bookingAsync = (id: string) => {};

  return {
    ...search,
    mutateAsync,
    bookingAsync,
  };
}
