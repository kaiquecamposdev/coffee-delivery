import { ContainerChoosePaymentMethod, Label } from './styles.ts'
import { useContext } from 'react'
import { CoffeListContext } from '../../../../contexts/CoffeListContext.tsx'

export function ChoosePaymentMethod() {
  const { paymentMethods } = useContext(CoffeListContext);

  return (
    <ContainerChoosePaymentMethod>
      {paymentMethods.map(({ name, method, id }) => {
        return (
        <button key={name} type='button'> 
          <input role="button"tabIndex={0} type="radio" name="radiosPaymentMethods" id={id} />
          <Label
            htmlFor={id}
          >
            <img src={method} alt="" />
            {name}
          </Label>
        </button>
        )
      })}
    </ContainerChoosePaymentMethod>
  )
}
