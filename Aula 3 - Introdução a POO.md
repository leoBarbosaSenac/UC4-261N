md_content = """# Aula #5 - Classes e Encapsulamento
**Téc em Desenvolvimento de Sistemas Bilíngue**  
*Desenvolver Código Orientado a Objetos*

---

## 1. Paradigmas de Programação

Os paradigmas de programação indicam formas de pensar e organizar o código, determinando regras que buscam garantir:
- **Legibilidade**
- **Consistência**
- **Testabilidade**
- **Fácil manutenção**

### Principais Paradigmas Apresentados:
* **Estruturada:**
  * Utiliza estruturas condicionais e loops para controlar o fluxo de execução do programa.
  * Impede controle absoluto do fluxo de execução do programa.
* **Orientada a Objetos (POO):**
  * Utiliza objetos para modelar e controlar os dados e suas manipulações.
  * Restringe acesso a variáveis e rotinas a partes específicas do código.

---

## 2. Orientação a Objetos (POO)

* A POO é um dos paradigmas mais difundidos e conhecidos.
* Criada por volta dos anos 60 para ajudar a lidar com a complexidade crescente dos programas.
* Utiliza principalmente o conceito de **objetos** como unidade central de estruturação de dados e rotinas.
* Os objetos podem ser criados de forma a abstrair conceitos do mundo real, simplificando o entendimento do código por pessoas.

### Objetos
No contexto da POO, cada objeto é definido por um conjunto de:
* **Atributos:** Informações (dados) do objeto.
* **Métodos:** Rotinas (funções) que operam sobre os atributos do objeto, ou contextualmente relacionadas.

> **Atenção!**  
> Nesse contexto, o conceito de objetos é um pouco diferente do que conhecemos como "objeto no JavaScript". Os objetos do JS podem ter atributos e métodos, mas não precisam ser criados a partir de algum "template" (como as classes).

---

## 3. Classes e Abstração

### Classes
* Define o formato de um objeto:
  * **Atributos** (propriedades)
  * **Métodos** (funções)
* Possuem as implementações dos métodos e podem possuir valores padrão para os atributos.
* No **TypeScript**, por definir as propriedades e métodos, representa também um **tipo** que pode ser usado para definir variáveis. Chamamos de **Tipos Abstratos de Dados (TAD)**.

### Abstração
* Forma de criar representações mais simples de coisas complexas, escondendo essa complexidade com interfaces mais simples.
* Esconde detalhes de implementação, facilitando o uso e garantindo consistência, mas limitando possibilidades.
* É possível criar múltiplos níveis de abstração.
* Boas abstrações tornam o código mais legível, reaproveitável, consistente e expansível, mas são difíceis de fazer e requerem muito estudo e iteração.

---

## 4. Exemplos de Classes (UML / Diagramas)

### Cachorro
* **Atributos:**
  * `nome: string`
  * `peso: number`
* **Métodos:**
  * `latir(): void`
  * `comer(quantidade: number): void`

### Coruja
* **Atributos:**
  * `nome: string`
  * `peso: number`
* **Métodos:**
  * `chirriar(): void`
  * `comer(quantidade: number): void`
  * `voar(tempo: number): void`

### User
* **Atributos:**
  * `nome: string`
  * `tarefas: Tarefa[]`
* **Métodos:**
  * `adicionarTarefas(): void`
  * `removerTarefa(): void`

---

## 5. Declarando e Construindo Classes no TypeScript

### Declarando uma Classe
* A declaração da classe representa o TAD (Tipo Abstrato de Dados). Ela é um modelo para objetos daquele tipo.
* A classe pode ser usada como um tipo no TypeScript.
* É possível criar diversas **instâncias** da classe. São objetos que necessariamente possuem todos aqueles atributos e métodos.

```typescript
export class Dog {
  name: string;
  weight: number;

  bark(): void {
    console.log("Au Au");
  }

  eat(quantity: number): void {
    console.log("the dog has eaten " + quantity);
  }
}

export class Owl {
  name: string;
  weight: number;

  chirp(): void {
    console.log("Hu Hu");
  }

  eat(quantity: number): void {
    console.log("the owl has eaten " + quantity);
  }

  fly(quantity: number): void {
    console.log("the owl has flown for " + quantity + " minutes");
  }
}
