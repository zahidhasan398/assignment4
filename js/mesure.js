document.querySelector("#triangle-btn").addEventListener("click",function(){
// multiplication b and h
    const multiResult=multiplication("#triangle-b","#triangle-h");
// half of multiplication
    const halfResult=hulfMultiResult(multiResult);
// show final result
    showDisplay(halfResult,"tri");
});
document.querySelector("#rectangle-btn").addEventListener("click",function(){
    // multiplication width and length
    const multiResult=multiplication("#rectangle-w","#rectangle-l");
    // show final result
    showDisplay(multiResult,"rec");
});
document.querySelector("#parallelogram-btn").addEventListener("click",function(){
    // multiplication b and h
    const multiResult=multiplication("#parallelogram-b","#parallelogram-h");
    // show final result
    showDisplay(multiResult,"para");
});
document.querySelector("#rhombus-btn").addEventListener("click",function(){
    // multiplication done and dtwo
    const multiResult=multiplication("#rhombus-done","#rhombus-dtwo");
    // half of multiplication;
    const halfResult=hulfMultiResult(multiResult);
    // show final result
    showDisplay(halfResult,"Rhombus");
});
document.querySelector("#pentagon-btn").addEventListener("click",function(){
    // multiplication p and b
    const multiResult=multiplication("#pentagon-p","#pentagon-b");
    // half of result
    const halfResult=hulfMultiResult(multiResult);
    // show final result on display
    showDisplay(halfResult,"pentagon");
});
document.querySelector("#ellipse-btn").addEventListener("click",function(){
    // multiplication a and b
    const multiResult=multiplication("#ellipse-a","#ellipse-b");
    
    const Result=3.14*multiResult;
    // show final result
    showDisplay(Result,"ellipse");
});
document.querySelector("#main-container").addEventListener("mouseover",function(event){
    
    const eventTargetId=event.target.id;
    random_bg_color(eventTargetId);
});
document.querySelector("#btn-blog").addEventListener("click",function(){
    window.location.href="blog.html";
})
