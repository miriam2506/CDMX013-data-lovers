# Data Lovers

## Índice

* [1. Proyecto Studio Ghibli](#1-Proyecto-Studio-Ghibli)
* [2. Resumen del Proyecto](#2-Resumen-del-Proyecto)
* [3. Investigación ](#3-Investigación)
* [4. Trabajo Colaborativo](#4-Trabajo-colaborartivo)
* [5. Historias de Usuario](#5-Historias-de-Usuario)
* [6. Pruebas Unitarias](#6-Pruebas-Unitarias)
* [7. Objetivos de aprendizaje](#7-Objectivos-de-aprendizaje)

***

## 1. Proyecto Studio Ghibli

El Proyecto a desarrollar de Data Lovers, se enfocó en crear una página web dirigida al fandom de Studio Ghibli específicamente.
Decidimos generar una dinámica al estilo biblioteca, con toda la informacion básica de consulta sobre las producciones generadas por la casa animada.

## 2. Resumen del proyecto

Dentro de la dupla, decidimos trabajar con la temática de Studio Ghibli, ya que hemos visto un par de sus pleículas y nos agrado la línea de ilustración y paleta de color.

En el desarrollo de el corazón de este proyecto, aprendimos a manipular el conjunto de datos brindado, para hacerlos accesibles mediante un diseño en una págian web, para que así su segmento pueda utilizarlo.

Construimos la página enfocada a la filmografía de el Studio, con la finalidad de poder mostrar la data, realizar filtrado de líneas en específico como por ejemplo por director, mostar su ordenado según su letra y compartir el score máximo de sus películas mediante un cálculo. 

* Prototipo de baja fidelidad
Buscamos generar una propuesta visual pensando en cómo mostrar la información básica de la web, y después por etapas las distintas historias de usuario. 
Al comenzar el proyecto tuvimos una lluvia de ideas para poder acordar el rumbo que queríamos tomar como dupla en el diseño y organización del proyecto.

Realizamos un prototipo de baja fidelidad, y posteriormente lo comenzamos a maquetar.

<img src="Bajafidelidadghibli.jpg">

* Prototipo de alta fidellidad 
[Figma](https://www.figma.com/file/4Eb3bzTMCkjWTNUvEUbxcH/STUDIO-GHIBLI?node-id=0%3A1)

Para el Prototipo de alta fidelidad, quisimos compartir algo visualmente atractivo y dinámico.
Lo siguiente que hicimos fue diseñar la Interfaz de Usuario en figma.
                                   
<img src="Prototipo figma ghibli.png">

 * El resultado final se asemeja a lo planeado 
                                 
 <img src="Final_ghibli.png">
 

## 3. Trabajo Colaborativo
[Trello](https://trello.com/b/6vgREqFZ/proyecto-2-data-lovers)

Durante la planeación y desarrollo del proyecto se procuró la comunicación constante, horarios de trabajo y de estudio. La investigación de conceptos y aplicativos se hacia de manera individual para después hacer teamback e ir encontrando la solución al garabato o paso que estuvieramos llevando en cada sprint.
El mapeo de avances y actividades lo llevamos con esa herramienta, así como el de nuestros objetios de aprendizaje, bloqueos y recursos de consulta.

## 4. Investigación
Esta página esta pensada para que en un sólo sitio se encuentre la filmografía de Studio Ghibli , aquí pueden visualizar las películas así como alguna información de cada una de ellas. 

La usuaria objetivo, podrá de manera fácil filtrarlas según su preferencia de productor, director o año, y obtener un dato curioso.

## 5. Historias de Usuario

* Historia de Usuaria 1

Yo como fanática de Studio Ghibli, quiero conocer toda la filmografía por año y las más vistas, con el objetivo de saber la evolución de las producciones y las características de cada una.

**Criterios de Aceptación**

>* Todas las películas aparecen en una misma vista, en forma de grilla (cuadrícula) sin ningún orden en particular.
>* La vista no tiene paginación, se hace scroll desde el primer elemento hasta el último.
>* Cada cuadrícula contiene: Poster, título y año de la película.
>* Al hacer click/tap en cada cuadrícula el poster hace zoom y el cursor se vuelve una manita.
>* La UI es exactamente igual al prototipo de alta fidelidad (colores, tamaños de bloques,tipo de letra, tamaño de letra, imágenes, etc. )

**Definición de Terminado**

>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho code review del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.


* Historia de Usuaria 2

Yo como usuaria de la página, deseo poder buscar mis películas filtrándolas por el año en el que fueron creadas, por el director que las dirigió y por el productor de cada una de ellas, según lo que me interesa ver en particular.
<img src="Ghibli_director.png">

**Criterios de Aceptación.**

>* La UI contiene elementos para filtrar las peliculas por productor, director, año y para regresar a todas las peliculas en cada 
filtrado.(desplegables u otros).
>* Al seleccionar valores de los elementos para filtrar, en la parte inferior de la página aparece solamente el tipo de contenido filtrado.

**Definición de Terminado.**

>* Hay un test unitario para la función de filtrado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

* Historia de Usuaria 3

Yo como usuaria, quisiera poder ordenar las películas por sus nombres de manera alfabéticamente ascendente (A-Z) y descendente (Z-A).

**Criterios de Aceptación.**

>* La UI contiene elementos para ordenar los datos alfabpeticamente de acuerdo al título de las películas.
>* Al seleccionar valores de los elementos para ordenar, en la parte inferior de la página aparece solamente el contenido ordenado según el criterio seleccionado.

**Definición de Terminado.**

>* Hay un test unitario para la función de ordenado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

* Historia de Usuaria 4

Yo como usuaria desearía poder ver alguna estadística, conocer que Director tiene el porcentaje mayor de películas creadas en Studio Ghibli, o conocer el mayor Ranking que tenga la Casa productora.

>* Se generó un boton random para que pudiera reflejarse ese dato a manera de información curiosa.

## 6. Pruebas Unitarias

<img src="Test Ghbli.png">


## 7. Objetivos de Aprendizaje

### HTML
- [.] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [.] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [.] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [.] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [.] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [.] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [.] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [.] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [.] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [.] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [.] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [.] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [.] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [.] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [.] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [.] **Git: Instalación y configuración**

- [.] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [.] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [.] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [.] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [.] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### user-centricity

- [.] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [.] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [.] **Seguir los principios básicos de diseño visual**

### research

- [.] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

