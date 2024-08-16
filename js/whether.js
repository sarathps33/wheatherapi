const akey="64d74b25bef8fc948c6d7134de9b0f73"
const aurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search=document.querySelector(".search input")
const button=document.querySelector(".search button")
async function wheather(city) {
    const res=await fetch(aurl + city + `&appid=${akey}`)
        const data=await res.json();
        console.log(data);
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".hum").innerHTML= data.main.humidity + "%";
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +" °c";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
        

    }
    button.addEventListener("click",()=>{
        wheather(search.value);
    })
   
    
