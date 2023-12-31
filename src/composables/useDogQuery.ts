import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

export default () => {
  return useQuery({
    queryKey: ["dog", "random"],
    queryFn: () => axios.call("get", "https://dog.ceo/api/breeds/image/random"),
    select: (res: any) => res.data
  });
};