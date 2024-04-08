import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { TCharacter, TODO } from "./types/character";

export const useGetCharacters = () => {
  const getCharacters = async ({ pageParams }: { pageParams: number }) => {
    const res = await axios.get<{ info: TODO; results: Array<TCharacter> }>(
      `character?page=${pageParams}`,
    );
    return res.data;
  };
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: ({ pageParam }) => getCharacters({ pageParams: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        console.log(
          lastPage.info.next.substring(-1, lastPage.info.next.indexOf("=")) + 1,
        );
        return lastPage.info.next.substring(-1, lastPage.info.next.indexOf("=")) + 1;
      },
    });
  return { data, isLoading, isError, fetchNextPage, hasNextPage };
};
