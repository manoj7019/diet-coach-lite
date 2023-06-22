// submit-form
function submitForm() {
    document.getElementById('submitForm').submit();
}

const goalWeightD = document.querySelector('#goalWeightD');
const currentWeightD = document.querySelector('#currentWeightD');
const heightD = document.querySelector('#heightD');
const waistD = document.querySelector('#waistD');

function setDetails() {
    let name = document.getElementById('userName').value;
    localStorage.setItem('names', name);
    let email = document.getElementById('userEmail').value;
    localStorage.setItem('emails', email);
    let password = document.getElementById('userPassword').value;
    localStorage.setItem('passwords', password);
    let currentWeight = document.getElementById('currentWeight').value;
    localStorage.setItem('currentWeights', currentWeight);
    let goalWeight = document.getElementById('goalWeight').value;
    localStorage.setItem('goalWeights', goalWeight);
    let height = document.getElementById('height').value;
    localStorage.setItem('heights', height);
    let waist = document.getElementById('waist').value;
    localStorage.setItem('waists', waist);
    /* let balanced = document.getElementById('balanced').value;
    localStorage.setItem('balanceds', balanced);
    let eggetarian = document.getElementById('eggetarian').value;
    localStorage.setItem('eggetarians', eggetarian);
    let vegetarian = document.getElementById('vegetarian').value;
    localStorage.setItem('vegetarians', vegetarian);
    let deskJob = document.getElementById('deskJob').value;
    localStorage.setItem('deskJobs', deskJob);
    let warehouseJob = document.getElementById('warehouseJob').value;
    localStorage.setItem('warehouseJobs', warehouseJob);
    let fieldJob = document.getElementById('fieldJob').value;
    localStorage.setItem('fieldJobs', fieldJob);
    let noExercise = document.getElementById('noExercise').value;
    localStorage.setItem('noExercises', noExercise);
    let lightExercise = document.getElementById('lightExercise').value;
    localStorage.setItem('lightExercises', lightExercise);
    let moderateExercise = document.getElementById('moderateExercise').value;
    localStorage.setItem('moderateExercises', moderateExercise);
    let hardExercise = document.getElementById('hardExercise').value;
    localStorage.setItem('hardExercises', hardExercise); */
};

function getDetails() {
    let name = localStorage.getItem('names');
    console.log(name);
    let email = localStorage.getItem('emails');
    console.log(email);
    let password = localStorage.getItem('passwords');
    console.log(password);
    let currentWeight = localStorage.getItem('currentWeights');
    currentWeightD.textContent = `${currentWeight} kg`;
    console.log(currentWeight);
    let goalWeight = localStorage.getItem('goalWeights');
    goalWeightD.textContent = `${goalWeight} kg`;
    console.log(goalWeight);
    let height = localStorage.getItem('heights');
    heightD.textContent = `${height} cm`;
    console.log(height);
    let waist = localStorage.getItem('waists');
    console.log(waist);
    waistD.textContent = `${waist} inches`;
    /* let balanced = localStorage.getItem('balanceds');
    console.log(balanced);
    let eggetarian = localStorage.getItem('eggetarians');
    console.log(eggetarian);
    let vegetarian = localStorage.getItem('vegetarians');
    console.log(vegetarian);
    let deskJob = localStorage.getItem('deskJobs');
    console.log(deskJob);
    let warehouseJob = localStorage.getItem('warehouseJobs');
    console.log(warehouseJob);
    let fieldJob = localStorage.getItem('fieldJobs');
    console.log(fieldJob);
    let noExercise = localStorage.getItem('noExercises');
    console.log(noExercise);
    let lightExercise = localStorage.getItem('lightExercises');
    console.log(lightExercise);
    let moderateExercise = localStorage.getItem('moderateExercises');
    console.log(moderateExercise);
    let hardExercise = localStorage.getItem('hardExercises');
    console.log(hardExercise); */
}
// set-get Goal 

const goalD = document.querySelector('#goalD');
function setMyGoal(goal) {
    document.getElementById('goal').value = goal;
    localStorage.setItem('userGoals', goal);
}
function getMyGoal() {
    let userGoal = localStorage.getItem('userGoals');
    goalD.textContent = `${userGoal}`;
    console.log(userGoal);
}

// set-get Sex 
function setMySex(sex) {
    document.getElementById('sex').value = sex;
    localStorage.setItem('userSexs', sex);
}
function getMySex() {
    let userSex = localStorage.getItem('userSexs');
    console.log(userSex);
}

// set-get Job
const jobD = document.querySelector('#jobD');
function setMyJob(job) {
    document.getElementById('job').value = job;
    localStorage.setItem('userJobs', job);
}
function getMyJob() {
    let userJob = localStorage.getItem('userJobs');
    jobD.textContent = `${userJob}`;
    console.log(userJob);
}

// set-get Activity
const activityD = document.querySelector('#activityD');
function setMyActivity(activity) {
    document.getElementById('activity').value = activity;
    localStorage.setItem('userActivitys', activity);
}
function getMyActivity() {
    let userActivity = localStorage.getItem('userActivitys');
    activityD.textContent = `${userActivity}`;
    console.log(userActivity);
}

// set-get Diet
const dietTypeD = document.querySelector('#dietTypeD');
function setMyDiet(diet) {
    document.getElementById('diet').value = diet;
    localStorage.setItem('userDiets', diet);
}
function getMyDiet() {
    let userDiet = localStorage.getItem('userDiets');
    dietTypeD.textContent = `${userDiet}`;
    console.log(userDiet);
}

// slider-userGoalRange

const goalRange = document.getElementById('goalRange');
const outputG = document.querySelector('#outputG');
outputG.textContent = `0.35kg/week (recommended)`;

goalRange.oninput = function() {
    if(this.value/100 <= 0.3) {
        outputG.textContent = `${this.value/100} kg/week (slower)`;
    } else if (this.value/100 >=0.71) {
        outputG.textContent = `${this.value/100} kg/week (faster)`;
    } else {
        outputG.textContent = `${this.value/100} kg/week (recommended)`;
    }
}

function checkForm() {
    let inputs = document.getElementsByClassName('inputs');
    let btn = document.querySelector('#submitBtn');
    let isValid = true;

    for (let i=0; i<inputs.length; i++) {
        let changedInputs = inputs[i];
        if(changedInputs.value.trim() === '' || changedInputs.value === null) {
            isValid = false;
            break;
        }
    }

    /* let gRadios = document.querySelectorAll('.gRadio');
    gRadios.forEach(gRadio => {
        // function getGRadios() {
        gRadio.addEventListener('change', function() {
            let isGSelected = false;
            gRadios.forEach(gRadio => {
                if(gRadio.checked) {
                    isGSelected = true;
                    return;
                }
            })
        })
    });
    btn.disabled = ((!isValid) && (!isGSelected)); */
    btn.disabled = (!isValid);
}



