 let cloneOp='';
       function _op(x){
        cloneOp = x
       }
       function _calc(){
        let num1 = Number(document.getElementById('num1').value)
        let num2 = Number(document.getElementById('num2').value)
        if (num1 == '' || num2 == ""){
            alert('enter your number!!')
        }else{
            if(cloneOp != ''){
                
                switch(cloneOp){
                    case '+' : num1 += num2;break;
                    case '-' :   num1 -= num2;break;
                    case '*' : num1 *= num2 ;break;
                    case '/' :  num1 /= num2;break;
                }
                document.getElementById('sum').innerHTML =  num1
                document.getElementById('num1').value.value = null
                document.getElementById('num2').value.value= null
                cloneOP = null

            }else{
                alert('choose operate');
            }
        }
       }