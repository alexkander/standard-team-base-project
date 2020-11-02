# Estandarización

Conjunto acuerdos para la estandarización

---

## Temario

- [ ] conventional commits
- [ ] standard-version y changelogs
- [ ] commitizen, commitlint y husky
- [ ] git rebase
- [ ] git squash
- [ ] eslint y prettier
- [ ] estilos de CSS y HTML

---

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

Inicializar el repo para usar [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/) ejecutar el siguiente comando:

```bash
# Con npm
npx commitizen init cz-conventional-changelog --save-dev --save-exact

# Con yarn
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```

Para crear el commit con asistente:

```bash
# primero agregue los archivos
git add .

# Crear commit con git
git cz

# Crear commit con npm
npx cz
```

---

## Documentación

- [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/)
- commitizen: [npm](https://www.npmjs.com/package/commitizen) | [github](https://github.com/commitizen/cz-cli).
