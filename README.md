# Zephyrus

Javascript Library

## Installation

```hash
npm i zephyrus --save
```

## Modules

Modules included in Zephyrus:

### ScrollBar

The ScrollBar module uses the [SimpleBar](https://github.com/Grsmto/simplebar/tree/master/packages/simplebar) plugin internally.

```javascript
import { ScrollBar } from 'zephyrus'

new ScrollBar(document.getElementById('myElement'), {
  option1: value1,
  option2: value2
});
```