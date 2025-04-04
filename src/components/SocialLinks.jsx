import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg"; 
import behance from "../assets/behance.svg";
import github from "../assets/github.svg";
import '../styles/socialLinks.css';

export default function SocialLinks() {
    return(
        <div className="social-links-container">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" srcset="" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="" srcset="" />
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
                <img src={behance} alt="" srcset="" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="" srcset="" />
            </a>
        </div>
    )
}