import { Form, Instructions, Results } from "../components";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles = "" }: Props) => {
  return (
    <div
      className={` ${styles} md:max-w-[688px] md:my-10 md:rounded-2xl md:border-Slate-900 md:border overflow-hidden lg:flex lg:max-w-[1008px]`}
    >
      {/* Mortage Calculator Form */}
      <Form styles="lg:flex-1" />
      {/* Results panel */}
      <div className="lg:flex-1 bg-white">
        {/* <Instructions /> */}
        <Results />
      </div>
      
    </div>
  );
};
