const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real_value=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const day=document.getElementById('day');
const datahide=document.querySelector('.middle_layer');





const getInfo= async (event)=>{
    event.preventDefault();
         let cityVal=cityName.value;
if(cityVal===""){
    city_name.innerText=`plz write the name befor you search`;
    datahide.classList.add('data_hide')


}
else{
    try{
         
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=463f01310c9adfd012779a0da0f2287e`;
        const response= await fetch(url);
        const data = await response.json(); //get data in json form
        console.log(data);  
        const arrdata = [data]; // arry of an object 
        temp_real_value.innerText=arrdata[0].main.temp;
        
          city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country} `;

          const tempStatus=arrdata[0].weather[0].main;
          console.log(tempStatus);

            if (tempStatus == "Clear") {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
    } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
    } else if (tempStatus == "Rain") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
    } else {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
    }
      datahide.classList.remove('data_hide')


    }
    catch{
    city_name.innerText=`plz Entere  the city  name properly`;
      datahide.classList.add('data_hide')



    }

}
   
}
submitBtn.addEventListener('click',getInfo);