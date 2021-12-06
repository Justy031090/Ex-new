function grade(numScore){
    if (numScore <= 64){
        return 'F';
    }
    else if (numScore <70){
        return 'D';
    }
    else if (numScore <80){
        return 'C';
    }
    else if (numScore <90){
        return 'B';
    }
    else {
        return 'A';
    }
}
console.log(grade(70))
