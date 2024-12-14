## Project Setup
```sh
yarn install
```

## Compile Build Commands

```sh
yarn run dev
yarn run build
yarn run prod
```

## Run to cdn

```sh
yarn run cdn
```


## Repo Link in npmjs.com

```sh
https://www.npmjs.com/package/em-datetimepicker
```


<!-- https://codepen.io/ryomario/pen/PoVJVqP -->

## If you load script in defer mode  or after ready the DOM, follow the instruction

```
Example: 1
==========
document.addEventListener( 'empicker_is_ready', yourCallback )

Example: 2
==========
window.addEventListener('message', ({data}) => {
    if(data.action === 'emDateTimePicker_loaded'){
      # your code here >>> example: inputElement.emDateTimePicker({...})
    }
});
```
