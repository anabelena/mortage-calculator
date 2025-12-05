interface Props {
  styles?: string;
}

export const Form = ({ styles='' }: Props) => {
  return (
    <div className={`${styles}`}>Form</div>
  )
}