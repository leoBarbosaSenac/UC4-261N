# Trabalho Final — Cooperativa Raízes da Terra

## Desenvolvimento Orientado a Objetos com TypeScript

### Contexto

A **Cooperativa Raízes da Terra** é uma cooperativa popular formada por pequenos produtores que trabalham com agricultura orgânica.

A cooperativa recebe alimentos produzidos pelos cooperados, organiza seu estoque e realiza doações para instituições de caridade da região.

A cooperativa precisa de um pequeno sistema executado pelo **terminal** para controlar seus produtores, alimentos e instituições beneficiadas.

Você deverá desenvolver esse sistema utilizando os conceitos de **Programação Orientada a Objetos estudados durante a UC**.

---

## Objetivo

Desenvolver uma aplicação em **TypeScript**, executada pelo terminal, capaz de:

- cadastrar produtores;
- cadastrar alimentos;
- cadastrar instituições;
- controlar os alimentos disponíveis;
- realizar doações;
- consultar informações do sistema.

O sistema não precisa utilizar banco de dados. **Todos os dados podem permanecer em memória durante a execução do programa.**

---

# 1. Produtores

Crie uma classe abstrata `Producer`.

Todo produtor deve possuir:

- nome;
- CPF;
- quantidade de alimentos produzidos.

Os dados devem ser **encapsulados**, utilizando propriedades `private` ou `protected` e métodos para acesso ou alteração quando necessário.

Crie pelo menos dois tipos de produtores:

- `FamilyFarmer`
- `CommunityGardenProducer`

Cada tipo de produtor deve possuir alguma característica específica.

Por exemplo:

```text
Family Farmer
- property size

Community Garden Producer
- number of volunteers
```

Utilize **herança** para criar essas classes.

---

# 2. Polimorfismo

A classe `Producer` deve possuir um método que apresente informações sobre o produtor.

Por exemplo:

```typescript
public abstract present(): void;
```

Cada classe filha deverá implementar esse método de maneira diferente.

Ao armazenar diferentes tipos de produtores em uma mesma estrutura:

```typescript
let producers: Producer[] = [];
```

o programa deverá conseguir chamar:

```typescript
producer.present();
```

sem precisar verificar manualmente qual é o tipo do produtor.

O objetivo é demonstrar o uso de **polimorfismo**.

---

# 3. Alimentos

Crie uma classe `Food`.

Cada alimento deve possuir:

- nome;
- categoria;
- quantidade disponível em kg;
- produtor responsável.

Exemplos de alimentos:

```text
Rice
Beans
Potato
Carrot
Tomato
Lettuce
```

A quantidade disponível não pode ser negativa.

Crie métodos para:

- adicionar quantidade;
- retirar quantidade;
- consultar quantidade disponível.

---

# 4. Interface

Crie uma interface chamada `Donatable`.

Ela deverá representar algo que pode ser utilizado em uma doação.

Exemplo:

```typescript
interface Donatable {
    donate(quantity: number): void;
}
```

A classe `Food` deverá implementar essa interface.

Você pode criar outros métodos ou propriedades na interface caso considere necessário.

---

# 5. Instituições beneficiadas

Crie uma classe `Institution`.

Cada instituição deverá possuir:

- nome;
- endereço;
- quantidade de pessoas atendidas.

Exemplos:

```text
Casa de Amparo Esperança
Instituto Viver
Projeto Mãos Unidas
Lar Nova Vida
```

A instituição deverá possuir um método para registrar o recebimento de alimentos.

---

# 6. Doações

O sistema deverá permitir realizar uma doação.

Para realizar uma doação, o usuário deverá informar:

1. alimento;
2. quantidade;
3. instituição beneficiada.

O sistema deverá:

- verificar se o alimento existe;
- verificar se existe quantidade suficiente;
- retirar a quantidade do estoque;
- registrar a doação;
- informar o resultado da operação.

Exemplo:

```text
========================================
          NEW DONATION
========================================

Food: Rice
Quantity: 20 kg
Institution: Casa de Amparo Esperança

Donation completed successfully!
```

---

# 7. Generics

O sistema deverá possuir uma classe genérica para armazenar e manipular dados.

Crie, por exemplo:

```typescript
class Registry<T>
```

Essa classe deverá permitir armazenar objetos e possuir pelo menos métodos para:

```text
add
list
find
```

Por exemplo:

```typescript
let foodRegistry = new Registry<Food>();

let institutionRegistry = new Registry<Institution>();

let producerRegistry = new Registry<Producer>();
```

O objetivo é demonstrar que a mesma classe pode trabalhar com diferentes tipos utilizando **Generics**.

---

# 8. readline-sync

Toda interação com o usuário deverá acontecer pelo terminal utilizando a biblioteca:

```text
readline-sync
```

O sistema deverá possuir um menu principal semelhante a:

```text
========================================
       RAÍZES DA TERRA COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit

Choose an option:
```

O usuário deverá conseguir navegar pelo sistema através desse menu.

---

# 9. Try / Catch

O sistema deverá utilizar `try/catch` para tratar situações de erro.

Alguns exemplos:

- quantidade inválida;
- tentativa de retirar mais alimentos do que existem no estoque;
- tentativa de buscar um objeto que não existe;
- dados inválidos informados pelo usuário.

Exemplo:

```typescript
try {
    food.removeQuantity(50);
} catch (error) {
    console.log("Could not complete the operation.");
}
```

O programa **não deverá ser encerrado inesperadamente** quando ocorrer um erro previsto.

---

# 10. Organização do projeto

O projeto deverá ser organizado em diferentes arquivos.

Uma possível estrutura:

```text
src/
│
├── classes/
│   ├── Producer.ts
│   ├── FamilyFarmer.ts
│   ├── CommunityGardenProducer.ts
│   ├── Food.ts
│   ├── Institution.ts
│   └── Registry.ts
│
├── interfaces/
│   └── Donatable.ts
│
└── main.ts
```

A estrutura pode ser modificada pelo aluno, desde que o projeto permaneça organizado.

---

# Requisitos obrigatórios

O projeto deverá obrigatoriamente demonstrar:

- [ ] Classes
- [ ] Objetos
- [ ] Encapsulamento
- [ ] Construtores
- [ ] Getters e/ou setters quando necessários
- [ ] Herança
- [ ] Classe abstrata
- [ ] Polimorfismo
- [ ] Interfaces
- [ ] Generics
- [ ] Arrays
- [ ] Métodos
- [ ] `try/catch`
- [ ] `readline-sync`
- [ ] Entrada de dados pelo terminal
- [ ] Menu de navegação
- [ ] Organização em diferentes arquivos
- [ ] Tipagem com TypeScript

---

# Regras

1. O projeto deverá ser desenvolvido em **TypeScript**.

2. O sistema deverá funcionar através do **terminal**.

3. Não é necessário utilizar banco de dados.

4. Os dados podem ser armazenados apenas enquanto o programa estiver sendo executado.

5. O código deverá ser organizado em classes e arquivos.

6. Não será permitido concentrar toda a aplicação em `main.ts`.

7. O aluno deverá conseguir **explicar o funcionamento do próprio código** durante a apresentação.

8. Bibliotecas externas poderão ser utilizadas somente quando autorizadas pelo professor.

9. **Todo o código deverá ser escrito em inglês**, incluindo nomes de classes, interfaces, propriedades, métodos, variáveis e arquivos.

---

# Entrega

O projeto deverá ser entregue contendo:

```text
projeto/
├── src/
├── package.json
├── tsconfig.json
└── README.md
```

O `README.md` deverá conter:

- nome dos integrantes;
- descrição breve do projeto;
- instruções para instalação;
- instruções para execução;
- breve explicação das principais classes.

---


# Desafio extra — opcional

Para aqueles que desejarem ir além do requisito básico:

Crie uma classe `Donation` para registrar o histórico de todas as doações realizadas.

Cada doação deverá armazenar:

- alimento;
- quantidade;
- instituição;
- data da doação.

Crie uma opção no menu:

```text
[8] Donation history
```

que apresente todas as doações realizadas durante a execução do sistema.

---

# Resultado esperado

Ao final, o sistema deverá permitir que a Cooperativa Raízes da Terra consiga:

```text
Register producers
        ↓
Register food
        ↓
Manage inventory
        ↓
Register institutions
        ↓
Make donations
        ↓
View information
```

O principal objetivo do trabalho **não é criar um sistema grande**, mas demonstrar que os conceitos de Programação Orientada a Objetos podem ser utilizados em conjunto para resolver um problema real.

---

# Glossário — Português → Inglês

Os nomes utilizados no código deverão seguir o glossário abaixo. Os alunos podem utilizar outras palavras em inglês quando necessário, mas devem manter consistência na nomenclatura.

