## Rodar projeto localmente

#### Clonar repositório
Clone o repositório para uma pasta local.

#### Verificar versão do NPM
NPM (versão >= 10.0);

#### Json Server
Caso já tenha instalado, pule este passo.
Utilize o NPM para instalação do Json Server.
```
$ npm install -g json-server
```

#### Rodando o servidor
Abra o terminal na pasta `fakeServer` do projeto, rode o comando a baixo. Estamos utilizando a porta 3612.
```
$ json-server --watch db.json --port 3612
```
#### Rodando o html
Abra o arquivo `index.html` disponivel na pasta `html` com qualquer navegador atual.
*Testado com Chrome e Edge.