import { StyledAbout } from './about.styled.js';

export default function About() {
  return (
    <StyledAbout>
      <h1>About ArborCraft Services</h1>
      <p>
        I'm dedicated to providing top-notch home maintenance services to keep your property looking its best. With years of experience in the industry, I take pride in delivering quality workmanship and exceptional customer service.
      </p>
    </StyledAbout>
  );
};

import type { Route } from "./+types/about.js";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About ArborCraft Services" },
    {
      name: "description",
      content: "Learn more about ArborCraft Services and our commitment to quality tree care and landscaping.",
    },
  ];
};

export function loader({}: Route.LoaderArgs) {
  return {
    title: "About ArborCraft Services",
    description: "Learn more about ArborCraft Services and our commitment to quality tree care and landscaping.",
  };
};

export function action({ request }: Route.ActionArgs) {
  return new Response("This is a placeholder for the About page action.");
};

export function errorBoundary({ error }: Route.ErrorBoundaryProps) {
  console.error("Error in About route:", error);
  return (
    <main>
      <h1>Error</h1>
      <p>Something went wrong while loading the About page.</p>
      <p>{error.message}</p>
    </main>
  );
};