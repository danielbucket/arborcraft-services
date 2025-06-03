import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--earth-moss);
  height: 14rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem;

    img {
      width: 100%;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98%;
    height: 5rem;
    margin: 1rem auto 0 auto;
    border: 0.15rem solid var(--earth-forest);
    border-radius: 0.5rem;

    ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      padding: 0;

      li {
        a {
          color: var(--earth-forest);
          text-decoration: none;
          font-size: 1.75rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;