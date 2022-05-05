class StringCalculator {

    constructor() {}

    add(numbers) {
        if(numbers == "") {
            return 0;
        }

        let somme = 0;
        if(numbers.includes("//")) {
            let delimiter = numbers.split('\n')[0].replaceAll("//", "").replaceAll("[", "").replaceAll("]", "");
            numbers = numbers.split('\n')[1].replaceAll(delimiter, "+");
        }
        else {
            numbers = numbers.replaceAll(",", "+").replaceAll("\n", "+");
        }
        
        let tabNumbers = numbers.split('+');

        for(let i=0; i<tabNumbers.length; i++) {
            if(parseInt(tabNumbers[i]) < 0) {
                throw new Error("Negatives are not allowed", extractNegativeNumbersFromString.join());
            }
            else if(parseInt(tabNumbers[i]) > 1000) {
                somme += 0;
            }
            else {
                somme += parseInt(tabNumbers[i]);
            }
        }
        return somme;
    }
}

export { StringCalculator };