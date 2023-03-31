export const DataFetching = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  return data.json();
};

// export const apiData=()=>{
//   const {isLoading,isFetching,isError,data,refetch}=useQuery('data',DataFetching);
//   return {data,isError,isLoading,isFetching,refetch}
// }
