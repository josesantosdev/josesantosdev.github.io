---
layout: post
title: "Construindo sua Primeira API REST com Flask em Python PART 2"
date: 2024-01-31
categories: Tutorial
author: José Santos
---

Construindo sua Primeira API REST com Flask em Python - Parte 2

Olá, pessoal! Se você chegou até aqui, parabéns por completar a primeira etapa do nosso tutorial para construir sua primeira API REST com Flask em Python. Agora, vamos dar continuidade e avançar para a segunda parte, onde vamos integrar nossa aplicação com um banco de dados, armazenando informações importantes sobre nossos livros.

### Integrando com o Banco de Dados

Na segunda parte deste tutorial, vamos abordar a integração da nossa aplicação com um banco de dados. Utilizaremos o SQLAlchemy para facilitar a interação com o banco, e o Marshmallow-SQLAlchemy para a serialização dos dados.

#### Configurando o Banco de Dados

Antes de começarmos, vamos configurar nosso banco de dados. Dentro da pasta `instance`, você encontrará o arquivo `config.py`. Abra esse arquivo e insira as configurações do seu banco de dados, como o URI. Certifique-se de ajustar as configurações de acordo com o seu ambiente.

```python
# instance/config.py

SQLALCHEMY_DATABASE_URI = 'sua_URI_do_banco_de_dados_aqui'
SQLALCHEMY_TRACK_MODIFICATIONS = False
```

#### Criando o Modelo do Banco de Dados

Dentro da pasta `app/models`, vamos criar o modelo do nosso banco de dados. No arquivo `book_model.py`, defina a estrutura da entidade Livro e suas colunas.

```python
# app/models/book_model.py

from app import db

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    autor = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    prateleira = db.Column(db.String(1), nullable=False)
```

#### Atualizando o __init__.py

Certifique-se de atualizar o arquivo `__init__.py` dentro da pasta `app` para importar e inicializar o SQLAlchemy.

```python
# app/__init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('instance/config.py')

    db.init_app(app)

    # Restante do código...
```

#### Migrando o Banco de Dados

Com as configurações do banco de dados e o modelo definido, vamos realizar a migração. No terminal, execute os seguintes comandos:

```bash
flask db init
flask db migrate
flask db upgrade
```

Esses comandos criarão as tabelas no seu banco de dados com base no modelo que definimos.

### Implementando Operações CRUD

Agora que nosso banco de dados está configurado, vamos implementar as operações CRUD (Create, Read, Update, Delete) para a entidade Livro.

#### Controller - book_controller.py

Dentro da pasta `app/controllers`, crie o arquivo `book_controller.py`. Neste arquivo, implementaremos as funções para lidar com as requisições relacionadas aos livros.

```python
# app/controllers/book_controller.py

from flask import request, jsonify
from app.models.book_model import Book
from app import db

def create_book():
    data = request.get_json()

    new_book = Book(autor=data['autor'], title=data['title'], prateleira=data['prateleira'])

    db.session.add(new_book)
    db.session.commit()

    return jsonify({'message': 'Livro criado com sucesso!'}), 201

# Implemente as demais operações CRUD...
```

#### Atualizando o __init__.py

Não se esqueça de importar e registrar o `book_controller.py` no `__init__.py` da pasta `controllers`.

```python
# app/controllers/__init__.py

from .book_controller import create_book

# Adicione outras importações conforme necessário...
```

#### Roteamento - __init__.py

Vamos atualizar o `__init__.py` na pasta `app` para incluir os roteamentos necessários para as operações CRUD.

```python
# app/__init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('instance/config.py')

    db.init_app(app)

    # Roteamento para operações CRUD
    from app.controllers import create_book
    app.route('/books', methods=['POST'])(create_book)

    # Adicione outros roteamentos conforme necessário...

    return app
```

### Testando as Novas Funcionalidades

Agora que implementamos a integração com o banco de dados e as operações CRUD, é hora de testar nossa aplicação. Certifique-se de que o ambiente virtual do Pipenv esteja ativo (`pipenv shell`) e execute os testes com o Pytest.

```bash
pytest
```

### Conclusão

Se você seguiu todos os passos corretamente, sua aplicação Flask agora está integrada a um banco de dados e é capaz de realizar operações CRUD. Parabéns por chegar até aqui!

Continue acompanhando a próxima parte do tutorial, onde abordaremos tópicos avançados, como autenticação de usuários e aprimoramento da API. Se tiver dúvidas ou problemas, não hesite em consultar as referências fornecidas.

Nos vemos na próxima etapa do tutorial! 🚀