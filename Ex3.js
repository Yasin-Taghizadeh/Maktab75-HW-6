// Complete Matrix to a square matrix


const completeSquare = function ([...latter]) {


    let i = [0];
    let j = [0];

    let zero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var result = [];

    let sp = [0];


    tp = latter[1].slice(0, latter[1].length)

    for (let i = 0; i < latter.length; i++) {


        sp = latter[i].slice(0, latter[i].length)

        let between = latter.length - sp.length

        if (sp.length !== latter.length) {
            result = (sp.concat(zero.slice(0, between)))
        } else {
            result = latter[i]
        }


        console.log(result)


    }
}


completeSquare([[1, 1], [1, 3]])













/* function compare(a) {
    
    const addA = latter.map((value,index)=> {
           
     
        if (value === value){
            return 12
        }
     
    })

        
            
       
       
   

}

console.log(compare(latter)) */