interface Props {
  styles?: string;
}

export const Results = ({ styles='' }: Props) => {
  return (
    <div className={`${styles}`}>Results</div>
  )
}