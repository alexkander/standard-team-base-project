# Estandarización

Conjunto acuerdos para la estandarización

## Temario

[ ] conventional commits
[ ] standard-version y changelogs
[ ] commitizen, commitlint y husky
[ ] git rebase
[ ] git squash
[ ] eslint y prettier
[ ] estilos de CSS y HTML

## Conventional commits

Instalar `commitizen` global

```bash
npm install -g commitizen
```

Agregar al `package.json`

```json
  "scripts": {
    "commit": "cz"
  }
```

Inicializar configuración de repo para usar [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/) ejecutar el siguiente comando:

```bash
# Con npm
npx commitizen init cz-conventional-changelog --save-dev --save-exact
# Con yarn
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```

## Herramientas utilizadas

- [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/)
- commitizen: [npm](https://www.npmjs.com/package/commitizen) | [github](https://github.com/commitizen/cz-cli).
