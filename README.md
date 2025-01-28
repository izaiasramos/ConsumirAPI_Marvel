# ConsumirAPI_Marvel
Back-End consumindo dados da API da Marvel

Desvendando o Código e Conectando-se à API da Marvel
Entendendo o Código Passo a Passo
Seu código está configurado para criar um servidor Node.js que se conecta à API da Marvel Comics e retorna dados de personagens. Vamos analisar cada parte:

1. Importando Módulos:

dotenv: Permite carregar variáveis de ambiente a partir do arquivo .env, evitando que suas chaves secretas sejam expostas diretamente no código.
axios: Uma biblioteca para fazer requisições HTTP, usada para se comunicar com a API da Marvel.

express: Um framework web para Node.js, usado para criar o servidor e definir as rotas.

cors: Permite que o servidor aceite requisições de diferentes origens (domínios), evitando problemas de CORS.

crypto: Utilizado para gerar um hash MD5, parte do processo de autenticação da API da Marvel.

2. Configurando o Servidor:

app.use(cors());: Habilita o CORS para permitir que outras aplicações acessem sua API.

port: Define a porta em que o servidor estará escutando.

baseUrl: Define a URL base da API da Marvel.

getMarvelData: Função assíncrona que:
Gera um timestamp (ts).
Cria um hash MD5 usando o timestamp, a chave privada e a chave pública da API.
Faz uma requisição GET para a API da Marvel com os parâmetros necessários (timestamp, chave pública, hash e outros parâmetros opcionais).
Retorna os resultados da requisição.

3. Rotas:

/characters: Quando uma requisição GET é feita para essa rota, a função getMarvelData é chamada para buscar os dados dos personagens e a resposta é enviada em formato JSON.

/: Uma rota padrão que retorna uma mensagem simples.

4. Iniciando o Servidor:
O código inicia o servidor na porta especificada e exibe uma mensagem no console.

Como Funciona a Conexão com a API da Marvel:
Autenticação: A API da Marvel utiliza um sistema de autenticação baseado em timestamp, chave pública e hash MD5 para garantir a segurança.

Requisições: O código faz uma requisição GET para a API da Marvel, especificando o endpoint desejado (por exemplo, /characters) e os parâmetros necessários (timestamp, chave pública, hash e outros filtros).

Resposta: A API da Marvel retorna os dados solicitados em formato JSON.
Tratamento dos Dados: O código extrai os dados relevantes da resposta e os envia para o cliente.

Para que Serve Cada Parte do Código:

dotenv: Permite que você mantenha suas chaves secretas em um arquivo separado (.env), evitando expô-las diretamente no código.

axios: Facilita a realização de requisições HTTP.

express: Cria o servidor web e define as rotas.

cors: Permite que sua aplicação seja acessada por diferentes origens.

crypto: Utilizado para gerar o hash MD5 necessário para a autenticação na API da Marvel.

getMarvelData: Função que encapsula a lógica de fazer as requisições à API da Marvel.
