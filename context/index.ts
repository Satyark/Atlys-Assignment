import { Post } from "@/data";
import { createContext, Dispatch, SetStateAction } from "react";

type AppContextProps = {
  postData: Post[] | undefined;
  setPostData: Dispatch<SetStateAction<Post[] | undefined>>;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);
