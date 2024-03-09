interface CopyBtnProps {
  stringMoney: string;
}
function CopyBtn({ stringMoney }: CopyBtnProps) {
  const handleClick = () => {
    navigator.clipboard
      .writeText(stringMoney)
      .then(() => {
        console.log("Copying to clipboard was successful!");
      })
      .catch(() => {});
  };

  return (
    <div
      onClick={handleClick}
      className="
        absolute left-2 top-3 px-2 py-1
        rounded border border-slate-400
        hover:border-slate-600 hover:text-slate-500 hover:font-semibold cursor-pointer
        active:border-slate-300 active:text-slate-400
        text-sm text-slate-400
        font-light w-8 h-8 flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h74.118a48 48 0 0 0 33.941-14.059l51.882-51.882a48 48 0 0 0 14.059-33.941V99.882a48 48 0 0 0-14.059-33.941zM176 64h94.118v64H176c-26.51 0-48-21.49-48-48V64zm96 320H48V192h224v192zm224 46.118l-51.882 51.882H272V368h94.118C482.2 368 512 397.8 512 433.941v-.823zM368 320c0 26.51-21.49 48-48 48H64V32h48v64h224c26.51 0 48 21.49 48 48v176z"
        ></path>
      </svg>
    </div>
  );
}

export default CopyBtn;
