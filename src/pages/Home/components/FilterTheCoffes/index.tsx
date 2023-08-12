import { useContext } from 'react'
import { FilterCoffeOptions } from './styles'
import { CoffeListContext } from '../../../../contexts/CoffeListContext'

export function FilterTheCoffes() {
  const { onFilterTheItems } = useContext(CoffeListContext)
  const options = [
    'tradicional',
    'com leite',
    'gelado',
    'especial',
    'alcoólico',
  ]
  function handleFilterTheItems(option: string) {
    onFilterTheItems(option)
  }

  return (
    <FilterCoffeOptions>
      {options.map((option) => {
        return (
          <button onClick={() => handleFilterTheItems(option)} key={option}>
            {option}
          </button>
        )
      })}
    </FilterCoffeOptions>
  )
}
