import { Input, Radio, Button } from "../components";
import ArrowImg from "../assets/images/icon-calculator.svg";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  calculateMortgage,
  type MortgageType,
} from "../utils/calculateMortgage";
import { useContext } from "react";
import { PaymentContext } from "../contexts/payment-context";

interface Props {
  styles?: string;
}

// Define the input types in the form
export interface Inputs {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  mortgageType: MortgageType;
}

// CONSTANTES
const MAX_MORTGAGE_TERM: number = 25;
const MAX_INTEREST_RATE: number = 5;

export const Form = ({ styles }: Props) => {
  const context = useContext(PaymentContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "interest",
    },
  });

  const values: Inputs = watch();

  //

  // register:  conecta inputs al formulario
  // handleSubmit: (fn) controla submit y evita preventDefault manual
  // errors: devuelve errores de validacion
  // reset(): limpia el estado de todos los inputs en RHF

  const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    const mortgageAmount = Number(data.mortgageAmount);
    const mortgageTerm = Number(data.mortgageTerm);
    const interestRate = Number(data.interestRate);
    const mortgageType = data.mortgageType;
    // const { mortgageAmount, mortgageTerm, interestRate, mortgageType } = data;

    console.log(
      "mortgageAmount",
      mortgageAmount,
      "mortgageTerm",
      mortgageTerm,
      "interestrate",
      interestRate,
      "mortgagetype",
      mortgageType,
    );

    // Bloquear cálculo si algún input está vacío o inválido
    // if (!mortgageAmount || !mortgageTerm || !interestRate) return;

    const { monthlyPayment, totalRepay } = calculateMortgage(
      mortgageAmount,
      mortgageTerm,
      interestRate,
      mortgageType,
    );

    context.setResult({
      monthlyPayment,
      totalRepay,
    });
  };

  const clearAll = () => {
    reset({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "interest", // o repayment
    });
    console.log("limpiando");
    context.setResult({
      monthlyPayment: 0,
      totalRepay: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(sendForm)}
      className={`${styles} bg-white px-6 md:p-12 py-8`}
    >
      {/* FORM TITLE */}
      <div className="md:flex md:justify-between md:items-center md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2.5 md:mb-0">
          Mortgage Calculator
        </h1>
        <button
          type="button"
          onClick={clearAll}
          className="underline text-Slate-700 mb-5 md:mb-0 cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/*  INPUTS */}
      <div className="flex flex-col gap-6 mb-6">
        <Input
          label="Mortage Amount"
          unit="CAD"
          position="left"
          error={errors.mortgageAmount}
          {...register("mortgageAmount", {
            required: true,
            // valueAsNumber: true,
          })}
          value={values.mortgageAmount} // <- sincroniza con RHF
        />

        <div className="md:flex md:gap-5">
          <Input
            label="Mortage Term"
            unit="years"
            error={errors.mortgageTerm}
            {...register("mortgageTerm", {
              required: true,
              // valueAsNumber: true,
              validate: (value) =>
                Number(value) > MAX_MORTGAGE_TERM
                  ? 'Mortgage Term: "Max 25 years"'
                  : true,
            })}
            value={values.mortgageTerm}
          />
          <Input
            label="Interest Rate"
            unit="%"
            error={errors.interestRate}
            {...register("interestRate", {
              required: true,
              min: 0.1,
              validate: (value) =>
                Number(value) >= MAX_INTEREST_RATE
                  ? 'Interest Rate: "Max 5%"'
                  : true,
              // valueAsNumber: true,
            })}
            value={values.interestRate}
          />
        </div>
      </div>

      {/* RADIO INPUTS */}
      <h2 className="text-Slate-700 mb-5 text-lg"> Mortgage Type </h2>
      {/* radio share name so only can be selected */}
      <Radio
        label="Repayment"
        value="repayment"
        {...register("mortgageType", { required: true })}
      />
      <Radio
        label="Interest Only"
        value="interest"
        {...register("mortgageType", { required: true })}
      />
      {errors.mortgageType && (
        <p className="text-red-600 mt-2 text-sm"> Field is required </p>
      )}
      <Button text="Calculate Repayments" imgUrl={ArrowImg} />
    </form>
  );
};
