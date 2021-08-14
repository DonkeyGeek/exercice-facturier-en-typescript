import { FormInput } from './classes/FormInputs';
import { Storage } from './classes/Storage';
import * as _ from 'lodash';

new FormInput();
Storage.checkLocalStorage();
console.log("Donkey Geek est super cool 3");

const comics = ['Superman', 'Batman', 'Spiderman'];
const firstComic = _.first(comics);
const reverseComics = _.reverse(comics);
console.log(firstComic); // Superman
console.log(reverseComics); // SpiderMan, Batman, Superman