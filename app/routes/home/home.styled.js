import { styled } from 'styled-components';
import { Link } from 'react-router';

export const StyledHome = styled.div`
  flex-grow: 1;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  letter-spacing: 0.25rem;

  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  scroll-snap-align: start;
	scroll-snap-stop: always;
  
  .text-content {
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.5);

    p:first-child {
      color: var(--earth-forest);
      font-size: 4rem;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      line-height: 1.2;
      text-align: center;
      padding: 1rem;
      // height: 6rem;
    }

    p:nth-child(2) {
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      font-size: 2.75rem;
      text-align: center;
      padding: 0 1rem;
    }

    p:last-child {
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      font-size: 2.25rem;
      text-align: center;
      padding: 0 1rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  background-color: var(--earth-forest);
  color: var(--earth-sand);
  font-size: 2.25rem;
  letter-spacing: 0.25rem;

  border-radius: 0.5rem;
  cursor: pointer;

  height: 4rem;
  width: 85%;
  align-self: center;
  margin-bottom: 4rem;

  &:hover {
    background-color: var(--earth-moss);
    transition: background-color 0.3s ease-in-out;
  }
`;