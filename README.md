# Sis Digital - Estrutura Back

## Ambiente de desenvolvimento

### Instalando

1. `npm install`

Após isso, basta rodar o projeto com

```
npm run dev
```

```
Next:
  $ cd sis
  $ npm test
  $ npm link
  $ sis -v
  $ sis node
```

### Testando

`npm test`

## Project Structure

```
|-- src
    |-- app
      |-- [+] controllers
      |-- [+] middlewares
      |-- [+] models
    |-- config
    |-- database
      |-- migrations
    |-- helpers
        |-- [+] enums
        |-- logger
    |-- swagger
|-- test
     |-- integration
        |-- mock
     |-- [+] unit
|-- tmp
|-- swagger
    |-- openapi.yaml
.editorconfig
.env.test
.eslintignore
.eslintrc
.gitignore
.prettierrc
.sequelizerc
Dockerfile
Jenkinsfile
jest.config.js
nodemon.json
package.json
```
