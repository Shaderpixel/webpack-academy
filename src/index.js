import createCard from './card'; // importing a module into the dependency graph
import './shaderpixel-logo.png'; // importing an image to showcase url-loader and file-loader
import  './index.css'; // importing a css file to be used with css-loader and style-loader

createCard(
		'I\'m learning webpack: Web Essentials!!!!',
		'This course is made by Sean Larkin <img src="src/shaderpixel-logo.png">'
);