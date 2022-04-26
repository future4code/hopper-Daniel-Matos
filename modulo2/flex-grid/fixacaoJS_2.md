```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const appears = arrayDeNumeros.filter(
    (item) => item === numeroEscolhido
  ).length;
  return appears > 0
    ? `O número ${numeroEscolhido} aparece ${appears}x`
    : "Número não encontrado";
}
```
