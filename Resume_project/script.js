function jumptoPosition(targetPosition){
    let currPositon=0;
    let interval=setInterval(function(){
        window.scrollBy(0,50);
        currPositon+=50;
        if(currPositon>=targetPosition){
            clearInterval(interval);
        }
    },20);
}
var sections=document.getElementsByClassName("sectionLinks");
for(let i=0;i<sections.length;i++){
    sections[i].addEventListener('click',function(event){
        event.preventDefault;
        let targetSectionId=this.textContent.trim().toLowerCase();
        let targetSection=document.getElementById(targetSectionId);
        jumptoPosition(targetSection.offsetTop);
    });
}
