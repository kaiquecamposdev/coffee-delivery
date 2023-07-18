import { Express } from './assets/Express'
import { ExpressAmerican } from './assets/ExpressAmerican'
import { ExpressCream } from './assets/ExpressCream'
import { ExpressIce } from './assets/ExpressIce' 
import { Havain } from './assets/Havain'
import {
  ButtonShoppingCart,
  BuyContainer,
  CardCoffe,
  CardContainer,
  CounterContainer,
} from './styles'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'

export function CoffeList() {
  interface CoffeListProps {
    image: string
    options: {
      tradicional?: 'tradicional'
      gelado?: 'gelado'
      comLeite?: 'com leite'
      especial?: 'especial'
      alcoólico?: 'alcoólico'
    }
    type: string
    description: string
  }

  const [coffeList, setCoffeList] = useState([
    {
      image: <Express />,
      options: {
        tradicional: 'tradicional',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: AmericanExpress,
      options: {
        tradicional: 'tradicional',
      },
      type: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      image: ExpressCream,
      options: {
        tradicional: 'tradicional',
      },
      type: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
    },
    {
      image: ,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: Express,
      options: {
        tradicional: 'tradicional',
        gelado: 'gelado',
        comLeite: 'com leite',
        especial: 'especial',
        alcoólico: 'alcoólico',
      },
      type: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
  ])

  return (
    <CardContainer>
      {coffeList.map((coffe) => {
        return (
          <CardCoffe key={coffe.type}>
            <img src={coffe.image} alt="" />
            <span>{coffe.options.tradicional}</span>
            <h3>{coffe.type}</h3>
            <p>{coffe.description}</p>
            <BuyContainer>
              <div>
                <p>
                  <span>R$</span> 9,90
                </p>
              </div>
              <div>
                <CounterContainer>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </CounterContainer>
                <ButtonShoppingCart>
                  <ShoppingCart weight="fill" size={22} color="white" />
                </ButtonShoppingCart>
              </div>
            </BuyContainer>
          </CardCoffe>
        )
      })}
    </CardContainer>
  )
}
