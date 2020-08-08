import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
   return (
      <article className="teacher-item">
         <header>
            <img src="https://avatars0.githubusercontent.com/u/51727533?s=460&u=db66dcd045f5e01193f7e162c4bbc193886ae348&v=4" alt="Leandro Souza"/>
            <div>
               <strong>Leandro Souza</strong>
               <span>Matemática</span>
            </div>
         </header>
         
         <p>
            Eu to com preguiça
            <br /><br />
            Foi mal D:
         </p>
         
         <footer>
            <p>
               Preço/hora
               <strong>R$ 80,00</strong>
            </p>
            <button type="submit">
               <img src={whatsappIcon} alt="Entrar em Contato" />
               Entrar em Contato
            </button>
         </footer>
      </article>
      );
   }
   
   export default TeacherItem;