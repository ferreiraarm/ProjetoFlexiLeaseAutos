
# Projeto CompassCine

Este projeto consiste em uma API REST para uma bilheteria de um cinema, utlizando Node.js com Express e Typescript, e SQlite como banco de dados.

## Pré-requesitos:
- Node.js
- Ferramenta de testes de API(Postman/Insomnia)
- npm ou yarn
## Instalação

1. Clone o repositorio utilizando o git bash:

```bash
git clone https://github.com/utheux/CompassCine.git
```

2. Assim que clonar o repositorio, abrir ele em uma IDE e rodar o seguinte comando no terminal para instalar as dependencias: 

```bash
  npm install
```
    
## Exectando a aplicação

1. Inicie o servidor com o comando abaixo:

```bash
  npm run dev
```

2. A API estará disponivel no endereço em:

```http
http://localhost:3000
```


## Documentação da API

### Filmes

#### Lista Filmes

Retorna a lista de todos os filmes

```http
  GET /api/movies
```

* Response: 
```JSON
[
  {
    "id": 1,
    "image": "url_da_imagem",
    "name": "nome_do_filme",
    "description": "descricao_do_filme",
    "actors": ["ator1", "ator2", "ator3"],
    "genre": "genero_do_filme",
    "release_date": "03/06/2024",
    "sessions": []
  }
]
```
```JSON
[
  {
    "id": 1,
    "image": "url_da_imagem",
    "name": "nome_do_filme",
    "description": "descricao_do_filme",
    "actors": ["ator1", "ator2", "ator3"],
    "genre": "genero_do_filme",
    "release_date": "03/06/2024",
    "sessions": [
      {
        "id": 1,
        "movie_id": 1,
        "room": "nome_da_sala",
        "capacity": 100,
        "day": "03/06/2024",
        "time": "14:23:00"
        "tickets": [
          {
            "id": 1,
            "session_id": 1,
            "chair": "b1",
            "value": 10
          }
        ]
      },
      {
        "id": 2,
        "movie_id": 1,
        "room": "nome_da_sala",
        "capacity": 100,
        "day": "03/06/2024",
        "time": "14:23:00"
        "tickets": [
          {
            "id": 2,
            "session_id": 2,
            "chair": "b1",
            "value": 20
          }
        ]
      }
    ]
  }
]
```

#### Buscar um filme

Retorna as informações de um filme específico.

```http
  GET /api/movies/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:id` | `number` | **Obrigatório**. É o identificação do filme que você quer retornar |

* Response: 
```JSON
[
  {
    "id": 1,
    "image": "url_da_imagem",
    "name": "nome_do_filme",
    "description": "descricao_do_filme",
    "actors": ["ator1", "ator2", "ator3"],
    "genre": "genero_do_filme",
    "release_date": "03/06/2024",
    "sessions": [
      {
        "id": 1,
        "movie_id": 1,
        "room": "nome_da_sala",
        "capacity": 100,
        "day": "03/06/2024",
        "time": "14:23:00"
        "tickets": [
          {
            "id": 1,
            "session_id": 1,
            "chair": "b1",
            "value": 10
          }
        ]
      },
      {
        "id": 2,
        "movie_id": 1,
        "room": "nome_da_sala",
        "capacity": 100,
        "day": "03/06/2024",
        "time": "14:23:00"
        "tickets": [
          {
            "id": 2,
            "session_id": 2,
            "chair": "b1",
            "value": 20
          }
        ]
      }
    ]
  }
]
```

#### Cadastrar um novo filme
Cria um novo filme

```http
  POST /api/movies
```

