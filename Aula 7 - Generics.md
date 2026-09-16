# 📘 Generics em TypeScript

## 🎯 O que vamos aprender?

Neste conteúdo, vamos entender **Generics** em TypeScript de forma prática.

Ao final, você deverá conseguir:

- entender por que Generics existem;
- criar funções que trabalham com diferentes tipos;
- usar Generics com arrays;
- restringir um Generic com `extends`;
- criar classes genéricas;
- criar funções genéricas;
- combinar Generics com **classes, objetos, arrays e interfaces**;
- perceber como Generics ajudam a evitar código duplicado;
- construir um sistema de estoque usando Generics.

---

# 1. 🤔 Antes dos Generics: qual é o problema?

Imagine uma função muito simples:

```ts
function retornaNumero(item: number): number {
    return item;
}
```

Podemos usar:

```ts
console.log(retornaNumero(10));
```

Isso funciona porque `10` é um `number`.

Mas:

```ts
retornaNumero("Oi");
```

gera um erro.

Isso acontece porque dissemos explicitamente:

```ts
item: number
```

e também:

```ts
): number
```

Ou seja:

> "Essa função recebe um `number` e devolve um `number`."

---

## E se quisermos fazer a mesma coisa com `string`?

Teríamos que criar outra função:

```ts
function retornaString(item: string): string {
    return item;
}
```

E, para `boolean`:

```ts
function retornaBoolean(item: boolean): boolean {
    return item;
}
```

Perceba o problema:

A lógica das três funções é praticamente a mesma.

Todas fazem:

```text
receber um valor → devolver esse mesmo valor
```

A única coisa que muda é o **tipo**.

Isso é justamente o tipo de situação em que Generics são úteis.

---

# 2. 🧰 O que são Generics?

Um Generic permite criar um código que trabalha com um **tipo que será definido posteriormente**.

Podemos pensar no Generic como uma espécie de **molde**.

Por exemplo:

```ts
function retornaItem<T>(item: T): T {
    return item;
}
```

O `T` representa um tipo que ainda não sabemos qual será.

Não significa necessariamente `T = string`.

Também não significa necessariamente `T = number`.

Significa:

> "Existe um tipo aqui, e vamos descobrir qual é quando a função for utilizada."

---

## 🔎 Entendendo o `<T>`

Veja novamente:

```ts
function retornaItem<T>(item: T): T {
    return item;
}
```

Podemos separar isso em três partes:

```ts
function retornaItem<T>
```

Aqui declaramos o Generic `T`.

Depois:

```ts
(item: T)
```

Dizemos que o parâmetro `item` terá o tipo `T`.

E finalmente:

```ts
: T
```

Dizemos que a função também retornará um valor do tipo `T`.

Portanto:

```text
T entra → T sai
```

---

# 3. 🧪 Usando uma função Generic

Podemos informar explicitamente qual será o tipo:

```ts
retornaItem<number>(10);
retornaItem<string>("Oi");
retornaItem<boolean>(true);
```

Nesse caso:

```ts
retornaItem<number>(10);
```

significa:

> "Nesta chamada, `T` será `number`."

Então, para essa chamada, é como se tivéssemos:

```ts
function retornaItem(item: number): number {
    return item;
}
```

Já:

```ts
retornaItem<string>("Oi");
```

faz o `T` ser `string`.

---

# 4. 🧠 O TypeScript também pode descobrir o tipo

Na maioria das situações, não precisamos escrever o tipo manualmente.

Podemos fazer:

```ts
const numero = retornaItem(10);
const texto = retornaItem("Oi");
const verdadeiro = retornaItem(true);
```

O TypeScript consegue descobrir:

```text
10      → T = number
"Oi"    → T = string
true    → T = boolean
```

Isso é chamado de **inferência de tipos**.

Então Generics não servem apenas para escrever `<T>` explicitamente.

Eles também permitem que o TypeScript mantenha as informações sobre os tipos automaticamente.

---

# 5. 📋 Generics com Arrays

Generics ficam ainda mais interessantes quando trabalhamos com listas.

Imagine uma função que pega o primeiro elemento de um array:

```ts
function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
}
```

Aqui temos duas aparições importantes de `T`:

```ts
lista: T[]
```

significa:

> "A função recebe um array de elementos do tipo `T`."

E:

