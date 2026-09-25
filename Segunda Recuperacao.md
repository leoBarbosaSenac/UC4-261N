# 🛢️ Recuperação de trabalhos — Plataforma de Gerenciamento de uma Plataforma de Petróleo Marítima

> **Unidade Curricular:** Desenvolver Código Orientado a Objetos  
> **Tecnologia:** TypeScript  
> **Formato:** Aplicação executada pelo terminal  
> **Trabalho:** Desenvolvimento em equipe

---

## 🎯 Contexto

Uma empresa de exploração de petróleo possui uma **plataforma de petróleo marítima** responsável pela extração e armazenamento de petróleo em alto-mar.

A empresa precisa de um sistema para auxiliar no gerenciamento das operações da plataforma.

O sistema deverá permitir o cadastro e o gerenciamento de **funcionários, equipamentos e operações**, além de apresentar informações sobre o funcionamento da plataforma.

O objetivo deste projeto é aplicar, em uma situação mais próxima de um sistema real, os conceitos de **Programação Orientada a Objetos estudados na UC4**.

---

# 📌 Objetivo do projeto

Desenvolva, em TypeScript, uma aplicação de terminal capaz de representar e gerenciar uma plataforma de petróleo marítima.

O sistema deverá possuir:

- classes;
- objetos;
- atributos e métodos;
- construtores;
- encapsulamento;
- getters e setters;
- herança;
- `protected`;
- polimorfismo;
- interfaces;
- enums;
- arrays;
- estruturas condicionais;
- estruturas de repetição;
- entrada de dados pelo terminal;
- organização do projeto em arquivos;
- generics.

> **Importante:** o objetivo não é apenas fazer o programa funcionar. O código deverá demonstrar que os conceitos da UC4 foram utilizados corretamente.

---

# 🧱 1. Organização dos arquivos

Organize o projeto utilizando uma estrutura semelhante a esta:

```text
src/
├── classes/
│   ├── Plataforma.ts
│   ├── Funcionario.ts
│   ├── Operador.ts
│   ├── Engenheiro.ts
│   ├── Tecnico.ts
│   ├── Equipamento.ts
│   ├── Bomba.ts
│   ├── Gerador.ts
│   └── Tanque.ts
│
├── interfaces/
│   ├── Manutencao.ts
│   └── Operacao.ts
│
├── enums/
│   ├── Cargo.ts
│   ├── StatusEquipamento.ts
│   └── StatusPlataforma.ts
│
├── generics/
│   └── Gerenciador.ts
│
└── index.ts
```

A organização acima é uma sugestão. Vocês podem criar outros arquivos e classes caso considerem necessário.

---

# 👷 2. Classe base `Funcionario`

Crie uma classe `Funcionario`.

Ela deverá possuir, no mínimo:

- `nome`
- `idade`
- `matricula`
- `salario`
- `cargo`

### Regras

1. A matrícula deve ser identificadora do funcionário.
2. O salário não deve poder ser alterado diretamente de fora da classe.
3. O nome e a idade devem possuir tipos adequados.
4. A classe deve possuir um construtor.
5. Crie métodos para apresentar os dados do funcionário.
6. Utilize encapsulamento.

Exemplo de comportamento esperado:

```text
Nome: Carlos Silva
Matrícula: 1025
Cargo: Engenheiro
Salário: R$ 8500.00
```

---

# 👨‍🔧 3. Herança — tipos de funcionários

Crie pelo menos **três classes que herdem de `Funcionario`**:

- `Operador`
- `Engenheiro`
- `Tecnico`

Cada classe deverá possuir alguma característica ou comportamento próprio.

Por exemplo:

```text
Operador → opera equipamentos
Engenheiro → realiza análise técnica
Tecnico → realiza manutenção
```

Utilize:

```typescript
extends
super
```

---

# 🔐 4. Encapsulamento

Os dados importantes das classes não devem ficar todos públicos.

Utilize:

```typescript
private
protected
public
```

