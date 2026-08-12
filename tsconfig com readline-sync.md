# TypeScript + readline-sync

Este guia mostra como configurar um projeto TypeScript para usar o `readline-sync` e executar programas pelo terminal.

## 1. Criar a pasta do projeto

No terminal:

```bash
mkdir meu-projeto
cd meu-projeto
```

Inicialize o projeto Node:

```bash
npm init -y
```

---

## 2. Instalar o TypeScript

Instale o TypeScript como dependência de desenvolvimento:

```bash
npm install -D typescript
```

Podemos verificar se a instalação funcionou:

```bash
npx tsc --version
```

Deve aparecer algo parecido com:

```text
Version 5.x.x
```

---

## 3. Criar o `tsconfig.json`

Agora execute:

```bash
npx tsc --init
```

Esse comando cria automaticamente um arquivo chamado:

```text
tsconfig.json
```

Ele contém as configurações que dizem ao TypeScript como nossos arquivos `.ts` devem ser compilados.

---

## 4. Configurar o `tsconfig.json`

Abra o arquivo `tsconfig.json`, apague o conteúdo padrão e substitua por:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./src",

    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### O que essas configurações fazem?

* `target: "ES2020"` → define a versão do JavaScript que será gerada.
* `module: "CommonJS"` → configura o sistema de módulos usado pelo Node.js.
* `rootDir: "./src"` → indica que nossos arquivos TypeScript ficarão dentro de `src`.
* `outDir: "./src"` → indica onde o JavaScript compilado será gerado.
* `strict: true` → ativa verificações mais rigorosas do TypeScript.
* `esModuleInterop: true` → facilita a utilização de módulos CommonJS.
* `moduleResolution: "node"` → faz o TypeScript procurar módulos seguindo a resolução do Node.js.
* `types: ["node"]` → adiciona as definições de tipos do Node.js.
* `include` → informa quais arquivos `.ts` devem ser compilados.
* `exclude` → informa quais pastas devem ser ignoradas.

> **Observação:** neste exemplo, o `outDir` está configurado como `./src`, seguindo a configuração utilizada em aula. Em projetos maiores, normalmente é mais organizado gerar os arquivos compilados em uma pasta separada, como `dist`.

---

## 5. Criar a pasta `src`

No terminal:

```bash
mkdir src
```

Agora podemos criar nosso arquivo principal:

```text
src/Main.ts
```

A estrutura ficará assim:

```text
meu-projeto/
├── node_modules/
├── src/
│   └── Main.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## 6. Instalar o readline-sync

Para receber informações digitadas pelo usuário no terminal, vamos utilizar o pacote `readline-sync`.

Instale com:

```bash
npm install readline-sync
```

Como estamos usando TypeScript, também precisamos instalar os tipos desse pacote:

```bash
npm install -D @types/readline-sync
```

Também instalamos os tipos do Node.js, necessários por causa da configuração `"types": ["node"]` do nosso `tsconfig.json`:

```bash
npm install -D @types/node
```

### Podemos instalar os tipos de uma vez

Em vez de executar os dois últimos comandos separadamente, podemos fazer:

```bash
npm install -D @types/node @types/readline-sync
```

No final, as principais dependências de desenvolvimento serão:

```text
typescript
@types/node
@types/readline-sync
```

E a dependência do nosso programa será:

```text
readline-sync
```

---

## 7. Criar um programa usando readline-sync

No arquivo:

```text
src/Main.ts
```

podemos escrever:

```typescript
import readlineSync from "readline-sync";

const nome = readlineSync.question("Qual é o seu nome? ");

console.log(`Olá, ${nome}!`);
```

---

## 8. Compilar o TypeScript

Para transformar o arquivo `.ts` em JavaScript, execute:

```bash
npx tsc
```

O TypeScript vai ler o `tsconfig.json` e utilizar as configurações que definimos.

Como nosso `outDir` está configurado como `./src`, o JavaScript compilado será gerado dentro da própria pasta `src`.

Nesse caso:

```text
src/Main.ts
    ↓
src/Main.js
```

---

## 9. Executar o programa

Depois da compilação, podemos executar o arquivo JavaScript com o Node:

```bash
node src/Main.js
```

O programa deverá perguntar:

```text
Qual é o seu nome?
```

Depois que você digitar seu nome, teremos algo parecido com:

```text
Olá, João!
```

---

## 10. Resumo dos comandos

A sequência completa para criar o projeto é:

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y

npm install -D typescript
npx tsc --init

mkdir src

npm install readline-sync
npm install -D @types/node @types/readline-sync
```

Depois de configurar o `tsconfig.json` e criar o `src/Main.ts`:

```bash
npx tsc
node src/Main.js
```

### Fluxo que vamos utilizar nas aulas

```text
Código TypeScript
      ↓
  src/Main.ts
      ↓
    npx tsc
      ↓
Código JavaScript
      ↓
  src/Main.js
      ↓
 node src/Main.js
```

Assim, sempre que alterarmos o código TypeScript, precisamos recompilar com:

```bash
npx tsc
```

e depois executar o JavaScript com:

```bash
node src/Main.j
```
