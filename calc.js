var numfield1 = document.getElementById('numfield1');
var numfield2 =document.getElementById('numfield2');
var resultID =document.getElementById('resultID');
var form =document.getElementById('XY');


form.addEventListener('submit',function (event){
    if (!numfield1.value || !numfield2.value) {
        alert("please enter the value");
    } else {
        
        var x =parseFloat(numfield1.value);
       
        var y =parseFloat(numfield2.value);
        var result = x/y;
        var percent = result * 100;
        resultID.innerText = "answer :" + percent + "%";
        event.preventDefault();
    }
    
}
);



