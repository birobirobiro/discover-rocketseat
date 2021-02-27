# At-rules 

* Está relacionado ao comportamento do CSS 
* começa com o sinal de `@`seguido do identificador e valor

## Exemplos comuns

- @important /* incluir um CSS externo */
- @media /* regras conodicionais para dispositivos */
- @font-face /* fontes externas */
- @keyframes /* Animmation */


```css
@ immport "http://loca.com/style.css";

@media (min-width: 500px) {
  /* rules here */
} 

@font-face {
  /* rules here */
}

@keyframes nameofanimation{
  /* rules here */
}


