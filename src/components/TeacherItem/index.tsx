import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/32847021?s=460&u=af5fd2e2d346714a88e07970e81a05373e61ab83&v=4" alt="Augusto Ávila"/>
        <div>
          <strong>Augusto Ávila</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiata das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e mudar a vida de pessoas através de experiências. Mais de 250.000 pessoas já passaram por suas experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;