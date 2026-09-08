
export function capitalizarPrimerLetraConLimite(str: string): string {
    if (!str) return "";

    // 1. Convertir todo a minúsculas, tomar la primera letra en mayúscula y concatenar el resto
    const minusculas = str.toLowerCase();
    const resultado = minusculas.charAt(0).toUpperCase() + minusculas.slice(1);

    // 2. Si supera los 40 caracteres, recorta a 37 y añade "..." (total = 40)
    if (resultado.length > 40) {
        return resultado.slice(0, 40) + "...";
    }

    return resultado;
}

export function capitalizarPrimerLetra(str: string): string {
    if (!str) return "";
    
    // 1. Convertir todo a minúsculas
    const textoMinusculas = str.toLowerCase();
    
    // 2. Primera letra en mayúscula + el resto en minúsculas
    return textoMinusculas.charAt(0).toUpperCase() + textoMinusculas.slice(1);
}

export function capitalizarCadaPalabras(str: string) {
    if (!str) return "";
    return str.toLowerCase().split(" ").map((palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1),).join(" ");
}