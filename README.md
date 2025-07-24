````markdown
# 🚀 Projeto de Testes Automatizados com Cypress + BrowserStack

Este repositório contém a estrutura de testes automatizados utilizando [Cypress](https://www.cypress.io/)
integrada à [BrowserStack](https://www.browserstack.com/) para execução em múltiplos navegadores na nuvem.

**Repositório:** [github.com/rafaelsuzano/DemoCypressBrowserStack]
(https://github.com/rafaelsuzano/DemoCypressBrowserStack.git)

---

## 🧰 Tecnologias Utilizadas

- [Cypress](https://docs.cypress.io/)
- [BrowserStack](https://www.browserstack.com/)
- [Node.js](https://nodejs.org/)
- JavaScript (ES6+)

---

## 📦 Instalação

```bash
git clone https://github.com/rafaelsuzano/DemoCypressBrowserStack.git
cd DemoCypressBrowserStack
npm install
````

---

## 🔐 Configuração do BrowserStack

1. Crie o arquivo `.browserstack.json` no diretório raiz com o seguinte conteúdo:

```json
{
  "auth": {
    "username": "SEU_USERNAME_BROWSERSTACK",
    "access_key": "SUA_ACCESS_KEY_BROWSERSTACK"
  },
  "browsers": [
    {
      "browser": "chrome",
      "os": "Windows",
      "os_version": "10"
    },
    {
      "browser": "firefox",
      "os": "OS X",
      "os_version": "Big Sur"
    }
  ],
  "run_settings": {
    "cypress_proj_dir": "./",
    "cypress_config_file": "cypress.config.js",
    "project_name": "Demo Cypress BrowserStack",
    "build_name": "Build #1",
    "parallels": 2,
    "npm_dependencies": {}
  },
  "connection_settings": {
    "local": false,
    "local_identifier": null
  },
  "disable_usage_reporting": false
}
```

Substitua os valores de `username` e `access_key` pelas suas credenciais do BrowserStack.

---

## ⚙️ Estrutura do Projeto

```
.
├── cypress/
│   ├── e2e/             # Casos de teste
│   ├── fixtures/        # Dados mockados
│   └── support/         # Comandos customizados e configurações globais
├── cypress.config.js    # Configurações do Cypress
├── .browserstack.json   # Configuração para BrowserStack
├── package.json
└── README.md
```

---

## 🧪 Execução dos Testes

### ✅ Localmente (modo interativo ou headless)

```bash
npx cypress open
# ou
npx cypress run
```

### ☁️ Via BrowserStack

```bash
npx browserstack-cypress run
```

Acompanhe as execuções pelo [Dashboard BrowserStack](https://automate.browserstack.com/).

---

## 📌 Observações

* Testes são executados paralelamente em diferentes navegadores e sistemas operacionais.
* Tunelamento local está desativado por padrão (`"local": false`), ative se necessário.

---

## 🧪 Exemplo de Caso de Teste

```javascript
describe('Página inicial', () => {
  it('Deve exibir o título corretamente', () => {
    cy.visit('https://exemplo.com')
    cy.title().should('include', 'Exemplo')
  })
})
```

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença [MIT](LICENSE).

---

## 👨‍💻 Autor

Desenvolvido por [Rafael Suzano Cruz](https://github.com/rafaelsuzano) 🚀

```

--
