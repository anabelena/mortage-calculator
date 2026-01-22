import { useContext } from "react";
import { PaymentContext } from "../contexts/payment-context";

export const Payments = () => {
  const context = useContext(PaymentContext);

  return (
    <section className="bg-Slate-900 text-Slate-300 border-t-4 border-Lime rounded-lg p-8">
      <h3 className="mb-3"> Your monthly repayments </h3>
      <p className="text-Lime font-bold text-4xl mb-4">
        <span> CAD </span> {context.result.monthlyPayment.toFixed(2)}
      </p>
      <hr className="my-5" />
      <h3 className="mb-3"> Total you'll repay over the term</h3>
      <p className="font-bold text-2xl text-white">
        <span> CAD </span> {context.result.totalRepay.toFixed(2)}
      </p>
    </section>
  );
};
