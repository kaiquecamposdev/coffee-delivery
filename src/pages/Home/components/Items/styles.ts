import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  & i {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 62.5rem;

    background: ${(props) => props.color};
  }
  & span {
    font-size: clamp(1rem, 0.9643rem + 0.1786vw, 1.25rem);
    color: ${(props) => props.theme['gray-700']};
  }
`
