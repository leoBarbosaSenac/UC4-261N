# Aula #5 - Classes e Encapsulamento

**Téc em Desenvolvimento de Sistemas Bilíngue**
*Desenvolver Código Orientado a Objetos*

---

# 1. Paradigmas de Programação

Os **paradigmas de programação** são diferentes formas de estruturar e organizar programas. Cada paradigma propõe um conjunto de princípios e boas práticas que ajudam a produzir códigos mais **legíveis**, **reutilizáveis**, **testáveis** e **fáceis de manter**.

Nesta disciplina iremos trabalhar principalmente com a **Programação Orientada a Objetos (POO)**, mas antes é importante conhecer alguns paradigmas bastante utilizados.

## Principais Paradigmas

### Programação Estruturada

A programação estruturada organiza o código utilizando estruturas de controle bem definidas, como:

* Sequência de instruções;
* Estruturas de decisão (`if`, `switch`);
* Estruturas de repetição (`for`, `while`, `do...while`).

Esse modelo torna o fluxo de execução previsível, facilitando a leitura, a manutenção e a depuração do código.

### Programação Orientada a Objetos (POO)

A Programação Orientada a Objetos organiza o software em **objetos**, que agrupam informações e comportamentos relacionados.

Seu principal objetivo é aproximar o código da forma como enxergamos o mundo real, tornando sistemas complexos mais fáceis de desenvolver, compreender e manter.

---

# 2. Orientação a Objetos (POO)

A **Programação Orientada a Objetos (POO)** é um dos paradigmas mais difundidos atualmente.

Ela surgiu na década de 1960 como uma forma de lidar com o aumento da complexidade dos softwares, permitindo organizar melhor os dados e os comportamentos do sistema.

Na POO, a unidade central é o **objeto**.

Um objeto representa uma entidade específica e reúne:

* **Atributos:** informações que descrevem o objeto;
* **Métodos:** ações ou comportamentos que aquele objeto pode executar.

### Exemplo

Imagine um cachorro.

Ele possui algumas características:

* nome;
* peso;
* idade;
* raça.

Essas características são seus **atributos**.

Agora pense nas ações que ele pode realizar:

* latir;
* correr;
* comer;
* dormir.

Essas ações representam seus **métodos**.

Assim, conseguimos representar objetos do mundo real utilizando código.

> **Atenção!**
>
> Nesse contexto, o conceito de objeto é um pouco diferente dos objetos que já conhecemos em JavaScript.
>
> Em JavaScript podemos criar objetos diretamente, sem utilizar uma classe.
>
> Já na Programação Orientada a Objetos tradicional, normalmente criamos objetos a partir de uma **classe**, que funciona como um modelo para sua construção.

---

# 3. Classes e Abstração

## Classes

Uma **classe** funciona como um **molde** ou uma **planta** para criar objetos.

Ela define:

* quais atributos os objetos possuirão;
* quais métodos eles poderão executar;
* valores padrão, quando necessário.

Além disso, a classe contém a implementação dos métodos, ou seja, o código responsável por executar os comportamentos dos objetos.

No **TypeScript**, uma classe também define um **novo tipo**, permitindo que seja utilizada na declaração de variáveis. Esse conceito está relacionado aos **Tipos Abstratos de Dados (TADs)**, que representam tipos definidos pelo próprio programador.

### Classe × Objeto

Uma boa analogia é pensar na construção de uma casa.

A **planta da casa** representa a **classe**.

Ela define:

* quantos quartos existirão;
* onde ficarão as portas;
* onde estarão as janelas.

A casa construída representa um **objeto**.

Podemos construir diversas casas utilizando a mesma planta. Cada uma delas será uma casa diferente, mas todas seguirão o mesmo modelo.

Da mesma forma:

* **Classe** → modelo.
* **Objeto (instância)** → elemento criado a partir desse modelo.

---

## Abstração

A **abstração** consiste em representar apenas as características importantes de um objeto, escondendo detalhes que não são necessários para quem utiliza aquela classe.

Isso torna o código:

* mais simples;
* mais legível;
* mais reutilizável;
* mais consistente;
* mais fácil de expandir.

Boas abstrações reduzem a complexidade do sistema e facilitam sua manutenção, embora sejam difíceis de projetar e normalmente exijam bastante experiência.

---

# 4. Exemplos de Classes (UML / Diagramas)

## Cachorro

### Atributos

* `nome: string`
* `peso: number`

### Métodos

* `latir(): void`
* `comer(quantidade: number): void`

---

## Coruja

### Atributos

* `nome: string`
* `peso: number`

### Métodos

* `chirriar(): void`
* `comer(quantidade: number): void`
* `voar(tempo: number): void`

Observe que **Cachorro** e **Coruja** possuem atributos semelhantes, mas comportamentos diferentes. Cada classe representa um conceito distinto do mundo real.

---

## User

### Atributos

* `nome: string`
* `tarefas: Tarefa[]`

### Métodos

* `adicionarTarefa(): void`
* `removerTarefa(): void`

Esse exemplo representa um objeto mais próximo de uma aplicação real, mostrando que classes não servem apenas para representar objetos físicos, mas também entidades do sistema.

---

# 5. Declarando e Construindo Classes no TypeScript

## Declarando uma Classe

A declaração de uma classe define um novo tipo de objeto e serve como modelo para criar diversas instâncias.

Cada objeto criado a partir da classe é chamado de **instância**.

Cada instância possui sua própria cópia dos atributos definidos pela classe, mas compartilha os métodos implementados nela.

Como a classe define um tipo, ela também pode ser utilizada na declaração de variáveis.

```typescript
export class Dog {
  name: string;
  weight: number;

  bark(): void {
    console.log("Au Au");
  }

  eat(quantity: number): void {
    console.log(`The dog has eaten ${quantity}`);
  }
}

export class Owl {
  name: string;
  weight: number;

  chirp(): void {
    console.log("Hu Hu");
  }

  eat(quantity: number): void {
    console.log(`The owl has eaten ${quantity}`);
  }

  fly(minutes: number): void {
    console.log(`The owl has flown for ${minutes} minutes`);
  }
}
```

Observe que declaramos apenas **o modelo** dos objetos.

Ainda não existe nenhum cachorro ou coruja na memória do programa.

Para isso, precisamos **instanciar** essas classes, assunto que veremos na sequência das aulas.
