class UI {

    static tasks = [
        {
            name: "Mercado",
            color: "Azul",
            isOpen: true
        },
        {
            name: "Veterinario",
            color: "Azul",
            isOpen: true
        },
        {
            name: "Mecânico",
            color: "Azul",
            isOpen: true
        },
    ];

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

    static appendTask(name, color) {
        const box = document.getElementById("opened-list");

        const newTask = document.createElement("li");

        const newContent = document.createTextNode(`${name}`);

        newTask.appendChild(newContent);

        newTask.classList.add("task-opened");
        newTask.classList.add(`${color}`);

        newTask.addEventListener("click", this.closeTask);

        box.appendChild(newTask);
    }

    static addTask() {
        const color = document.getElementById("drop-down-color").value;
        const name = document.getElementById("task-name").value;

        this.tasks.push({
            name: name,
            color: color,
            isOpen: true
        })

        this.appendTask(name, color);
    }

    static closeTask() {
        console.log("fechei");
    }

    static renderTasks() {
        const box = document.getElementById("opened-list");

        for (const task of UI.tasks) {
            const newTask = document.createElement("li");

            const newContent = document.createTextNode(`${task.name}`);

            newTask.appendChild(newContent);

            newTask.classList.add("task-opened");

            newTask.addEventListener("click", this.closeTask);

            box.appendChild(newTask);
        }
    }

}

window.onload = function () {
    UI.refreshWatch();
    UI.renderTasks();
}