import { StyledHome, SectionContainer } from './home.styled.js';
import { homeDataStub } from './home.stub.js';

export default function Home() {
  
  function renderSections() {
    return homeDataStub.map((section, i) => (
      <SectionContainer key={i} src={section.image} alt={section.alt}>
        <div className="text-content">
          <p>{section.title}</p>
        </div>
      </SectionContainer>
    ));
  };
  
  const renderedSections = renderSections();

  return (
    <StyledHome>
      {renderedSections}
    </StyledHome>
  );
};