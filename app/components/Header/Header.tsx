
import { Buttons } from "./Buttons";

export const Header = () => {
  return (
    <div className="w-full h-[90px] flex items-center px-5 ">
      <div className="flex mr-auto gap-1">
        <h1 className="font-logo text-3xl text-transparent ml-[130px] bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ">
          Boorchi
        </h1>
        <h1 className="font-logo text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          .Dev
        </h1>
      </div>
      <div className="mr-[50px]">
        <Buttons />
      </div>
    </div>
  );
};
