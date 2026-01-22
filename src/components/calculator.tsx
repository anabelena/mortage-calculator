import { Form, Results, Instructions } from "../components";
import { useContext } from "react";
import { PaymentContext } from "../contexts/payment-context";

export const Calculator = () => {
  const context = useContext(PaymentContext);

  return (
    <section
      className={` md:max-w-[688px] md:my-10 md:rounded-2xl   overflow-hidden lg:flex lg:max-w-[1008px]`}
    >
      {/* Mortage Calculator Form */}
      <Form styles="lg:flex-1" />
      {/* Results panel */}
      <div className="lg:flex-1 bg-white">
        {context.result.monthlyPayment === 0 ? <Instructions /> : <Results />}
      </div>
    </section>
  );
};
