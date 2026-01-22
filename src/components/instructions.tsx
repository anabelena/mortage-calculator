import IlustrationEmpty from "../assets/images/illustration-empty.svg";
interface Props {
  styles?: string;
}

export const Instructions = ({ styles = "" }: Props) => {
  return (
    <section
      className={`${styles} text-center bg-Slate-900/90 md:p-12 text-white px-6 py-8 h-full lg:rounded-bl-[80px]`}
    >
      <img
        src={IlustrationEmpty}
        alt="illustration-empty"
        className="m-auto mb-5"
      />
      <h2 className="text-2xl lg:text-3xl font-bold mb-5 ">
        {" "}
        Results shown here{" "}
      </h2>
      <p className="text-slate-300 md:text-lg">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
};
