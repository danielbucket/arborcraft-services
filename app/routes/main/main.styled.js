import { styled } from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .header-container {
    height: 10rem;
  }

  .routes-container {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 0 0.25rem;
  }
`;