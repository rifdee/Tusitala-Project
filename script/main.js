let btnDecide = document.getElementById ('decide');
let result;

let activity = ['Swimming', 'Watch Movie', 'Wash car', 'Work!'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnDecide.addEventListener('click', () => {
    let index = getRandomNumber(0, activity.length-1);
    //result.alert = ;

    alert(activity[index])
});