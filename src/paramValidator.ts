export const validateParam = (param: string | number, type: "number" | "string" | "email"): boolean => {
    if (!param) return false;
    switch (type) {
        case "number":
            // Vérifie si le paramètre est un nombre positif.
            if (+param < 0 || isNaN(+param)) return false;
            return true;
        case "string":
            // Les paramètres de type chaîne sont toujours valides.
            return true;
        case "email":
            // Vérifie si le paramètre est un email valide.
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(param.toString());
        default:
            // Type non reconnu.
            return false;
    }
}
