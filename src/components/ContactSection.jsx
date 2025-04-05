import '../styles/Contact.css'
import SocialL from '../components/SocialLinks'

export default function ContactSec() {
    return(
        <div className="contact-section">
            <form action="get" className="form-container">
                <h1>Envie-nos uma mensagem</h1>
                <div className="nome-empresa-container">
                    <div className="form-item" id="item-nome">
                        <label>Nome</label>
                        <input type="text" name="nome" id="nome" autocomplete="off"/>
                    </div>
                    <div className="form-item" id="item-empresa">
                        <label>Empresa (se houver)</label>
                        <input type="text" name="nome" id="nome" autocomplete="off"/>
                    </div>
                </div>
                <div className="form-item" id="item-email">
                    <label>E-mail / Número de telefone</label>
                    <input type="text" name="nome" id="nome" autocomplete="off"/>
                </div>
                <div className="form-item" id="item-mensagem">
                    <label>Sua mensagem</label>
                    <textarea/>
                </div>
            </form>
            <SocialL />
        </div>
    )
}