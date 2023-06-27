// submit-form
function submitForm() {
    document.getElementById('submitForm').submit();
}

const goalWeightD = document.querySelector('#goalWeightD') || {};
const currentWeightD = document.querySelector('#currentWeightD') || {};
const heightD = document.querySelector('#heightD') || {};
const waistD = document.querySelector('#waistD') || {};
const heyUser = document.querySelector('#heyUser') || {};

function setDetails() {
    let name = document.getElementById('userName').value || {};
    localStorage.setItem('names', name);
    let email = document.getElementById('userEmail').value || {};
    localStorage.setItem('emails', email);
    let password = document.getElementById('userPassword').value || {};
    localStorage.setItem('passwords', password);
    let currentWeight = document.getElementById('currentWeight').value || {};
    localStorage.setItem('currentWeights', currentWeight);
    let goalWeight = document.getElementById('goalWeight').value || {};
    localStorage.setItem('goalWeights', goalWeight);
    let height = document.getElementById('height').value || {};
    localStorage.setItem('heights', height);
    let waist = document.getElementById('waist').value || {};
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
    heyUser.textContent = `Hey ${name},`;
    console.log(name);
    let email = localStorage.getItem('emails');
    console.log(email);
    let password = localStorage.getItem('passwords');
    console.log(password);
    let currentWeight = parseInt(localStorage.getItem('currentWeights'));
    currentWeightD.textContent = `${currentWeight} kg`;
    console.log(currentWeight);
    let goalWeight = parseInt(localStorage.getItem('goalWeights'));
    goalWeightD.textContent = `${goalWeight} kg`;
    console.log(goalWeight);
    let height = parseInt(localStorage.getItem('heights'));
    heightD.textContent = `${height} cm`;
    console.log(height);
    let waist = parseInt(localStorage.getItem('waists'));
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

const goalD = document.querySelector('#goalD') || {};
const userGoalGP = document.querySelector('#userGoalGP') || {};

function setMyGoal(goal) {
    document.getElementById('goal').value = goal;
    localStorage.setItem('userGoals', goal);
}
function getMyGoal() {
    let userGoal = localStorage.getItem('userGoals');
    goalD.textContent = `${userGoal}`;
    userGoalGP.textContent = `${userGoal}`;
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

// set-get DOB
const dOB = document.querySelector('#dOB');
function setMyDOB() {
    let userDOB = document.getElementById('userDOB').value;
    let dateObj = new Date(userDOB);
    let year = dateObj.getFullYear();
    localStorage.setItem('userDOBs', year);
}
function getMyDOB() {
    let userDOB = localStorage.getItem('userDOBs');
    let nowYear = new Date().getFullYear();
    let userAge = nowYear - userDOB;
    console.log(userAge);
} 

// set-get Job
const jobD = document.querySelector('#jobD') || {};
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
const activityD = document.querySelector('#activityD') || {};
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
const dietTypeD = document.querySelector('#dietTypeD') || {};
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
const goalRange = document.getElementById('goalRange') || {};
const outputG = document.querySelector('#outputG') || {};
const outputGM = document.querySelector('#outputGM') || {};
// outputG.textContent = `0.35 kg/week (recommended)`;
// outputGM.textContent = `1.4 kg/month`;

function myFunction(value) {
    if(value/100 <= 0.24) {
        outputG.textContent = `${value/100} kg/week (slower)`;
        outputGM.textContent = `${(value/100)*4} kg/month`;
    } else if (value/100 >=0.71) {
        outputG.textContent = `${value/100} kg/week (faster)`;
        outputGM.textContent = `${(value/100)*4} kg/month`;
    } else {
        outputG.textContent = `${value/100} kg/week (recommended)`;
        outputGM.textContent = `${(value/100)*4} kg/month`;
    }
}

const goalRateD = document.querySelector('#goalRateD');
function setMyRange(range) {
    document.getElementById('goalRange').value = range;
    localStorage.setItem('userRanges', range);
}
function getMyRange() {
    let userRange = localStorage.getItem('userRanges');
    console.log(userRange/100);
    goalRateD.textContent = `${userRange/100} kg/week`;
}

//  checkIfFormIsFilled

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

// Calculate Calories required per day

const calG = document.querySelector('#calG') || {};
const proteinG = document.querySelector('#proteinG') || {};
const carbsG = document.querySelector('#carbsG') || {};
const fatG = document.querySelector('#fatG') || {};
const calDB = document.querySelector('#calDB') || {};
const proteinDB = document.querySelector('#proteinDB') || {};
const carbsDB = document.querySelector('#carbsDB') || {};
const fatDB = document.querySelector('#fatDB') || {};
const fiberDB = document.querySelector('#fiberDB') || {};

function calcCalories() {
    let valueBMR;
    let valueTDEE;
    let dailyCals;
    let valueCals;
    let valueProtein;
    let valueCarbs;
    let valueFat;
    let valueFiber;
    let userSex = localStorage.getItem('userSexs');
    let currentWeight = parseInt(localStorage.getItem('currentWeights'));
    let height = parseInt(localStorage.getItem('heights'));
    let userDOB = localStorage.getItem('userDOBs');
    let nowYear = new Date().getFullYear();
    let userAge = nowYear - userDOB;
    let userJob = localStorage.getItem('userJobs');
    let userGoal = localStorage.getItem('userGoals');
    let userRange = localStorage.getItem('userRanges');

    if(userSex == 'Male') {
        valueBMR = 88.362 + (13.397 * currentWeight) + (4.799 * height) - (5.677 * userAge);
        console.log(valueBMR);
        if (userJob == 'Desk Job') {
            valueTDEE = valueBMR * 1.2;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;

            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Warehouse Job') {
            valueTDEE = valueBMR * 1.375;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Field Job') {
            valueTDEE = valueBMR * 1.6;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else {
            alert(`Please go select your job`);
        }
    } else if (userSex == 'Female') {
        valueBMR = 447.593 + (9.247 * currentWeight) + (3.098 * height) - (4.330 * userAge);
        console.log(valueBMR);
        if (userJob == 'Desk Job') {
            valueTDEE = valueBMR * 1.2;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Warehouse Job') {
            valueTDEE = valueBMR * 1.375;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Field Job') {
            valueTDEE = valueBMR * 1.6;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                calG.textContent = `${Math.floor(valueCals)}`;
                calDB.textContent = `${Math.floor(valueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else {
            alert(`Please go select your job`);
        }
    } else {
        alert(`Please go fill all the details`);
    }
}

function setExercise() {
    let exerciseSelect = document.getElementById('exerciseSelect').value;
    localStorage.setItem('exerciseSelects', exerciseSelect);
}

function getExercise() {
    let exerciseSelect = localStorage.getItem('exerciseSelects');
    console.log(exerciseSelect);
}

function setExerciseTime() {
    let exerciseTime = document.getElementById('exerciseTime').value;
    localStorage.setItem('exerciseTimes', exerciseTime);
}

function getExerciseTime() {
    let exerciseTime = localStorage.getItem('exerciseTimes');
    console.log(exerciseTime);
}

function getCaloriesBurned() {
    let valueBMR;
    let valueTDEE;
    let dailyCals;
    let valueCals;
    let valueProtein;
    let valueCarbs;
    let valueFat;
    let valueFiber;
    let userSex = localStorage.getItem('userSexs');
    let currentWeight = parseInt(localStorage.getItem('currentWeights'));
    let height = parseInt(localStorage.getItem('heights'));
    let userDOB = localStorage.getItem('userDOBs');
    let nowYear = new Date().getFullYear();
    let userAge = nowYear - userDOB;
    let userJob = localStorage.getItem('userJobs');
    let userGoal = localStorage.getItem('userGoals');
    let userRange = localStorage.getItem('userRanges');

    let caloriesBurned;
    let newValueCals;
    let exerciseSelect = parseInt(localStorage.getItem('exerciseSelects'));
    let exerciseTime = parseInt(localStorage.getItem('exerciseTimes'));
    caloriesBurned = Math.floor(exerciseTime * exerciseSelect * currentWeight * (3.5/200));
    console.log(caloriesBurned);

    if(userSex == 'Male') {
        valueBMR = 88.362 + (13.397 * currentWeight) + (4.799 * height) - (5.677 * userAge);
        console.log(valueBMR);
        if (userJob == 'Desk Job') {
            valueTDEE = valueBMR * 1.2;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = newValueCals * (0.35/4);
                console.log(valueProtein);
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = newValueCals * (0.45/4);
                console.log(valueCarbs);
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = newValueCals * (0.2/9);
                console.log(valueFat);
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;

            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Warehouse Job') {
            valueTDEE = valueBMR * 1.375;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Field Job') {
            valueTDEE = valueBMR * 1.6;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 38;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else {
            alert(`Please go select your job`);
        }
    } else if (userSex == 'Female') {
        valueBMR = 447.593 + (9.247 * currentWeight) + (3.098 * height) - (4.330 * userAge);
        console.log(valueBMR);
        if (userJob == 'Desk Job') {
            valueTDEE = valueBMR * 1.2;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Warehouse Job') {
            valueTDEE = valueBMR * 1.375;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else if (userJob == 'Field Job') {
            valueTDEE = valueBMR * 1.6;
            console.log(valueTDEE);
            if(userGoal == 'Lose Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE - dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.35/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.45/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.2/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Maintain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else if (userGoal == 'Gain Weight') {
                dailyCals = userRange * (1/100) * (1/7) * 7700;
                valueCals = valueTDEE + dailyCals;
                console.log(valueCals);
                newValueCals = valueCals + caloriesBurned;
                calDB.textContent = `${Math.floor(newValueCals)}`;
                valueProtein = valueCals * (0.3/4);
                console.log(valueProtein);
                proteinG.textContent = `${Math.floor(valueProtein)}`;
                proteinDB.textContent = `${Math.floor(valueProtein)}`;
                valueCarbs = valueCals * (0.4/4);
                console.log(valueCarbs);
                carbsG.textContent = `${Math.floor(valueCarbs)}`;
                carbsDB.textContent = `${Math.floor(valueCarbs)}`;
                valueFat = valueCals * (0.3/9);
                console.log(valueFat);
                fatG.textContent = `${Math.floor(valueFat)}`;
                fatDB.textContent = `${Math.floor(valueFat)}`;
                valueFiber = 25;
                console.log(valueFiber);
                fiberDB.textContent = `${valueFiber}`;
            } else {
                console.log(valueCals);
            }
        } else {
            alert(`Please go select your job`);
        }
    } else {
        alert(`Please go fill all the details`);
    }
}









