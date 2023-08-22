import { styled } from 'styled-components'

export const ContainerButtons = styled.div`
  display: flex;

  gap: 0.5rem;
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;

  padding: 0.5rem 0.25rem;

  & > div {
    display: flex;
    gap: 1.25rem;

    & img {
      display: block;

      width: 4rem;
    }
    & > div {
      display: flex;
      flex-direction: column;

      gap: .5rem;
    }
  }
  & > span {
    font-weight: 700;
  }
`
export const RemoveButtonContainer = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: .25rem;

  background: ${props => props.theme['gray-400']};
  transition: background .2s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['gray-500']};
  }
  & span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${props => props.theme['gray-700']};
  }
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;

  margin: 1.5rem 0;

  background: ${props => props.theme['gray-500']};
`