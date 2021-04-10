# Alertrict

A small javascript package for creating beautiful alert (IOS style)

## Installation

### install using [npm](https://npmjs.org/):

```bash
npm install alertrict
```

## Import

### using [npm](https://npmjs.org/):

```javascript
import alertrict from "alertrict";
```

### or

```html
<link rel="stylesheet" href="dist/css/alertrict.min.css" />
<script src="dist/js/alertrict.min.js"></script>
```

## Usage

```javascript
alertrict(options);
```

## Options

options are object

| key         | type      | default  |
| ----------- | --------- | -------- |
| title       | `string`  |          |
| text        | `string`  |          |
| confirmText | `string`  | Continue |
| showCancel  | `boolean` | FALSE    |
| cancelText  | `string`  | Cancel   |
| animation   | `boolean` | TRUE     |
| destructive | `boolean` | FALSE    |

## Example

```javascript
alertrict({
  title: "Alert!",
  text: "Are you sure you want to quit?",
  showCancel: true,
}).then((result){
    if(result.isConfirmed){
        // doing something
    }
});
```

## Documentation

[rifkiard.github.io/alertrict](https://rifkiard.github.io/alertrict/)
