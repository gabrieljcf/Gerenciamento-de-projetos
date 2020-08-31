<h1 align="center">
  <img alt="manager" src="/assets/screen.png" width="70%">
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7DC497&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7DC497&labelColor=000000">
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJs](https://nodejs.org/en/)
- [ReactJs](https://pt-br.reactjs.org)
- [knex](http://knexjs.org)
- [MySql](https://www.mysql.com)

## 💻 Projeto

O projeto visa ajudar os desenvolvedor com as tasks de cada projeto

## 📖 Como funciona
A aplicação busca da api do github os repositórios, salva os mesmos no banco de dados e relacionado a cada repositório podemos criar tasks para cada projeto; As taks podem ser alteradas, deletas e marcadas como concluida


## Como instalar na sua maquina

Para clonar e executar a aplicação, você precisa ter [Git](https://git-scm.com), [NodeJs](https://nodejs.org/en/), [Yarn](https://yarnpkg.com) e o [MySql](https://www.mysql.com) instalado em seu computador

Em seu terminal:

```bash
# clonando o repositório
$ git clone https://github.com/gabrieljcf/getkcal.git

#Entre na pasta backend e na pasta frontend e digite o seguinte comando para instalar as dependências 
$ yarn

#Na pasta backend digite o seguinte comando para rodar as migrations 
yarn knex:migrate

#para rodar a aplicação backend digite
$ yarn dev

#Para rodar a aplicação frontEnd digite
$ yarn start

ATENÇÃO: será necessário criar um banco de dados com o nome manage_project e no arquivo knexfile colocar suas credenciais do mysql e também dentro do arquivo connection dentro da pasta database



## 🤔 Como contribuir

-  Faça um fork do projeto;
-  Crie uma branch com sua funcionalidade: `git checkout -b my-feature`;
-  Faça o commit das mudanças: `git commit -m 'feat: My new feature'`;
-  Faça um push para sua branch: `git push origin my-feature`.