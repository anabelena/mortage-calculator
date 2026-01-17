import type {FieldError}  from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  unit?: string;
  position?: "right" | "left"; // right by default
  error?: FieldError;
}

export const Input = ({
  label,
  unit,
  position = "right",
  error,
  ...props
}: Props) => {
  return (
    <div className="md:w-full">
      <label
        className="inline-block text-lg mb-3 text-Slate-700"
        htmlFor={label}
      >
        {label}
      </label>
      
      <div className="relative ">
        <input
          {...props}
          id={label}
          type="number"
          className={`outline ${position === "left" ? "pl-17" : "pl-4"} ${
            error ? "outline-red-600" : "outline-Slate-500"
          } w-full h-[45px] font-bold rounded-sm  cursor-pointer focus:outline-Lime peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
        {/* add class to change up and dow buttons on input as numeric */}
        <span
          className={`${error ? 'bg-red-700/80 text-white' : 'bg-slate-100 text-slate-700'} peer-focus:bg-Lime absolute top-0 h-full px-2.5 grid place-content-center 
          ${
            position === "left" ? "left-0 rounded-l-sm" : "right-0 rounded-r-sm"
          }`}
        >
          {unit}
        </span>
      </div>
          {error && <p className="text-sm text-red-600 mt-2"> {error.message} </p>}
    </div>
  );
};