### Obrigatório

Pelo menos um atributo deverá ser `private`.

Crie **getter e setter** para pelo menos um atributo.

O setter deverá possuir alguma regra de validação.

### Exemplo de regra

O salário não pode ser menor ou igual a zero.

```text
Salário inválido!
```

Caso o valor seja válido, a alteração deverá ser realizada.

---

# 🛡️ 5. Uso de `protected`

Utilize pelo menos um atributo ou método `protected` na classe `Funcionario` ou em outra classe base.

Esse membro deverá ser utilizado por alguma classe filha.

O objetivo é demonstrar que vocês compreenderam a diferença entre:

```text
public
private
protected
```

---

# 🔄 6. Polimorfismo

A classe `Funcionario` deverá possuir um método que possa ser sobrescrito pelas classes filhas.

Por exemplo:

```typescript
trabalhar(): void
```

Cada tipo de funcionário deverá possuir uma implementação diferente.

Exemplo:

```text
Carlos está operando os equipamentos da plataforma.

Ana está realizando uma análise técnica da plataforma.

João está realizando manutenção em um equipamento.
```

Depois, crie um array:

```typescript
Funcionario[]
```

Adicione diferentes tipos de funcionários nesse array.

Percorra o array e execute o mesmo método para todos.

O resultado deverá demonstrar o **polimorfismo**.

---

# ⚙️ 7. Classe base `Equipamento`

Crie uma classe `Equipamento`.

Ela deverá possuir, no mínimo:

- `codigo`
- `nome`
- `marca`
- `status`

Crie pelo menos três subclasses:

- `Bomba`
- `Gerador`
- `Tanque`

Cada equipamento deverá possuir alguma característica específica.

---

# 🔧 8. Polimorfismo nos equipamentos

Crie na classe `Equipamento` um método:

```typescript
operar(): void
```

Cada equipamento deverá sobrescrever esse método.

Exemplo:

```text
A bomba BP-01 está bombeando petróleo.

O gerador GE-02 está produzindo energia.

O tanque TN-03 está armazenando petróleo.
```

Depois, crie:

```typescript
const equipamentos: Equipamento[] = [...]
```

Percorra a lista utilizando o método `operar()`.

---

# 📋 9. Interfaces

Crie pelo menos **duas interfaces**.

## Interface `Manutencao`

Deverá representar algo que pode receber manutenção.

Sugestão:

```typescript
interface Manutencao {
    realizarManutencao(): void;
}
```

Pelo menos duas classes deverão implementar essa interface.

---

## Interface `Operacao`

Crie uma segunda interface relacionada à operação da plataforma.

Ela deverá possuir pelo menos um método.

Por exemplo:

```typescript
interface Operacao {
    iniciarOperacao(): void;
}
```

Escolham quais classes deverão implementar essa interface.

---

# 🧩 10. Implementação de múltiplas interfaces

Pelo menos uma classe deverá implementar **duas interfaces simultaneamente**.

Exemplo conceitual:

```typescript
class Bomba extends Equipamento implements Manutencao, Operacao
```

A classe deverá implementar todos os métodos exigidos pelas interfaces.

---

# 📊 11. Enums

Crie pelo menos **três enums**.

Sugestões:

## `Cargo`

```text
OPERADOR
ENGENHEIRO
TECNICO
GERENTE
```

## `StatusEquipamento`

```text
OPERACIONAL
MANUTENCAO
DANIFICADO
DESATIVADO
```

## `StatusPlataforma`

```text
OPERANDO
MANUTENCAO
EMERGENCIA
DESATIVADA
```

Utilize os enums nas classes em vez de utilizar strings soltas para representar esses estados.

---

# 🛢️ 12. Classe `Plataforma`

Crie uma classe responsável por representar a plataforma de petróleo.

Ela deverá possuir informações como:

- nome;
- localização;
- capacidade de produção;
- status;
- lista de funcionários;
- lista de equipamentos.

