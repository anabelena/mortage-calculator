import { Input, Radio, Button } from "../components";

import ArrowImg from "../assets/images/icon-calculator.svg"

interface Props {
  styles?: string;
}

export const Form = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} bg-white px-6 md:p-12 py-8`}>
      <div className="md:flex md:justify-between md:items-center md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2.5 md:mb-0"> Mortgage Calculator </h1>
        <button className="underline text-Slate-700 mb-5 md:mb-0 cursor-pointer">Clear All</button>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <Input label="Mortage Amount" unit="CAD" position="left" />
        <div className="md:flex md:gap-5">
          <Input label="Mortage Term" unit="years" />
          <Input label="Interest Rate" unit="%" />
        </div>
      </div>

      <h2 className="text-Slate-700 mb-5 text-lg"> Mortgage Type </h2>
      <Radio label="Repayment" />
      <Radio label="Interest Only" />
      <Button 
      text="Calculate Repayments"
      imgUrl={ArrowImg}
     />
    </div>
  );
};
