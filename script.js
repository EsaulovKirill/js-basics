let userName = "Кирилл";
let userAge = 32;
let userSubscription = "free";
let userLastLogin = 10;

function validateAge(age) {
  return typeof age === "number" && !isNaN(age) && age > 0 && age < 120;
}
let validatedAge = validateAge(userAge);
// console.log(validatedAge);

let validateName = function (name) {
  return typeof name === "string" && name.trim().length !== 0;
};
let validatedName = validateName(userName);
// console.log(validatedName);

let validateSubscription = (sub) => {
  switch (sub.trim()) {
    case "free":
    case "basic":
    case "premium":
      return true;
    default:
      return false;
  }
};
let validatedSubscription = validateSubscription(userSubscription);
// console.log(validatedSubscription);

validateSubscription(String(userSubscription));

function getTimeOfDay(hour) {
  if (hour < 0 || hour > 24) {
    return false;
  }
  let timeOfDay =
    hour >= 5 && hour <= 11
      ? "Утро"
      : hour >= 12 && hour <= 17
        ? "День"
        : hour >= 18 && hour <= 21
          ? "Вечер"
          : "Ночь";

  // console.log(timeOfDay);
  return timeOfDay;
}
let timeOfDay = getTimeOfDay(userLastLogin);

let getAccesLevel = function (access) {
  const validSubscription = access ?? "invalid";

  if (validSubscription.trim() === "free") {
    return "Полный доступ";
  } else if (validSubscription.trim() === "basic") {
    return "Ограниченный доступ";
  } else if (validSubscription.trim() === "premium") {
    return "Полный доступ";
  } else {
    return false;
  }
};

let accesLevel = getAccesLevel(userSubscription);
// console.log(accesLevel);

function displayUserInfo(name, age, time, access) {

  if (
    validatedAge &&
    validatedName &&
    validatedSubscription &&
    accesLevel &&
    timeOfDay
  ) {
    console.log(
      `Привет, ${name}! Вам ${age} лет. Сейчас ${time}. Уровень доступа: ${access}`,
    );

    let bonus = userAge % 10;
    bonus += 5;
    console.log(`Бонус равен - ${bonus}`);

    if (userAge < 18) {
      console.log("Вы несовершеннолетний пользователь");
    }
    if (userLastLogin >= 22 || userLastLogin <= 5) {
      console.log("Позднее время входа");
    }
  } else {
    console.log("ПРОВЕРЬТЕ КОРРЕКТНОСТЬ ДАННЫХ");
    console.log("1. Имя должно быть строкой");
    console.log("2. Возраст должен быть числом от 0 до 120");
    console.log('3. Подписка должна быть "free", "basic" или "premium"');
    console.log("4. Время последнего захода должно быть от 0 до 24");
  }
}

displayUserInfo(userName, userAge, timeOfDay, accesLevel);

