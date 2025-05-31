import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  width: 100vw;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4CAF50;
  color: white;

  div {
    text-align: center;

    h1 {
      margin: 0;
      font-size: 2.5rem;
    }

    p {
      margin: 0.5rem 0;
      font-size: 1.2rem;
    }
  }

  nav {
    margin-top: 1rem;

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 1.5rem;

      li {
        a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
    
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    nav ul {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;