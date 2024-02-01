---
layout: post
title: "Construindo sua Primeira API REST com Flask em Python PART 3"
date: 2024-02-10
categories: Tutorial
author: José Santos
---

Olá, pessoal! Se você chegou até aqui, parabéns por continuar construindo sua primeira API REST com Flask em Python. Nesta parte do tutorial, vamos abordar tópicos avançados, como autenticação de usuários e aprimoramento da API.

### Implementando Autenticação de Usuários

#### Configurando Flask-JWT

Para implementar a autenticação de usuários, vamos utilizar o Flask-JWT. Certifique-se de instalar a extensão antes de começarmos.

```
bashCopy code
pipenv install flask-jwt-extended
```

#### Atualizando o **init**.py

No `__init__.py` dentro da pasta `app`, adicione as importações e configurações necessárias para o Flask-JWT.

```
pythonCopy code# app/__init__.py

from flask_jwt_extended import JWTManager

jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('instance/config.py')

    db.init_app(app)
    jwt.init_app(app)  # Adicione esta linha para inicializar o Flask-JWT

    # Restante do código...
```

#### Criando Rotas Protegidas

Agora, vamos criar rotas protegidas que exigem autenticação. Por exemplo, uma rota para obter informações do usuário.

```
pythonCopy code# app/__init__.py

from flask_jwt_extended import jwt_required, get_jwt_identity

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('instance/config.py')

    db.init_app(app)
    jwt.init_app(app)

    # Rota protegida para obter informações do usuário
    @app.route('/user', methods=['GET'])
    @jwt_required()
    def get_user():
        current_user = get_jwt_identity()
        # Lógica para obter informações do usuário
        return jsonify(logged_in_as=current_user), 200

    # Adicione outros roteamentos conforme necessário...

    return app
```

### Aprimorando a API

#### Implementando Paginação

Vamos aprimorar a API adicionando suporte para paginação na listagem de livros.

```
pythonCopy code# app/controllers/book_controller.py

from flask import request

def get_all_books():
    page = request.args.get('page', default=1, type=int)
    per_page = request.args.get('per_page', default=10, type=int)

    books = Book.query.paginate(page=page, per_page=per_page, error_out=False)

    result = {
        'books': [],
        'total_pages': books.pages,
        'current_page': books.page,
        'total_books': books.total
    }

    for book in books.items:
        result['books'].append({
            'id': book.id,
            'autor': book.autor,
            'title': book.title,
            'prateleira': book.prateleira
        })

    return jsonify(result), 200
```

#### Tratando Erros

Vamos implementar um tratamento de erros mais robusto para lidar com situações em que um livro não é encontrado ou ocorrem erros inesperados.

```
pythonCopy code# app/controllers/book_controller.py

from flask import abort

def get_one_book(book_id):
    book = Book.query.get_or_404(book_id)

    result = {
        'id': book.id,
        'autor': book.autor,
        'title': book.title,
        'prateleira': book.prateleira
    }

    return jsonify(result), 200
```

### Testando as Novas Funcionalidades

Certifique-se de que o ambiente virtual do Pipenv esteja ativo (`pipenv shell`) e execute os testes com o Pytest.

```
bashCopy code
pytest
```

### Conclusão

Parabéns por chegar até a parte avançada deste tutorial! Agora, sua API Flask possui autenticação de usuários, suporte à paginação e um tratamento de erros mais robusto.

Continue explorando o mundo do Flask e Python, experimentando com novos recursos e aprimorando suas habilidades de desenvolvimento web.

Se você tiver dúvidas ou problemas, consulte as referências fornecidas e não hesite em buscar mais informações na documentação oficial do Flask, Flask-JWT e outras bibliotecas utilizadas.

Fique ligado para futuras atualizações e tutoriais! 🚀