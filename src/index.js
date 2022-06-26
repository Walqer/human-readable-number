module.exports = function toReadable (number) {
    const f1To20 = [
        'zero','one','two','three','four','five',
        'six','seven','eight','nine','ten','eleven',
        'twelve','thirteen','fourteen','fifteen','sixteen',
        'seventeen','eighteen','nineteen','twenty'
    ];
    const f20To90 = [
        'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'
    ];
    const f100To900 = [
        'one hundred','two hundred','three hundred','four hundred','five hundred',
        'six hundred','seven hundred','eight hundred','nine hundred'
    ];
    
    if(number <= 20){
        return f1To20[number];
    } else if(number > 20 && number < 100){
        number = number.toString();
        let firstchar = number[0] - 2;
        let secondchar = number[1];
        if(secondchar > 0){
           return f20To90[firstchar] + ' ' + f1To20[secondchar];
        }        
        return f20To90[firstchar];
    } else if(number >= 100 && number < 1000){
        number = number.toString();
        let firstchar  = number[0] - 1;
        let secondchars = number[1] + number[2];
        if(secondchars <= 0 ){
            return f100To900[firstchar];
        } else if(secondchars <= 20){
            
            if(secondchars[0] === '0'){
                secondchars = secondchars[1];
            }
            return f100To900[firstchar] + ' ' + toReadable(secondchars);
        } else{
            return f100To900[firstchar] + ' ' + toReadable(secondchars);
        }
    }
    
};

console.log(module.exports(121));
