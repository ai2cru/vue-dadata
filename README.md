# Vue Dadata Textarea

![Publish](https://github.com/ai2cru/vue-dadata-textarea/workflows/Publish/badge.svg)

It's a vue component for hinting addresses using [DaData.ru](https://dadata.ru).

[Link to RU documentation](https://github.com/ai2cru/vue-dadata-textarea/tree/master/ru/README.md)

## Install

[npm package](https://www.npmjs.com/package/vue-dadata-textarea)

```bash
$ npm install vue-dadata-textarea --save
```

[yarn package](https://yarnpkg.com/en/package/vue-dadata-textarea)
```bash
$ yarn add vue-dadata-textarea
```

## Usage

### Global

```js
import VueDadataTextarea from 'vue-dadata-textarea'

Vue.use(VueDadataTextarea)
```

### Local

```html
<template>
  <div id="app">
    <vue-dadata-textarea token="dadata_api_key"></vue-dadata-textarea>
  </div>
</template>

<script>
import VueDadataTextarea from 'vue-dadata-textarea'

export default {
  name: 'VueDadataTest',
  components: {
    'vue-dadata-textarea': VueDadataTextarea
  }
}
</script>
```

### Properties

| Prop  | Required | Type | Description |
| ------------- | ------------- | ------------- | ------------- |
| token  | Yes  | string  | Auth token DaData.ru  |
| placeholder  | No  | string  | Text placeholder  |
| query  | No  | string  | Initial state input field  |
| autoload  | No  | boolean  | If `true`, then a request for tips will be initialed in the background in the created hook  |
| onChange  | No  | function(suggestion: DadataSuggestion) -> void  | Function called when selecting a tooltip  |
| autocomplete  | No  |  string  |  Autocomplete field |
| defaultClass  | No  |  string  |  Default class ofr component, default value - `vue-dadata` |
| classes  | No  |  string  |  Extra classes |
| inputName  | No  |  string  |  Input name attribute |
| inputType  | No  |  string  |  Input type; `input` or `textarea` |
| textareaRows  | No  |  Number  |  Rows number for textarea |
| fromBound  | No  |  string  |  Dadata bound type FROM |
| toBound  | No  |  string  |  Dadata bound type TO |
| highlightClassName  | No  |  string  |  CSS class name applied to highlighted text |
| unhighlightClassName  | No  |  string  |  CSS class name applied to unhighlighted text |
| highlightTag  | No  |  string  |  Type of tag to wrap around highlighted matches; defaults to `mark` but can also be a component |
| locationOptions  | No  |  object  |  Location options for choosing cities or countries |


## Dependencies

- [axios](https://github.com/axios/axios)
- [core-js](https://github.com/zloirock/core-js)
- [vue](https://github.com/vuejs/vue)
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
- [vue-highlight-words](https://github.com/Astray-git/vue-highlight-words)
- [vue-debounce-decorator](https://github.com/trepz/vue-debounce-decorator)

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository [issues section](https://github.com/ikloster03/vue-dadata/issues).

## ToDo

[Show project Vue Dadata](https://github.com/ikloster03/vue-dadata/projects/1)

## Milestones

[Show milestones](https://github.com/ikloster03/vue-dadata/milestones)

## Contact me

- Site: [ikloster.ru](http://ikloster.ru)
- E-mail: <ikloster@yandex.ru>
- Twitter: [twitter.com/IvanMonastyrev](https://twitter.com/IvanMonastyrev)

## Contributors

- [Valery Roshett](https://github.com/Roshett)
- [Ilya Kiselev](https://github.com/kiselev-webdev)

## [CHANGELOG](https://github.com/ikloster03/vue-dadata/blob/master/CHANGELOG.md)

## [CONTRIBUTING](https://github.com/ikloster03/vue-dadata/blob/master/CONTRIBUTING.md)

## [LICENSE](https://github.com/ikloster03/vue-dadata/blob/master/LICENSE)

Copyright (c) 2019 Ivan Monastyrev <ikloster@yandex.ru>. Licensed under the [MIT license](https://github.com/ikloster03/vue-dadata/blob/master/LICENSE).
