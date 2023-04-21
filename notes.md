## Necessidade

Ter um retorno de uma respota de inteligência artificial para o nosso usuário

## Server

Server é onde fica a nossa aplicação.

# Responsabilidades back-end

- Regras de Negócio
- Parte Lógica
- Credibilidade
- Segurança
- Tratamento de Dados

Todo server também pode ser client de uma ferramenta de terceiros.

## Client

Client é todo mundo que consome nossa aplicação.

# Responsabilidades do front-end

- Apresentar os dados (View)
- Cuidar de como o usuário inputa os dados
- Experiência do usuário (UI/UX)

## Técnico

- N Layers
- Node
- Javascript
- Express
- Node vs Versões
- Como trabalhar em equipe (EditorConfig)
- Sentindo de organização em camadas
- Consumindo API (OpenAI)

# src = source (ou código fonte)

dentro da src -> Seu código fonte
fora da src -> Arquivos de configuração

npm install nodemon -D (Alterar aplicação em tempo real)

npm install cors (Controle sobre quem acessa a aplicação)

npm install dotenv (Permite criar molho de chaves)

npm install express (Serve para criar aplicações de react com node)

npm install openai (Biblioteca oficial da openai)

## Conceito de arquitetura N-layer

camadas:

- Controllers: controlar quem acessa e controlar as respostas de devolução (request e responses)

- Rotas: Quem faz o apontamento de endereços para os nossos controllers

- Model: É a forma de entrada ou saida de dados do seu servidor

- Config: Serve para colocar configurações de outras aplicações (aplicações de terceiros) e dados não sensiveis

- Configurações não embarcadas (.env):
  serve para isolar dados sensiveis