```ts
): T
```

significa:

> "A função devolve um elemento desse mesmo tipo."

---

## 🔢 Usando com números

```ts
const numeros = [1, 2, 3];

const primeiroNumero = pegaPrimeiro(numeros);

console.log(primeiroNumero);
```

O TypeScript percebe:

```text
numeros = number[]
```

Então:

```text
T = number
```

Consequentemente, o retorno é:

```text
number
```

---

## 🔤 Usando com strings

Agora:

```ts
const palavras = ["a", "b", "c"];

const primeiraPalavra = pegaPrimeiro(palavras);

console.log(primeiraPalavra);
```

Nesse caso:

```text
palavras = string[]
```

Então:

```text
T = string
```

E o retorno também será `string`.

---

## 💡 A vantagem

Não precisamos criar:

```ts
function pegaPrimeiroNumero(lista: number[]): number
```

e:

```ts
function pegaPrimeiraString(lista: string[]): string
```

Uma única função resolve os dois casos:

```ts
function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
}
```

---

# 6. 🚧 Restringindo um Generic com `extends`

Até agora, nosso `T` podia ser praticamente qualquer coisa.

Mas às vezes precisamos dizer:

> "Pode ser qualquer tipo, desde que tenha determinada característica."

É aí que usamos `extends`.

Veja:

```ts
function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
}
```

Aqui estamos dizendo:

> "`T` pode ser qualquer tipo que possua uma propriedade `length` do tipo `number`."

---

## ✅ String

```ts
mostraTamanho("Oi");
```

Strings possuem `length`.

Portanto:

```text
"Oi" → possui length → permitido
```

---

## ✅ Array

```ts
mostraTamanho([1, 2, 3]);
```

Arrays também possuem `length`.

Portanto:

```text
[1, 2, 3] → possui length → permitido
```

---

## ❌ Number

```ts
mostraTamanho(123);
```

Um `number` não possui `length`.

Portanto o TypeScript impede essa chamada.

---

# 7. 🔐 O que o `extends` realmente significa?

Quando fazemos:

```ts
<T extends AlgumTipo>
```

não estamos dizendo necessariamente que `T` precisa ser exatamente `AlgumTipo`.

Estamos dizendo que:

> `T` precisa ser compatível com `AlgumTipo`.

Por exemplo:

```ts
function mostraNome<T extends { nome: string }>(obj: T): string {
    return obj.nome;
}
```

Podemos passar:

```ts
mostraNome({ nome: "Ana" });
```

Também podemos passar:

```ts
mostraNome({
    nome: "João",
    idade: 20
});
```

Por quê?

Porque o segundo objeto também possui:

```ts
nome: string
```

O fato de possuir uma propriedade adicional (`idade`) não impede que ele seja compatível com a restrição.

---

# 8. 🧩 Generic com `extends` e Union Types

Também podemos restringir um Generic para alguns tipos específicos:

```ts
function mostraValor<T extends string | number>(valor: T): T {
    return valor;
}
```

Agora `T` só pode ser:

```text
string
ou
number
```

Portanto:

```ts
mostraValor("Olá"); // ✅
mostraValor(123);   // ✅
```

Mas:

```ts
mostraValor(true);  // ❌
```

não é permitido.

---

# 9. 🏗️ Generic com classes

Generics também podem ser utilizados em classes.

Veja:

```ts
class Caixa<T> {
    conteudo: T;

    constructor(item: T) {
        this.conteudo = item;
    }

    pegar(): T {
        return this.conteudo;
    }
}
```

Essa classe possui um tipo `T`.

Mas qual é esse tipo?

Nós decidimos quando criamos o objeto.

---

## 📦 Caixa de string

```ts
const caixaDeString = new Caixa<string>("Oi");
```

Aqui:

```text
T = string
```

Então:

```ts
caixaDeString.pegar();
```

retorna uma `string`.

---

## 📦 Caixa de number

Podemos fazer:

```ts
const caixaDeNumero = new Caixa<number>(123);
```

Agora:

```text
T = number
```

Portanto:

```ts
caixaDeNumero.pegar();
```

retorna um `number`.

---

## 🔒 E a segurança de tipos?

Observe:

```ts
const caixaDeNumero = new Caixa<number>(123);
```

Isso significa que essa caixa trabalha com `number`.

Portanto:

