var result="";
var calculatorInput=document.getElementById("input-area");
var buttonInput=document.getElementsByTagName("button");
function takeInput(buttonClicked){
    if(buttonClicked.charAt(0)=='='){
        result=eval(result);
    }else if(buttonClicked.charAt(0)=='A'){
        result="";
    }else if(buttonClicked.length==3){
        if(result.charAt(0)!='-'){
            result='-'+result;
        }else{
            result=result.substring(1,result.length);
        }
    }else if(buttonClicked.charAt(0)=='%'){
        result=eval(result+"/100");
        result=result+'*';
    }
    else{
        result=result+buttonClicked;
    }
    calculatorInput.value=result;
}
for(var i=0;i<buttonInput.length;i++){
    buttonInput[i].addEventListener('click',function(){
        takeInput(this.value);
    });
}