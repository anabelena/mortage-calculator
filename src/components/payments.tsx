interface Props {
  styles?: string;
}

export const Payments = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles}`}>
      <div className="bg-Slate-900 text-Slate-300 border-t-4 border-Lime rounded-lg px-5 py-6">
        <h3  className="mb-3"> Your monthly repayments </h3>
        <p className="text-Lime font-bold text-4xl mb-4">
          <span> CAD </span> 1,250.00{" "}
        </p>
        <hr className="mb-4" />
        <h3 className="mb-3"> Total you'll repay over the term</h3>
        <p className="font-bold text-2xl text-white">
          <span> CAD </span> 539,322,94
        </p>
      </div>
    </div>
  );
};
