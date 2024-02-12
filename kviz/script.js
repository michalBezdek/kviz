let body = 0
let pokus = 1

function htmlZa200() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("muzes mit input typu number?: ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 200
         pokus++
       } else if (odpoved === 'ne') {
         alert('spatne');
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
   }
 

   window.onload = zobrazOtazku;
  

function cssZa200() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("muzes delat animace v css? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 200
         pokus++
       } else if (odpoved === 'ne') {
         alert('sptane');
        
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function jsZa200() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("je velky problem kdyz se prepises o pismenkou? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 200
         pokus++
       } else if (odpoved === 'ne') {
         alert('spatne');
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function sachyZa200() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("je dama nejlepsi figura: ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spravne dama je za 9 bodu');
         document.getElementById("body").innerHTML =  body+= 200
         pokus++
       } else if (odpoved === 'ne') {
         alert('spatne dama je za 9 bodu');
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function hryZa200() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("je geomtrydash lepsi nez sachy? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('špatně šachy se hrajou po staleti a jsou stale popularni');
         pokus++
       } else if (odpoved === 'ne') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 200
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;


function htmlZa400() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("muzes kodotvat css nebo js bez toho abys to mel propojeni pres html ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert("spatne")
        
         pokus++
       } else if (odpoved === 'ne') {
         alert('spravne');
         pokus++ 
         document.getElementById("body").innerHTML =  body+= 400
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function cssZa400() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("muzes programovat html v css? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spatne');
         
         pokus++
       } else if (odpoved === 'ne') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 400
           pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function jsZa400() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("je if dulezity? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 400
         pokus++
       } else if (odpoved === 'ne') {
         alert('spatne');
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function sachyZa400() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("je nepodani ruky slusne? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spatne');
     
         pokus++
       } else if (odpoved === 'ne') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 400
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;
function hryZa400() {
    if (pokus >=2){
        alert("uz nemuzes")
    }
    
     var odpoved = prompt("je mafie jedna s nejlepsich her? ano/ne");

    
     if (odpoved !== null) {
       odpoved = odpoved.toLowerCase(); 
 
       if (odpoved === 'ano') {
         alert('spravne');
         document.getElementById("body").innerHTML =  body+= 400
         pokus++
       } else if (odpoved === 'ne') {
         alert('spatne');
         pokus++
       } else {
         alert('Neplatná odpověď. Zadejte pouze "ano" nebo "ne".');
       }
     }
}
window.onload = zobrazOtazku;