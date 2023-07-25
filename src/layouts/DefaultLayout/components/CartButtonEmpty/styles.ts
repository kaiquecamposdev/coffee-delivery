import styled from 'styled-components'

export const CartButtonEmptyContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: ${(props) => props.theme['yellow-100']};

  padding: 0.5rem;
  border-radius: 0.375rem;
`
