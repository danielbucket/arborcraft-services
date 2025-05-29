import type { Route } from "./+types/root";
import Header from "../../components/header/header.tsx";
import Main from "../../components/main/main.tsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ArborCraft Services" },
    { name: "description", content: "Welcome to ArborCraft Services!" },
  ];
};

export default function Root() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};
