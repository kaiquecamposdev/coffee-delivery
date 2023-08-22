import { Button } from './styles.ts'
import { useContext } from 'react'
import { CoffeListContext } from '../../../../contexts/CoffeListContext.tsx'

export function ChoosePaymentMethod() {
  const { onSelectChecked, paymentMethods } = useContext(CoffeListContext)

  function handleSelectChecked(nameTheObjectForChecked: string) {
    onSelectChecked(nameTheObjectForChecked)
  }

  return (
    <>
      {paymentMethods.map(({ name, method, checked }) => {
        return (
          <Button
            aria-checked={checked}
            onClick={() => handleSelectChecked(name)}
            key={name}
          >
            {JSON.stringify(console.table(checked))}
            <i>
              <img src={method} alt="" />
            </i>
            <span>{name}</span>
          </Button>
        )
      })}
    </>
  )
}
