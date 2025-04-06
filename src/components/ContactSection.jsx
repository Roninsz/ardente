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
                        <input 
                        type="text" 
                        name="nome" id="nome" 
                        placeholder="Digite o seu nome"
                        autocomplete="off" 
                        required/>
                    </div>
                    <div className="form-item" id="item-empresa">
                        <label>Empresa (se houver)</label>
                        <input 
                            type="text" 
                            name="empresa" id="empresa" 
                            placeholder="Digite o nome da empresa"
                            autocomplete="off"/>
                    </div>
                </div>
                <div className="form-item" id="item-email">
                    <label>E-mail / Número de telefone</label>
                    <input 
                        type="text" 
                        name="contact" 
                        id="contact" 
                        autocomplete="off" 
                        required 
                        placeholder="Digite o seu e-mail ou número de telefone"
                        pattern="^(\+?[0-9\s-]{7,}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
                        title="Insira um e-mail válido ou um número de telefone com pelo menos 7 dígitos."
                        autoCorrect="off"
                        autoCapitalize="none"
                    />
                </div>
                <div className="form-item" id="item-mensagem" >
                    <label>Sua mensagem</label>
                    <textarea placeholder="Escreva aqui sua mensagem ..." required/>
                </div>
                <div className="form-buttons">
                    <button className="bt_limpar" type="reset">Limpar</button>
                    <button className="bt_enviar" type="submit">Enviar</button>
                    
                </div>
            </form>
            <SocialL />
        </div>
    )
}