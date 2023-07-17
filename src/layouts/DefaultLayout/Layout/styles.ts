import styled from 'styled-components'

export const LayoutContainer = styled.header`
  display: flex;
  justify-content: space-between;

  height: 6.5rem;
  padding: 2rem 10rem;
`
export const OptionsContainer = styled.div`
  display: inline-flex;
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
`
