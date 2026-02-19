# Servidor

## Requisitos para deploy
- Servidor Linux com IP válido que não mude e com acesso SSH
- Um domínio que você possa configurar registros de DNS

## Comandos para iniciar o site do zero:
```sh
# Instalar todos os pacotes
npm install
# Configure o .env.local
npm run migrate
# Seed opcional:
npm run seed

# Build do next
npm run build
npm start # para teste
```