```ts
caixaDeNumero.conteudo = 50;
```

é permitido.

Mas:

```ts
caixaDeNumero.conteudo = "Oi";
```

gera erro.

O Generic não elimina a tipagem.

Pelo contrário:

> Ele permite reutilizar a mesma classe mantendo a segurança dos tipos.

---

# 10. 📦 Um exemplo mais real: estoque

Agora vamos usar Generics em uma situação mais próxima de um sistema real.

Imagine que precisamos criar um sistema de estoque.

Temos livros:

```ts
class EstoqueLivro {
    private livros: Livro[] = [];

    adicionar(livro: Livro): void {
        this.livros.push(livro);
    }

    listar(): Livro[] {
        return this.livros;
    }
}
```

E roupas:

```ts
class EstoqueRoupa {
    private roupas: Roupa[] = [];

    adicionar(roupa: Roupa): void {
        this.roupas.push(roupa);
    }

    listar(): Roupa[] {
        return this.roupas;
    }
}
```

Funcionaria.

Mas existe um problema:

**estamos repetindo a mesma estrutura.**

---

# 11. ♻️ Eliminando repetição com Generics

Podemos criar uma única classe:

```ts
class Estoque<T> {
    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
    }

    listar(): T[] {
        return this.itens;
    }

    remover(indice: number): void {
        this.itens.splice(indice, 1);
    }
}
```

Agora a classe não precisa saber se está trabalhando com:

- `Livro`;
- `Roupa`;
- `Brinquedo`;
- `Eletronico`;
- ou qualquer outro tipo.

Ela só precisa saber:

```text
"Qual é o T deste estoque?"
```

---

# 12. 📚 Criando um estoque de livros

Suponha que temos:

```ts
class Livro {
    constructor(
        public descricao: string,
        public autor: string
    ) {}
}
```

Podemos criar:

```ts
const estoqueLivros = new Estoque<Livro>();
```

Aqui estamos dizendo:

```text
T = Livro
```

Portanto, este estoque passa a ser um:

```text
Estoque de Livro
```

Podemos adicionar:

```ts
estoqueLivros.adicionar(
    new Livro("Harry Potter", "J.K. Rowling")
);

estoqueLivros.adicionar(
    new Livro("O Hobbit", "Tolkien")
);
```

---

## ❌ E se tentarmos colocar uma roupa?

```ts
estoqueLivros.adicionar(
    new Roupa("Camiseta", "M")
);
```

O TypeScript vai impedir.

Isso acontece porque:

```ts
estoqueLivros
```

é:

```ts
Estoque<Livro>
```

Logo:

```ts
adicionar()
```

espera receber:

```ts
Livro
```

e não `Roupa`.

---

# 13. 👕 Criando um estoque de roupas

Podemos criar outro estoque:

```ts
class Roupa {
    constructor(
        public descricao: string,
        public tamanho: string
    ) {}
}
```

Depois:

```ts
const estoqueRoupas = new Estoque<Roupa>();
```

Agora:

```text
T = Roupa
```

Podemos fazer:

```ts
estoqueRoupas.adicionar(
    new Roupa("Camiseta", "M")
);

estoqueRoupas.adicionar(
    new Roupa("Calça Jeans", "42")
);
```

Mais uma vez, a mesma classe `Estoque<T>` foi reutilizada.

---

# 14. 🔍 Observe o que aconteceu

Criamos apenas uma classe:

```ts
class Estoque<T>
```

Mas conseguimos criar:

```ts
Estoque<Livro>
Estoque<Roupa>
Estoque<Brinquedo>
Estoque<Eletronico>
```

É como se o Generic transformasse nossa classe em um **molde reutilizável**.

Podemos imaginar:

```text
              Estoque<T>
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
 Estoque<Livro> Estoque<Roupa> ...
```

A estrutura continua sendo a mesma.

O tipo armazenado muda.

---

# 15. 🧱 Generics não são apenas para classes

Também podemos criar **funções genéricas externas**.

Por exemplo:

```ts
function contarItens<T>(estoque: Estoque<T>): number {
    return estoque.listar().length;
}
```

Essa função pode receber qualquer estoque.

Por exemplo:

```ts
console.log(contarItens(estoqueLivros));
console.log(contarItens(estoqueRoupas));
```

