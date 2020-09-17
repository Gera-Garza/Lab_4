
let post = document.getElementById("btnPost");
let clar = document.getElementById("btnClr");
let mark = document.getElementById("btnCheck");
let del = document.getElementById("btnDel");

post.addEventListener("click",todoPost);
clar.addEventListener("click",todoClear);
mark.addEventListener("click",todoMark);
del.addEventListener("click",todoDel);

function todoPost(e){
	e.preventDefault();
	var todo = document.getElementById("text").value;
	var list = document.getElementById("todoList");

	let currentList = list.innerHTML;
	list.innerHTML = currentList + `<input type = "checkbox" class = "boxes"  /> ${todo} <br>`
}
function todoClear(e){
	e.preventDefault();
	var box = document.getElementsByClassName("boxes");
	console.log(box);
	for(var x = 0; x <= box.length; x++){
		box[x].checked = false;
	}
}
function todoMark(e){
	e.preventDefault();
	var box = document.getElementsByClassName("boxes");
	console.log(box);
	for(var x = 0; x <= box.length; x++){
		box[x].checked = true;
	}
}
function todoDel(e){
	e.preventDefault();
	var list = document.getElementById("todoList");
	list.innerHTML = ``;
}