let modalShow1 = document.querySelector('.modal-show1');
let modalClose1 = document.querySelector('.modal-close1');
let modalContainer1 = document.querySelector('.modalv1');

modalShow1.addEventListener('click', function(){
    let modal = modalContainer1.firstChild.nextSibling;
    modalContainer1.classList.add('active');
    modal.classList.add('fade-in')
    modal.classList.remove('fade-out')
})

modalClose1.addEventListener('click', function(e){
    e.stopPropagation()
    let modal = modalContainer1.firstChild.nextSibling;
    modal.classList.remove('fade-in')
    modal.classList.add('fade-out')

    setTimeout(function(){
        modalContainer1.classList.remove('active')
     }, 499);
})

modalContainer1.addEventListener('click', function(e){
    e.stopPropagation()
    this.classList.remove('active');
})

let modalShow2 = document.querySelector('.modal-show2');
let modalClose2 = document.querySelector('.modal-close2');
let modalContainer2 = document.querySelector('.modalv2');

modalShow2.addEventListener('click', function(){
    let modal2 = modalContainer2.firstChild.nextSibling;
    modalContainer2.classList.add('active');
    modal2.classList.add('fade-in');
    modal2.classList.remove('fade-out');
})

modalClose2.addEventListener('click', function(e){
    e.stopPropagation();
    let modal2 = modalContainer2.firstChild.nextSibling;
    modal2.classList.remove('fade-in');
    modal2.classList.add('fade-out');

    setTimeout(function(){
        modalContainer2.classList.remove('active')
     }, 499);
})

modalContainer2.addEventListener('click', function(e){
    e.stopPropagation();
    this.classList.remove('active');
})


let modalShow3 = document.querySelector('.modal-show3');
let modalClose3 = document.querySelector('.modal-close3');
let modalContainer3 = document.querySelector('.modalv3');

modalShow3.addEventListener('click', function(){
    let modal3 = modalContainer3.firstChild.nextSibling;
    modalContainer3.classList.add('active');
    modal3.classList.add('fade-in');
    modal3.classList.remove('fade-out');
})

modalClose3.addEventListener('click', function(e){
    e.stopPropagation();
    let modal3 = modalContainer3.firstChild.nextSibling;
    modal3.classList.remove('fade-in');
    modal3.classList.add('fade-out');

    setTimeout(function(){
        modalContainer3.classList.remove('active')
     }, 499);
})

modalContainer3.addEventListener('click', function(e){
    e.stopPropagation();
    this.classList.remove('active');
})

console.log(`
 Task A :`);
const Peter = {
    firstname : `Peter`,
    lastName : `Smith`,
    birthyear : 1990,
    jobTitle :  `student`,
    score : [100,99,90,95],
    calAvgScore:function(){
        this.AvgScore= this.score[0]+this.score[1]+this.score[2]+this.score[3]/this.score.length;
    return this.AvgScore;},
    HighestScore: function(){
        for(let x = 0; x < this.score.length; x++){
            if(this.score[0] < this.score[x+1])
            this.score[0] = this.score[x+1]
        }
        return this.score[0];
    },
    showSummary : function(){
        return this.firstname+ ` ` + this.lastName + ` has completed ` + this.score.length + ` tasks, `
        + `and `, this.firstname+`'s average score is `+ this.calAvgScore() + `, ` + this.firstname+` ’s highest score is `+ this.HighestScore();
    },
}
console.log(Peter.showSummary());

//----------------------------------------
console.log(`
Task B :`);
function convertCtoF(Celcius){
    while(Celcius <-88 || Celcius > 55){
        alert(`Please enter a celcius number between -88 and 55.`);
       Celcius = Number(prompt(`Enter the Celcius temperature again : `));
    }
    fahrenheit = (Celcius*9/5)+32;
    console.log(`${Celcius} C is ${fahrenheit} F`);
    return celcius;
};
convertCtoF(Number(prompt(`Enter the celcius Temperature : `)));
