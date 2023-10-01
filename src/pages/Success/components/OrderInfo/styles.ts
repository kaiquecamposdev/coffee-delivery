import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 2.5rem;
  gap: 2rem;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.color};

    border-radius: 62.5rem;
    padding: 0.5rem;

    & > svg {
      width: 1rem;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    gap: 0.25rem;
  }

  & svg {
    width: 2rem;
  }
  & > div p {
    font-size: 1rem;

    & strong {
      font-weight: 700;
    }
  }
  & > div span {
    font-size: 1rem;
  }
`
