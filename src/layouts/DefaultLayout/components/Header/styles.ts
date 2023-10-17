import styled from 'styled-components'

export const LayoutContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 6rem;

  background: ${(props) => props.theme['gray-100']};
`
export const LayoutContent = styled.div`
  width: 100%;
  max-width: 72rem;

  & > div {
    display: flex;
    justify-content: space-between;

    padding: 0 1.5rem;
  }
`
export const OptionsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`
export const LocaleContainer = styled.div`
  background: ${(props) => props.theme['purple-100']};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: 0.25rem;

  & span {
    color: ${(props) => props.theme['purple-700']};
  }
`
