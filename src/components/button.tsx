interface Props {
  styles?: string;
  text:string;
  imgUrl?:string;
}

export const Button = ({ styles='',text,imgUrl}: Props) => {
  return (
    <button 
    type="submit"
    className={`${styles} bg-Lime h-[54px] rounded-full md:w-[400px] w-full hover:bg-Lime/50 cursor-pointer my-6 flex items-center justify-center gap-3`}>
      <img src={imgUrl} alt="" />
      <span>{text}</span>
      </button>
  )
}