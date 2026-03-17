let task = "";
let completedTaskCount = 0;

function showTask() {
  if (task === "") {
    console.log("Задача отсутствует");
  } else {
    console.log(`Текущая задача: ${task}`);
  }
}

const setTask = function (taskDescription) {
  if (typeof taskDescription !== "string") {
    console.log("Задача должна быть текстом");
    return;
  }

  const trimmedTask = taskDescription.trim();

  if (trimmedTask === "") {
    console.log("В задаче не могут быть одни пробелы");
    return;
  }

  task = trimmedTask;
  console.log("Задача добавлена");
};

const completeTask = function () {
  if (task === "") {
    console.log("Нечего завершать");
  } else {
    task = "";
    completedTaskCount++;
    console.log(`Задача выполнена. Выполненных задач: ${completedTaskCount}`);
  }
};

const deleteTask = function () {
  if (task === "") {
    console.log("Нечего удалять");
  } else {
    task = "";
    console.log("Задача удалена");
  }
};

