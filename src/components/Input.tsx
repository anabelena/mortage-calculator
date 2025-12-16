interface Props {
  styles?: string;
  label: string;
  unit?: string;
  position?: "right" | "left"; // right by default
}

export const Input = ({
  styles = "",
  label,
  unit,
  position = "right",
}: Props) => {
  return (
    <div className={`${styles} `}>
      <label className="inline-block text-lg mb-3 text-Slate-700" htmlFor={label}>
        {label}
      </label>
      <div className="relative ">
        <input
          name=""
          id={label}
          type="number"
          // agregue clase para ocultar flechas
          className={`${
            position === "left" ? "pl-17" : "pl-4"
          } w-full h-[45px] font-bold rounded-sm outline outline-Slate-500 cursor-pointer focus:outline-Lime peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
        <span
          className={`text-Slate-700 bg-Slate-100 peer-focus:bg-Lime absolute top-0 h-full px-2.5 grid place-content-center 
          ${
            position === "left" ? "left-0 rounded-l-sm" : "right-0 rounded-r-sm"
          }`}
        >
          {unit}
        </span>
      </div>
    </div>
  );
};
