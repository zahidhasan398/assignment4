let count=0;
// multiplication two number
function multiplication(para1Id,para2Id){
    const num1Tag=document.querySelector(para1Id);
    const num2Tag=document.querySelector(para2Id);
    const num1TagString=num1Tag.value;
    const num2TagString=num2Tag.value;
    const num1TagInt=parseFloat(num1TagString);
    const num2TagInt=parseFloat(num2TagString);
    if(isNaN(num1TagInt)=== false && isNaN(num2TagInt) === false && num1TagInt > 0 && num2TagInt >0){
        const result=num1TagInt*num2TagInt;
        num1Tag.value="";
        num2Tag.value="";
    return result;
        
    }else{
        num1Tag.value="";
        num2Tag.value="";
        alert("wrong input,something happend wrong");
    }
}
// half of multiplication
function hulfMultiResult(multiResult){
    const result= 0.5*multiResult;
    return result;
}
// show result on display function
function showDisplay(inputNum,size){
    if(isNaN(inputNum) === true){
        return;
    }
    const displayTag=document.querySelector("#calculate-display ol");
    
    const li=document.createElement("li");
    if(size === "tri")
    {   
        count++;
        li.innerHTML=`${count}. Triangle ${inputNum.toFixed(2)}cm<sup>2</sup> <button style="background:blue;color:white;padding: 5px;border-radius:5px;margin-bottom:5px">convert to m<sup>2<sup></button>`
    }
    else if(size === "rec"){
        count++;
        li.innerHTML=`${count}. Rectengal ${inputNum.toFixed(2)}cm<sup>2</sup> <button style="background:blue;color:white;padding: 5px;border-radius:5px;margin-bottom:5px">convert to m<sup>2<sup></button>`
    }
    else if(size === "para"){
        count++;
        li.innerHTML=`${count}.Parallelogram ${inputNum.toFixed(2)}cm<sup>2</sup> <button style="background:blue;color:white;padding: 5px;border-radius:5px;margin-bottom:5px">convert to m<sup>2<sup></button>`
    }
    else if(size === "Rhombus"){
        count++;
        li.innerHTML=`${count}.Rhombus ${inputNum.toFixed(2)}cm<sup>2</sup> <button style="background:blue;color:white;padding: 5px;border-radius:5px;margin-bottom:5px">convert to m<sup>2<sup></button>`
    }
    else if(size === "pentagon"){
        count++;
        li.innerHTML=`${count}.pentagon ${inputNum.toFixed(2)}cm<sup>2</sup> <button style="background:blue;color:white;padding: 5px;border-radius:5px;margin-bottom:5px">convert to m<sup>2<sup></button>`
    }
    else if(size === "ellipse"){
        count++;
        li.innerHTML=`${count}.ellipse ${inputNum.toFixed(2)}cm<sup>2</sup> <button style="background:blue;color:white;padding: 5px;border-radius:5px;margin-bottom:5px">convert to m<sup>2<sup></button>`
    }
    displayTag.appendChild(li);
}
function random_bg_color(eventId) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

   if(eventId === "main-container")
   {
     document.getElementById(eventId).style.background="white";
   }
   else if(eventId === "calculate-display"){
    document.getElementById(eventId).style.background="white";
   }
   else{
    eventIdSelector="#"+eventId;
    if(eventIdSelector !== "#"){
    console.log(eventIdSelector); 
    document.querySelector(eventIdSelector).style.background = bgColor;}}
    }

