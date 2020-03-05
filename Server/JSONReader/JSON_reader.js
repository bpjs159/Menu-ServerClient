/**
 * JSON service reader
 * Author: Sebastian Bonilla
 * 04/03/2020
 */

//require elements
const fs = require('fs');
let menu = JSON.parse(fs.readFileSync('./JSONReader/menu.json'));

//return the menu 
exports.getMenu = function(file){  
    return menu;
}