A classe deverá possuir métodos para:

- adicionar funcionário;
- remover funcionário;
- listar funcionários;
- adicionar equipamento;
- remover equipamento;
- listar equipamentos;
- iniciar operação;
- encerrar operação;
- exibir informações da plataforma.

---

# 📦 13. Generics — classe de gerenciamento

Crie uma classe genérica:

```typescript
Gerenciador<T>
```

Essa classe deverá ser capaz de armazenar diferentes tipos de objetos.

Ela deverá possuir, no mínimo, métodos para:

```text
adicionar
remover
listar
buscar
```

Exemplo conceitual:

```typescript
Gerenciador<Funcionario>
Gerenciador<Equipamento>
```

A mesma classe deverá ser utilizada para gerenciar diferentes tipos de objetos.

---

# 🔎 14. Busca genérica

O método de busca deverá utilizar uma condição para localizar objetos.

Por exemplo:

```typescript
buscar(condicao: (item: T) => boolean): T[]
```

A aplicação deverá utilizar esse recurso para realizar pelo menos **duas buscas diferentes**.

Exemplos:

```text
Buscar funcionários pelo cargo.

Buscar equipamentos pelo status.

Buscar equipamentos pelo código.

Buscar funcionários pelo nome.
```

Não crie uma classe de gerenciamento diferente para cada tipo de objeto.

A ideia é justamente utilizar o **Generic** para reaproveitar a mesma estrutura.

---

# 🔒 15. Restrição de Generic

Crie pelo menos uma função ou classe genérica que utilize:

```typescript
extends
```

para restringir o tipo aceito.

Por exemplo, vocês podem criar uma função que trabalhe somente com objetos que possuam uma propriedade específica.

A restrição deve fazer sentido dentro do sistema desenvolvido.

---

# 💻 16. Menu principal

O programa deverá ser executado pelo terminal.

Utilize `readline-sync` para permitir a interação com o usuário.

O programa deverá possuir um menu semelhante a:

```text
========================================
       PLATAFORMA OCEANIC-01
========================================

1 - Cadastrar funcionário
2 - Listar funcionários
3 - Buscar funcionário
4 - Cadastrar equipamento
5 - Listar equipamentos
6 - Buscar equipamento
7 - Operar equipamentos
8 - Realizar manutenção
9 - Ver informações da plataforma
0 - Encerrar programa

Escolha uma opção:
```

O menu deverá continuar aparecendo enquanto o usuário não escolher a opção de encerramento.

---

# 🔁 17. Estruturas de decisão e repetição

O programa deverá utilizar os conhecimentos da revisão de JavaScript.

Utilize, quando fizer sentido:

- `if / else`;
- `switch / case`;
- `for`;
- `while`;
- `for...of`.

O menu principal deverá utilizar uma estrutura de repetição.

As opções do menu deverão utilizar uma estrutura de decisão.

---

# ⚠️ 18. Validações

O sistema deverá possuir algumas validações.

No mínimo:

### Funcionários

- idade não pode ser negativa;
- salário deve ser maior que zero;
- matrícula não pode estar vazia.

### Equipamentos

- código não pode estar vazio;
- equipamento não pode ser cadastrado com código duplicado;
- equipamento deve possuir um status válido.

### Plataforma

- não permitir iniciar uma operação se a plataforma estiver desativada;
- não permitir operar um equipamento que esteja danificado;
- não permitir remover um funcionário inexistente.

As regras podem ser ampliadas pela equipe.

---

# 🧪 19. Demonstração obrigatória

Ao iniciar o programa, o sistema deverá possuir alguns dados cadastrados previamente.

Cadastre pelo menos:

### Funcionários

- 1 operador;
- 1 engenheiro;
- 1 técnico.

### Equipamentos

- 1 bomba;
- 1 gerador;
- 1 tanque.

Depois disso, o usuário deverá conseguir utilizar o menu para adicionar novos registros.

---

# 🗂️ 20. Separação de responsabilidades

