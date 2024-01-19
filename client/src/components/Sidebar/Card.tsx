import { IUser } from "interfaces/user";
import { FC } from "react";
import useChatStore from "store/useChats";

export const Card: FC<IUser> = ({ name, avatar, id }) => {
  const setActiveChat = useChatStore((state) => state.setActiveChat);

  const handleCardClick = () => {
    setActiveChat(id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="shadow-sm flex w-full h-[81px] rounded-2xl p-4 bg-white cursor-pointer"
    >
      <div className="relative">
        <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full" />
      </div>
      <div className="flex ml-2 flex-col">
        <h1 className="font-extrabold text-base">{name}</h1>
        <p className="font-semibold text-sm text-gray-500">
          Some random status message
        </p>
      </div>
    </div>
  );
};
