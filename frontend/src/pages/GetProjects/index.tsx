import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/images/undraw_personal_settings_kihd 1.svg'

function GetProjects() {
  const [userName, setUserName] = useState('');

  async function handleUser() {
    try {
      const result = await api.post('/projects', {
        name: userName
      });
      console.log(result);

    } catch (error) {
      alert('Informe seu nome de usuário');
    }

  }



  return (
    <div className="container">
      <div className="box-input-get-projects">
        <input onChange={event => setUserName(event.target.value)} type="text" name="projects" placeholder="Seu usuário do GitHub" />
        <button onClick={handleUser} type="submit">Buscar</button>
      </div>

      <img src={logoImg} alt="Logo" />
    </div>
  );
}

export default GetProjects;