import { PaymentContext, type Results } from "./payment-context";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const PaymentContextProvider = ({ children }: Props) => {
  const [result, setResult] = useState<Results>({
    totalRepay: 0,
    monthlyPayment: 0,
  });

  return (
    <PaymentContext.Provider value={{ result, setResult }}>
      {children}
    </PaymentContext.Provider>
  );
};
