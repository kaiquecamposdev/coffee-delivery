import styled from 'styled-components'

export const FilterCoffeOptions = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['yellow-600']};
    background: transparent;

    padding: 0.375rem 0.75rem;
    border-radius: 6.25rem;
    border: 1px solid ${(props) => props.theme['yellow-600']};

    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
  }
`
