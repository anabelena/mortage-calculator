import { Input, Radio, Button } from "../components";

import ArrowImg from "../assets/images/icon-calculator.svg"

interface Props {
  styles?: string;
}

export const Form = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} bg-white px-6 py-8`}>
      <h1 className="text-2xl font-bold mb-2.5"> Mortgage Calculator </h1>
      <button className="underline text-Slate-700 mb-5 cursor-pointer">
        {" "}
        Clear All{" "}
      </button>
      <div className="flex flex-col gap-6 mb-6">
        <Input label="Mortage Amount" unit="CAD" position="left" />
        <Input label="Mortage Term" unit="years" />
        <Input label="Interest Rate" unit="%" />
      </div>

      <h2 className="text-Slate-700 mb-3 text-lg"> Mortgage Type </h2>
      <Radio label="Repayment" />
      <Radio label="Interest Only" />
      <Button 
      text="Calculate Repayments"
      imgUrl={ArrowImg}
     />
    
    </div>
  );
};
