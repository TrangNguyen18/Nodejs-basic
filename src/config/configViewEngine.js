const express = require('express');
const path = require('path');

const configViewEngine = (app)=>{
    app.set('view engine', 'ejs');
    app.set('views', path.join('./src','view'));  

    app.use(express.static(path.join('./src', 'public/css')));
    app.use(express.static(path.join('./src', 'public/js')));
    app.use(express.static(path.join('./src', 'public/images')));
}

module.exports = configViewEngine;