O `T` será descoberto de acordo com o estoque recebido.

---

# 16. 💰 Função genérica para trabalhar com preço

Imagine que temos produtos com `preco`.

Podemos criar uma restrição:

```ts
function filtrarPorPreco<T extends { preco: number }>(
    itens: T[],
    precoMaximo: number
): T[] {
    return itens.filter(function(item) {
        return item.preco <= precoMaximo;
    });
}
```

O `extends` garante que qualquer `T` utilizado nessa função possua:

```ts
preco: number
```

Assim podemos trabalhar com diferentes tipos de produtos.

---

# 17. 🧠 Uma ideia importante: o Generic mantém o tipo

Considere:

```ts
function primeiro<T>(lista: T[]): T {
    return lista[0];
}
```

Se fizermos:

```ts
const livros: Livro[] = [
    new Livro("O Hobbit", "Tolkien")
];

const livro = primeiro(livros);
```

O TypeScript sabe que:

```text
T = Livro
```

Então:

```text
livro = Livro
```

Não precisamos transformar o resultado manualmente.

Essa é uma das grandes vantagens dos Generics:

> O código é reutilizável sem perder informação sobre os tipos.

---

# 18. 🆚 Generic x `any`

É importante não confundir Generics com `any`.

Poderíamos fazer:

```ts
function retornaQualquerCoisa(item: any): any {
    return item;
}
```

Isso também aceita diferentes tipos.

Mas `any` basicamente diz:

> "TypeScript, não se preocupe muito com esse tipo."

Já o Generic:

```ts
function retornaItem<T>(item: T): T {
    return item;
}
```

diz:

> "Eu não sei qual é o tipo agora, mas quero que o TypeScript acompanhe esse tipo."

Por isso, Generics normalmente preservam muito mais segurança de tipos.

---

# 19. 🧪 Exemplo completo

Podemos juntar tudo:

```ts
class Estoque<T> {
    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
    }

    listar(): T[] {
        return this.itens;
    }

    remover(indice: number): void {
        this.itens.splice(indice, 1);
    }

    buscar(condicao: (item: T) => boolean): T[] {
        return this.itens.filter(condicao);
    }
}
```

Agora temos um estoque que consegue:

- armazenar qualquer tipo;
- adicionar itens;
- listar itens;
- remover itens;
- buscar itens através de uma condição.

---

# 20. 🔎 O que significa `condicao: (item: T) => boolean`?

Essa parte pode parecer complicada:

```ts
condicao: (item: T) => boolean
```

Ela significa que `condicao` é uma **função**.

Essa função:

1. recebe um item do tipo `T`;
2. devolve `true` ou `false`.

Por exemplo:

```ts
function custaAte100(livro: Livro): boolean {
    return livro.preco <= 100;
}
```

Podemos passar essa função para:

```ts
estoqueLivros.buscar(custaAte100);
```

O estoque executará a condição para cada item.

---

# 21. 🧩 Por que isso é poderoso?

O estoque não precisa saber **como** queremos procurar.

Ele só precisa receber uma função que responda:

```text
"Este item atende à condição?"
```

Por exemplo, podemos procurar:

```text
livros com preço menor que 100
roupas tamanho M
brinquedos para determinada idade
eletrônicos de determinada marca
```

A classe continua genérica.

---

# 📝 Exercício: Sistema Interativo de Estoque com Generics

## 🎯 Objetivo

Você vai desenvolver um **sistema de estoque executado no terminal**.

O sistema deverá permitir cadastrar diferentes tipos de produtos e utilizar **Generics** para evitar a criação de uma classe de estoque diferente para cada produto.

O programa deverá utilizar:

- TypeScript;
- Programação Orientada a Objetos;
- Generics;
- arrays;
- classes;
- métodos;
- funções;
- `readline-sync`.

---

# 22. 🛠️ Etapa 1 — Preparar o projeto

Instale o `readline-sync`:

```bash
npm install readline-sync
```

No arquivo principal:

```ts
import readlineSync from "readline-sync";
```

---

# 23. 📦 Etapa 2 — Criar os produtos

Crie quatro classes.

## `Livro`

Deve possuir:

```text
titulo: string
autor: string
preco: number
```

Exemplo:

```ts
class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public preco: number
    ) {}
}
```

---

## `Roupa`

Deve possuir:

