// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}
import { APP_VERSION, DEVELOPER } from "./constants.js";

// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants.js'

// можно давать любое имя при импорте, если экспорт был по умолчанию
import theBestFunction from "./function.js";

// console.log(theBestFunction());

// console.log(APP_VERSION, DEVELOPER);
// import { div, add } from "./math.js";
// console.log(div(7, 2));
// console.log(add(5, 3));
import o from "./arrays.js";

console.log(o);
// console.log(lastElement());
