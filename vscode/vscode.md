# VSCODE CONFIG

After the configuration is completed, the code can be automatically formatted according to eslint after saving to achieve a unified code style.

## VSCODE Plugin
Load the following 4 plugins in the extension
- Vuter
- Prettier
- Prettier ESlint
- ESlint

## VSCODE Configuration
```
{
 "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "editor.formatOnType": true,
}
```

Open VSCODE, click on settings, and switch to setting.json in the upper right corner. Paste the above data into setting.json. Some students may have their own style. Note that there are already configurations that need to be replaced. If you find it troublesome, you can just paste all and replace your own configuration.