```text
descricao: string
tamanho: string
preco: number
```

---

## `Brinquedo`

Deve possuir:

```text
nome: string
idadeMinima: number
preco: number
```

---

## `Eletronico`

Deve possuir:

```text
modelo: string
marca: string
preco: number
```

> Utilize `public` nos parâmetros do construtor para que o TypeScript crie os atributos automaticamente.

---

# 24. 📦 Etapa 3 — Criar o `Estoque<T>`

Crie uma classe genérica:

```ts
class Estoque<T> {
    // ...
}
```

Ela deve possuir um array privado:

```ts
private itens: T[] = [];
```

Implemente os métodos:

### Adicionar

```ts
adicionar(item: T): void
```

### Listar

```ts
listar(): T[]
```

### Remover

```ts
remover(indice: number): void
```

### Buscar

```ts
buscar(condicao: (item: T) => boolean): T[]
```

---

# 25. 🧪 Etapa 4 — Criar os estoques

No programa principal, crie:

```ts
const estoqueLivros = new Estoque<Livro>();
const estoqueRoupas = new Estoque<Roupa>();
const estoqueBrinquedos = new Estoque<Brinquedo>();
const estoqueEletronicos = new Estoque<Eletronico>();
```

Observe que temos **uma única classe**:

```ts
Estoque<T>
```

mas quatro especializações:

```text
Estoque<Livro>
Estoque<Roupa>
Estoque<Brinquedo>
Estoque<Eletronico>
```

---

# 26. 🖥️ Etapa 5 — Criar o menu

O programa deve funcionar em loop.

Crie um menu semelhante a:

```text
=========================
       STOCK SYSTEM
=========================

1 - Add product
2 - List products
3 - Remove product
4 - Search products
0 - Exit

Choose an option:
```

O usuário deve conseguir continuar utilizando o sistema até escolher `0`.

---

# 27. ➕ Etapa 6 — Cadastrar produtos

Ao escolher:

```text
1 - Add product
```

o programa deve perguntar qual produto será cadastrado.

Por exemplo:

```text
=========================
       ADD PRODUCT
=========================

1 - Book
2 - Clothing
3 - Toy
4 - Electronic

Choose a product type:
```

Depois, peça os dados necessários.

Para um livro:

```text
Title:
Author:
Price:
```

Para uma roupa:

```text
Description:
Size:
Price:
```

E assim por diante.

Depois de criar o objeto, coloque-o no estoque correto.

---

# 28. 📋 Etapa 7 — Listar produtos

O usuário deverá conseguir visualizar os produtos cadastrados.

Por exemplo:

```text
=========================
       BOOK STOCK
=========================

[0] The Hobbit - Tolkien - R$ 49.90
[1] Harry Potter - J.K. Rowling - R$ 59.90
```

Faça o mesmo para os outros tipos de produto.

---

# 29. 🗑️ Etapa 8 — Remover produtos

O usuário deve escolher:

```text
3 - Remove product
```

Depois selecionar o tipo de produto:

```text
1 - Book
2 - Clothing
3 - Toy
4 - Electronic
```

Em seguida, mostre os produtos daquele estoque e peça o índice:

```text
Choose the product index:
```

Utilize:

```ts
remover(indice)
```

para remover o item.

---

# 30. 🔍 Etapa 9 — Criar buscas

Agora vamos utilizar uma das partes mais interessantes do exercício.

O método:

```ts
buscar(condicao: (item: T) => boolean): T[]
```

deve permitir diferentes tipos de busca.

### Livros

Permita procurar livros pelo preço:

```text
Show books up to a maximum price:
```

### Roupas

Permita procurar por tamanho:

```text
Search size:
```

### Brinquedos

Permita procurar pela idade mínima:

```text
Maximum age:
```

### Eletrônicos

Permita procurar pela marca:

```text
Brand:
```

A ideia é que a classe `Estoque<T>` continue exatamente a mesma.

A lógica específica de cada busca deve ser enviada por meio da função/condição.

---

# 31. 🧠 Etapa 10 — Criar funções genéricas

Além dos métodos da classe, crie pelo menos três **funções genéricas fora da classe `Estoque<T>`**.

### Função 1 — Contar itens

Crie uma função que receba qualquer estoque e retorne sua quantidade de itens.

Exemplo de utilização:

