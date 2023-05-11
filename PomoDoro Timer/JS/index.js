const pomoTime = document.querySelector(".pomo");
const shortTime = document.querySelector(".short");
const longTime = document.querySelector(".long");

const midDiv = document.querySelector(".midDiv");

const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const settingBtn = document.querySelector(".set");
const applyBtn = document.querySelector(".apply");
const cancelBtn = document.querySelector(".cancel");

const setDiv = document.querySelector(".setDiv");
const timerDiv = document.querySelector(".timers");

const pomoInput = document.querySelector(".time1");
const shortInput = document.querySelector(".time2");
const longInput = document.querySelector(".time3");

const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

let pomoInputValue;
let shortInputValue;
let longInputValue;

let seconds = "00";
let minutes;
let interval;
let timeType = "pomoDoro";
let watch = "start";

window.onload = () => {
    minute.innerHTML = pomoInput.value;
    second.innerHTML = seconds;
}

startBtn.addEventListener('click', () => {
    if (watch == "start") {
        watch = "pause";
        startBtn.innerHTML = "Pause";
        seconds = 59;
        minutes = minute.innerHTML - 1;
        interval = setInterval(timerFn, 1000);
    }
    else if (watch == "pause") {
        watch = "continue";
        startBtn.innerHTML = "Start";
        clearInterval(interval);
    }
    else if (watch == "continue") {
        watch = "pause";
        startBtn.innerHTML = "Pause";
        interval = setInterval(timerFn, 1000);
    }
})

const timerFn = () => {
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    seconds--;

    if (seconds === 00) {
        seconds = 59;
        minutes = minutes - 1;
        if (minutes == -1) {
            // second.innerHTML = "00";
            clearInterval(interval);
        }
    }
}

applyBtn.addEventListener('click', () => {
    resetAll();
    setDiv.classList.toggle("hide");
    timerDiv.classList.toggle("hide");
})

cancelBtn.addEventListener('click', () => {
    document.querySelector(".time1").value = pomoInputValue;
    document.querySelector(".time2").value = shortInputValue;
    document.querySelector(".time3").value = longInputValue;
    setDiv.classList.toggle("hide");
    timerDiv.classList.toggle("hide");
})

function clearingInterval() {
    clearInterval(interval);
    seconds = "00";
}

pomoTime.addEventListener('click', () => {
    timeType = "pomoDoro";
    resetAll();
    document.body.style.backgroundColor = '#fa759e';
    midDiv.style.backgroundColor = '#eb96b3';
    shortTime.style.backgroundColor = '#eb96b3';
    longTime.style.backgroundColor = '#eb96b3';
    pomoTime.style.backgroundColor = '#edbece';
    startBtn.style.backgroundColor = '#edbece';
    resetBtn.style.backgroundColor = '#edbece';
    settingBtn.style.backgroundColor = '#edbece';
    applyBtn.style.backgroundColor = '#edbece';
    cancelBtn.style.backgroundColor = '#edbece';
    minute.innerHTML = pomoInput.value;
})

shortTime.addEventListener('click', () => {
    resetAll();
    timeType = "short";
    document.body.style.backgroundColor = '#397097';
    midDiv.style.backgroundColor = '#6e93ad';
    pomoTime.style.backgroundColor = '#6e93ad';
    longTime.style.backgroundColor = '#6e93ad';
    shortTime.style.backgroundColor = '#96a8b6';
    startBtn.style.backgroundColor = '#96a8b6';
    resetBtn.style.backgroundColor = '#96a8b6';
    settingBtn.style.backgroundColor = '#96a8b6';
    applyBtn.style.backgroundColor = '#96a8b6';
    cancelBtn.style.backgroundColor = '#96a8b6';
    minute.innerHTML = shortInput.value;

})

longTime.addEventListener('click', () => {
    resetAll();
    timeType = "long";
    document.body.style.backgroundColor = '#38858a';
    midDiv.style.backgroundColor = '#85b6b9';
    pomoTime.style.backgroundColor = '#85b6b9';
    shortTime.style.backgroundColor = '#85b6b9';
    longTime.style.backgroundColor = '#b4bfc0';
    startBtn.style.backgroundColor = '#b4bfc0';
    resetBtn.style.backgroundColor = '#b4bfc0';
    settingBtn.style.backgroundColor = '#b4bfc0';
    applyBtn.style.backgroundColor = '#b4bfc0';
    cancelBtn.style.backgroundColor = '#b4bfc0';
    minute.innerHTML = longInput.value;
})

settingBtn.addEventListener('click', () => {
    setDiv.classList.toggle("hide");
    timerDiv.classList.toggle("hide");
    pomoInputValue = document.querySelector(".time1").value;
    shortInputValue = document.querySelector(".time2").value;
    longInputValue = document.querySelector(".time3").value;
})

const resetAll = () => {
    startBtn.innerHTML = "Start";
    watch = "start";
    clearingInterval();
    second.innerHTML = seconds;
    if (pomoInput.value === "" || shortInput.value === "" || longInput.value === "") {
        document.querySelector(".time1").value = pomoInputValue;
        document.querySelector(".time2").value = shortInputValue;
        document.querySelector(".time3").value = longInputValue;
        return;
    }
    if (timeType === "pomoDoro") {
        minute.innerHTML = pomoInput.value;
    } else if (timeType === "short") {
        minute.innerHTML = shortInput.value;
    } else {
        minute.innerHTML = longInput.value;
    }
};

resetBtn.addEventListener('click', resetAll);