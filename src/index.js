import fooString from './foo';
import bar from './bar-cjs';
import './shaderpixel-logo.jpg';

const es6String = `I am es6 string from ${fooString}, ${bar}`;
let outputFunc = () => console.log(es6String);

outputFunc();

console.log(fooString, bar);