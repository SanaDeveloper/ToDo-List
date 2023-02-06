window.addEventListener("load", function () {
	const form = document.getElementById('new-task-form');
	const input = document.getElementById("new-task-input");
	const list_element = document.getElementById("tasks");

	/*console.log(form , input,list_element)*/

	form.addEventListener("submit",function(e){
		e.preventDefault();

		const task = input.value;

          /*console.log(task);*/

		if (!task) {
           alert("Please submit the form");
           return;    

		}
       
		const task_el = document.createElement("div");
		        task_el.classList.add("task");
		       /* console.log(task_el)*/

		const task_content_el = document.createElement("div");
		        task_content_el.classList.add("content");   
		        task_content_el.innerText = task;     

		        /*task_el.appendChild(task_content_el);*/

		        const task_input_el = document.createElement("input");
		        task_input_el.classList.add("text");
		        task_input_el.type = "text";
		        task_input_el.value = task;
		        task_input_el.setAttribute("readonly", "readonly");

		        task_content_el.appendChild(task_input_el);


		        list_element.appendChild(task_el);

        
        
	});

});

