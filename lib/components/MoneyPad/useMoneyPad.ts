import { useEffect, useState } from "react";
import Dinero from "dinero.js";
import { MoneyPadConfig } from "./MoneyPad.ts";

export default function useMoneyPad(props: MoneyPadConfig | null) {
  const [value, setValue] = useState<number[]>([]);
  const [stringMoney, setStringMoney] = useState<string>("0");

  const maxDigits = props?.maxDigits ?? 17;
  const btnGroups = props?.padValue ?? [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["C", 0, "<"],
  ];

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    formatStringMoney();
  }, [value]);

  const handleKeyUp = (event: KeyboardEvent) => {
    const key = event.key;

    if ("Delete" == key) {
      resetDisplay();
      return;
    }

    if ("Backspace" == key) {
      setValue((prevState) => {
        const newValue = [...prevState];
        newValue.pop();
        return [...newValue];
      });
      return;
    }

    const allowValues = btnGroups.flat().filter((i) => typeof i === "number");
    const num = Number(key);
    if (!allowValues.includes(num)) {
      return;
    }

    addNumber(num);
  };

  const formatStringMoney = () => {
    const intValue = parseInt(value.length > 0 ? value.join("") : "0");

    const dineroConfig = {
      amount: intValue ?? 0,
      currency: props?.currency ?? "BRL",
    } as Dinero.Options;

    const locale = props?.locale ?? "pt-BR";

    const displayValue = Dinero(dineroConfig);

    const stringValue = displayValue.setLocale(locale).toFormat();
    setStringMoney(stringValue);
  };

  const addNumber = (newValue: number) => {
    if (value.length >= maxDigits) {
      return;
    }

    setValue((prevValue) => [...prevValue, newValue]);
  };

  const resetDisplay = () => {
    setValue([]);
  };

  const eraseNumber = () => {
    if (value.length < 1) {
      setValue([]);
      return;
    }

    setValue((prevState) => {
      const newValue = [...prevState];
      newValue.pop();
      return [...newValue];
    });
  };

  return { btnGroups, stringMoney, addNumber, eraseNumber, resetDisplay };
}
