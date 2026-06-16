import { Buttons } from "./Buttons";

export const Header = () => {
  return (
    <header className="w-full h-[90px] flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="flex items-center gap-1 flex-shrink-0">
        <h1 className="font-logo text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Boorchi
        </h1>
        <h1 className="font-logo text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          .Dev
        </h1>
      </div>

      <div>
        <Buttons />
      </div>
    </header>
  );
};