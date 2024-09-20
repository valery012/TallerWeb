// Punto 1: Par o Impar
function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

// Ejemplo de uso
const resultado1 = esParOImpar(5);
console.log(resultado1); // "El número es impar"

// Punto 2: Número Mayor
function NumMayor(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2;
}

// Ejemplo de uso
const mayor = NumMayor(10, 20);
console.log(El mayor número es: ${mayor}); // "El mayor número es: 20"

// Punto 3: Convertir Grados
function convertirGrados(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

// Ejemplo de uso
const fahrenheit = convertirGrados(25);
console.log(${25}°C es igual a ${fahrenheit}°F); // 25°C es igual a 77°F

// Punto 4: Sumar Arreglo
function sumarArreglo(numeros: number[]): number {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// Ejemplo de uso
const numerosArray = [1, 2, 3, 4, 5];
const sumaTotal = sumarArreglo(numerosArray);
console.log(La suma de los números es: ${sumaTotal}); // La suma de los números es: 15

// Punto 5: Palíndromo
function esPalindromo(palabra: string): boolean {
    const palabraLimpia = palabra.toLowerCase().replace(/[\W_]/g, ''); // Elimina espacios y caracteres especiales
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === palabraInvertida;
}

// Ejemplo de uso
const resultado5 = esPalindromo("anilina");
console.log(¿Es un palíndromo?: ${resultado5}); // "¿Es un palíndromo?: true"

// Punto 6: Números primos en un rango
function esPrimo(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primosEnRango(start: number, end: number): number[] {
    const primos = [];
    for (let i = start; i <= end; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

// Ejemplo de uso:
const primos = primosEnRango(10, 20);
console.log(Primos en el rango: ${primos}); // Primos en el rango: [11, 13, 17, 19]

// Punto 7: Factorial de un número
function factorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Ejemplo de uso:
const resultado7 = factorial(5);
console.log(resultado7); // 120

// Punto 8: Serie de Fibonacci
function fibonacci(n: number): number[] {
    const serie: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie.slice(0, n);
}

// Ejemplo de uso:
const resultado8 = fibonacci(10);
console.log(resultado8); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Punto 9: Longitud de una cadena
function longitudCadena(cadena: string): number {
    return cadena.length;
}

// Ejemplo de uso:
const resultado9 = longitudCadena("Hola Mundo");
console.log(La longitud de la cadena es: ${resultado9});

// Punto 10: Reemplazar vocales por asteriscos
function reemplazarVocales(cadena: string): string {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '*');
}

// Ejemplo de uso:
const resultado10 = reemplazarVocales("Hola Mundo");
console.log(resultado10); // "H*l* M*nd*"

// Punto 11: Número mayor en un arreglo
function numeroMayor(arr: number[]): number {
    return Math.max(...arr);
}

// Ejemplo de uso:
const resultado11 = numeroMayor([3, 7, 2, 5, 10, 4]);
console.log(El número mayor es: ${resultado11});

// Punto 12: Suma de los dígitos de un número
function sumaDigitos(numero: number): number {
    const digitos = numero.toString().split('');
    return digitos.reduce((suma, digito) => suma + parseInt(digito), 0);
}

// Ejemplo de uso:
const resultado12 = sumaDigitos(12345);
console.log(La suma de los dígitos es: ${resultado12});

// Punto 13: Contar vocales en una cadena
function contarVocales(cadena: string): number {
    const vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
    return vocales ? vocales.length : 0;
}

// Ejemplo de uso:
const resultado13 = contarVocales("Hola Mundo");
console.log(El número de vocales es: ${resultado13});

// Punto 14: Verificar si dos cadenas son anagramas
function sonAnagramas(cadena1: string, cadena2: string): boolean {
    const normalizar = (cadena: string) => 
        cadena.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    
    return normalizar(cadena1) === normalizar(cadena2);
}

// Ejemplo de uso:
const resultado14 = sonAnagramas("anagrama", "nag a ram");
console.log(¿Son anagramas?: ${resultado14});

// Punto 15: Contar elementos en un arreglo
function contarElementos<T>(arr: T[]): number {
    return arr.length;
}

// Ejemplo de uso:
const resultado15 = contarElementos([1, 2, 3, 4, 5]);
console.log(El número de elementos es: ${resultado15});

// Punto 16: Invertir cadena
function invertirCadena(cadena: string): string {
    return cadena.split('').reverse().join('');
}

// Ejemplo de uso:
const resultado16 = invertirCadena("Hola Mundo");
console.log(La cadena invertida es: ${resultado16});

// Punto 17: Encontrar pares que sumen un número objetivo
function encontrarParesDeSuma(arr: number[], objetivo: number): [number, number][] {
    const pares: [number, number][] = [];
    const numerosSet = new Set<number>();

    for (const num of arr) {
        const complemento = objetivo - num;
        if (numerosSet.has(complemento)) {
            pares.push([complemento, num]);
        }
        numerosSet.add(num);
    }

    return pares;
}

// Ejemplo de uso:
const resultado17 = encontrarParesDeSuma([1, 2, 3, 4, 5, 6], 7);
console.log(Los pares que suman 7 son: ${JSON.stringify(resultado17)});

// Punto 18: Verificar si una cadena contiene solo números
function contieneSoloNumeros(cadena: string): boolean {
    return /^\d+$/.test(cadena);
}

// Ejemplo de uso:
const resultado18 = contieneSoloNumeros("12345");
console.log(¿La cadena contiene solo números?: ${resultado18});

const resultado18_2 = contieneSoloNumeros("123a45");
console.log(¿La cadena contiene solo números?: ${resultado18_2});

// Punto 19: Remover duplicados de un arreglo
function removerDuplicados(arr: number[]): number[] {
    return Array.from(new Set(arr));
}

// Ejemplo de uso:
const resultado19 = removerDuplicados([1, 2, 3, 2, 4, 1, 5]);
console.log(El arreglo sin duplicados es: ${resultado19});

// Punto 20: Número de ocurrencias de una letra en una cadena
function contarOcurrencias(cadena: string, letra: string): number {
    let contador: number = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso:
const resultado20 = contarOcurrencias("programacion en typescript", "a");
console.log(La letra "a" aparece ${resultado20} veces en la cadena.);

// Punto 21: Área de un rectángulo
interface Rectangulo {
    ancho: number;
    alto: number;
}


// Punto 21: Área de un rectángulo

// Definimos la interfaz para un rectángulo
interface Rectangulo {
    ancho: number;
    alto: number;
}

// Función que calcula el área del rectángulo
function calcularArea(rectangulo: Rectangulo): number {
    return rectangulo.ancho * rectangulo.alto;
}

// Ejemplo de uso
const miRectangulo: Rectangulo = {
    ancho: 10,
    alto: 5,
};

const area = calcularArea(miRectangulo);
console.log(El área del rectángulo es: ${area});


// Punto 22: Información de un empleado

// Definimos la interfaz para un Empleado
interface Empleado {
    nombre: string;
    edad: number;
    cargo: string;
}

// Función que recibe un empleado y devuelve un mensaje con su información
function obtenerInformacionEmpleado(empleado: Empleado): string {
    return El empleado ${empleado.nombre}, de ${empleado.edad} años, trabaja como ${empleado.cargo}.;
}

// Ejemplo de uso
const empleado1: Empleado = {
    nombre: "Juan Pérez",
    edad: 30,
    cargo: "Desarrollador",
};

const mensaje = obtenerInformacionEmpleado(empleado1);
console.log(mensaje);


// Punto 23: Crear un producto con descuento

// Definimos la interfaz para un Producto
interface Producto {
    nombre: string;
    precio: number;
    descuento: number; // El descuento es un porcentaje (ejemplo: 10 para 10%)
}

// Función que aplica el descuento y devuelve el nuevo precio
function aplicarDescuento(producto: Producto): number {
    const descuentoAplicado = producto.precio * (producto.descuento / 100);
    const nuevoPrecio = producto.precio - descuentoAplicado;
    return nuevoPrecio;
}

// Ejemplo de uso
const producto1: Producto = {
    nombre: "Laptop",
    precio: 1000,
    descuento: 15, // 15% de descuento
};

const nuevoPrecio = aplicarDescuento(producto1);
console.log(El nuevo precio del producto "${producto1.nombre}" con descuento es: $${nuevoPrecio});


// Punto 24: Calcular el promedio de estudiantes

// Definimos la interfaz para un Estudiante
interface Estudiante {
    nombre: string;
    nota: number;
}

// Función que calcula el promedio de las notas de los estudiantes
function calcularPromedio(estudiantes: Estudiante[]): number {
    const totalNotas = estudiantes.reduce((sum, estudiante) => sum + estudiante.nota, 0);
    return totalNotas / estudiantes.length;
}

// Ejemplo de uso
const estudiantes: Estudiante[] = [
    { nombre: "Alice", nota: 85 },
    { nombre: "Bob", nota: 90 },
    { nombre: "Charlie", nota: 78 },
];

const promedio = calcularPromedio(estudiantes);
console.log(El promedio de las notas de los estudiantes es: ${promedio});


// Punto 25: Registro de automóviles

// Definimos la interfaz para un Automóvil
interface Automovil {
    marca: string;
    modelo: string;
    año: number;
    color: string;
}

// Arreglo para almacenar los automóviles registrados
let registroAutomoviles: Automovil[] = [];

// Función que registra un automóvil en el arreglo
function registrarAutomovil(automovil: Automovil): void {
    registroAutomoviles.push(automovil);
    console.log(El automóvil ${automovil.marca} ${automovil.modelo} ha sido registrado.);
}

// Ejemplo de uso
const automovil1: Automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    color: "Blanco",
};

registrarAutomovil(automovil1);
console.log("Registro actual de automóviles:", registroAutomoviles);