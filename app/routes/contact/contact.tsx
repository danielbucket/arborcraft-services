import { StyledContact } from './contact.styled.js';

export default function Contact() {
  return (
    <StyledContact>
      <h1>Contact Us</h1>
      <p>Welcome to the ArborCraft Contact page!</p>
      <p>If you have any questions or need assistance, please reach out to us.</p>
      <ul>
        <li>Email: <a href="mailto:daniel@arborcraftservices.com"></a></li>
        <li>Phone: <a href="tel:+720-954-4005">720 954-4005</a></li>
      </ul>
      <p>We look forward to hearing from you!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      <p>Thank you for reaching out to us!</p>
    </StyledContact>
  );
};