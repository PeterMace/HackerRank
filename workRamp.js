function matchingBraces(braces) {
    const results = [];
    for (let braceSet of braces){
        results.push(matchBraceSet(braceSet));
    }
    function matchBraceSet(braceSet){
        const braceLookup = {')':'(', '}':'{', ']': '['};
        const openBraces = [];
        for(let brace of braceSet){
            if(!braceLookup[brace]){
                openBraces.push(brace);
            }
            else{
                let lastBrace = openBraces.pop();
                if(braceLookup[brace] !== lastBrace){
                    return "NO";
                }
            }
        }
        if (openBraces.length === 0){
            return "YES" 
        }
        return "NO"   
    }
    return results;
}
