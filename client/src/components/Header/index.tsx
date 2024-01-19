import useChatStore from "store/useChats";

export const Header = () => {
  const activeChat = useChatStore((state) => state.activeChat);

  return (
    <nav className="flex items-center px-4 w-full bg-white border-b col-start-2 col-end-3 row-start-1 row-end-2">
      <div className="relative">
        <img
          src={activeChat?.avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full" />
      </div>
    </nav>
  );
};
