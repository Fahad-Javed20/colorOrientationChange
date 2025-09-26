type FlagProps = {
  name: string;
  color1: string;
  color2: string;
  color3: string;
  horizontal: boolean;
};

const Flag = ({ name, color1, color2, color3, horizontal }: FlagProps) => {
  return (
    <div className="h-72 w-120">
      <h1 className="text-2xl font-bold pb-10">{name}</h1>

      <div
        className={`flex ${
          horizontal ? "flex-col" : "flex-row"
        } w-96 h-60 border border-gray-300`}
      >
        <div
          className={`${horizontal ? "h-1/3 w-full" : "w-1/3 h-full"} ${color1}`}
        ></div>
        <div
          className={`${horizontal ? "h-1/3 w-full" : "w-1/3 h-full"} ${color2}`}
        ></div>
        <div
          className={`${horizontal ? "h-1/3 w-full" : "w-1/3 h-full"} ${color3}`}
        ></div>
      </div>
    </div>
  );
};

export default Flag;
