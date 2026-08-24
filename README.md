# lista 01 - primeiro servidor express

projeto desenvolvido para a disciplina PTAS3 - semana 1.

## requisitos

- node.js LTS instalado
- npm instalado

## como instalar

clone o repositorio ou baixe o projeto e entre na pasta:

```bash
cd lista-01
```

instale as dependencias:

```bash
npm install
```

## configuracao

crie um arquivo .env na raiz do projeto com:

```env
PORT=3000
```

o arquivo .env nao deve ser enviado para o github.

## como rodar

execute:

```bash
npm start
```

se tudo estiver certo, aparecera:

```text
Servidor rodando na porta 3000
```

## teste

abra no navegador:

http://localhost:3000/

ou use o terminal:

```bash
curl http://localhost:3000/
```

a resposta esperada e:

```json
{
  "status": "ok",
  "service": "lista-01"
}
```

## estrutura

```text
lista-01/
├── package.json
├── .env
├── .gitignore
└── src/
    ├── app.js
    └── server.js
```

## tecnologias

- node.js
- express
- dotenv
- es modules