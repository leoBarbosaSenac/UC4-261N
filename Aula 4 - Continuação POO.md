# Continuação/Revisão: Programação Orientada a Objetos (POO) em TypeScript

## O que é Programação Orientada a Objetos?

Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em **objetos** que representam entidades do mundo real ou conceitos abstratos. Cada objeto é uma instância de uma **classe** e combina dados (atributos) e comportamentos (métodos).

Em vez de pensar em dados e funções separadamente, na POO você modela coisas do mundo real em código, agrupando suas características e ações.

---

## Conceitos Fundamentais

### Classe

* Uma **classe** é como uma "planta" ou "molde" que define a estrutura e o comportamento de objetos.
* Ela descreve **quais dados** o objeto terá (atributos) e **o que ele poderá fazer** (métodos).
* Uma classe é um conceito abstrato, ou seja, você não pode usá-la diretamente — precisa criar objetos (instâncias) dela.

### Objeto

* Um **objeto** é uma instância concreta de uma classe.
* É o “item” criado a partir do molde, com seus próprios valores nos atributos.
* Objetos interagem entre si através de seus métodos.

---

## Como criar classes e objetos em TypeScript

```typescript
// Definição da classe
export class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Criando um objeto a partir da classe
const pessoa1 = new Pessoa("Ana", 25);

console.log(pessoa1.apresentar()); // Olá, meu nome é Ana e tenho 25 anos.
````

* a palavra `export` serve para exportar a classe, para que possamos usá-la em outras partes do nosso projeto.
* `constructor` é um método especial que é chamado quando criamos um novo objeto, para inicializar seus atributos.
* `this` refere-se ao próprio objeto que está sendo criado.

---

## Propriedades e Métodos

* **Propriedades** são variáveis dentro da classe que guardam dados.
* **Métodos** são funções que definem comportamentos que os objetos da classe podem executar.

---

## Encapsulamento: controlando o acesso aos dados

Na Programação Orientada a Objetos, **encapsulamento** significa proteger o acesso direto aos atributos de um objeto, controlando como eles são lidos ou alterados. No caso, normalmente, encapsulamos os atributos (não os deixamos public)

Em TypeScript, usamos **modificadores de acesso** para definir a visibilidade:

* `public` (padrão) → acessível de qualquer lugar.
* `private` → acessível **somente dentro da própria classe**.
* `protected` → acessível dentro da própria classe e em classes que herdam dela.

Quando usamos `private`, **não podemos acessar o atributo diretamente de fora da classe**.
Isso é intencional: serve para proteger os dados contra alterações inesperadas e manter a integridade do objeto.
Por exemplo, se antes podíamos acessar/trocar o valor de um atributo assim:

```ts
objeto.nome = "Leonardo" // trocando
console.log(objeto.nome) // acessando
```

Agora, com o encapsulamento, só podemos acessá-lo/trocá-lo usando os métodos getters/setters:

```ts
objeto.setNome("Leonardo") // trocando
console.log(objeto.getNome) // acessando
```

Se o setter não tiver regras, realmente não adianta muito. A vantagem é justamente poder colocar lógica para impedir valores errados, avisar sobre alterações ou até calcular algo antes de retornar/alterar o valor.

---

### Por que precisamos de *getters* e *setters*?

Se um atributo é `private`, mas ainda precisamos **ler** ou **alterar** seu valor de forma controlada, usamos:

* **Getter** → um método que retorna o valor do atributo privado.
* **Setter** → um método que altera o valor do atributo privado, possivelmente com validações.

Usamos getters e setters para:

1. **Proteger dados sensíveis** (por exemplo, impedir que o saldo de uma conta seja alterado sem validação).
2. **Executar validações** antes de mudar um valor (por exemplo, não permitir idade negativa).
3. **Manter a flexibilidade do código** (podemos mudar a lógica interna sem alterar o resto do programa).

---

### Exemplo com Getter e Setter

```typescript
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  // Getter - permite ler o saldo
  getSaldo(): number {
    return this.saldo;
  }

  // Setter - permite modificar o saldo com validação
  setSaldo(valor: number): void {
    if (valor >= 0) {
      this.saldo = valor;
    } else {
      console.log("Erro: saldo não pode ser negativo.");
    }
  }
}

const conta = new ContaBancaria(1000);

// Ler usando getter
console.log(conta.getSaldo()); // 1000

// Alterar usando setter
conta.setSaldo(1500);
console.log(conta.getSaldo()); // 1500

// Tentativa inválida
conta.setSaldo(-200); // Erro: saldo não pode ser negativo
```

> 💡 **Resumo**: `private` evita acesso direto, mas getters e setters nos permitem acessar/modificar o dado de forma **segura e controlada**.


# Exercício: Evoluindo o Sistema de Personagens de RPG ⚔️

Nos exercícios anteriores, você criou um **Warrior** e um **Monster** com os atributos `name` e `health`.

Agora, vamos evoluir essas classes para deixá-las mais completas.

---

## Parte 1 – Encapsulation

Transforme os atributos da classe em **private** e crie os **getters** e **setters** necessários para acessá-los e modificá-los de forma segura.

> **Dica:** utilize os setters para impedir valores inválidos, como um `health` menor que `0`.

---

## Parte 2 – Método `attack()`

Implemente um método `attack()` que represente um ataque contra outro personagem.

Você pode escolher uma das abordagens:

- **Opção A:** o método recebe o alvo e reduz diretamente o `health` dele.
- **Opção B:** o método apenas retorna o valor do dano causado (`number`), deixando que quem chamou o método aplique esse dano.

---

## Parte 3 – Método `heal()`

Crie um método `heal(amount: number)` que aumente o `health` do personagem.

Regras:

- O `health` nunca pode ultrapassar um valor máximo (`maxHealth`).
- O método deve atualizar corretamente o valor da vida.

---

## Teste

No arquivo principal (`index.ts`):

1. Crie um objeto da classe `Warrior`.
2. Crie um objeto da classe `Monster`.
3. Faça o `Warrior` atacar o `Monster`.
4. Faça o `Monster` atacar o `Warrior`.
5. Cure o `Warrior`.
6. Exiba o `health` dos dois personagens após cada ação utilizando os getters.

---

## Exemplo de saída esperada

```text
Warrior attacked Monster and dealt 15 damage.
Monster health: 35

Monster attacked Warrior and dealt 8 damage.
Warrior health: 42

Warrior healed 10 health points.
Warrior health: 50
```

---

## Desafio (Opcional) ⭐

Adicione um atributo `strength` às classes e utilize esse valor para calcular o dano causado pelo método `attack()`. Assim, personagens diferentes poderão causar quantidades diferentes de dano.
