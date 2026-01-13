import { Form, Instructions, Results } from "../components";

export const Calculator = () => {
  return (
    <div
      className={` md:max-w-[688px] md:my-10 md:rounded-2xl   overflow-hidden lg:flex lg:max-w-[1008px]`}
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
