import type { Route } from "./+types/main";
import { Outlet } from 'react-router';
import Header from "./components/Header/header";
import { StyledMain } from "./main.styled.js";

// the meta function is used to set the page title and description
// it is called by the framework when the page is rendered
// it returns an array of objects with the title and description
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ArborCraft Services" },
    { name: "description", content: "Welcome to ArborCraft Services!" },
  ];
};

export default function Main() {
  return (
    <StyledMain>
      <div className="header-container">
        <Header />
      </div>
      <div className="routes-container">
        <Outlet />
      </div>
    </StyledMain>
  );
};
