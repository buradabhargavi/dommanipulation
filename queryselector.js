/* var header=document.querySelector('#main-header');
header.style.borderBottom='solid 8px #ffc0cb';

var input=document.querySelector('input');
input.value='hello';

var submit=document.querySelector('input[type="submit"]');
submit.value='SEND';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var itemlast=document.querySelector('.list-group-item:last-child');
itemlast.style.color='green';

var secitem=document.querySelector('.list-group-item:nth-child(2)');
secitem.style.color='yellow'; */


/* var titles=document.querySelectorAll('.title');
console.log(titles);
titles[1].textContent='hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}
 */

 var secitem=document.querySelectorAll('.list-group-item');
secitem[1].style.backgroundColor='green'; 
 var third=document.querySelectorAll('.list-group-item');
third[2].style.visibility='hidden';