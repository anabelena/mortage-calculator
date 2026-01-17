import { Input, Radio, Button } from "../components";
import ArrowImg from "../assets/images/icon-calculator.svg";
import { useForm } from "react-hook-form";

// Define the input types in the form
interface Inputs {
  mortgageAmount: number;
  mortgageTerm: number;
  interestRate: number;
  mortgageType: "repayment" | "interest";
}

const MAX_MORTGAGE_TERM: number = 25;
const MAX_INTEREST_RATE: number = 5;

export const Form = (styles: string) => {
  // register: (fn) conecta inputs al formulario
  // handleSubmit: (fn) controla submit y evita preventDefault manual
  // errors: devuelve errores de validacion
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onSubmit", reValidateMode: "onChange" });

  const sendForm = () => {
    console.log("Form was sended!");
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
        <button className="underline text-Slate-700 mb-5 md:mb-0 cursor-pointer">
          Clear All
        </button>
      </div>
      {/* NUMERIC INPUTS */}
      <div className="flex flex-col gap-6 mb-6">
        <Input
          label="Mortage Amount"
          unit="CAD"
          position="left"
          error={errors.mortgageAmount}
          {...register("mortgageAmount", {
            required: true,
            valueAsNumber: true,
          })}
        />

        <div className="md:flex md:gap-5">
          <Input
            label="Mortage Term"
            unit="years"
            error={errors.mortgageTerm}
            {...register("mortgageTerm", {
              required: true,
              valueAsNumber: true,
              validate: (value) =>
                value > MAX_MORTGAGE_TERM
                  ? 'Mortgage Term: "Max 25 years"'
                  : true,
            })}
          />
          <Input
            label="Interest Rate"
            unit="%"
            error={errors.interestRate}
            {...register("interestRate", {
              required: true,
              validate: (value) =>
                value > MAX_INTEREST_RATE ? 'Interest Rate: "Max 5%"' : true,
              valueAsNumber: true,
            })}
          />
        </div>
      </div>

      {/* RADIO INPUTS */}
      <h2 className="text-Slate-700 mb-5 text-lg"> Mortgage Type </h2>
      <Radio
        label="Repayment"
        {...register("mortgageType", { required: true })}
      />
      <Radio
        label="Interest Only"
        {...register("mortgageType", { required: true })}
      />
      {errors.mortgageType && (
        <p className="text-red-600 mt-2 text-sm"> Field is required </p>
      )}
      <Button text="Calculate Repayments" imgUrl={ArrowImg} />
    </form>
  );
};
