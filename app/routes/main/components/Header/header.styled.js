import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--earth-moss);
  padding-bottom: 1rem;
    
  img {
    padding: 0 1rem;
    width: 100%;
  }

  nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 98%;
    margin: 1rem auto 0 auto;
    border: 0.15rem solid var(--earth-forest);
    border-radius: 0.5rem;

    ul {
      display: flex;
      gap: 1.5rem;

      li {
        a {
          color: var(--earth-forest);
          text-decoration: none;
          font-size: 2.2rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;