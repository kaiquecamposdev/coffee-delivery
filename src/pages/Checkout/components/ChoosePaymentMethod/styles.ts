import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;

  flex: 1 0 0;

  border-radius: 0.375rem;
  padding: 1rem;
  gap: 0.75rem;
  cursor: pointer;

  background: ${(props) =>
    props['aria-checked'] ? props.theme['purple-100'] : props.theme['gray-400']};

  transition: background .2s ease;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
  & i {
    display: flex;
    align-items: center;

    & img {
      width: 1rem;
    }
  }
  & span {
    flex-wrap: nowrap;

    color: ${(props) => props.theme['gray-800']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
