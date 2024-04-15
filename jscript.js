 const base_url="https://open.er-api.com/v6/latest/";//it is taken from github currency Api
 const dropdowns=document.querySelectorAll(".dropdown select ");
 const btn= document.querySelector("form button");
 const fromcurr=document.querySelector(".from select");
 const tocurr=document.querySelector(".to select");
 const msg=document.querySelector(".msg");
 
for(select of dropdowns) {    //travel to each select on dropdown class
 for(currCode in countryList){  //to traverse country list
   let newOption=document.createElement("option"); //to create new otion list in our select
   newOption.innerText=currCode; //edit newoption by given list of countries
   newOption.value=currCode;     //changes value of newoption
   select.append(newOption) ;   //add newoption to select tag

 }

select.addEventListener("change",(evt)=>{  //when change in select it will call update flag function which is define at below
    updateFlag(evt.target);
});
}

  const updateFlag=(element)=>{
  let currCode=element.value;
  let countryCode= countryList[currCode];
  let newsrc =`https://flagsapi.com/${countryCode}/flat/64.png`;  //chane the flag img link according to country 
  let img=element.parentElement.querySelector("img");
  img.src=newsrc;

};
btn.addEventListener("click",async(evt)=>{
  evt.preventDefault() ; //it is use to avoid default action on click button
  let amount=document.querySelector(".amaunt input");//acces input from amount class
  let amtVal=amount.value;
  if(amtVal==="" || amtVal < 1){ // if amounval is leass than one or empty then it atomaticaly become 1
    amtVal=1;
   amount.value= "1";
  }
  const URL = `${base_url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`; //in our url contri values are in lower case so me made chages in it
  let response= await fetch("URL");
  let data= await response.json();
  let rate= data[tocurr.value.toLowerCase()];
  let finalAmm = amtVal*rate;
  msg.innerText=`${amtVal} ${fromcurr.value} = ${finalAmm} ${tocurr.value}`;
});


