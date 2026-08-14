# Exercício — RPG Party System

## Contexto

Você está desenvolvendo um sistema para um RPG de fantasia medieval.

O jogo possui diferentes tipos de aventureiros que podem formar uma **party** para explorar masmorras, enfrentar monstros e encontrar tesouros.

Seu objetivo é desenvolver o sistema utilizando **Programação Orientada a Objetos em TypeScript**, praticando principalmente:

* Classes
* Objetos
* Constructors
* Encapsulamento
* Getters e setters
* Herança
* Objetos como atributos
* Arrays de objetos
* Organização do código em diferentes arquivos

> **Importante:** neste exercício, **não utilize polimorfismo**. Não é necessário utilizar `interface`, `abstract`, `override` ou métodos sobrescritos.

---

# Estrutura do projeto

Organize seu projeto da seguinte maneira:

```text
src/
├── Main.ts
├── Character.ts
├── Warrior.ts
├── Mage.ts
├── Weapon.ts
├── Spell.ts
└── Party.ts
```

Cada classe deverá estar em seu próprio arquivo.

A criação dos objetos e a execução do sistema deverão acontecer no `Main.ts`.

---

# 1. Classe Character

Crie uma classe chamada `Character`.

Ela será a classe base para todos os personagens do RPG.

A classe deverá possuir os seguintes atributos **privados**:

```typescript
name: string
level: number
health: number
```

Crie:

* `constructor`
* getters
* setters

Crie também o método:

```typescript
showInfo(): void
```

Ele deverá mostrar as informações do personagem.

Exemplo:

```text
========================
Character
========================
Name: Aragorn
Level: 10
Health: 150
```

Crie também:

```typescript
takeDamage(amount: number): void
```

Esse método deverá diminuir a vida do personagem.

A vida nunca poderá ficar abaixo de `0`.

---

# 2. Classe Weapon

Crie uma classe chamada `Weapon`.

Ela deverá possuir os seguintes atributos privados:

```typescript
name: string
damage: number
```

Crie:

* `constructor`
* getters
* setters
* `showInfo()`

Exemplo:

```text
========================
Weapon
========================
Name: Longsword
Damage: 35
```

---

# 3. Classe Spell

Crie uma classe chamada `Spell`.

Ela deverá possuir:

```typescript
name: string
damage: number
manaCost: number
```

Todos os atributos deverão ser privados.

Crie:

* `constructor`
* getters
* setters
* `showInfo()`

Exemplo:

```text
========================
Spell
========================
Name: Fireball
Damage: 50
Mana Cost: 30
```

---

# 4. Classe Warrior

Crie uma classe chamada `Warrior` que **herde de `Character`**.

Além dos atributos herdados, um Warrior deverá possuir:

```typescript
strength: number
weapon: Weapon
```

Os atributos deverão ser privados.

Crie:

* `constructor`
* getters
* setters

Crie também:

```typescript
attack(): void
```

O método deverá mostrar uma mensagem informando que o Warrior atacou utilizando sua arma.

Exemplo:

```text
Aragorn attacks with Longsword!
Damage: 35
```

---

# 5. Classe Mage

Crie uma classe chamada `Mage` que também **herde de `Character`**.

O Mage deverá possuir:

```typescript
mana: number
spell: Spell
```

Os atributos deverão ser privados.

Crie:

* `constructor`
* getters
* setters

Crie o método:

```typescript
castSpell(): void
```

O método deverá:

1. Verificar se o Mage possui mana suficiente.
2. Exibir o nome da magia utilizada.
3. Exibir o dano causado.
4. Diminuir a mana de acordo com o custo da magia.

Exemplo:

```text
Gandalf casts Fireball!
Damage: 50
Mana remaining: 70
```

Caso não possua mana suficiente:

```text
Gandalf does not have enough mana!
```

---

# 6. Classe Party

Agora você deverá criar uma classe chamada `Party`.

Uma Party representa um grupo de aventureiros.

Ela deverá possuir:

```typescript
name: string
members: Character[]
```

Os atributos deverão ser privados.

Crie:

* `constructor`
* getters
* setters

A Party deverá possuir os seguintes métodos:

```typescript
addMember(character: Character): void
```

Adiciona um personagem à party.

---

