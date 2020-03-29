import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="sua ID" />
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>

        </form>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  );
}