import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/images/undraw_personal_settings_kihd 1.svg'

function GetProjects() {
  const [userName, setUserName] = useState('');
  
  const history = useHistory();

  async function handleUser() {

    try {
      await api.post('/projects', { name: userName });
      
      history.push('/projects');

    } catch (error) {
      alert('Informe seu nome de usuário');
    }

  }

  return (
    <div id="get-projects">
      <div className="container">
        <div className="box-input-get-projects">
          <h1>Task Manager</h1>
          <input 
            onChange={event => setUserName(event.target.value)} 
            type="text" 
            name="projects" 
            placeholder="Seu usuário do GitHub"
          />
          <button onClick={handleUser} type="submit">Buscar</button>
        </div>

        <img src={logoImg} alt="Logo" />
      </div>
    </div>
  );
}

export default GetProjects;