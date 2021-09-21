
function display(y){
    var x=document.getElementById('calArea').value;
    
    document.getElementById('calArea').value=x+y;
}
function result(){
    eq();
    document.getElementById('calArea').value=eval( document.getElementById('calArea').value);
    res();
    document.getElementById('calArea').value="";
}
function reset(){
    document.getElementById('calArea').value="";

}
function eq(){
    var node = document.createElement("p");
    node.setAttribute('id','eq');
    node.innerHTML=`${document.getElementById('calArea').value}`;
    document.getElementById('historySection').appendChild(node); 

}
function res(){
    var node = document.createElement("p");
    node.setAttribute('id','ans'); 
    node.innerHTML=`=${document.getElementById('calArea').value}`;
    document.getElementById('historySection').appendChild(node);
}