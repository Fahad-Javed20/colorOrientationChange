type FlagProps = {
  name: string;
  color1: string;
  color2: string;
  color3: string;
  horizontal: boolean;
};

const Flag = ({ name, color1, color2, color3, horizontal }: FlagProps) => {
  return (
    <div className=" h-72 w-120">
      <h1 className="text-2xl font-bold pb-10">{name}</h1>

      <div className={`bg-black h-1/3 ${color1}`}></div>
      <div className={`bg-black h-1/3 ${color2}`}></div>
      <div className={`bg-black h-1/3 ${color3}`}></div>
    </div>
  );
};

export default Flag;
