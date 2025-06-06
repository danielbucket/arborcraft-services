import { styled } from 'styled-components';
import { Link } from 'react-router';

export const StyledHome = styled.div`
  flex-grow: 1;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const SectionContainer = styled.div`
  height: 100%;
  width: 100%;
  letter-spacing: 0.25rem;
  
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  scroll-snap-align: start;
	scroll-snap-stop: always;

  .opacity-layer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.25);

    .content-body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      color: var(--earth-sand);
      font-family: 'Roboto', sans-serif;
  
      p:first-child {
        font-size: 3.25rem;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        line-height: 1.2;
        text-align: center;
        padding: 1rem;
      }
  
      p:last-child {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        font-size: 2.75rem;
        text-align: center;
        padding: 0 1rem;
      }
    }

    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15rem;
      width: 100%;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 65%;
  background-color: var(--earth-forest);
  color: var(--earth-sand);
  font-size: 2.25rem;
  letter-spacing: 0.25rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--earth-moss);
    transition: background-color 0.3s ease-in-out;
  }
`;