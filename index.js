// Your code here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight="*"){
    return function(string="special"){
        return `You are ${highlight}${string}${highlight}!`
    }
}
