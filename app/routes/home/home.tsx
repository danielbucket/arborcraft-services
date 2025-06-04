import { StyledHome, SectionContainer, StyledLink } from './home.styled.js';
import { homeDataStub } from './home.stub.js';

export default function Home() {
  function renderSections() {
    return homeDataStub.map((section, i) => {
      return (
      <SectionContainer key={i} src={section.image} alt={section.alt}>
        <div className="text-content">
          <div className="content-title">
            <p>{section?.title}</p>
          </div>
          <div className="content-body">
            <p>{section.description}</p>
            <p>{section.additionalInfo}</p>
          </div>
        </div>
        {
          section.buttonText
          ? <StyledLink to={section.link}>{section.buttonText}</StyledLink>
          : null
        }
      </SectionContainer>
    )});
  };
  
  const renderedSections = renderSections();

  return (
    <StyledHome>
      {renderedSections}
    </StyledHome>
  );
};