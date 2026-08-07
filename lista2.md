# Exercícios de POO com TypeScript

## Orientações gerais

Para todos os exercícios:

* Utilize **TypeScript**.
* Cada classe deve ficar em seu próprio arquivo.
* Crie um arquivo `Main.ts` para executar e testar o sistema.
* Utilize **construtores** para inicializar os objetos.
* Utilize **encapsulamento**, mantendo os atributos como `private` sempre que fizer sentido.
* Crie **getters e setters** quando necessário.
* Utilize métodos para representar ações dos objetos.
* Evite colocar toda a lógica dentro da `Main`.
* **Não utilize ainda:** interfaces, herança, polimorfismo ou classes abstratas.
* Sempre que uma classe possuir outra classe como atributo, utilize **objetos reais**, e não apenas strings ou números representando esses objetos.

---

# Exercício 1 — Academia de Magos de Hogwarts 🪄

Você foi contratado para desenvolver um pequeno sistema para controlar os alunos de uma escola de magia.

O sistema deverá possuir as seguintes classes:

### Classe `Spell`

Representa uma magia.

A classe deve possuir:

* `name`
* `damage`
* `manaCost`

Crie métodos para:

* Exibir as informações da magia.
* Alterar o dano da magia.
* Verificar se uma determinada quantidade de mana é suficiente para utilizar a magia.

---

### Classe `Wizard`

Representa um aluno da escola de magia.

A classe deve possuir:

* `name`
* `house`
* `mana`
* Um **array de objetos `Spell`** representando as magias que o aluno conhece.

Crie métodos para:

* Aprender uma nova magia.
* Exibir todas as magias conhecidas.
* Utilizar uma magia.
* Verificar se o aluno conhece determinada magia.
* Recuperar mana.

Ao utilizar uma magia:

1. Verifique se o aluno conhece a magia.
2. Verifique se possui mana suficiente.
3. Caso possua, diminua sua mana de acordo com o custo da magia.
4. Exiba o dano causado.

---

### Classe `House`

Represente a casa de Hogwarts.

Ela deve possuir:

* `name`
* `founder`
* `points`

Crie métodos para:

* Adicionar pontos à casa.
* Remover pontos.
* Exibir os dados da casa.

---

### Regras da `Main`

Na `Main`:

1. Crie pelo menos duas casas.
2. Crie pelo menos três magos.
3. Crie várias magias.
4. Faça cada mago aprender diferentes magias.
5. Faça os magos utilizarem suas magias.
6. Altere a pontuação das casas.
7. Exiba o estado final dos magos e das casas.

**Desafio extra:** não permita que um mago aprenda duas vezes a mesma magia.

---

# Exercício 2 — Guilda de Aventureiros ⚔️

Você está desenvolvendo um sistema para controlar uma guilda de aventureiros de um RPG.

O sistema deverá possuir as classes:

### Classe `Item`

Representa um item que pode ser carregado por um aventureiro.

Atributos:

* `name`
* `weight`
* `value`

Crie métodos para:

* Exibir informações do item.
* Alterar seu valor.
* Alterar seu peso.

---

### Classe `Character`

Representa um aventureiro.

Atributos:

* `name`
* `level`
* `gold`
* `inventory`

O `inventory` deve ser um:

```typescript
Item[]
```

Crie métodos para:

* Adicionar item ao inventário.
* Remover item.
* Procurar um item pelo nome.
* Exibir o inventário.
* Calcular o peso total do inventário.
* Vender um item, aumentando a quantidade de ouro do personagem.

---

### Classe `Quest`

Representa uma missão da guilda.

Atributos:

* `title`
* `description`
* `reward`
* `requiredLevel`
* `completed`

Crie métodos para:

* Verificar se um personagem pode aceitar a missão.
* Completar a missão.
* Exibir informações da missão.

Um personagem só poderá aceitar uma missão se seu nível for suficiente.

---

### Classe `Guild`

Representa a guilda.

Atributos:

* `name`
* `characters`
* `quests`

Tanto `characters` quanto `quests` devem ser arrays de objetos:

```typescript
Character[]
Quest[]
```

Crie métodos para:

* Adicionar personagem.
* Adicionar missão.
* Listar personagens.
* Listar missões.
* Procurar personagem pelo nome.
* Procurar missão pelo título.

---

### Regras da `Main`

Crie uma guilda contendo:

* Pelo menos 3 personagens.
* Pelo menos 5 itens.
* Pelo menos 4 missões.

Faça os personagens receberem itens, aceitarem missões e completarem algumas delas.

**Desafio extra:** crie uma regra de peso máximo para o inventário de cada personagem.

---

# Exercício 3 — Frota Espacial 🚀

A humanidade começou a explorar a galáxia e você foi contratado para desenvolver o sistema de gerenciamento de uma pequena frota espacial.

### Classe `Planet`

Representa um planeta.

Atributos:

* `name`
* `population`
* `distanceFromEarth`

Crie métodos para:

* Exibir informações do planeta.
* Alterar a população.
* Calcular o tempo necessário para chegar ao planeta considerando uma velocidade fornecida.

---

### Classe `CrewMember`

Representa um membro da tripulação.

Atributos:

* `name`
* `role`
* `age`

Exemplos de funções:

* Pilot
* Engineer
* Scientist
* Doctor

---

### Classe `Spaceship`

Representa uma nave espacial.

Atributos:

* `name`
* `fuel`
* `maxFuel`
* `crew`
* `destination`

Onde:

```typescript
crew: CrewMember[]
destination: Planet | null
```

Crie métodos para:

* Adicionar tripulante.
* Remover tripulante.
* Abastecer a nave.
* Definir destino.
* Exibir a tripulação.
* Exibir informações da nave.
* Viajar para o planeta de destino.

Para viajar, a nave deverá possuir combustível suficiente.

---

### Regras da viagem

Para simplificar, considere que:

> Para cada 100 milhões de quilômetros percorridos, a nave consome 10 unidades de combustível.

Ao viajar:

1. Verifique se existe um destino.
2. Calcule a quantidade de combustível necessária.
3. Verifique se a nave possui combustível suficiente.
4. Caso possua, diminua o combustível.
5. Exiba uma mensagem informando a viagem.

---

### Classe `Fleet`

Representa uma frota.

Atributos:

```typescript
name: string
ships: Spaceship[]
```

Crie métodos para:

* Adicionar nave.
* Remover nave.
* Listar todas as naves.
* Procurar uma nave pelo nome.
* Exibir a quantidade total de tripulantes da frota.

---

### Regras da `Main`

Crie:

* Pelo menos 3 planetas.
* Pelo menos 5 tripulantes.
* Pelo menos 2 naves.
* Uma frota contendo as naves.

Distribua os tripulantes entre as naves e faça diferentes viagens.

**Desafio extra:** crie uma regra que impeça uma nave de viajar sem pelo menos um piloto.

---

# Exercício 4 — Pokédex e Centro Pokémon ⚡

Você foi contratado pelo Professor Oak para criar um sistema simples para controlar Pokémon e treinadores.

### Classe `Pokemon`

Atributos:

* `name`
* `type`
* `level`
* `hp`
* `maxHp`

Crie métodos para:

* Receber dano.
* Curar.
* Aumentar de nível.
* Exibir informações.

O HP nunca poderá:

* Ficar abaixo de `0`.
* Ultrapassar `maxHp`.

---

### Classe `Trainer`

Representa um treinador Pokémon.

Atributos:

* `name`
* `age`
* `pokemons`

O atributo `pokemons` deverá ser:

```typescript
Pokemon[]
```

Crie métodos para:

* Capturar um Pokémon.
* Liberar um Pokémon.
* Procurar Pokémon pelo nome.
* Exibir todos os Pokémon.
* Curar todos os Pokémon.
* Calcular a média dos níveis dos Pokémon.

---

### Classe `PokemonCenter`

Representa um Centro Pokémon.

Atributos:

```typescript
name: string
trainers: Trainer[]
```

Crie métodos para:

* Registrar um treinador.
* Remover um treinador.
* Procurar treinador pelo nome.
* Listar treinadores.
* Contar quantos Pokémon existem no centro considerando todos os treinadores.

---

### Regras da `Main`

Crie:

* Pelo menos 6 Pokémon.
* Pelo menos 3 treinadores.
* Um Centro Pokémon.

