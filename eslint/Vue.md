# View Style

This configuration uses the recommended rules and then customizes some of them.

## Table of Contents
- [Template](#Template)
- [Screenplay] (#Screenplay)

> Description:
> - Tone: Mandatory > Required == ! Prohibited > Try > Recommended == ! Not recommended;
> - 🔧 indicates that ESLint can automatically fix it.

## Template

### Blank
#### Require templates to use 4 spaces for indentation 🔧
[html-indent](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md)

#### Do not allow multiple spaces in templates🔧
[no-multi-spaces](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-multi-spaces.md)

#### Force mustache to always have a space on the left and right 🔧
[mustache-interpolation-spacing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md)

#### There must be no spaces on the edge of the tag, and there must be a space before the self-closing slash 🔧
[html-closing-bracket-spacing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-spacing.md)

### HTML Format
#### Require that the tag ending bracket never wraps 🔧
[vue/html-closing-bracket-newline](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-newline.md)

#### Requires correct tag endings, only svg and math tags use self-closing 🔧
[html-end-tags](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md), [html-self-closing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md)

#### Require HTML attributes to use double quotes
[html-quotes](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md)

#### Require hyphens in template attributes 🔧
[attribute-hyphenation](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md)

``` html
// ✗ bad
<foo myProp="prop"></foo>

// ✓ good
<foo my-prop="prop"></foo>
```

#### Duplicate attributes are prohibited.
[no-duplicate-attributes](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md)

Allow `class` to coexist with `:class`, and `style` to coexist with `:style`.

``` html
// ✗ bad
<div foo="abc" :foo="def"></div>

// ✓ good
<div foo="abc"></div>
<div :foo="def"></div>
```

### Instructions
#### Require `v-bind` to use `:` 🔧
[v-bind-style](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md)

#### Require `v-on` to use `@` uniformly 🔧
[v-on-style](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md)

#### It is not recommended to use `v-for` and `v-if` on the same element
[no-use-v-if-with-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-use-v-if-with-v-for.md)

When using the v-if directive on a v-for element, a warning will occur if the variable used in v-for is not used.

``` html
// ✗ bad
<ol>
    <li v-if="shown" v-for="item in items">{{item.message}}</li>
</ol>

// ✓ good
<ol>
    <li v-for="item in items" v-if="item.shown">{{item.message}}</li>
</ol>
<ol v-if="shown">
    <li v-for="item in items">{{item.message}}</li>
</ol>
```

#### Requires `v-bind`, `v-if`, `v-else-if`, `v-for`, `v-model` and other instructions to be written correctly
[valid-v-bind](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md), [valid-v-cloak](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md), [valid-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md), [valid-v-else-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md), [valid-v-else](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md), [valid-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md), [valid-v-html](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md), [valid-v-model](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md), [valid-v-on](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md), [valid-v-once](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md), [valid-v-pre](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md), [valid-v-show](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md), [valid-v-text](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md)

``` html
// ✗ bad
<div v-bind></div>
<div :aaa></div>
<div v-bind:aaa.bbb="foo"></div>

// ✓ good
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
<div v-bind:text-content.prop="text"></div>
<my-component :prop="someThing"></my-component>
```

### Scripts in Templates
#### Request template cannot be parsed error
[no-parsing-error](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md)

The following errors are not allowed in `<template>`:

- Syntax error in the command
- Mustache syntax error
- [HTML syntax errors](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors)

``` html
// ✗ bad
<div>{{ foo. }}</div>

// ✓ good
<div>{{ foo.bar }}</div>
```

#### Disable the use of `this` in templates
[this-in-template](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/this-in-template.md)

### Others

#### Requires `<template>` to have a correct root element
[valid-template-root](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md)

``` html
// ✗ bad
<template>
    <div>hello</div>
    <div>hello</div>
</template>

// ✓ good
<template>
    <div>
        <div>hello</div>
        <div>hello</div>
    </div>
</template>
```

#### Disable mustache syntax in `<textarea>`
[no-textarea-mustache](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md)

``` html
// ✗ bad
<textarea>{{ message }}</textarea>

// ✓ good
<textarea v-model="message"></textarea>
```

#### Try not to have unused variables in `v-for`
[no-unused-vars](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md)

#### Requires `v-for` to be bound to a key
[require-v-for-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md)

``` html
// ✗ bad
<div v-for="x in list"></div>

// ✓ good
<div v-for="x in list" :key="x.id"></div>
```

#### Disable `key` on `<template>`
[no-template-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md)

#### Requires `is` of `<component>` to use `v-bind`
[require-component-is](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md)

``` html
// ✗ bad
<component></component>

// ✓ good
<component :is="type"></component>
```

## Screenplay

Overall
#### Require component names to always use hyphens 🔧
[name-property-casing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md)

#### Disallow duplicate fields
[no-dupe-keys](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md)

``` javascript
// ✗ bad
export default {
    props: {
        foo: String,
    },
    computed: {
        foo: {
            get () {},
        },
    },
    data: {
        foo: null,
    },
    methods: {
        foo () {},
    },
};

// ✓ good
export default {
    props: ['foo'],
    computed: {
        bar () {},
    },
    data () {
        return {
            baz: null,
        };
    },
    methods: {
        boo () {},
    },
};
```

#### It is recommended to use consistent component object order
[order-in-components](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md)

### Properties
#### Requires that attributes must have types
[require-prop-types](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md)

#### Attributes are not required to have default values
[vue/require-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md)

#### Requires that the default value of the attribute must be correct
[require-valid-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md)


### Computed Properties
#### Requires that calculated properties must have a return
[return-in-computed-property](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md)

``` javascript
// ✗ bad
export default {
    computed: {
        foo () {
        },
        bar: function () {
        }
    }
}

// ✓ good
export default {
    computed: {
        foo () {
            return true
        },
        bar: function () {
            return;
        }
    }
}
```

#### Disallow side effects in computed properties
[no-side-effects-in-computed-properties](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-side-effects-in-computed-properties.md)

``` javascript
// ✗ bad
computed: {
    fullName() {
        this.firstName = 'lorem'; // <- side effect
        return `${this.firstName} ${this.lastName}`;
    },
    reversedArray () {
        return this.array.reverse(); // <- side effect
    },
},

// ✓ good
computed: {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
        return this.array.slice(0).reverse()
    },
}
```

#### Disable the use of asynchronous methods in computed properties
[no-async-in-computed-properties](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md)

### Others
#### Vue reserved words are prohibited
[no-reserved-keys](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-reserved-keys.md)

``` javascript
// ✗ bad
export default {
    props: {
        $el: String,
    },
    computed: {
        $on: {
            get () {},
        },
    },
    data: {
        _foo: null,
    },
    methods: {
        $nextTick () {},
    },
};
```

#### Force the component's data to be a function
[no-shared-component-data](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md)

``` javascript
// ✗ bad
export default {
    data: {
        foo: 'bar',
    },
};

// ✓ good
export default {
    data () {
        return {
            foo: 'bar'
        };
    },
};
```

#### Requires that the render function must have a return value
[require-render-return](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md)

## References

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)