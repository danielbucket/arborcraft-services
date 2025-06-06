import { StyledHome, SectionContainer, StyledLink } from './home.styled.js';
import { homeDataStub } from './home.stub.js';

export default function Home() {
  function renderSections() {
    return homeDataStub.map((section, i) => {
      return (
        <SectionContainer key={i} src={section.image} alt={section.alt}>
          <div className="opacity-layer">
            <div className="content-body">
              <p>{section.description}</p>
              <p>{section.additionalInfo}</p>
            </div>
            <div className="btn-container">
              {
                !section.buttonText || !section.link
                ? null
                : <StyledLink to={section.link}>{section.buttonText}</StyledLink>
              }
            </div>
          </div>
        </SectionContainer>
      );
    });
  };
  
  const renderedSections = renderSections();

  return (
    <StyledHome>
      {renderedSections}
    </StyledHome>
  );
};