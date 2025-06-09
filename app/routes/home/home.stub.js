import landingPageImage from './images/designer02.jpeg';
import servicesImage from './images/techdocs02.jpeg';
import contactImage from './images/designer03.jpeg';
import reviewsImage from './images/techdocs01.jpeg';
import pricesImage from './images/designer01.jpeg';

export const homeDataStub = [
  {
    title: "Home",
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
    title: "Prices",
    buttonText: "View Prices",
    description: "Check out our competitive pricing plans tailored to suit all your needs.",
    additionalInfo: "Affordable solutions without compromising on quality.",
    image: pricesImage,
    alt: "ArborCraft Prices",
    link: "/prices"
  },
  {
    title: "Reviews",
    buttonText: "Read Reviews",
    description: "See what our satisfied customers have to say about our services.",
    additionalInfo: "Real feedback from real clients.",
    image: reviewsImage,
    alt: "ArborCraft Reviews",
    link: "/reviews"
  }
];