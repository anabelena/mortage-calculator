interface Props {
  label: string;
}

export const Radio = ({ label }: Props) => {
  const id = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <label
      htmlFor={id}
      className="font-bold text-xl text-Slate-900 border border-Slate-500 rounded-sm h-[46px]  flex items-center gap-2 px-2 mb-3 cursor-pointer hover:border-Lime hover:bg-Lime/10 has-checked:bg-Lime/10 has-checked:border-Lime"
    >
      <div className="relative ">
        <input
          name="mortgageType"
          type="radio"
          id={id}
          className="peer appearance-none size-5 border checked:border-Lime rounded-full "
        />
        <span className="size-3 absolute bg-Lime rounded-full top-1.5 left-1 opacity-0 peer-checked:opacity-100"></span>
      </div>
      <span>{label}</span>
    </label>
  );
};
