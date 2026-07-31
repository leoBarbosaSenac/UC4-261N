# Exercícios de Programação Orientada a Objetos em TypeScript

## Instruções Gerais

Em **todos os exercícios**, siga as regras abaixo:

- Cada classe deve estar em um arquivo separado.
- A lógica principal deve ficar em um arquivo chamado `main.ts`.
- Utilize atributos **privados (`private`)**.
- Crie **getters e setters** sempre que necessário.
- Utilize **constructors** para inicializar os objetos.
- Instancie os objetos na `main.ts` e teste todos os métodos criados.

---

# Exercício 1 — Pessoa

Crie uma classe `Person` com os seguintes atributos:

- name
- age

### Faça:

- Constructor para inicializar os atributos.
- Getters para todos os atributos.
- Setters para alterar os atributos.
- Método `introduce()` que imprime:

```
Hello! My name is Leonardo and I am 25 years old.
```

Na `main.ts`:

- Crie duas pessoas.
- Exiba suas informações.
- Altere a idade de uma delas utilizando o setter.
- Exiba novamente.

---

# Exercício 2 — Carro

Crie uma classe `Car`.

Atributos:

- brand
- model
- year
- speed

A velocidade inicial deve ser **0**.

### Métodos

- accelerate(value)
- brake(value)
- showInformation()

A velocidade nunca poderá ficar negativa.

Na `main.ts`:

- Crie um carro.
- Acelere algumas vezes.
- Freie.
- Mostre os dados do carro.

---

# Exercício 3 — Conta Bancária

Crie uma classe `BankAccount`.

Atributos:

- owner
- balance

### Métodos

- deposit(value)
- withdraw(value)
- showBalance()

Regras:

- Não permitir depósito negativo.
- Não permitir saque maior que o saldo.

Na `main.ts`:

- Crie uma conta.
- Faça depósitos.
- Faça saques.
- Tente sacar um valor maior que o saldo.

---

# Exercício 4 — Produto

Crie uma classe `Product`.

Atributos:

- name
- price
- stock

### Métodos

- addStock(quantity)
- removeStock(quantity)
- showProduct()

Regras:

- Não permitir estoque negativo.
- Não permitir preço negativo.

Na `main.ts`:

- Cadastre três produtos.
- Adicione estoque.
- Remova estoque.
- Mostre todas as informações.

---

# Exercício 5 — Livro

Crie uma classe `Book`.

Atributos:

- title
- author
- pages
- available

### Métodos

- borrow()
- returnBook()
- showInformation()

Regras:

- Um livro emprestado não pode ser emprestado novamente.

Na `main.ts`:

- Crie dois livros.
- Faça empréstimos.
- Faça devoluções.
- Exiba as informações.

---

# Exercício 6 — Aluno

Crie uma classe `Student`.

Atributos:

- name
- grade1
- grade2

### Métodos

- calculateAverage()
- approved()

Considere:

- Média maior ou igual a 7 → aprovado.

Na `main.ts`:

- Cadastre três alunos.
- Mostre a média.
- Informe se cada aluno foi aprovado.

---

# Exercício 7 — Funcionário

Crie uma classe `Employee`.

Atributos:

- name
- salary

### Métodos

- increaseSalary(percent)
- showInformation()

Regras:

- O percentual deve ser positivo.

Na `main.ts`:

- Cadastre dois funcionários.
- Aplique aumentos.
- Exiba os salários antes e depois.

---

# Exercício 8 — Filme

Crie uma classe `Movie`.

Atributos:

- title
- duration
- rating

### Métodos

- changeRating(newRating)
- showMovie()

Regras:

- A nota deve ficar entre **0 e 10**.

Na `main.ts`:

- Cadastre três filmes.
- Altere suas notas.
- Exiba todas as informações.

---

# Exercício 9 — Celular

Crie uma classe `Smartphone`.

Atributos:

- brand
- model
- battery

A bateria inicia em **100%**.

### Métodos

- use(minutes)
- charge()
- showInformation()

Regras:

- Cada minuto reduz 1% da bateria.
- A bateria nunca pode ficar abaixo de 0.
- O método `charge()` devolve a bateria para 100%.

Na `main.ts`:

- Crie um celular.
- Utilize por alguns minutos.
- Recarregue.
- Exiba os dados.

---

# Exercício 10 — Sistema de Biblioteca

Crie uma classe `LibraryMember`.

Atributos:

- name
- borrowedBooks

O atributo `borrowedBooks` representa a quantidade de livros emprestados.

### Métodos

- borrowBook()
- returnBook()
- showInformation()

Regras:

- Um usuário pode possuir no máximo **3 livros emprestados**.
- Não permitir devolver livros quando estiver com zero.

Na `main.ts`:

- Cadastre dois usuários.
- Faça empréstimos.
- Tente ultrapassar o limite.
- Faça devoluções.
- Exiba as informações finais.

---

# Desafio (Opcional)

Escolha **qualquer um dos exercícios anteriores** e acrescente pelo menos **dois novos atributos** e **dois novos métodos**, mantendo o encapsulamento e utilizando getters e setters quando necessário.
