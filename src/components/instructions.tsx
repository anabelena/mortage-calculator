interface Props {
  styles?: string;
}

export const Instructions = ({ styles='' }: Props) => {
  return (
    <div className={`${styles}`}>Instructions</div>
  )
}