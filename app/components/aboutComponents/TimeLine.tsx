"use client"
import{ useState } from "react";

type DataType = {
  date: string;
  title: string;
  description: string;
};

export const TimeLine = (props: DataType) => {
  const { date, title, description } = props;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const isLong = description.length > 100;

  const shortDescription = description.slice(0, 100) + "...";

  return (
    <div className="flex mt-6">
      <div className="relative flex flex-col items-center mr-8">
        <div className="w-4 h-4 rounded-full bg-purple-500 z-10" />
        <div className="w-[2px] h-24 bg-gradient-to-b from-purple-500 to-transparent" />
      </div>

      <div>
        <p className="text-gray-400">{date}</p>

        <h3 className="text-xl font-semibold">{title}</h3>

       <p className="text-gray-500 w-full max-w-[700px]">
          {showFullDescription || !isLong
            ? description
            : shortDescription}
        </p>

        {isLong && (
          <button
            onClick={() =>
              setShowFullDescription(!showFullDescription)
            }
            className="text-purple-400 hover:text-purple-300 mt-2"
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};