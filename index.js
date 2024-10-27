const os = require('os')

console.log('Informacion del sistema operativo')
console.log('-------------------------------------')
console.log('Nombre del sistema operativo: ', os.platform())
console.log('Version: ', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPU', os.cpus())
console.log('uptime:', os.uptime()/60/60)