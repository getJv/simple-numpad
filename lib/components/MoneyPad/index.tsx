import useMoneyPad from "./useMoneyPad.ts";
import Display from "./Display.tsx";
import NumpadLine from "./NumpadLine.tsx";
import { MoneyPadConfig } from "./MoneyPad.ts";

interface MoneyPadProps {
  config?: MoneyPadConfig;
}

export function MoneyPad({ config }: MoneyPadProps) {
  const { btnGroups, addNumber, stringMoney, eraseNumber, resetDisplay } =
    useMoneyPad(config ?? null);

  const renderNumPad = () => {
    return btnGroups.map((btnLine, index) => (
      <NumpadLine
        key={index}
        items={btnLine}
        addNumber={addNumber}
        eraseNumber={eraseNumber}
        resetDisplay={resetDisplay}
      />
    ));
  };

  return (
    <div className="flex flex-col gap-1 p-2 border border-slate-300 rounded m-5 text-slate-600 max-w-[250px] bg-slate-50 ">
      <Display value={stringMoney} />
      {renderNumPad()}
    </div>
  );
}
