# Shorthand 

* junção de propriedades
* resumido
* legível

```css
{

  /* background properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: letf top;

  /* background shorthand */
  background: #000 url(images/bg.gif) no-repeat left top;

  /* font properties */
  font-style: italic; 
  font-weight: bold;
  font-size: .8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: italic bold .8em/2.1 Arial, sans-serif;
}

```

## Detalhes

* não irá considerar propriedades anteriores
* valores não especiicados irão assumir o valor padrão
* geralmente a orgem descrita não importa, mas se houver muitas propriedades
coom valores semelhates, poderemos encontrar problemas.

## 

