import CopyBtn from "./CopyBtn.tsx";

interface DisplayProps {
  value: string;
}
const Display = ({ value }: DisplayProps) => {
  return (
    <div className="text-3xl px-1 py-2 text-right border border-slate-500 rounded bg-slate-200 select-none relative overflow-x-auto">
      {value}
      <CopyBtn stringMoney={value} />
    </div>
  );
};

export default Display;
