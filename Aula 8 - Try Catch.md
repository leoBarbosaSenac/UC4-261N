# Try...Catch no TypeScript

## 1. O que é `try...catch`?

Durante a execução de um programa, alguns problemas podem acontecer.

Por exemplo:

- O usuário pode digitar um valor inválido.
- Um método pode receber um dado que não deveria receber.
- Uma operação pode gerar um erro.
- Uma função pode lançar uma exceção.

Quando um erro acontece e não é tratado, o programa pode ser interrompido.

O `try...catch` permite **tentar executar um código e tratar o erro caso ele aconteça**.

A estrutura básica é:

```typescript
try {
    // Código que pode gerar um erro
} catch (erro) {
    // Código executado caso aconteça um erro
}
```

Podemos pensar assim:

> **TRY:** "Tente executar isso."

> **CATCH:** "Se der erro, faça isso."

---

# 2. Por que usar `try...catch`?

Imagine um programa que pede uma idade:

```typescript
const idade: number = Number("abc");

console.log("Idade:", idade);
```

Nesse caso, `Number("abc")` resulta em `NaN` (Not a Number).

Podemos validar o problema manualmente, mas existem situações em que uma operação realmente **lança uma exceção**.

Por exemplo:

```typescript
throw new Error("Alguma coisa deu errado!");
```

Se executarmos:

```typescript
throw new Error("Alguma coisa deu errado!");

console.log("Programa continua...");
```

A mensagem `"Programa continua..."` não será executada.

Isso acontece porque o erro interrompe o fluxo normal da execução.

Com `try...catch`:

```typescript
try {
    throw new Error("Alguma coisa deu errado!");
} catch (erro) {
    console.log("Ocorreu um erro!");
}

console.log("Programa continua...");
```

Resultado:

```text
Ocorreu um erro!
Programa continua...
```

O `catch` captura o erro e permite que o programa continue sua execução.

---

# 3. Como o `try...catch` funciona?

Observe:

```typescript
try {
    console.log("Início");

    throw new Error("Erro!");

    console.log("Fim");
} catch (erro) {
    console.log("Erro capturado!");
}
```

O programa executa:

```text
Início
Erro capturado!
```

O `"Fim"` não aparece.

Isso acontece porque, quando o `throw` é executado:

1. O erro é lançado.
2. A execução do `try` é interrompida.
3. O programa procura um `catch`.
4. O `catch` recebe o erro.
5. O código dentro do `catch` é executado.
6. Depois disso, o programa continua normalmente.

---

# 4. O objeto `Error`

Uma maneira comum de criar um erro em JavaScript/TypeScript é usando `Error`:

```typescript
const erro = new Error("Mensagem do erro");
```

Podemos então lançar esse erro:

```typescript
throw new Error("Ocorreu um problema!");
```

O `throw` significa:

> "Lance este erro."

Exemplo:

```typescript
function dividir(a: number, b: number): number {

    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }

    return a / b;
}
```

Agora podemos usar a função:

```typescript
console.log(dividir(10, 2));
```

Resultado:

```text
5
```

Mas:

```typescript
console.log(dividir(10, 0));
```

irá gerar um erro.

Podemos tratar esse erro:

```typescript
try {

    console.log(dividir(10, 0));

} catch (erro) {

    console.log("Não foi possível realizar a divisão.");

}
```

---

# 5. `throw` e `catch`

É importante entender a relação entre os dois.

O `throw` **lança** um erro.

O `catch` **captura** o erro.

Exemplo:

```typescript
try {

    throw new Error("Erro proposital!");

} catch (erro) {

    console.log("Erro capturado!");

}
```

Podemos representar o fluxo assim:

```text
try
 │
 │ código executado
 │
 ├── tudo certo ────────────────> continua
 │
 └── erro ──> catch
                │
                └── trata o erro
```

---

# 6. A variável do `catch`

Podemos acessar o erro através da variável criada no `catch`:

