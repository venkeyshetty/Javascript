var item=document.getElementById("items")//to access ul
var form=document.getElementById("addform");//to access form
var button=document.getElementById("button");
//var li=document.getElementById('item');
//var a=document.getElementById('addform');


form.addEventListener('submit',additem);



//function//
function additem(e){
  e.preventDefault();
  var newItem= document.getElementById('item').value; //pull the input
  //document.getElementById('newItem');

  console.log(newItem);
  var li=document.createElement(li);
  li.className="list-group-item";
  li.appendChild(document.createTextNode(newItem));
  item.appendChild(li)

  var btn=document.createElement('button');
  btn.className = 'btn btn-danger btn-sm float-right delete';
  btn.appendChild(document.createTextNode('X'));
  li.appendChild(btn);


//to delete

  var del=item.addEventListener('click',removeItem);

}
  //to delete
  
  function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
      console.log(e.target.parentElement);
      if(confirm("Are you sure???"))
      {
          var li=e.target.parentElement;
          //console.log(e.target.parentElement);
          item.removeChild(li);
      }
    }

  }
    //to search

    //item.addEventListener('onkeyup',search);

    function s(){
      let input=document.getElementById('filter').value
      let x=document.getElementsByClassName('list-group-item');
      for(i=0;i<x.length;i++){
        if (!x[i].innerHTML.includes(input)){
          x[i].style.display="none";

        }
        else{
          x[i].style.display="item";
        }
      }
    }
 
  //btn.parentNode.removeChild(newItem);
  
 


//input.addEventListener('submit',additem);
//function//