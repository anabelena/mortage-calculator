export type MortgageType = "repayment" | "interest";

interface MortgageResult {
  monthlyPayment: number;
  totalRepay: number;
}

export function calculateMortgage(
  amount: number,
  years: number,
  interestRate: number,
  type: MortgageType,
): MortgageResult {
  
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = years * 12;

  if (type === "repayment") {
    // Fórmula de amortización
    const monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalRepay = monthlyPayment * totalPayments;

    return {
      monthlyPayment,
      totalRepay,
    };
  }

  if (type === "interest") {
    const monthlyPayment = amount * monthlyRate;
    const totalRepay = monthlyPayment * totalPayments + amount;

    return {
      monthlyPayment,
      totalRepay,
    };
  }

  throw new Error("Mortgage type not valid");
}
