# Configuração: TypeScript + readline-sync

## 1. Instalar o TypeScript
```bash
npm install -D typescript
```

## 2. Criar o `tsconfig.json`
```bash
npx tsc --init
```

## 3. Configurar o `tsconfig.json`

Substitua o conteúdo do arquivo `tsconfig.json` pelo seguinte:

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

## 4. Instalar o readline-sync
```bash
npm install readline-sync
```

## 5. Instalar os tipos

### Tipos do Node.js:
```bash
npm install -D @types/node
```

### Tipos do readline-sync:
```bash
npm install -D @types/readline-sync
```

---

**Pronto!**  
O projeto está configurado para usar TypeScript + readline-sync.
