

import React from 'react';
import './styles.css'

import WhatsAppIcon from '../../assets/icons/whatsapp.svg';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
        <header>
            <img src='https://avatars0.githubusercontent.com/u/19524191?s=460&u=0c0128bb565312d6d9f34ff3c8f8c2973e3d43b5&v=4' alt='foto perfil' />
            <div>
                <strong>Pedro Caximiliano</strong>
                <span>Análise</span>
            </div>
        </header>
        <p>Apaixonado por tecnologi
            <br />
            apaixonado por tecnologi
        </p>
    
        <footer>
            <p>preço/hora
                <strong>R$20,00</strong>
            </p>
        <button type="button">
            <img src={WhatsAppIcon} alt="whatsapp" />
            Entrar em contato
        </button>
        </footer>
    </article>
    )
}

export default TeacherItem;