function replaceNth(text, n, oldValue, newValue) {
    
    let result = text;
    // Handle edge case where there are no matches
    if (n > 0) {
        result = '';
        // Split text on oldValue
        const splitText = text.split(oldValue);

        const tokenCount = splitText.length;

        let index = 1;
        // Replace each character at the split index with the old or new characters
        splitText.forEach((token) => {
            if (index == tokenCount) {
                // Last token, concatenate
                result += token;
            } else {
                // Check to see if the oldValue should be replaced
                if (index%n == 0) {
                    result += token + newValue;
                } else {
                    result += token + oldValue;
                }
            }
            index++;
        });
    }
    return result;
}

console.log(replaceNth('Luke said: Noooooooooooooo!', 6, 'o', 'i'));