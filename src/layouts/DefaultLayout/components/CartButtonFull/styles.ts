import styled from 'styled-components'

export const CartButtonFullContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: ${(props) => props.theme['yellow-100']};
  cursor: pointer;

  height: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
`

export const CounterItems = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 62.5rem;

  position: absolute;
  right: -0.52156rem;
  top: -0.5rem;

  font-size: 0.75rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-700']};
`
