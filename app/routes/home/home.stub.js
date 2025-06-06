import landingPageImage from './images/designer02.jpeg';
import servicesImage from './images/techdocs02.jpeg';
import contactImage from './images/designer03.jpeg';
import aboutImage from './images/techdocs01.jpeg';

export const homeDataStub = [
  {
    title: "Home",
    // No buttonText for the landing page
    buttonText: null,
    description: "ArborCraft Services, your go-to destination for all things.",
    additionalInfo: "Discover our services, explore our projects, and get in touch with us.",
    image: landingPageImage,
    alt: "ArborCraft Services Landing Page",
    link: "/"
  },
  {
    title: "Services",
    buttonText: "Learn More",
    description: "Explore our wide range of services designed to meet all your needs.",
    additionalInfo: "From design to implementation, we cover all aspects of your needs.",
    image: servicesImage,
    alt: "ArborCraft Services",
    link: "/services"
  },
  {
    title: "Contact",
    buttonText: "Get in Touch",
    description: "Have questions or need assistance? We're here to help all your needs.",
    additionalInfo: "Reach out to us for any inquiries or support.",
    image: contactImage,
    alt: "ArborCraft Contact",
    link: "/contact"
  },
  {
    title: "About",
    buttonText: "Discover More",
    description: "Learn more about ArborCraft and our commitment to quality and service for all your needs.",
    additionalInfo: "We are dedicated to providing the best solutions for your needs.",
    image: aboutImage,
    alt: "ArborCraft About",
    link: "/about"
  }
];