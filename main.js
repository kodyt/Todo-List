window.onload = function() {
    localStorage.setItem("tasks-store", $('#tasks').val());
}

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const counter = document.querySelector("#completed-list")

    //Counter information
    const counter_el = document.createElement("div");
    counter_el.classList.add("completed");

    const counter_tracker = document.createElement("input");
    counter_tracker.classList.add("input");
    counter_tracker.type = "number";
    counter_tracker.value = 0;
    counter_tracker.setAttribute("readonly", "readonly");

    counter_el.appendChild(counter_tracker);
    counter.appendChild(counter_el);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //Prevents the refreshing the page with clicks
        
        const task = input.value;

        if(!task) {
            alert("Please fill out the task");
            return;
        }

        //Creates task to add
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //Creates div for the content of the task
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        //Appends the content to the new task
        task_el.appendChild(task_content_el);

        //Adds the input text 
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("div");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";
        

        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText.toLowerCase() == 
            "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            }
            else{
                task_input_el.setAttribute("readonly",
                "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            counter_tracker.value++;
            //Add incrementer here
        });

        //End of function some how add to the local storage to prevent deletion upon refresh
    });
});