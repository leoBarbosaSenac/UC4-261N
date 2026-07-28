# Aula 3 - Classes e Encapsulamento

> **Téc em Desenvolvimento de Sistemas Bilíngue**  
> Unidade Curricular: Desenvolver Código Orientado a Objetos

---

# 1. Paradigmas de Programação

Os paradigmas de programação representam diferentes maneiras de pensar, estruturar e organizar um programa. Cada paradigma propõe princípios que ajudam a produzir códigos mais legíveis, consistentes, testáveis e fáceis de manter.

## Programação Estruturada

- Organiza o programa utilizando estruturas de sequência, decisão e repetição.
- Utiliza estruturas como `if`, `switch`, `for` e `while`.
- Torna o fluxo de execução previsível e organizado.

## Programação Orientada a Objetos (POO)

- Organiza o software utilizando objetos.
- Agrupa dados e comportamentos relacionados.
- Facilita o reaproveitamento de código e a manutenção de sistemas complexos.

---

# 2. Objetos

Na Programação Orientada a Objetos, um objeto representa uma entidade do mundo real ou do próprio sistema.

Todo objeto possui:

- **Atributos** → informações que descrevem o objeto.
- **Métodos** → ações que o objeto pode executar.

## Exemplo

**Cachorro**

Atributos:

- nome
- peso

Métodos:

- latir()
- comer()

> Em JavaScript existem objetos criados diretamente. Na POO tradicional, normalmente criamos objetos a partir de uma **classe**.

---

# 3. Classes

Uma classe funciona como um molde para criar objetos.

Ela define:

- quais atributos existirão;
- quais métodos estarão disponíveis;
- possíveis valores padrão.

No TypeScript, uma classe também representa um tipo que pode ser utilizado na declaração de variáveis.

---

# 4. Abstração

Abstração consiste em representar apenas as características importantes de um objeto, escondendo detalhes de implementação.

Boas abstrações tornam o código:

- mais simples;
- mais reutilizável;
- mais legível;
- mais consistente;
- mais fácil de expandir.

---

# 5. Exemplos de Modelagem

## Cachorro

### Atributos

- nome: string
- peso: number

### Métodos

- latir()
- comer()

---

## Coruja

### Atributos

- nome: string
- peso: number

### Métodos

- chirriar()
- comer()
- voar()

---

## User

### Atributos

- nome: string
- email: string
- tarefas: Tarefa[]

### Métodos

- adicionarTarefa()
- removerTarefa()
- listarTarefas()

---

# Exercício 1 — Modelagem

Sem escrever código, modele as seguintes classes.

## Guerreiro

Inicia com:

- Saúde: 100

Defina:

- Nome
- Tipo
- Força
- Saúde

Além disso, pense em métodos que façam sentido.

---

## Monstro

Inicia com:

- Força: 50
- Saúde: 10

Defina:

- Nome
- Força
- Saúde

Também crie métodos apropriados.

---

# 6. Declarando Classes no TypeScript

Uma classe é declarada utilizando a palavra-chave `class`.

```ts
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
```

Uma classe pode ser utilizada como um tipo.

Também podemos criar diversas instâncias dessa classe.

---

# Exercício 2 — Implementando as Classes

Implemente em TypeScript as classes Guerreiro e Monstro modeladas anteriormente.

Neste momento, não utilize construtor.

---

# 7. Constructor

Podemos executar ações automaticamente quando um objeto é criado.

Para isso utilizamos o método especial `constructor`.

```ts
constructor(name: string, weight: number){

    this.name = name;
    this.weight = weight;

}
```

Quando não declaramos um construtor, o TypeScript cria um construtor vazio automaticamente.

---

# 8. A palavra-chave this

A referência `this` aponta para a instância atual da classe.

Ela é utilizada para acessar atributos e métodos do próprio objeto.

```ts
this.name
this.weight
this.bark()
```

---

# 9. Criando Objetos

Para criar uma instância utilizamos a palavra-chave `new`.

```ts
const dog1 = new Dog("Rex", 15);

const dog2 = new Dog("Bob", 8);
```

Cada objeto possui seus próprios atributos.

---

# Exercício 3 — Constructors

Atualize as classes Guerreiro e Monstro.

Agora:

- utilize constructor;
- utilize this;
- crie duas instâncias de Guerreiro;
- crie dois Monstros.

---

# 10. Encapsulamento

Encapsulamento consiste em controlar como os dados de uma classe podem ser acessados.

Boas abstrações escondem detalhes da implementação e expõem apenas o necessário.

---

# 11. public, private e protected

Os membros de uma classe podem possuir modificadores de acesso que controlam onde eles podem ser utilizados.

## `public`

Pode ser acessado de qualquer lugar.

É o modificador padrão do TypeScript. Quando nenhum modificador é informado, o atributo ou método será público.

## `private`

Pode ser acessado apenas dentro da própria classe.

Nem mesmo classes que herdam dessa classe conseguem acessar um membro `private`.

## `protected`

Pode ser acessado dentro da própria classe **e também pelas classes filhas (herdeiras)**.

Entretanto, não pode ser acessado diretamente por código externo.

> **Observação:** Embora ainda não tenhamos estudado herança, o modificador `protected` será muito útil na próxima aula, quando veremos como uma classe pode herdar atributos e métodos de outra.

### Exemplo

```ts
export class Dog {

    public breed: string;
    protected age: number;
    private name: string;
    private weight: number;

}
```

### Comparação

| Modificador | Mesma classe | Classes filhas | Fora da classe |
|-------------|:------------:|:--------------:|:--------------:|
| `public` | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ❌ |
| `private` | ✅ | ❌ | ❌ |

---

# Exercício 4 — Encapsulando

Transforme todos os atributos das classes **Guerreiro** e **Monstro** em `private`.

Depois, tente acessá-los diretamente para observar o erro gerado pelo TypeScript.

> **Desafio:** Escolha um dos atributos e altere seu modificador para `protected`.
>
> Embora ainda não tenhamos estudado herança, pense:
>
> **Em quais situações esse modificador poderia ser útil?**

---

# 12. Getters e Setters

Uma prática muito comum é deixar os atributos privados e permitir o acesso apenas através de métodos públicos.

## Getter

Retorna o valor de um atributo.

```ts
public getName(): string {

    return this.name;

}
```

## Setter

Altera o valor de um atributo.

```ts
public setName(name: string): void {

    this.name = name;

}
```

Essa abordagem aumenta a segurança, a consistência e facilita futuras alterações.

---

# Exercício 5 — Getters e Setters

Implemente getters e setters para:

- nome;
- força;
- saúde.

Como desafio, faça o setter de saúde impedir valores negativos.

---

# Resumo

Nesta aula aprendemos:

- Paradigmas de programação;
- Objetos;
- Classes;
- Abstração;
- Modelagem;
- Declaração de classes em TypeScript;
- Instâncias;
- Constructor;
- this;
- new;
- Encapsulamento;
- public;
- private;
- Getters;
- Setters.

Na próxima aula veremos como as classes podem compartilhar comportamentos através de Herança e Polimorfismo.
