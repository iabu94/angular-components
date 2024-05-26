## Configure Prettier & ESLint in Angular

`ng add @angular-eslint/schematics@latest`

`yarn add prettier -D`

create `.prettierrc.json` file in the root directory

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}
```
