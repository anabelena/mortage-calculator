import { Input, Radio, Button } from "../components";
import ArrowImg from "../assets/images/icon-calculator.svg";
import { useForm } from "react-hook-form";

interface Inputs {
  mortgageAmount: number;
  mortgageTerm: number;
  interestRate: number;
  mortgageType: "repayment" | "interest"; 
}

export const Form = (styles:string) => {
  // register => conecta inputs al formulario
  // handleSubmit => controla submit y evita preventDefault manual
  // errors => contiene los errores de validacion
  const { register,handleSubmit, formState:{errors} } = useForm<Inputs>();

  const sendForm = ()=> { 
    console.log("Form was sended!")
  }

  return (
    <form 
      onSubmit={handleSubmit(sendForm)} 
      className={ `${styles} bg-white px-6 md:p-12 py-8`}>
      <div className="md:flex md:justify-between md:items-center md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2.5 md:mb-0">
          Mortgage Calculator
        </h1>
        <button className="underline text-Slate-700 mb-5 md:mb-0 cursor-pointer">
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <Input
          unit="CAD"
          position="left"
          label="Mortage Amount"
          error={errors.mortgageAmount?.type === 'required'}
          {...register("mortgageAmount", {
            required: true,
            valueAsNumber: true,
          })}
        />

        <div className="md:flex md:gap-5">
          <Input
            label="Mortage Term"
            unit="years"
            error={errors.mortgageTerm?.type === 'required'}
            {...register("mortgageTerm", {
              required: true,
              valueAsNumber: true,
            })}
          />
          <Input
            label="Interest Rate"
            unit="%"
            error={errors.interestRate?.type === 'required'}
            {...register("interestRate", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
      </div>

      <h2 className="text-Slate-700 mb-5 text-lg"> Mortgage Type </h2>
      <Radio 
      label="Repayment" 
      {...register("mortgageType",{required:true})}
      />
      <Radio 
      label="Interest Only" 
      {...register("mortgageType",{required:true})}
      />
      {errors.mortgageType && <p className="text-red-600 "> This field is required</p>}
      <Button text="Calculate Repayments" imgUrl={ArrowImg} />
    </form>
  );
};
