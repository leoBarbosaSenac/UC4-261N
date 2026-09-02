# 📨 Exercício — Sistema de Notificações

## 🎯 Objetivo

Neste exercício, você irá praticar o uso de **interfaces em TypeScript**, entendendo como elas podem ser utilizadas para definir um contrato que diferentes objetos e classes devem seguir.


# 📚 Situação

Você está desenvolvendo um sistema responsável por enviar notificações para usuários.

O sistema poderá trabalhar com diferentes tipos de notificações:

* E-mail
* SMS
* Push Notification

Apesar de serem diferentes, todas as notificações possuem algumas características em comum e precisam possuir uma forma de serem enviadas.

Para representar essa característica em comum, você deverá utilizar uma **interface**.

---

# 1. Crie a interface `Notification`

Crie o arquivo:

```text
src/interfaces/Notification.ts
```

Nesse arquivo, crie uma interface chamada `Notification`.

Ela deverá possuir as seguintes propriedades:

```text
id
recipient
message
```

Escolha os tipos adequados para cada propriedade.

A interface também deverá definir um método:

```text
send()
```

A interface deve definir apenas o **contrato**.

Não coloque uma implementação dentro dela.

---

# 2. Crie um objeto utilizando a interface

No arquivo:

```text
src/main.ts
```

Crie um objeto que siga a estrutura definida pela interface `Notification`.

Esse objeto deverá ser criado **diretamente**, sem utilizar uma classe.

O objeto deverá possuir todas as propriedades exigidas pela interface e deverá implementar o método `send()`.

Quando o método for chamado, deverá exibir uma mensagem no terminal.

Por exemplo:

```text
Sending notification to Leonardo: Your order has been shipped!
```

### Atenção

Neste momento, você deverá criar um **objeto diretamente**, utilizando a interface apenas como seu tipo.

Não crie uma classe para esse primeiro objeto.

---

# 3. Crie a classe `EmailNotification`

Crie o arquivo:

```text
src/classes/EmailNotification.ts
```

Crie uma classe chamada `EmailNotification`.

Essa classe deverá implementar a interface `Notification`.

Utilize:

```ts
implements Notification
```

A classe deverá possuir todos os elementos necessários para cumprir o contrato definido pela interface.

O método `send()` deverá apresentar uma mensagem semelhante a:

```text
Sending email to leonardo@email.com: Your account was created!
```

---

# 4. Crie a classe `SmsNotification`

Crie o arquivo:

```text
src/classes/SmsNotification.ts
```

Crie uma classe chamada `SmsNotification`.

Essa classe também deverá implementar a interface `Notification`.

O método `send()` deverá apresentar uma mensagem semelhante a:

```text
Sending SMS to +55 51 99999-9999: Your verification code is 4821.
```

---

# 5. Crie a classe `PushNotification`

Crie o arquivo:

```text
src/classes/PushNotification.ts
```

Crie uma classe chamada `PushNotification`.

Ela também deverá implementar a interface `Notification`.

O método `send()` deverá apresentar uma mensagem semelhante a:

```text
Sending push notification to Leonardo: You have a new message!
```

---

# 6. Utilize encapsulamento

As classes de notificação deverão utilizar **encapsulamento**.

As informações internas das classes não deverão ficar livremente disponíveis para alteração externa.

Por exemplo, não deverá ser possível fazer diretamente:

```ts
notification.message = "Something else";
```

fora da classe.

Utilize `private` para proteger os atributos quando necessário.

Crie getters e setters para permitir o acesso controlado às informações.

Os setters deverão realizar algumas validações.

Utilize pelo menos as seguintes regras:

* O `message` não pode estar vazio.
* O `recipient` não pode estar vazio.
* O `id` deve ser maior que zero.

---

# 7. Crie uma função para enviar notificações

No `main.ts`, crie uma função chamada:

```ts
sendNotification(notification: Notification): void
```

Essa função deverá chamar o método:

```ts
notification.send();
```

Observe que o parâmetro da função deverá ser do tipo **`Notification`**, e não de uma classe específica.

---

# 8. Teste diferentes notificações

Utilize a função `sendNotification()` para enviar diferentes tipos de notificações.

Teste utilizando:

* O objeto criado diretamente a partir da interface.
* Um `EmailNotification`.
* Um `SmsNotification`.
* Um `PushNotification`.

Por exemplo:

```ts
sendNotification(notification);
sendNotification(emailNotification);
sendNotification(smsNotification);
sendNotification(pushNotification);
```

Cada objeto deverá executar sua própria implementação de `send()`.

---

# 📁 Estrutura sugerida

Organize o projeto da seguinte maneira:

```text
src/
│
├── classes/
│   ├── EmailNotification.ts
│   ├── SmsNotification.ts
│   └── PushNotification.ts
│
├── interfaces/
│   └── Notification.ts
│
└── main.ts
```

---

# 💭 Questões para reflexão

Depois de finalizar o exercício, responda às perguntas abaixo em um comentário no final do arquivo `main.ts`.

### 1.

Qual é a diferença entre a interface `Notification` e as classes `EmailNotification`, `SmsNotification` e `PushNotification`?

### 2.

Por que foi possível criar o primeiro objeto sem utilizar uma classe?

### 3.

Qual é a função do `implements Notification` nas classes?

### 4.

O que aconteceria se `EmailNotification` não implementasse o método `send()`?

### 5.

Onde o encapsulamento está sendo utilizado nas classes?

### 6.

Qual é a vantagem de utilizar `Notification` como parâmetro da função:

```ts
function sendNotification(notification: Notification): void
```

em vez de utilizar uma classe específica?

---

# ⭐ Desafio

Crie uma nova classe chamada:

```text
WhatsAppNotification
```

Ela também deverá implementar a interface `Notification`.

Implemente seu próprio método `send()`.

Depois, utilize essa nova classe com:

```ts
sendNotification()
```

### Regra do desafio

Você **não deverá modificar a função `sendNotification()`** para fazer a nova classe funcionar.

A função já deve ser capaz de trabalhar com ela porque `WhatsAppNotification` também cumpre o contrato definido por `Notification`.

---

