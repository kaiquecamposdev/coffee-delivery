import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 10rem;

  box-shadow: 1px 1px 10px 0 ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-100']};
`
export const FooterContent = styled.div`
  width: 100%;
  max-width: 72rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1.5rem;

    & > p {
      text-align: center;
      font-size: clamp(0.8rem, 0.7714rem + 0.1429vw, 1rem);
      & > a {
        text-decoration: none;
        transition: text-decoration 0.2s ease, color 0.2s ease;

        &:hover {
          text-decoration: underline;
          color: ${(props) => props.theme['gray-800']};
        }
      }
    }
  }
`
export const OptionsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    display: flex;
    align-items: center;

    list-style: none;

    & li {
      & a {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${(props) => props.theme['gray-300']};

        padding: 0.5rem;
        border-radius: 0.375rem;
      }
    }
  }
`
export const LocaleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-100']};

  & span {
    color: ${(props) => props.theme['purple-700']};
  }
`
