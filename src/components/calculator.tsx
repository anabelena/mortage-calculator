import { Form, Instructions, Results } from "../components";

import s from "./calculator.module.css";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles = "" }: Props) => {


  return (
    <div className={` ${styles} w-[375px]`}>
      {/* Mortage Calculator Form */}
      <Form />
      {/* Results panel */}
      <div className={s.fuente}>
        <Results />
        <Instructions />
      </div>
    </div>
  );
};
