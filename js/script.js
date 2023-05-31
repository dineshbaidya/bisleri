console.log('Script is running..');

const div = document.getElementsByClassName('content-bottle')[0].clientHeight;
const bottle = document.getElementsByClassName('bottle')[0];
const texts = document.getElementById('first-para-p').clientHeight;
const first = document.getElementsByClassName('first')[0];
const second = document.getElementsByClassName('second')[0];


const txts = texts * 72 / 96;

//console.log("Px : "+txts);


//console.log(bottle);

//console.log("Div Height : "+div);
//console.log("Text Height : "+texts);


if(texts<=64){
console.log('default');
}else if(texts>64 && texts<=82){
bottle.style.marginTop="-80px";
}else if(texts>82 && texts<=101){
bottle.style.marginTop="-70px";
}else if(texts>101 && texts<=119){
bottle.style.marginTop="-50px";
}else if(texts>119 && texts<=138){
bottle.style.marginTop="-30px";
}else if(texts>138 && texts<=156){
bottle.style.marginTop="10px";
}else if(texts>156 && texts<=175){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
first.style.height="58px";
second.style.height="230px";
second.style.marginLeft="117px";
}else if(texts>175 && texts<=193){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
first.style.height="58px";
second.style.height="230px";
second.style.marginLeft="117px";
}else if(texts>193 && texts<=212){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
first.style.height="58px";
second.style.height="230px";
second.style.marginLeft="117px";
}else if(texts>193 && texts<=230){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
first.style.height="76px";
second.style.height="230px";
second.style.marginLeft="117px";
}else if(texts>193 && texts<=249){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
first.style.height="113px";
second.style.height="230px";
second.style.marginLeft="117px";
}else if(texts>193 && texts<=286){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="132px";
}else if(texts>286 && texts<=304){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="150px";
}else if(texts>304 && texts<=323){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="169px";
}else if(texts>323 && texts<=341){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="187px";
}else if(texts>341 && texts<=360){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="206px";
}else if(texts>360 && texts<=378){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="224px";
}else if(texts>378 && texts<=397){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="243px";
}else if(texts>397 && texts<=415){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="281px";
}else if(texts>415 && texts<=434){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="280px";
}else if(texts>434 && texts<=452){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="298px";
}else if(texts>452 && texts<=471){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="317px";
}else if(texts>471 && texts<=489){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="335px";
}else if(texts>489 && texts<=508){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="354px";
}else if(texts>508 && texts<=526){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="372px";
}else if(texts>526 && texts<=545){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="391px";
}else if(texts>545 && texts<=563){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="410px";
}else if(texts>563 && texts<=582){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="428px";
}else if(texts>582 && texts<=600){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="446px";
}else if(texts>600 && texts<=619){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="465px";
}else if(texts>619 && texts<=637){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="488px";
}else if(texts>637 && texts<=656){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="502px";
}else if(texts>656 && texts<=674){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="520px";
}else if(texts>674 && texts<=693){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="539px";
}else if(texts>693 && texts<=711){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="557px";
}else if(texts>711 && texts<=730){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="576px";
}else if(texts>730 && texts<=748){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="594px";
}else if(texts>748 && texts<=767){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="613px";
}else if(texts>767 && texts<=785){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="632px";
}else if(texts>785 && texts<=804){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="650px";
}else if(texts>804 && texts<=822){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="668px";
}else if(texts>822 && texts<=841){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="687px";
}else if(texts>841 && texts<=859){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="705px";
}else if(texts>859 && texts<=878){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="724px";
}else if(texts>878 && texts<=896){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="742px";
}else if(texts>896 && texts<=915){
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="762px";
}else{
console.log('else part');
bottle.style.position="absolute";
bottle.style.right=0;
bottle.style.bottom=0;
second.style.height="230px";
second.style.marginLeft="117px";
first.style.height="762px";
}











