* Request: 
```JSON
{
  "name": "nome_do_filme",
  "description": "descricao_do_filme",
  "actors": ["ator1", "ator2", "ator3"],
  "genre": "genero_do_filme",
  "release_date": "10/03/2024"
}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome do filme |
| `description` | `string` | **Obrigatório**. Descrição do filme |
| `actors` | `string[]` | **Obrigatório**. Uma array contendo os atores do filme |
| `genre` | `string` | **Obrigatório**. Genêro do filme |
| `release_date` | `string` | **Obrigatório**. Data de lançamento do filme |

#### Atualizar um filme
Atualizar as informações de um filme já existente: 
```http
PUT /api/movies/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:id` | `number` | **Obrigatório**. É o identificação do filme que você quer atualizar |

* Request: 
```JSON
{
  "name": "nome_do_filme",
  "description": "descricao_do_filme",
  "actors": ["ator1", "ator2", "ator3"],
  "genre": "genero_do_filme",
  "release_date": "10/03/2024"
}
```


| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome do filme |
| `description` | `string` | **Obrigatório**. Descrição do filme |
| `actors` | `string[]` | **Obrigatório**. Uma array contendo os atores do filme |
| `genre` | `string` | **Obrigatório**. Genêro do filme |
| `release_date` | `string` | **Obrigatório**. Data de lançamento do filme |

#### Excluir filme
Deleta um filme existente

```http
  DELETE /api/movies/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:id` | `number` | **Obrigatório**. É o identificação do filme que você quer excluir. |

* Response: 
```JSON
status code 204
```

### Sessões
#### Cria sessões

Cria uma nova sessão

```http
  POST /api/movies/{movie_id}/sessions
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movie_id` | `number` | **Obrigatório**. É a id do filme que você quer criar uma sessão. |

* Request: 
```JSON
{
  "room": "nome_da_sala",
  "capacity": 100,
  "day": "03/06/2024",
  "time": "14:23:00"
}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `room` | `string` | **Obrigatório**. Nome da sala da sessão |
| `capacity` | `string` | **Obrigatório**. Capacidade que comporta a sala da sessão |
| `day` | `string` | **Obrigatório**. Dia em que a sessão irá ocorrer |
| `time` | `string` | **Obrigatório**. Horario em que a sessão ira ocorrer |

#### Atualizar uma sessão
Atualizar as informações de uma sessão já existente: 
```http
PUT /api/movies/{movie_id}/sessions/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movie_id` | `number` | **Obrigatório**. É a id do filme que você quer atualizar a sessão. |
| `:id` | `number` | **Obrigatório**. É a id da sessão que você quer atualizar. |

* Request: 
```JSON
{
  "room": "nome_da_sala",
  "capacity": 100,
  "day": "03/06/2024",
  "time": "14:23:00"
}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `room` | `string` | **Obrigatório**. Nome da sala da sessão |
| `capacity` | `string` | **Obrigatório**. Capacidade que comporta a sala da sessão |
| `day` | `string` | **Obrigatório**. Dia em que a sessão irá ocorrer |
| `time` | `string` | **Obrigatório**. Horario em que a sessão ira ocorrer |

#### Excluir filme
Deleta um filme existente

```http
  DELETE /api/movies/{movie_id}/sessions/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movie_id` | `number` | **Obrigatório**. É a id do filme que você quer excluir a sessão. |
| `:id` | `number` | **Obrigatório**. É a id da sessão que você quer excluir. |

* Response: 
```JSON
status code 204
```

### Ingressos
#### Criar ingresso

Cria um novo ingresso

```http
  POST /movies/{movie_id}/sessions/{session_id}/tickets
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movie_id` | `number` | **Obrigatório**. É a id do filme que você quer criar um ingresso. |
| `session_id` | `number` | **Obrigatório**. É a id da sessão que você quer criar um ingresso. |

* Request: 
```JSON
{
  "chair": "b1",
  "value": 10
}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `chair` | `string` | **Obrigatório**. Cadeira em que o ingresso é alocado. |
| `value` | `number` | **Obrigatório**. É o valor do ingresso. |


#### Atualizar um ingresso
Atualizar as informações de um ingresso já existente: 
```http
PUT /api/movies/{movie_id}/sessions/{session_id}/tickets/:id
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movie_id` | `number` | **Obrigatório**. É a id do filme que você quer atualizar um ingresso. |
| `session_id` | `number` | **Obrigatório**. É a id da sessão que você quer atualizar um ingresso. |
| `:id` | `number` | **Obrigatório**. É a id do ingresso que você quer atualizar. |

* Request: 
```JSON
{
  "chair": "b1",
  "value": 10
}
```

#### Excluir filme
Deleta um filme existente

```http
  DELETE /api/movies/{movie_id}/sessions/{session_id}/tickets/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `movie_id` | `number` | **Obrigatório**. É a id do filme que você quer excluir um ingresso. |
| `session_id` | `number` | **Obrigatório**. É a id da sessão que você quer excluir um ingresso. |
| `:id` | `number` | **Obrigatório**. É a id do ingresso que você quer excluir. |

* Response: 
```JSON
status code 204
```
## Documentação

A documentação swagger esta disponivel no [link](https://app.swaggerhub.com/apis/ArturMartinsFerreira/Compacine/1.0.0#/).
Documentação hospedada no GitHub Pages [link](https://eduardoferreirab.github.io/documents2/)

## Stack utilizada

**Back-end:** Node, Express, Typescript, TypeORM, Celebrate

**Database:** SQLite


## Licença

Este projeto está licenciado sob a licença 
[MIT](https://choosealicense.com/licenses/mit/).

