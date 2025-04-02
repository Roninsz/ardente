import '../styles/Contact.css';

export default function Contact(){
    return(
        <div className="contact-conteiner">
            <h1>Contact</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}