function checkTWID(a, b){
    let id = a + b + "23456789";
    

    for (var i = 0; i < 8; i++){
        let nums = parseInt(Math.random()*10);  
        document.write(nums);
    }

    console.log(id);
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/; 
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    if(id.match(regex)!= null){
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));
        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 + n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
        ret = sum % 10 == 0;
    }

    let bid = document.getElementById("bid").value = id;
    return ret;
}

function createTWID(){}

function createTWIDByArea(area){}

function createTWIDByGender(gender){
 
}

function createTWIDByAll(area, gender){
    let a = document.getElementById("selectArea").value;
    let b;
    let radios = document.getElementsByName('genderGroup');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            b = radios[i].value;
            break;
        }
    }
    checkTWID(a, b);
}