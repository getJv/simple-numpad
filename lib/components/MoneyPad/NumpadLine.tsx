import PadBtn from "./PadBtn.tsx";

interface NumpadLineProps {
  items: (string | number)[];
  addNumber: (value: number) => void;
  eraseNumber: () => void;
  resetDisplay: () => void;
}
const NumpadLine = ({
  items,
  addNumber,
  eraseNumber,
  resetDisplay,
}: NumpadLineProps) => {
  const handleClick = (newValue: string | number) => {
    if ("number" === typeof newValue) {
      addNumber(newValue);
    }

    if ("C" === newValue) {
      resetDisplay();
    }

    if ("<" === newValue) {
      eraseNumber();
    }
  };

  return (
    <div className="flex gap-1 text-2xl bg-slate-100">
      {items.map((i, index) => (
        <PadBtn key={index} onClick={() => handleClick(i)}>
          {i}
        </PadBtn>
      ))}
    </div>
  );
};

export default NumpadLine;
