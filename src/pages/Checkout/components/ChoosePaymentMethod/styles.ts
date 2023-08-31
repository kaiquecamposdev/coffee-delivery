import styled from 'styled-components'

export const ContainerChoosePaymentMethod = styled.div`
  display: flex;
  justify-self: stretch;
  gap: .75rem;

  & button {
    flex: 1;

    & input[type="radio"] {
      display: none;
  
      &:checked + label {
        transition: background .2s ease, box-shadow .2s ease;
  
        background: ${(props) => props.theme['purple-100']};
        box-shadow: 0 0 0 1px ${(props) => props.theme['purple-600']};
      }
    }
  }
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: start;

  flex: 1 0 0;

  user-select: none;
  border-radius: 0.375rem;
  padding: 1rem;
  gap: 0.75rem;
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;

  transition: background .2s ease;

  background: ${(props) => props.theme['gray-400']};
  box-shadow: ${(props) => props.theme['gray-600']};

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
  & img {
    width: 1rem;
  }
  & span {
    flex-wrap: nowrap;

    color: ${(props) => props.theme['gray-800']};
    font-size: 0.75rem;
    text-transform: uppercase;
  } 
`
