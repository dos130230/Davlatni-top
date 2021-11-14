let region = document.querySelector(".region");   //seledtorlarni olyapdi
let darkMode = document.querySelector(".dark-mode"); // qorongi yorugdan kelyapdi
let body = document.querySelector("body"); // butun bodyni olyapdi
let list = document.querySelector(".countries-list");  // yangi <li> qoshish uchun


let fullinfo = [
    {country: "Belgium", url: "../img/1280px-Flag_of_Belgium.svg", native: "Belgiё", population: "11,319,511", region: "Europe", sregion: "Western Europe", capital: "Brassels", domain: ".be", currencies: "Euro", languages: "Dutch, French, German", border: "France, Germany, Netherlands"},
];

let countries = [
    {url: "./img/flag-germany.png", country: "Germany", proporties : {Population: "11,319,511", Region: "Europe", Capital: "Brassels"}},
    {url: "./img/flag-usa.png", country: "United States of America", proporties : { Population: "323,947,000", Region: "Americas", Capital: "Washington, D.C" }},  
    {url: "./img/flag-brasil.png", country: "Brazil", proporties : { Population: "206,135,893", Region: "Americas", Capital: "Brasília" }},
    {url: "./img/flag-iceland.png", country: "Iceland", proporties : { Population: "334,300", Region: "Europe", Capital: "Reykjavik" }},
    {url: "./img/flag-afganistan.png", country: "Afghanistan", proporties : { Population: "27,657,145", Region: "Asia", Capital: "Kabul" }},
    {url: "./img/flag-iland-iceland.png", country: "Åland Islands", proporties : { Population: "28,875", Region: "Europe", Capital: "Mariehamn" }},
    {url: "./img/flag-albania.png", country: "Albania", proporties : { Population: "2,886,026", Region: "Europe", Capital: "Tirana" }},
    {url: "./img/flag-algeria.png", country: "Algeria", proporties : { Population: "40,400,000", Region: "Afrika", Capital: "Algiers" }},
];

darkMode.onclick = ()=>{
    body.classList.toggle('dark')
}

function c_elements(arg){
    let arr = []
    for (let i of arg){
        arr.push(document.createElement(i))
    }

    return arr
}

let  doston = document.createElement('li')
function Begin(url,davlat,son,qita,poytaxt){
    let [box,a,rasm,div,davlar_nomi,ul,l1,l2,l3,span1,span2,span3] = c_elements([
        'li','a','img','div',
        'h2','ul','li','li','li','span','span','span'
    ])

    box.className = "countries-item"
    a.className = "country-link"
    rasm.className = "country-flag-img"
    div.className = "info"
    davlar_nomi.className = "country-heading"
    ul.className = "info-list"
    l1.className = "country-info"
    l2.className = "country-info"
    l3.className = "country-info"

    span1.className = 'info-text'
    span2.className = 'info-text'
    span3.className = 'info-text'

    rasm.setAttribute('src',url)
    davlar_nomi.textContent = davlat
    
    span1.textContent = 'Population: '+son
    span3.textContent = 'Region: '+qita
    span2.textContent = 'Capital: '+poytaxt

    l1.append(span1)
    l2.append(span2)
    l3.append(span3)


    ul.append(l1,l2,l3)
    div.append(davlar_nomi,ul)
    a.append(rasm,div)
    box.append(a)
    return box

}


let selektor = document.querySelector('.region')
let inputcha = document.querySelector('.search-input')

selektor.addEventListener('change',even=>{
    inputcha.value = ''
    let store = countries.filter((e)=>e.proporties.Region==even.target.value)
    list.innerHTML = null
    qosh(store)

})


inputcha.addEventListener('keyup',even=>{

    console.log(even.target.value)
    let store = countries.filter((e)=>e.country.includes(even.target.value))
    list.innerHTML = null

    qosh(store)

})







function qosh(countries){
 for (let i of countries){
    list.append(Begin(i.url,i.country,i.proporties.Population,i.proporties.Region,i.proporties.Capital,))
     
 }
}
qosh(countries)


