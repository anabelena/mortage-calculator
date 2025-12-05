import { Form } from "./form";
import { Instructions } from "./instructions";
import { Results } from "./results";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles='' }: Props) => {
  return (
    <div className={`${styles}`}> 
    
      <Form/>
      <div>
            <Results/>
            <Instructions/>
      </div>
    
    </div>
  )
}