import { useQuery } from "react-query";
import { DataFetching } from "../../ApiCalls/DataFetching";
export const HomeUseQuery = ()=> {
    const {isLoading,isFetching,isError,data,refetch}=useQuery('data',DataFetching)
    return {isLoading,isFetching,isError,data,refetch};
}

