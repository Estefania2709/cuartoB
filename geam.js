function geam(num) {
    
    if(num === 0){
            return 0;
        }else if(num === 1){
            return 1;
        }
        else if(((num % 3) === 0) && (num % 5 === 0)){
            return 'geammaeg';
        }
        else if(num % 3 === 0){
            return 'geam';
        }
        else if(num % 5 === 0){
            return 'maaaeg';
        }
        else{
            return num;
        }
}  
    function print(num){
        for(let i = 0; i <= 50; i++){
            console.log(`${i}: ${geam(i)}`);
        }
    }

    print(50);

    module.exports = geam;
    