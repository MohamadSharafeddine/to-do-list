const task_name = document.getElementById("task_name")
const past_list = document.getElementById("past_due_tasks_list")
const completed = document.getElementById("completed_tasks_list")
const pending = document.getElementById("pending_tasks_list")
const pending_task = document.getElementsByClassName("pending_task")
const col = document.getElementsByClassName("column_body")

add_button.addEventListener('click', function () {
    if (task_name.value === "") {
        alert("Empty task!")
    } else {
        let li = document.createElement("li")
        li.setAttribute('class', 'pending_task')
        li.innerHTML = task_name.value;
        pending.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    task_name.value = ""
})

pending.addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') {
        let li = event.target.parentNode
        pending.removeChild(li)
    }
})

pending.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        completed.appendChild(event.target)
        event.target.setAttribute('class', 'completed_task')
    }
})

span.addEventListener('click', function() {
    let li = span.parentNode;
    col.removeChild(li);
});