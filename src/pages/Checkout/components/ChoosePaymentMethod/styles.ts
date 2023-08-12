import styled from 'styled-components'

interface ButtonAttributesType {
  ischecked: boolean
}

export const Button = styled.button<ButtonAttributesType>`
  display: flex;
  align-items: center;

  flex: 1 0 0;

  border-radius: 0.375rem;
  padding: 1rem;
  gap: 0.75rem;
  cursor: pointer;

  background: ${(props) =>
    props.ischecked ? props.theme['purple-100'] : props.theme['gray-400']};

  transition: background 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: ${(props) => props.theme['purple-100']};
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-700']};
    transform: scale(1.025);
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
