//Find feet to mile Assignment-1

function feetToMile(feet){
    var mile=feet*0.00018939;
    return mile;
}
var result=feetToMile(144)
result=result.toFixed(2);
console.log(result)


//find total number of wood Assignment-2

function woodCalculator(chair,table,bed){
         var chairCount=chair*28.3168;
         var tableCount=table*84.9505;
         var bedCount=bed*141.584;
         var totalWood=chairCount+tableCount+bedCount;
         return totalWood;
}
var test=woodCalculator(1,1,1);
test=test.toFixed(2);
console.log(test);


//find total number of brick Assignment-3

function brickCalculator(buildingNumber){
    
    switch(buildingNumber){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        console.log(15*1000);
        break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                console.log(12*1000);
                break;
                case 1:
            case 21:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
             console.log(10*1000);
                break;
        default:
            console.log(10*1000);
        }
    }
   var totalbrick=brickCalculator(15);


 //find tinyFriend Name Assignment-4

function tinyFriend(nameList){
    var smallName=nameList[0];
    for(var i=0; i<nameList.length;i++){
        var currentName=nameList[i];
        if(currentName.length<smallName.length){
            smallName=currentName;
        }
    }
    return smallName;
}
let friendsName=tinyFriend(['Nic','Piku','Ni','Tahmi','Jamal',])
console.log( friendsName);
