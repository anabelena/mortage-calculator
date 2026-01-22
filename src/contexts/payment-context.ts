import { createContext } from "react";

export interface Results {
  monthlyPayment: number;
  totalRepay: number;
}

export interface PaymentContextType {
  result: Results;
  setResult: (result: Results) => void;
}

export const PaymentContext = createContext<PaymentContextType>({
  result: {
    monthlyPayment: 0,
    totalRepay: 0,
  },
  setResult: () => {},
});
