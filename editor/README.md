# Editor Configuration

## Basic Rules

- Use utf-8 encoding
- use unix newlines
- Use space for indentation
- Indentation length is 4 spaces
- Avoid spaces at the end of lines
- The file must end with a blank line

## Git Configuration for Windows!

It is best not to convert carriage returns and line feeds when checking out:

```bash
git config --global core.autocrlf input
```

## Each Editor Configuration
### VSCode

```json
{
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "eslint.enable": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "vue", "autoFix": true }
    ],
}
```

Other properties are configured by default.

### Atom

Set `Tab Length` to 4 in Preferences, and other settings are configured by default in the Whitespace package.

### Sublime

``` json
{
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,
}
```
