import { Input } from "./Input";

interface Props {
  styles?: string;
}

export const Form = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} bg-white px-6 py-8`}>
      <h1 className="text-2xl font-bold mb-2.5"> Mortgage Calculator </h1>
      <button className="underline text-Slate-700 mb-5 cursor-pointer"> Clear All </button>
      <div className="flex flex-col gap-6">
        <Input label="Mortage Amount" unit="CAD" position="left" />
        <Input label="Mortage Term" unit="years" />
        <Input label="Interest Rate" unit="%" />
      </div>
    </div>
  );
};