Evite colocar todo o código dentro do `index.ts`.

O arquivo principal deverá ser responsável principalmente por:

- iniciar o sistema;
- exibir o menu;
- receber as opções do usuário;
- chamar os métodos das classes.

As regras de negócio deverão ficar nas respectivas classes.

Por exemplo:

```text
Funcionario.ts
→ regras relacionadas aos funcionários

Equipamento.ts
→ regras relacionadas aos equipamentos

Plataforma.ts
→ regras relacionadas à plataforma

Gerenciador.ts
→ gerenciamento genérico dos objetos
```

---

# ⭐ 21. Desafio adicional — produção de petróleo

Para equipes que terminarem as funcionalidades obrigatórias, implemente um sistema de produção.

A plataforma deverá possuir:

```text
produção diária
produção total
capacidade máxima diária
```

Crie métodos para:

- registrar produção;
- consultar produção diária;
- consultar produção acumulada;
- verificar se a capacidade máxima foi ultrapassada.

### Regra

A plataforma não poderá registrar uma produção diária superior à sua capacidade máxima.

---

# ⭐ 22. Desafio adicional — incidentes

Crie uma classe ou estrutura para representar incidentes na plataforma.

Exemplos:

```text
Falha em equipamento
Vazamento
Incêndio
Parada de emergência
```

O sistema deverá permitir registrar um incidente e alterar o status da plataforma para:

```text
EMERGENCIA
```

Enquanto estiver em emergência, a plataforma não poderá iniciar novas operações.

---

# ⭐ 23. Requisitos técnicos

O projeto deverá:

- ser desenvolvido em TypeScript;
- utilizar Node.js;
- possuir `tsconfig.json`;
- utilizar `readline-sync`;
- utilizar classes;
- utilizar objetos;
- utilizar construtores;
- utilizar herança;
- utilizar encapsulamento;
- utilizar `private`;
- utilizar `protected`;
- utilizar getters/setters;
- utilizar polimorfismo;
- utilizar interfaces;
- utilizar enums;
- utilizar arrays;
- utilizar Generics;
- utilizar `extends` em pelo menos uma restrição de Generic;
- utilizar estruturas condicionais;
- utilizar estruturas de repetição;
- possuir entrada de dados pelo terminal;
- possuir código dividido em arquivos.

---

# 📦 24. Entrega

A entrega deverá conter:

```text
📁 Projeto
├── package.json
├── tsconfig.json
├── src/
│   ├── ...
│   └── index.ts
└── README.md
```

O `README.md` deverá explicar:

1. Nome do projeto;
2. Integrantes da equipe;
3. Objetivo do sistema;
4. Como instalar as dependências;
5. Como executar o projeto;
6. Estrutura das principais classes;
7. Conceitos de POO utilizados.

---

# 🗣️ 27. Apresentação

Durante a apresentação, cada integrante deverá ser capaz de explicar:

- uma classe criada pela equipe;
- um objeto criado a partir dessa classe;
- como funciona a herança;
- onde foi utilizado encapsulamento;
- onde foi utilizado `protected`;
- onde ocorre o polimorfismo;
- quais interfaces foram criadas;
- onde os enums são utilizados;
- como funciona o `Gerenciador<T>`;
- por que foi utilizado Generic em vez de `any`;
- como funciona a busca genérica.

> **Importante:** não basta apresentar o programa funcionando. O integrante deverá conseguir explicar o código que desenvolveu.

---

# 🏁 Resultado esperado

Ao final do projeto, vocês deverão possuir um sistema de terminal capaz de representar uma **plataforma de petróleo marítima**, seus funcionários e equipamentos, utilizando os principais conceitos de Programação Orientada a Objetos estudados durante a UC4.

O projeto deve demonstrar principalmente a capacidade de:

> **modelar um problema real utilizando classes, organizar responsabilidades e reutilizar código através de herança, interfaces, polimorfismo e Generics.**

Boa implementação! 🛢️⚙️