```typescript
removeMember(character: Character): void
```

Remove um personagem da party.

---

```typescript
showMembers(): void
```

Exibe todos os membros da party.

Exemplo:

```text
========================
THE DRAGON SLAYERS
========================

1. Aragorn - Level 10
2. Gandalf - Level 12
3. Legolas - Level 9
```

---

# 7. Relacionamento entre objetos

O exercício deve utilizar bastante o conceito de **objetos dentro de objetos**.

Por exemplo:

```text
Warrior
 └── Weapon
```

e:

```text
Mage
 └── Spell
```

Além disso, a Party deverá possuir vários personagens:

```text
Party
 ├── Warrior
 ├── Mage
 └── Warrior
```

O atributo:

```typescript
members: Character[]
```

deverá armazenar os personagens da Party.

---

# 8. Main

No `Main.ts`, crie uma aventura completa.

Você deverá criar:

### Armas

Pelo menos:

* 2 objetos `Weapon`

### Magias

Pelo menos:

* 2 objetos `Spell`

### Personagens

Pelo menos:

* 2 `Warrior`
* 2 `Mage`

### Party

Crie uma Party contendo os quatro personagens.

Por exemplo:

```text
The Dragon Slayers

├── Aragorn
├── Gimli
├── Gandalf
└── Merlin
```

---

# 9. Demonstração

No `Main.ts`, demonstre todas as funcionalidades criadas.

Seu programa deverá:

1. Criar as armas.
2. Criar as magias.
3. Criar os personagens.
4. Criar uma Party.
5. Adicionar os personagens à Party.
6. Exibir os membros da Party.
7. Exibir as informações dos personagens.
8. Fazer os Warriors atacarem.
9. Fazer os Mages lançarem suas magias.
10. Demonstrar o consumo de mana.
11. Causar dano a pelo menos um personagem.
12. Alterar algum atributo utilizando um setter.
13. Remover um personagem da Party.
14. Exibir novamente a Party após a remoção.

---

# Exemplo de execução

Uma possível execução seria:

```text
========================================
        THE DRAGON SLAYERS
========================================

Party Members:

1. Aragorn - Level 10
2. Gimli - Level 9
3. Gandalf - Level 12
4. Merlin - Level 8

========================================

Aragorn attacks with Longsword!
Damage: 35

Gimli attacks with Battle Axe!
Damage: 45

Gandalf casts Fireball!
Damage: 50
Mana remaining: 70

Merlin casts Ice Bolt!
Damage: 30
Mana remaining: 90

========================================

Gandalf takes 40 damage!

Health remaining: 110

========================================

Party after removing Gimli:

1. Aragorn - Level 10
2. Gandalf - Level 12
3. Merlin - Level 8
```

---

# Regras

* Todo o código deverá estar em **inglês**.
* Cada classe deverá estar em um arquivo separado.
* Todos os atributos deverão ser `private`.
* Utilize getters e setters.
* Utilize constructors.
* Utilize `extends` para implementar herança.
* `Warrior` e `Mage` deverão herdar de `Character`.
* Utilize objetos como atributos de outras classes.
* Utilize um array de objetos na classe `Party`.
* A lógica de execução deverá estar no `Main.ts`.
* Não utilize `interface`.
* Não utilize `abstract`.
* Não utilize polimorfismo.
* Não sobrescreva métodos da classe `Character`.

---

# Desafio Extra — Dungeon Party ⭐

Crie uma classe chamada `Monster`.

Ela deverá possuir:

```typescript
name: string
level: number
health: number
damage: number
```

Utilize encapsulamento, constructor, getters e setters.

Crie os métodos:

```typescript
showInfo(): void
```

e:

```typescript
attack(character: Character): void
```

Depois, no `Main.ts`, crie uma batalha:

```text
========================================
           DUNGEON BATTLE
========================================

Dragon attacks Aragorn!
Aragorn takes 40 damage.

Gandalf casts Fireball!
Dragon takes 50 damage.

Aragorn attacks with Longsword!
Dragon takes 35 damage.

Dragon Health: 115
Aragorn Health: 110
```

**Objetivo do desafio:** utilizar as classes criadas anteriormente para construir uma pequena batalha de RPG, sem criar novos conceitos de POO além dos trabalhados em aula.
