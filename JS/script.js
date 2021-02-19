init();

function init(){
  drawing();
  
  function drawing(){
    
    var startNum = Math.ceil(document.in_form.startNum.value);
    var endNum = Math.floor(document.in_form.endNum.value);
    var selectNum = document.in_form.selectNum.value;
    
    var numArray=new Array;
    var randomNum;
    var overlappingFlag;
    var i = 0 ;
    
    while(selectNum){
      numArray[i] = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
      
      i++;
      overlappingFlag = false;
      for(var a in numArray){
        if(numArray[a] == randomNum){
          overlappingFlag = true;
          break;
        }
      }
      if(!overlappingFlag){
        numArray.push(randomNum);
        selectNum--;
      }
    }
    
    function compare(a, b){
      return a - b; 
    }
    numArray = numArray.sort(compare);
    
    var temp = document.getElementById("console");
    temp.innerHTML = numArray;
  }
}
