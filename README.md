# Guía para estandarizar proyectos de JS

Conjunto acuerdos para la estandarización

# Temario

- [x] conventional commits
- [x] commitizen, commitlint y husky
- [ ] standard-version y changelogs
- [ ] git rebase
- [ ] git squash
- [ ] eslint y prettier
- [ ] estilos de CSS y HTML

# Conventional Commits convention

Para crear commit que cumplan con [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/), podemos uzar `commitizen`.

## Instalación

```bash
npm install commitizen --save-dev
```

## Inicialización

Agregar al `package.json`

```json
{
  "scripts": {
    "commit": "cz"
  }
}
```

Inicializar el repo para usar la especificación ejecutar el siguiente comando:

```bash
# Con npm
npx commitizen init cz-conventional-changelog --save-dev --save-exact

# Con yarn
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```

## Uso

Para crear el commit guiado:

```bash
# primero agregue los archivos
git add .

# Crear commit con git
git cz

# Crear commit con npm
npx cz
```

# Validación de los mensajes de commit

Para validar que los mensaje de commit hecho desde cualquier herramienta de git cumplan con la [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/) configuramos `commitlint` y `husky`

### Instalación

```bash
npm install @commitlint/config-convencational @commitlint/cli husky@next --save-dev
```

### Inicialización

Para inizializar ejecutar los siguientes comandos:

```bash
# Configuración de commitlint
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Configuración de husky
npx husky install

# Preparar hook de husky para ejecutar commitlint
npx husky add commit-msg "npx --no-install commitlint --edit $1"
```

> Nota: Por los momentos husky no exporta el comando correctamente, por lo que se debe editar el archivo `.husky/commit-msg` y colocar el comando correcto indicado en el paso anterior:

```bash
#!/bin/sh
. "$(dirname $0)/_/husky.sh"

npx --no-install commitlint --edit $1
```

Con `husky` tambien podemos ejecutar los test antes de hacer push:

```bash
# Preparar hook de husky para ejecutar test antes del hacer push
npx husky add pre-push "npx test"
```

> Nota: Debería aplicarse la correción del archivo como en el paso anterior, en este caso sería el archivo `.husky/pre-push`.

# Versionado semántico (semver) y el generación de changelogs

Para automatizar el versionado semántico y la generación de changelogs utilizamos el módulo `standard-version`.

## Instalación

```bash
npm i --save-dev standard-version
```

Se recomienda crear comando npm para facilitar la creación de los releases. Para esto agregar en el `package.json` el siguiente comando:

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

En algunas ocaciones será buena idea compilar o testear el proyecto antes de crear el release. Para esto agregar el comando `npm prerelease`

```json
{
  "scripts": {
    // Compilar antes de testear
    "pretest": "npm run build",
    // Testear antes de crear release
    "prerelease": "npm run test",
    // Crear release con archivo compilados
    "release": "git add <file(s) to commit> && standard-version -a"
  }
}
```

> Note que i se agregó el comando `npm test` en hook `pre-push`, la compilación y los test se ejecutará tambien al ahcer el push.

# Documentación

- [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0/)
- commitizen: [npm](https://www.npmjs.com/package/commitizen) | [github](https://github.com/commitizen/cz-cli)
- commitlint: [docs](https://commitlint.js.org/) | [github](https://github.com/conventional-changelog/commitlint)
- husky v5: [docs](https://typicode.github.io/husky)
- semver: [docs](https://semver.org/)
- standard-version: [npm](https://www.npmjs.com/package/standard-version)
- changelog: [docs](https://keepachangelog.com/en/1.0.0/)
