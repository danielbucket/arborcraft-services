import { styled } from 'styled-components';

export const StyledHome = styled.div`
  flex-grow: 1;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  scroll-snap-align: start;
	scroll-snap-stop: always;
  
  .text-content {
    color: var(--earth-forest);
    font-size: 4rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.2;
    text-align: center;
    padding: 1rem;
  }

`;