Cada treinador deverá possuir pelo menos 2 Pokémon.

Depois:

1. Cause dano em alguns Pokémon.
2. Cure alguns Pokémon.
3. Faça um Pokémon subir de nível.
4. Capture e libere Pokémon.
5. Exiba as informações finais.

**Desafio extra:** impeça um treinador de capturar dois Pokémon com exatamente o mesmo nome.

---

# Exercício 5 — A Sociedade do Anel 💍

Você foi escolhido para desenvolver um sistema para controlar uma companhia de aventureiros que precisa transportar um artefato extremamente perigoso.

O sistema deverá representar uma pequena aventura inspirada em universos de fantasia.

### Classe `Weapon`

Representa uma arma.

Atributos:

* `name`
* `damage`
* `weight`

Crie métodos para:

* Exibir informações.
* Alterar dano.
* Alterar peso.

---

### Classe `Character`

Representa um personagem da companhia.

Atributos:

* `name`
* `race`
* `health`
* `weapon`
* `items`

Onde:

```typescript
weapon: Weapon | null
items: Item[]
```

Crie métodos para:

* Equipar uma arma.
* Desequipar a arma.
* Adicionar item.
* Remover item.
* Receber dano.
* Recuperar vida.
* Atacar outro personagem.

O dano causado pelo ataque deverá ser baseado no dano da arma equipada.

Caso o personagem não tenha uma arma equipada, ele deverá causar um dano padrão.

---

### Classe `Item`

Representa um item carregado por um personagem.

Atributos:

* `name`
* `description`
* `weight`

Exemplos:

* Potion
* Rope
* Torch
* Food
* Map
* Key

---

### Classe `Artifact`

Representa um artefato mágico.

Atributos:

* `name`
* `power`
* `dangerLevel`
* `currentHolder`

O `currentHolder` deverá ser:

```typescript
Character | null
```

Crie métodos para:

* Entregar o artefato para um personagem.
* Remover o artefato do personagem.
* Exibir informações do artefato.
* Aumentar ou diminuir seu nível de perigo.

---

### Classe `Party`

Representa a companhia de aventureiros.

Atributos:

```typescript
name: string
members: Character[]
artifact: Artifact | null
```

Crie métodos para:

* Adicionar membro.
* Remover membro.
* Procurar membro pelo nome.
* Exibir todos os membros.
* Entregar o artefato para um membro.
* Exibir a vida total da companhia.
* Exibir a quantidade de membros vivos.

---

### Regras especiais

A companhia deverá seguir algumas regras:

1. O artefato só pode estar com **um personagem por vez**.
2. Um personagem derrotado possui `health = 0`.
3. Um personagem com `health = 0` não pode atacar.
4. O artefato não pode ser entregue para um personagem derrotado.
5. Um personagem pode possuir apenas uma arma equipada.
6. O dano de um ataque deve considerar a arma equipada.
7. Caso não possua arma, o personagem causa `1` de dano.

---

### Regras da `Main`

Crie uma companhia contendo pelo menos:

* 5 personagens.
* 5 armas.
* 8 itens.
* 1 artefato.

Depois simule uma pequena aventura:

1. Crie os personagens.
2. Equipe armas.
3. Distribua itens.
4. Adicione os personagens à companhia.
5. Entregue o artefato para um personagem.
6. Faça alguns personagens atacarem outros.
7. Cause dano e cure personagens.
8. Troque o portador do artefato.
9. Derrote pelo menos um personagem.
10. Exiba o estado final da companhia.

---

# Desafio final 🚀

Depois de terminar os cinco exercícios, escolha **um deles** e tente adicionar uma funcionalidade nova.

Algumas ideias:

* Sistema de níveis.
* Sistema de experiência.
* Sistema de dinheiro.
* Sistema de equipamentos.
* Sistema de loja.
* Sistema de batalha.
* Sistema de missões.
* Sistema de ranking.
* Sistema de salvar/carregar dados.
* Sistema de eventos aleatórios.

### Regra do desafio

A nova funcionalidade deve exigir a criação ou alteração de **pelo menos uma classe** e deve fazer sentido dentro do contexto do exercício escolhido.

---

