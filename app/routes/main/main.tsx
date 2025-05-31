import type { Route } from "./+types/home";
import { Outlet } from 'react-router';
import Header from "./components/Header/header";
import { StyledMain } from "./main.styled.js";

// the meta functidon is used to set the page title and description
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
      <Header />
      <Outlet />
    </StyledMain>
  );
};
