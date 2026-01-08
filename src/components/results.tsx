import { Payments } from "./payments";

interface Props {
  styles?: string;
}

export const Results = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles}bg-Slate-900/90 md:p-12 text-white px-6 py-8 lg:h-full lg:rounded-bl-[80px]`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 "> Your results</h2>
      <p className="text-slate-300 mb-8 md:text-lg">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <Payments />
    </div>
  );
};
