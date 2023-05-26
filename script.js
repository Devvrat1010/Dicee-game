let r1= Math.floor(Math.random()*6);
let r2= Math.floor(Math.random()*6);


let arr=["<img src='https://i.ibb.co/x64L479/dice1.png'>",
        "<img src='https://i.ibb.co/3kZbk5c/dice2.png'>", 
        "<img src='https://i.ibb.co/VHq034G/dice3.png'>" ,
        "<img src='https://i.ibb.co/W60d5vK/dice4.png'>" ,
        "<img src='https://i.ibb.co/QbxpsDJ/dice5.png'>" ,
        "<img src='https://i.ibb.co/mt7HSnY/dice6.png'>" 
];

let r=2;

let img1="'images/dice"+r1+".png'";
let img1_final="<img src="+img1+" alt=''>";


let img2="'images/dice"+r2+".png'";
let img2_final="<img src="+img2+" alt=''>";

document.querySelector(".dice1").innerHTML = arr[r1];
document.querySelector(".dice2").innerHTML = arr[r2];

if(r1>r2){
    let res="Player 1 wins";
    document.querySelector(".result").innerHTML=res;
}
else if (r2>r1){
    let res="Player 2 wins";
    document.querySelector(".result").innerHTML=res;
    
}
else{
    let res="Draw";
    document.querySelector(".result").innerHTML=res;

}