```typescript
try {

    throw new Error("Senha incorreta.");

} catch (erro) {

    console.log(erro);

}
```

Também podemos acessar a mensagem:

```typescript
try {

    throw new Error("Senha incorreta.");

} catch (erro) {

    console.log(erro.message);

}
```

Resultado:

```text
Senha incorreta.
```

---

# 7. Tipando o erro no TypeScript

No TypeScript, uma forma segura de trabalhar com erros é tratar o valor capturado como `unknown`.

Exemplo:

```typescript
try {

    throw new Error("Algo deu errado.");

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

O `instanceof` verifica se o objeto é uma instância de determinada classe.

Nesse caso:

```typescript
erro instanceof Error
```

significa:

> "Esse erro foi criado a partir da classe `Error`?"

Se for, podemos acessar:

```typescript
erro.message
```

---

# 8. Exemplo com uma classe

Agora vamos aplicar `try...catch` aos conceitos de POO.

Imagine uma classe `Personagem`:

```typescript
class Personagem {

    private nome: string;
    private vida: number;

    constructor(nome: string, vida: number) {
        this.nome = nome;
        this.vida = vida;
    }

    public receberDano(dano: number): void {

        if (dano <= 0) {
            throw new Error("O dano deve ser maior que zero.");
        }

        this.vida -= dano;
    }

    public mostrarVida(): void {
        console.log(`${this.nome} possui ${this.vida} de vida.`);
    }
}
```

Podemos criar um personagem:

```typescript
const personagem = new Personagem("Aragorn", 100);
```

E causar dano:

```typescript
personagem.receberDano(20);

