interface NumBtnProps {
  children: React.ReactNode;
  onClick: () => void;
}
function PadBtn(props: NumBtnProps) {
  return (
    <div
      className="
        basis-1/3 flex justify-center items-center
        border border-slate-500 rounded
        hover:bg-slate-50 hover:ring-1 hover:ring-slate-400
        active:hover:ring-2 active:font-semibold
        select-none cursor-pointer
    "
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default PadBtn;
