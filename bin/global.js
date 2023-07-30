#! /usr/bin/env node
// arriba, Definimos el shebang para indicar que este archivo debe ser interpretado por Node.js


let random = require('../src/index.js'); // Importamos el módulo 'random' desde el archivo '../src/index.js'.
// El módulo debe exportar la función 'funnyCommit' para que podamos usarla aquí.

// Llamamos a la función 'funnyCommit' del módulo 'random'.
// Esto generará y mostrará un mensaje de commit aleatorio en la consola.
random.funnyCommit(); 