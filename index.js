const taskInput = document.getElementById("task");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
const hiddenMsg = document.getElementById("msg");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
let alert = true;
let tasksCompleted = document.getElementById('tasks-completed')
let x = false

// when click start show hidden message if no value in input field

startBtn.addEventListener("click", () => {
  if (taskInput.value.length == 0) {
    hiddenMsg.classList.remove("d-none");
  } else if (taskInput.value.length > 0) {
    pauseBtn.classList.remove("d-none");
    startBtn.classList.add("d-none");
    stopBtn.classList.remove("d-none");
    alert = false;
  }
  
  
if (!alert) {
    seconds.innerHTML = 59;
    minutes.innerHTML = 24;
     intervalFun = setInterval(() => {
      if (parseInt(seconds.innerHTML) ) {
        seconds.innerHTML--;
        console.log(seconds.innerHTML);
      } else if (minutes.innerHTML > 0 ) {
        seconds.innerHTML = 59;
        minutes.innerHTML--;
        console.log(minutes.innerHTML);
      }
    }, 1000);
  }



  pauseBtn.addEventListener('click', ()=>{
    clearInterval(intervalFun)
    pauseBtn.innerHTML = `<span class="display-5">Play</span>`
  })
  
});

  stopBtn.addEventListener("click", () => {
    clearInterval(intervalFun)
    console.log(25 - minutes.innerHTML  );

    
    tasksCompleted.classList.add('display-5')
    tasksCompleted.innerHTML = taskInput.value + " took " + (25 - minutes.innerHTML) + " minutes to complete"

    taskInput.value = taskInput.defaultValue
    seconds.innerHTML = "00"
    minutes.innerHTML = "00"
    
  });

  