## Classes

| Português | Inglês |
|---|---|
| Produtor | `Producer` |
| Agricultor Familiar | `FamilyFarmer` |
| Produtor de Horta Comunitária | `CommunityGardenProducer` |
| Alimento | `Food` |
| Instituição | `Institution` |
| Cadastro | `Registry` |
| Doação | `Donation` |
| Classe principal | `Main` |

## Interfaces

| Português | Inglês |
|---|---|
| Doável / que pode ser doado | `Donatable` |

## Propriedades

| Português | Inglês |
|---|---|
| nome | `name` |
| CPF | `cpf` |
| quantidade | `quantity` |
| quantidade disponível | `availableQuantity` |
| quantidade produzida | `producedQuantity` |
| tamanho da propriedade | `propertySize` |
| quantidade de voluntários | `volunteerCount` |
| alimento | `food` |
| categoria | `category` |
| produtor | `producer` |
| endereço | `address` |
| quantidade de pessoas atendidas | `peopleServed` |
| instituição | `institution` |
| data | `date` |
| lista de itens | `items` |

## Métodos

| Português | Inglês |
|---|---|
| apresentar | `present` |
| adicionar | `add` |
| remover | `remove` |
| adicionar quantidade | `addQuantity` |
| retirar quantidade | `removeQuantity` |
| consultar quantidade | `getQuantity` |
| cadastrar | `register` |
| listar | `list` |
| buscar | `find` |
| buscar por nome | `findByName` |
| realizar doação | `makeDonation` |
| doar | `donate` |
| receber | `receive` |
| registrar recebimento | `registerReceipt` |
| mostrar informações | `showInformation` |
| executar menu | `runMenu` |
| exibir menu | `showMenu` |
| escolher opção | `chooseOption` |

## Termos do sistema

| Português | Inglês |
|---|---|
| Cooperativa | `Cooperative` |
| Cooperativa Raízes da Terra | `Raizes da Terra Cooperative` |
| produtor | `producer` |
| alimento | `food` |
| alimentos | `food` |
| estoque | `inventory` |
| instituição | `institution` |
| instituições | `institutions` |
| doação | `donation` |
| doações | `donations` |
| cadastro | `registry` |
| quantidade | `quantity` |
| categoria | `category` |
| endereço | `address` |
| voluntário | `volunteer` |
| voluntários | `volunteers` |
| agricultor familiar | `family farmer` |
| horta comunitária | `community garden` |
| agricultura orgânica | `organic farming` |
| alimento orgânico | `organic food` |
| pessoas atendidas | `people served` |
| beneficiário | `beneficiary` |
| beneficiários | `beneficiaries` |
| adicionar ao estoque | `add to inventory` |
| retirar do estoque | `remove from inventory` |
| quantidade disponível | `available quantity` |
| histórico de doações | `donation history` |

## Ações do menu

| Português | Inglês |
|---|---|
| Cadastrar produtor | `Register producer` |
| Cadastrar alimento | `Register food` |
| Cadastrar instituição | `Register institution` |
| Listar produtores | `List producers` |
| Listar alimentos | `List food` |
| Listar instituições | `List institutions` |
| Realizar doação | `Make donation` |
| Histórico de doações | `Donation history` |
| Sair | `Exit` |
| Escolha uma opção | `Choose an option` |

## Termos de programação

| Português | Inglês |
|---|---|
| classe | `class` |
| classe abstrata | `abstract class` |
| objeto | `object` |
| propriedade | `property` |
| método | `method` |
| atributo | `attribute` |
| construtor | `constructor` |
| interface | `interface` |
| herança | `inheritance` |
| encapsulamento | `encapsulation` |
| polimorfismo | `polymorphism` |
| genérico | `generic` |
| tipo | `type` |
| parâmetro | `parameter` |
| retorno | `return` |
| erro | `error` |
| exceção | `exception` |
| tratamento de erros | `error handling` |
| estoque | `inventory` |
| lista | `list` |
| array | `array` |
| entrada de dados | `input` |
| saída de dados | `output` |

> **Importante:** o glossário serve como referência de nomenclatura. O código deve utilizar nomes em inglês de forma consistente e seguir as convenções de nomenclatura do TypeScript, como `PascalCase` para classes e interfaces e `camelCase` para propriedades, métodos e variáveis.
