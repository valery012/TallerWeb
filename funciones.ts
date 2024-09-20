// Punto 1: Par o Impar
function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}
const resultado1 = esParOImpar(5);
console.log(resultado1); 
//---------------------------------------------------------------------------------

// Punto 2: Número Mayor
function NumMayor(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2;
}
const mayor = NumMayor(10, 20);
console.log(`El mayor número es: ${mayor}`); // "El mayor número es: 20"


//----------------------------------------------------------------------------------
// Punto 3: Convertir Grados
function convertirGrados(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}
const fahrenheit = convertirGrados(25);
console.log(`${25}°C es igual a ${fahrenheit}°F`); // 25°C es igual a 77°F


//----------------------------------------------------------------------------------
// Punto 4: Sumar Arreglo
function sumarArreglo(numeros: number[]): number {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
const numerosArray = [1, 2, 3, 4, 5];
const sumaTotal = sumarArreglo(numerosArray);
console.log(`La suma de los números es: ${sumaTotal}`); // La suma de los números es: 15


//----------------------------------------------------------------------------------
// Punto 5: Palíndromo
function esPalindromo(palabra: string): boolean {
    const palabraLimpia = palabra.toLowerCase().replace(/[\W_]/g, ''); // Elimina espacios y caracteres especiales
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === palabraInvertida;
}
const resultado5 = esPalindromo("anilina");
console.log(`¿Es un palíndromo?: ${resultado5}`); // "¿Es un palíndromo?: true"


//----------------------------------------------------------------------------------
// Punto 6: Números primos en un rango

function esPrimo(num: number): boolean {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}
function primosEnRango(start: number, end: number): number[] {
    const primos: number[] = [];
    for (let i = start; i <= end; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}
const primos = primosEnRango(10, 20);
console.log(`Primos en el rango: ${primos}`);


//----------------------------------------------------------------------------------
// Punto 7: Factorial de un número
function factorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
const resultado7 = factorial(5);
console.log(resultado7); // 120


//----------------------------------------------------------------------------------
// Punto 8: Serie de Fibonacci
function fibonacci(n: number): number[] {
    const serie: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie.slice(0, n);
}
const resultado8 = fibonacci(10);
console.log(`Serie de Fibonacci: ${resultado8}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//----------------------------------------------------------------------------------
// Punto 9: Longitud de una cadena
function longitudCadena(cadena: string): number {
    return cadena.length;
}
const texto = "Hola, mundo";
const longitud = longitudCadena(texto);
console.log(`La longitud de la cadena es: ${longitud}`); 

//----------------------------------------------------------------------------------
// Punto 10: Reemplazar vocales por asteriscos
function reemplazarVocales(cadena: string): string {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '*');
}
const resultado10 = reemplazarVocales("Hola Mundo");
console.log(resultado10); // "H*l* M*nd*"


//----------------------------------------------------------------------------------
// Punto 11: Número mayor en un arreglo
function numeroMayor(arr: number[]): number {
    return Math.max(...arr);
}
const resultado11 = numeroMayor([3, 7, 2, 5, 10, 4]);
console.log(`El número mayor es: ${resultado11}`);


//----------------------------------------------------------------------------------
// Punto 12: Suma de los dígitos de un número
function sumaDigitos(numero: number): number {
    const digitos = numero.toString().split('');
    return digitos.reduce((suma, digito) => suma + parseInt(digito), 0);
}
const resultado12 = sumaDigitos(12345);
console.log(`La suma de los dígitos es: ${resultado12}`);


//----------------------------------------------------------------------------------
// Punto 13: Contar vocales en una cadena
function contarVocales(cadena: string): number {
    const vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
    return vocales ? vocales.length : 0;
}
const resultado13 = contarVocales("Hola Mundo");
console.log(`El número de vocales es: ${resultado13}`);


//----------------------------------------------------------------------------------
// Punto 14: Verificar si dos cadenas son anagramas
function sonAnagramas(cadena1: string, cadena2: string): boolean {
    const normalizar = (cadena: string) => 
        cadena.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    
    return normalizar(cadena1) === normalizar(cadena2);
}
const resultado14 = sonAnagramas("anagrama", "nag a ram");
console.log(`¿Son anagramas?: ${resultado14}`);


//----------------------------------------------------------------------------------
// Punto 15: Contar elementos en un arreglo
function contarElementos<T>(arr: T[]): number {
    return arr.length;
}
const resultado15 = contarElementos([1, 2, 3, 4, 5]);
console.log(`El número de elementos es: ${resultado15}`);


//----------------------------------------------------------------------------------
// Punto 16: Invertir cadena
function invertirCadena(cadena: string): string {
    return cadena.split('').reverse().join('');
}
const resultado16 = invertirCadena("Hola Mundo");
console.log(`La cadena invertida es: ${resultado16}`);


//----------------------------------------------------------------------------------
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
const resultado17 = encontrarParesDeSuma([1, 2, 3, 4, 5, 6], 7);
console.log(`Los pares que suman 7 son: ${JSON.stringify(resultado17)}`);


//----------------------------------------------------------------------------------
// Punto 18: Verificar si una cadena contiene solo números
function contieneSoloNumeros(cadena: string): boolean {
    return /^\d+$/.test(cadena);
}
const resultado18 = contieneSoloNumeros("12345");
console.log(`¿La cadena contiene solo números?: ${resultado18}`);

const resultado18_2 = contieneSoloNumeros("123a45");
console.log(`¿La cadena contiene solo números?: ${resultado18_2}`);


//----------------------------------------------------------------------------------
// Punto 19: Remover duplicados de un arreglo
function removerDuplicados(arr: number[]): number[] {
    return Array.from(new Set(arr));
}
const resultado19 = removerDuplicados([1, 2, 3, 2, 4, 1, 5]);
console.log(`El arreglo sin duplicados es: ${resultado19}`);


//----------------------------------------------------------------------------------
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
const resultado20 = contarOcurrencias("programacion en typescript", "a");
console.log(`La letra "a" aparece ${resultado20} veces en la cadena.`);


//----------------------------------------------------------------------------------
// Punto 21: Área de un rectángulo
interface Rectangulo {
    ancho: number;
    alto: number;
}

function areaRectangulo(rectangulo: Rectangulo): number {
    return rectangulo.ancho * rectangulo.alto;
}
const miRectangulo = { ancho: 5, alto: 10 };
const resultado21 = areaRectangulo(miRectangulo);
console.log(`El área del rectángulo es: ${resultado21}`);