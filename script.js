//your code here

let initial=null;
let final=null;

function dragStart(e){
    initial=e.target;
}
function onDrop(e){
    final=e.target;
    let temp=window.getComputedStyle(initial, null).getPropertyValue("background-image");
    initial.style.backgroundImage=window.getComputedStyle(final, null).getPropertyValue("background-image");
    final.style.backgroundImage=temp;
    initial=null;
    final=null;
    temp=null;
}

function dragOver(e){
    e.preventDefault();
}