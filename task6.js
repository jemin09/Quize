let participants=[
    {name:'Einstein', score:0},
    {name:'Newton', score:0},
    {name:'Edison', score:0}
];
function showDetails(){
    let s1=showParticipants();
    console.log(showParticipants);
    let element=document.getElementById('ShowResult')
    element.innerHTML=s1;
}
function showParticipants(){
    let pMap=participants.map(function(par){
        let str='<tr class=\''+getClassScore(par)+'\'>';
        str+='<td class="col1">'+par.name+'</td>';
        str+='<td class="col1">'+par.score+'</td>';
        str+='<td class="col1"><button class="btn" onclick=scoreAdd2("'+par.name+'")>+2</button></td>';
        str+='<td class="col1"><button class="btn"  onclick=scoreSub1("'+par.name+'")>-1</button></td>';
        str+='</tr>';
        return str;
    });
    let html='<h2 class="Heading">Welcome to the Quize Show</h2>';
    html+='<table class="table1">'+pMap.join('')+'</table>';
    return html;   
}

function scoreAdd2(name){
    let nam=participants.find(function(par){
        return par.name==name;
    });

    let ele=nam.score;
    nam.score+=2;
    showDetails();
}
function scoreSub1(name){
    let nam=participants.find(function(par){
        return par.name==name;
    });

    let ele=nam.score;
    nam.score-=1;
    showDetails();
}
function getClassScore(par){
    if(par.score==0){
        console.log("in sky");
        return 'sky';
    }
    else if(par.score>0){
        console.log("in green");
        return 'Green';
    }
    else{
        console.log("in green");
        return 'pink';
    }
     
}