class UI {

    static tasks = [
        {
            id: 0,
            name: "Mercado",
            color: "blue",
            isOpen: true
        },
        {
            id: 1,
            name: "Veterinario",
            color: "blue",
            isOpen: true
        },
        {
            id: 2,
            name: "Mecânico",
            color: "blue",
            isOpen: true
        },
    ];

    static openedTaskCount = 0;
    static closFedTaskCount = 0;

    static refreshWatch() {
        let year, month, day, hours, minutes, date;

        const dateElement = document.getElementById("date")
        const clockElement = document.getElementById("clock")

        setInterval(() => {
            date = new Date();

            year = date.getFullYear();
            month = (date.getMonth() + 1).toString().padStart(2, '0');
            day = date.getDate().toString().padStart(2, '0');

            hours = date.getHours().toString().padStart(2, '0');
            minutes = date.getMinutes().toString().padStart(2, '0');

            dateElement.innerHTML = `${day}/${month}/${year}`
            clockElement.innerHTML = `${hours}:${minutes}`

        }, 300);
    }

    static appendTask(name, color, id) {
        const box = document.getElementById("opened-list");

        const newTask = document.createElement("li");
        const colorTask = document.createElement("div");
        const newContent = document.createTextNode(`${name}`);

        newTask.appendChild(colorTask);
        newTask.appendChild(newContent);

        colorTask.classList.add("color-task")
        colorTask.classList.add(`${color}`);

        newTask.classList.add("task-opened");

        newTask.id = `new-task-${id}`

        newTask.addEventListener("click", this.closeTask);

        box.appendChild(newTask);
    }

    static addTask() {
        const color = document.getElementById("drop-down-color").value;
        const name = document.getElementById("task-name").value;

        this.tasks.push({
            id: this.openedTaskCount,
            name: name,
            color: color,
            isOpen: true
        })

        this.appendTask(name, color, this.openedTaskCount);
    }

    static closeTask(event) {
        const eventId = event.currentTarget.id;
        const task = document.getElementById(eventId);

        const box = document.getElementById("closed-list");

        task.classList.remove("task-opened")
        task.classList.add("task-closed")

        box.appendChild(task);
    }

    static renderTasks() {
        const box = document.getElementById("opened-list");

        for (const task of UI.tasks) {
            this.appendTask(task.name, task.color, task.id)
            this.openedTaskCount++;
        }
    }

}

window.onload = function () {
    UI.refreshWatch();
    UI.renderTasks();
}