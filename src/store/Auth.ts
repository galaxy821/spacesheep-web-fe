import { create } from "zustand";

interface Auth {
  user: string;
}

const useAuth = create<Auth>((set) => ({
  user: "",
}));

export default useAuth;
