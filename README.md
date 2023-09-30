
# Teste Técnico Ensinio

Documentação que fornece instruções para execução, estrutura e comentários sobre o projeto.


## Stack utilizada

**Next com JS e Styled Components**

- Usei o JSON WEB SERVER durante o desenvolvimento do projeto. Para o deploy, fiz um repositório separado para o JSON WEB SERVER, fiz o deploy na vercel e usei a URL para fazer o fetch na minha aplicação.

## Execução da aplicação

- Para executar essa aplicação, é necessário ter o yarn instalado. Se não tiver, esse é o comando para instalá-lo: 
```bash
  npm install --global yarn
```

Feito isso, pode proseguir para os próximos passos.

#

- Faça o clone do repositório. Após isso, digite os seguintes comandos:
```bash
  cd teste-ensinio
  yarn
```

- O comando "yarn" fará a instalação de todas as dependências necessárias para a aplicação funcionar.
- Para iniciar o servidor e ter acesso a aplicação, execute:
```bash
  yarn dev
```

A URL de acesso aparecerá no seu terminal.
## Estrutura do projeto

O projeto tem 4 pastas. 
- Components
- Messages
- Pages
- Public

#

- Na pasta **Components** temos todos os nossos componentes. Eles estão separados por pastas, ou seja, cada componente tem a sua pasta, e dentro dela encontramos o componente e seu estilo.

- Em **Messages** encontramos os arquivos *json* que são responsáveis pela internacionalização do projeto.

- Na pasta **Pages** temos nosso arquivo raiz, *index.jsx*. Nele importamos nosso componentes para serem renderizados.

- **Public** possui todos os nossos ícones e imagens usados no projeto.





## Aprendizados

Durante o desenvolvimento deste projeto, adquiri novos conhecimentos sobre Styled Components. Embora já tivesse ouvido falar dessa ferramenta anteriormente, foi a primeira vez que a utilizei em um projeto real. Além disso, foi necessário aprender a implementar a internacionalização, o que exigiu muita pesquisa até chegar ao resultado final. Um desafio significativo que enfrentei foi a necessidade de refazer todo o projeto. Inicialmente, estava utilizando o App Router do Next, e em praticamente todos os componentes eu estava utilizando o 'use client'. No entanto, percebi que estava usando o App Router de maneira incorreta. Por isso tomei a decisão de reconstruir o projeto utilizando o Pages Router, o que exigiu um esforço adicional, mas resultou em uma arquitetura mais coerente no meu ponto de vista. 

