# KARAJA DIGITAL
## Olá! Bem vindo ao projeto Karajá Digital!

### 📕 Descrição
#### Karajá Digital é um projeto de desenvolvimento web com objetivo de estruturar uma biblioteca digital com gerenciamento de livros e de usuários responsáveis pelo cadastramento destes livros.

![Home-KarajaDigial](https://onedrive.live.com/embed?resid=A354D07AC62B3483%21534183&authkey=%21AMkE0TtvdxD0Bow&width=5120&height=5376)

## 🛠 Construído com
- Backend: **Node JS**
- Banco de Dados: **MySQL**
- Front-end: **React**

## 📋 Requisitos de instalação 

- [Node JS - LTS](https://nodejs.org/en/download) para funcionamento do backend e da API.
- [My SQL Community (installer)](https://dev.mysql.com/downloads/installer/) para gerenciar as instalações do ambiente de banco de dados SQL:
    - MySQL Server
    - MySQL Workbench
- [VS Code](https://code.visualstudio.com/download) (ou outra IDE) para execução da API e do frontend.

## 🔧 Etapas de instalação

### NodeJS
- Após o download, instale o  **Node JS** de forma padrão (next, next...).
- Confirme o sucesso da instalação com:

    ```
    node -v
    ```
    e também:
    ```
    npm -v
    ```

### MySQL
#### 1. Criando a conexão
- Após instalação do **MySQL Community (installer)**, selecione cada um dos ambientes de **SQL Server** e **SQL Workbench**, clique na seta apontada para direita e após isso siga o processo de instalação padrão (next, next...).


- Concluída a instalação dos ambientes SQL, abra o **MySQL Workbench**:
    - Registre o banco **karajadigital** e a senha **russo~~cmt**, o mesmo configurado no arquivo **db.js** da pasta **api**.
    - Crie uma nova conexão em **DataBase** > **Connect to DataBase** > **Ok**
    - *Obs: Não há necessidade de configuração de portas nos ambientes SQL para execução do projeto.

#### 2. Importando o banco de dados
- Após [download do **.zip** do projeto no GitHub](https://github.com/joaosour/karajadigital/archive/refs/heads/main.zip).
- Realize a criação da conexão, acessando o menu > **Server** > **Import Data**
- Selecione a opção **Import Self-Containerd File** e nos **"..."** (três pontos) > selecione o arquivo **karajadigital.sql** localizado na raiz do repositório .git.
- Em **Default Target Schema** clique em **New** e digite **karajadigital**
- Selecione o schema em **Select DataBase Objects...**
- Clique em **import**
    - *Obs: Caso o schema não apareça de imediato na aba lateral esquerda do **SQL Workbench**, reinicie o ambiente **Workbench** (feche e abra novamente).

## VSCODE
 Após abrir a pasta do projeto no visual studio code, acesse a pasta **api**  e execute a instalação de todas as dependências do projeto usando seu pacote de instalação:
```
yarn install  
```
ou
```
npm install  
```
- Refaça o mesmo (em um novo terminal) na pasta **frontend**.

Nesse momento haverá dois terminais abertos, o terminal com a pasta **api** aberta e outro terminal com a pasta **frontend** aberta.

Para iniciar tanto a **api** do projeto quanto o **frontend**, cada um em sua respectiva pasta, utilize:
```
yarn start
```
ou
```
npm start
```