```ts
contarItens(estoqueLivros);
contarItens(estoqueRoupas);
```

---

### Função 2 — Obter o primeiro item

Crie uma função genérica que receba um array e devolva seu primeiro elemento.

Ela deve funcionar com:

```ts
Livro[]
Roupa[]
Brinquedo[]
Eletronico[]
```

sem precisar criar uma função diferente para cada tipo.

---

### Função 3 — Filtrar por preço

Crie uma função que consiga trabalhar com qualquer tipo que possua:

```ts
preco: number
```

Para isso, utilize uma restrição com `extends`.

A ideia é que a função consiga trabalhar tanto com:

```text
Livro
Roupa
Brinquedo
Eletronico
```

sem alterar a função para cada classe.

---

# 32. 🚀 Etapa 11 — Teste de extensibilidade

Agora crie um quinto produto.

Você pode escolher, por exemplo:

```text
Filme
Jogo
Celular
InstrumentoMusical
Console
```

Crie uma nova classe com seus próprios atributos.

Depois crie:

```ts
const estoqueNovoProduto = new Estoque<NovoProduto>();
```

Teste adicionar, listar, remover e buscar itens.

## ⚠️ Regra importante

Você **não deve modificar a classe `Estoque<T>`** para aceitar o novo produto.

A ideia é demonstrar justamente a vantagem de criar uma classe genérica:

> O estoque já está preparado para trabalhar com novos tipos.

---

# 33. 🧠 Desafio de compreensão

Depois de terminar o programa, tente responder:

### 1.

Por que podemos fazer:

```ts
new Estoque<Livro>()
```

e:

```ts
new Estoque<Roupa>()
```

utilizando a mesma classe?

### 2.

O que o `T` representa dentro de:

```ts
class Estoque<T>
```

### 3.

Qual é a diferença entre:

```ts
Estoque<Livro>
```

e:

```ts
Estoque<Roupa>
```

### 4.

Por que isso gera erro?

```ts
estoqueLivros.adicionar(
    new Roupa("Camiseta", "M")
);
```

### 5.

Qual é a diferença entre utilizar:

```ts
any
```

e utilizar:

```ts
<T>
```

### 6.

O que o `extends` garante neste exemplo?

```ts
function filtrarPorPreco<T extends { preco: number }>(...)
```

### 7.

Por que a função:

```ts
function pegaPrimeiro<T>(lista: T[]): T
```

é mais reutilizável do que criar uma função específica para cada tipo?

---

# 🎯 O que você deve perceber neste exercício

O objetivo não é apenas fazer um sistema de estoque funcionar.

Observe o que acontece quando utilizamos Generics.

Sem Generics, poderíamos acabar criando:

```text
EstoqueLivro
EstoqueRoupa
EstoqueBrinquedo
EstoqueEletronico
EstoqueCelular
EstoqueJogo
...
```

Com Generics, temos:

```ts
Estoque<T>
```

e podemos reutilizar a mesma estrutura:

```ts
Estoque<Livro>
Estoque<Roupa>
Estoque<Brinquedo>
Estoque<Eletronico>
Estoque<QualquerOutroTipo>
```

Portanto, uma das principais ideias dos Generics é:

> **Escrever uma estrutura de código uma vez e permitir que ela trabalhe com diferentes tipos, mantendo a segurança da tipagem do TypeScript.**

---

# 📌 Resumo

| Conceito | Exemplo | Ideia |
|---|---|---|
| Generic | `<T>` | Tipo definido posteriormente |
| Função Generic | `function teste<T>()` | Função reutilizável |
| Array Generic | `T[]` | Array de elementos do tipo `T` |
| Restrição | `T extends X` | Limita o que `T` pode ser |
| Classe Generic | `class Caixa<T>` | Classe reutilizável |
| Estoque Generic | `Estoque<Livro>` | Estoque especializado por tipo |
| Função Generic | `contarItens<T>()` | Função que trabalha com diferentes tipos |
| Callback Generic | `(item: T) => boolean` | Condição que recebe um `T` |

## ⭐ Ideia principal

Generics permitem que você diga:

```text
"Eu ainda não sei qual será o tipo,
mas quando ele for definido,
quero que o TypeScript continue sabendo qual é."
```

É isso que permite criar código **reutilizável, flexível e ainda fortemente tipado**.
