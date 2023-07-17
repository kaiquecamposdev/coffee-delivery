import styled from 'styled-components'

export const CartButtonFullContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: ${(props) => props.theme['yellow-100']};

  padding: 0.375rem;
  border-radius: 0.375rem;

  &::after {
    display: flex;
    justify-content: center;
    align-items: center;

    content: '3';
    position: absolute;

    right: -0.52156rem;
    top: -0.5rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 62.5rem;

    font-size: 0.75rem;
    font-weight: bold;

    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['yellow-700']};
  }
`
