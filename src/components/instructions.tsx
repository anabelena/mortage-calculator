import IlustrationEmpty from "../assets/images/illustration-empty.svg"
interface Props {
  styles?: string;
}

export const Instructions = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} text-center bg-Slate-900 text-white px-6 py-8`}>
      <img 
      src={IlustrationEmpty} 
      alt="illustration-empty" 
      className="m-auto mb-4"/>
      <h2 className=" text-2xl font-bold mb-4 "> Results shown here </h2>
      <p className="text-slate-300"> Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  )
}