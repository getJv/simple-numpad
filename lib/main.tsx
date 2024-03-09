export function SimpleNumpad() {
  return (
    <div className="flex flex-col gap-1 p-1 border-2 border-red-500">
      <div className="border-2 border-red-500">DISPLAY </div>
      <div className="flex gap-1 ">
        <div className="basis-1/3 flex justify-center items-center border-2 border-red-500">
          1
        </div>
        <div className=" basis-1/3 flex justify-center items-center  border-2 border-red-500">
          2
        </div>
        <div className="basis-1/3 flex justify-center items-center border-2 border-red-500">
          3
        </div>
      </div>
    </div>
  );
}
