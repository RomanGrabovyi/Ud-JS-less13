let money, time;

function start() {
    money = +prompt("Ваш бютжет за міцсяць?", '');
    time = prompt("ВВедіть дату!", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бютжет за міцсяць?", '');
    }
}
start();



let appData = {
    budget: money,
    expenses: {},
    optioanalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введіть обовязкову статтю розходів в цьому місяці", '');
        b = prompt("Яка сума?", '');

        if ((typeof (a)) == 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }

    }
}
chooseExpenses();

// Розрахунок денного бютжету
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Щоденний бютжет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("мін рівень достатку");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Середний рівень достатку");
    } else if (appData.moneyPerDay) {
        console.log("Високий рівень достатку");
    } else {
        console.log("Виникла помилка");
    }
}

detectLevel();


function chekSavings() {

    if (appData.savings == true) {
        let save = +prompt("Введіть суму ваших збережень!", '');
        let percent = +prompt("Під який відсоток?", '');

        appData.moneyIncome = save / 100 / 12 * percent;
        alert("Відсоток ваших збережень в місяць становить: " + appData.moneyIncome);
    }

}
chekSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let qustionoptEx = +prompt("Стаття необовязкових розходів?", '');
        appData.optioanalExpenses[i] = qustionoptEx;
        console.log(appData.optioanalExpenses);
    }
};

chooseOptExpenses();