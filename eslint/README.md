#Kubevue ESLint Config

## Configuration

``` shell
npm install --save-dev eslint eslint-config-kubevue
```

Then create the `.eslintrc` file:

### Configure JS Only

```json
{
    "extends": "Kubevue",
    "env": {
        "browser": true,
        "node": true
    }
}
```

### Additional Vue Configuration

```json
{
    "extends": "Kubevue/vue",
    "env": {
        "browser": true
    }
}
```

### Environment Containing Tests and Vue

``` json
{
    "extends": "Kubevue/all",
    "env": {
        "browser": true
    }
}
```

## Editor Configuration

### VSCode

If you want to use Vue-related configuration, you need to configure the following:

```json
"eslint.enable": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "html", "autoFix": true },
    { "language": "vue", "autoFix": true }
],
```

For other complex situations, please refer to [ESLint configuration](https://eslint.org/docs/user-guide/configuring).

## Code style

- [JavaScript Style](JavaScript.md)
- [Vue Style](Vue.md)