personagem.mostrarVida();
```

Resultado:

```text
Aragorn possui 80 de vida.
```

Agora imagine:

```typescript
personagem.receberDano(-10);
```

O método lança um erro:

```typescript
throw new Error("O dano deve ser maior que zero.");
```

Podemos tratar esse erro:

```typescript
try {

    personagem.receberDano(-10);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

Resultado:

```text
O dano deve ser maior que zero.
```

---

# 9. Por que lançar o erro dentro da classe?

Uma dúvida comum é:

> "Por que não colocar toda a validação no `main`?"

Porque a própria classe conhece suas regras.

Por exemplo:

```typescript
public receberDano(dano: number): void {

    if (dano <= 0) {
        throw new Error("O dano deve ser maior que zero.");
    }

    this.vida -= dano;
}
```

A classe garante que uma regra importante seja respeitada.

Quem estiver utilizando a classe não precisa saber exatamente como a validação funciona.

Ele apenas utiliza:

```typescript
try {

    personagem.receberDano(dano);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

Isso combina muito bem com **encapsulamento**.

---

# 10. `try...catch` não serve para qualquer validação

É importante entender que `try...catch` não substitui todas as validações.

Por exemplo, isso:

```typescript
const idade: number = Number("abc");

if (isNaN(idade)) {
    console.log("Idade inválida.");
}
```

não precisa necessariamente de `try...catch`.

O `try...catch` é utilizado principalmente quando existe uma operação que pode **lançar uma exceção**.

Exemplo:

```typescript
try {

    personagem.receberDano(-10);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

---

# 11. `finally`

Além de `try` e `catch`, existe o `finally`.

Estrutura:

```typescript
try {

    // Código que pode gerar erro

} catch (erro) {

    // Tratamento do erro

} finally {

    // Executado no final

}
```

Exemplo:

```typescript
try {

    console.log("Executando operação...");

} catch (erro) {

    console.log("Ocorreu um erro.");

} finally {

    console.log("Operação finalizada.");

}
```

O `finally` é executado independentemente de ocorrer ou não um erro.

Exemplo:

```typescript
try {

    console.log("TRY");

} catch (erro) {

    console.log("CATCH");

} finally {

    console.log("FINALLY");

}
```

Como não existe erro:

```text
TRY
FINALLY
```

Agora:

```typescript
try {

    console.log("TRY");

    throw new Error("Erro!");

} catch (erro) {

    console.log("CATCH");

} finally {

    console.log("FINALLY");

}
```

Resultado:

```text
TRY
CATCH
FINALLY
```

---

# 12. Um exemplo completo

Vamos criar uma classe `ContaBancaria`.

```typescript
class ContaBancaria {

    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public sacar(valor: number): void {

        if (valor <= 0) {
            throw new Error("O valor do saque deve ser maior que zero.");
        }

        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this.saldo -= valor;
    }

    public mostrarSaldo(): void {
        console.log(`Saldo: R$ ${this.saldo}`);
    }
}
```

Agora podemos utilizar a classe:

```typescript
const conta = new ContaBancaria(500);

conta.mostrarSaldo();
```

Resultado:

```text
Saldo: R$ 500
```

Tentando sacar um valor válido:

```typescript
try {

    conta.sacar(200);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}

conta.mostrarSaldo();
```

Resultado:

```text
Saldo: R$ 300
```

Agora tentando sacar mais dinheiro do que existe:

```typescript
try {

    conta.sacar(1000);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}

conta.mostrarSaldo();
```

Resultado:

```text
Saldo insuficiente.
Saldo: R$ 300
```

O programa não precisa ser encerrado por causa do erro.

---

# 13. Vários erros

Uma mesma operação pode gerar diferentes erros.

Exemplo:

```typescript
class ContaBancaria {

    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public sacar(valor: number): void {

        if (valor <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }

        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this.saldo -= valor;
    }
}
```

Podemos tratar todos eles com o mesmo `catch`:

```typescript
try {

    conta.sacar(valor);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(`Erro: ${erro.message}`);
    }

}
```

O método pode lançar mensagens diferentes, mas o `catch` consegue tratar qualquer uma delas.

---

# 14. Erro não significa necessariamente bug

Um erro pode ser uma situação **esperada** que o programa precisa saber tratar.

Por exemplo:

```typescript
if (valor > this.saldo) {
    throw new Error("Saldo insuficiente.");
}
```

O saldo insuficiente não significa necessariamente que o programador escreveu o código errado.

É uma situação que pode acontecer durante a utilização do sistema.

O programa pode detectar essa situação e informar o usuário.

---

# 15. Exemplo com `readline-sync`

O `try...catch` também pode ser utilizado em programas de terminal.

Imagine:

```typescript
import readlineSync from "readline-sync";

try {

    const idade: number = Number(
        readlineSync.question("Digite sua idade: ")
    );

    if (idade < 0) {
        throw new Error("A idade não pode ser negativa.");
    }

    console.log(`Idade: ${idade}`);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(`Erro: ${erro.message}`);
    }

}
```

O usuário pode fornecer um valor inválido e o programa pode tratar o problema.

---

# 16. `try...catch` em métodos

Podemos colocar o `try...catch` dentro de um método:

```typescript
public realizarSaque(valor: number): void {

    try {

        this.sacar(valor);

    } catch (erro: unknown) {

        if (erro instanceof Error) {
            console.log(`Erro ao realizar saque: ${erro.message}`);
        }

    }
}
```

Porém, nem sempre essa é a melhor escolha.

Também podemos deixar o método `sacar()` lançar o erro e permitir que **quem chamou o método** decida como tratar o problema.

Exemplo:

```typescript
try {

    conta.sacar(1000);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

Essa abordagem é bastante útil porque separa:

- **A classe:** identifica e lança o erro.
- **Quem utiliza a classe:** decide como lidar com o erro.

---

# 17. Fluxo completo

Uma situação comum em POO pode funcionar assim:

```text
MAIN
 │
 │ chama método
 ▼
CLASSE
 │
 │ verifica regra
 │
 ├── tudo certo
 │      │
 │      └── executa operação
 │
 └── problema
        │
        └── throw new Error(...)
                    │
                    ▼
                  CATCH
                    │
                    └── trata o erro
```

Exemplo:

```typescript
try {

    conta.sacar(1000);

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

Enquanto a classe:

```typescript
public sacar(valor: number): void {

    if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
    }

    this.saldo -= valor;
}
```

---

# 18. Boas práticas

## Use mensagens claras

Evite:

```typescript
throw new Error("Erro.");
```

Prefira:

```typescript
throw new Error("Não é possível realizar o saque: saldo insuficiente.");
```

---

## Não esconda o erro

Evite simplesmente:

```typescript
catch (erro) {

}
```

Se você capturou um erro, normalmente deve fazer alguma coisa com ele.

Por exemplo:

```typescript
catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

---

## Não coloque tudo dentro de `try`

Evite transformar o programa inteiro em:

```typescript
try {

    // 300 linhas de código

} catch (erro) {

    // ...

}
```

É melhor colocar no `try` apenas a operação que realmente pode gerar a exceção.

---

# 19. Resumo

| Palavra | Função |
|---|---|
| `try` | Tenta executar um código |
| `catch` | Captura um erro |
| `throw` | Lança um erro |
| `Error` | Representa um erro |
| `finally` | Executa no final, com ou sem erro |
| `instanceof` | Verifica se um objeto pertence a uma classe |

A estrutura mais comum será:

```typescript
try {

    // Código que pode gerar erro

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

E, dentro de uma classe:

```typescript
if (algumaCondicaoInvalida) {
    throw new Error("Mensagem explicando o problema.");
}
```

---

# Exercícios

## Exercício 1 — Divisão

Crie uma função:

```typescript
dividir(a: number, b: number): number
```

A função deve:

- Retornar o resultado da divisão.
- Lançar um `Error` caso `b` seja `0`.

No `main`, utilize `try...catch` para tratar o erro.

Exemplo:

```text
Digite o primeiro número: 10
Digite o segundo número: 0

Erro: Não é possível dividir por zero.
```

---

## Exercício 2 — Personagem

Crie uma classe:

```typescript
Personagem
```

A classe deve possuir:

```typescript
private nome: string;
private vida: number;
```

Crie o método:

```typescript
receberDano(dano: number): void
```

O método deve lançar um erro quando:

- O dano for menor ou igual a `0`.
- O dano for maior que a vida atual do personagem.

No `main`, utilize `try...catch` para tratar os erros.

---

## Exercício 3 — Conta bancária

Crie uma classe:

```typescript
ContaBancaria
```

A classe deve possuir:

```typescript
private titular: string;
private saldo: number;
```

Crie os métodos:

```typescript
depositar(valor: number): void
sacar(valor: number): void
mostrarSaldo(): void
```

### Regras

`depositar()` deve lançar um erro se:

- O valor for menor ou igual a `0`.

`sacar()` deve lançar um erro se:

- O valor for menor ou igual a `0`.
- O valor for maior que o saldo.

No `main`, utilize `try...catch` para tratar os erros.

---

# Desafio — Sistema de RPG

Crie uma classe:

```typescript
Personagem
```

Com:

```typescript
private nome: string;
private vida: number;
private mana: number;
```

Crie os métodos:

```typescript
receberDano(dano: number): void
curar(valor: number): void
usarMagia(custo: number): void
```

Crie regras para os métodos.

### `receberDano()`

O dano deve:

- Ser maior que `0`.
- Não pode ser maior que a vida atual.

### `curar()`

A cura deve:

- Ser maior que `0`.

### `usarMagia()`

O custo deve:

- Ser maior que `0`.
- Não pode ser maior que a mana disponível.

Sempre que uma regra for quebrada:

```typescript
throw new Error("...");
```

No `main`, utilize:

```typescript
try {

    // operação

} catch (erro: unknown) {

    if (erro instanceof Error) {
        console.log(erro.message);
    }

}
```

Teste diferentes situações e faça o programa continuar funcionando mesmo quando uma operação gerar um erro.

---

