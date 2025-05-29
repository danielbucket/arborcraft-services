export default function About() {
  return (
    <main>
      <h1>About ArborCraft Services</h1>
      <p>
        ArborCraft Services is dedicated to providing top-notch tree care and
        landscaping solutions. Our team of experts is committed to ensuring the
        health and beauty of your trees and outdoor spaces. With years of
        experience, we offer a range of services including tree trimming,
        removal, and landscaping design. Our goal is to enhance the natural
        beauty of your property while ensuring the safety and longevity of your
        trees. Whether you need routine maintenance or a complete landscape
        overhaul, ArborCraft Services is here to help. Contact us today to learn
        more about our services and how we can assist you in achieving your
        landscaping goals.
      </p>
      <p>
        At ArborCraft Services, we believe in sustainable practices and
        environmentally friendly solutions. We use the latest techniques and
        equipment to ensure that our work is efficient and minimally invasive.
        Our team is trained in the best practices for tree care, ensuring that
        your trees remain healthy and vibrant for years to come. We also
        prioritize customer satisfaction, working closely with you to understand
        your needs and preferences. From the initial consultation to the final
        touches, we are committed to delivering exceptional service and results.
      </p>
      <p>
        Whether you are a homeowner looking to enhance your garden or a business
        owner needing regular tree maintenance, ArborCraft Services has the
        expertise and dedication to meet your needs. We take pride in our work
        and strive to exceed your expectations with every project. Our team is
        passionate about what we do, and it shows in the quality of our work.
        Let us help you create a beautiful and healthy outdoor space that you
        can enjoy for years to come. Contact ArborCraft Services today to
        schedule a consultation and discover how we can transform your property.
      </p>
    </main>
  );
};

import type { Route } from "./+types/about";
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