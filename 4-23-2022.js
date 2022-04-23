function winner(erica, bob) {
    erica = erica.split("");
    bob = bob.split("");
    const scoring = {"E": 1, "M":3, "H":5};
    let ericaScore = erica.map( score => scoring[score]);
    ericaScore = ericaScore.reduce( (a, b) => a + b);
    let bobScore = bob.map( score => scoring[score]);
    bobScore = bobScore.reduce( (a, b) => a + b);
    if(ericaScore > bobScore){
        return "Erica"
    }else if (bobScore > ericaScore){
        return "Bob"
    }else{
        return "Tie"
    }
}


select CONCAT(`first_name`, ' ', `last_name`) as full_name, 
format(((cgpa_first_year +  cgpa_second_year+ cgpa_third_year+  
cgpa_fourth_year) / 4.0),1) as average_gpa from results order by 
average_gpa DESC;


function maxXor(lo, hi, k) {
    const values = [];
    for(let a = lo; a < hi; a++){
        for(let b = a + 1; b <= hi; b++){
            const xor = a ^ b;
            if(xor <= k){
                values.push( xor);
            }
        }
    }
    function getMax(array){
        let max = -Infinity;
        let len = array.length;
        while(len >= 0){
            const element = array[len];
            if(element > max){
                max = element; 
            }
            len--;
        }
        return max;
    }
    return getMax(values);
}



