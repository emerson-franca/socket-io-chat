import { IUser } from "interfaces/user";
import { create } from "zustand";

interface ChatStoreState {
  activeChat: IUser | null;
  setActiveChat: (userId: string) => void;
  onlineUsers: IUser[];
  setOnlineUsers: (onlineUsers: IUser[]) => void;
}

const useChatStore = create<ChatStoreState>((set) => ({
  activeChat: null,
  onlineUsers: [],
  setActiveChat: (userId: string) => {
    set((state) => ({
      ...state,
      activeChat: state.onlineUsers.find((user) => user.id === userId) || null,
    }));
  },
  setOnlineUsers: (onlineUsers: IUser[]) => {
    console.log("online users ", onlineUsers);
    set({ onlineUsers });
  },
}));

export default useChatStore;
