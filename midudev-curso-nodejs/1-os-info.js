const os = require('node:os');

console.log('Informacion del sistema operativo: ');

console.log('---------------------------------------')
console.log('Nombre del Sistema Operativo: ', os.platform());
console.log('Version del Sistema Operativo: ', os.release());
console.log('Arquitectura: ', os.arch());
console.log('CPUs', os.cpus()); // Vamos a poder escalar procesos con Node