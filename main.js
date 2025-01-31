class UI {

    static tasks = [];

    static refreshWatch() {
        let year, month, day, hours, minutes, date;

        const dateElement = document.getElementById("date")
        const clockElement = document.getElementById("clock")

        setInterval(() => {
            date = new Date();

            year = date.getFullYear();
            month = (date.getMonth() + 1).toString().padStart(2, '0');
            day = date.getDay().toString().padStart(2, '0');

            hours = date.getHours().toString().padStart(2, '0');
            minutes = date.getMinutes().toString().padStart(2, '0');

            dateElement.innerHTML = `${day}/${month}/${year}`
            clockElement.innerHTML = `${hours}:${minutes}`

        }, 100);
    }

    static appendTaskClosed() {
        // wip
    }

    static renderTasks() {
        // wip
    }

}

window.onload = function () {
    UI.refreshWatch();
}