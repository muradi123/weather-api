const key = 'eb873442883aceccb6c924278eef5ad7';

function weatherForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key +'&cnt=5')  
    .then(function(resp) {
        return resp.json() 
    })
    .then(function(data) {
        console.log('--->'+(JSON.stringify(data)));
        drawWeather(data);
        console.log(data)
    })
    .catch(function() {
      
    });
}

function drawWeather( d ) {
    let celcius = Math.round(parseFloat(d.main.temp)-273.15);
    let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    let description = d.weather[0].description; 

if(description.includes('rain')){
  
        $('.hfc5uxy70x').css({
        
            'background': 'url("../images/rain-min.jpg")',
            'background-size':'cover'
        }); 
        let audio = new Audio('../audio/rain-sound.mp3');
        audio.play();

        audio.addEventListener("canplaythrough", function () {
            setTimeout(function(){
                audio.pause();
                console.log('stop sucsess')
            },
            7000);
    }, false); 
   
}
else if(description.includes('clouds') || description.includes('cloudy')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/cloudy.jpg")',
        'background-size':'cover'
    }); 
    $('#auuseqgqsi').css('color', '#fff')
    $('#auuseqgqsi').css('font-weight', 'bolder')
    $('#avudmgsrhq').css('color', '#000')
    
}

else if(description.includes('thunderstorm')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/thunder.jpg")',
        'background-size':'cover'
    }); 
    $('.n8hp0nuw46').css('color', '#fff')
    $('.kkvui9z53a').css('color', '#fff')
   
    
}

else if(description.includes('drizzle')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/drizzle.jpg")',
        'background-size':'cover'
    }); 
    $('.n8hp0nuw46').css('color', '#fff')
    $('.kkvui9z53a').css('color', '#fff')
    
}

else if(description.includes('haze')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/haze.jpg")',
        'background-size':'cover'
    }); 
   
   
}


else if(description.includes('fog')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/fog.jpg")',
        'background-size':'cover'
    }); 
   
    
}


else if(description.includes('smoke')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/fog.jpg")',
        'background-size':'cover'
    }); 
   
    
}

else if(description.includes('snow')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/snow.jpg")',
        'background-size':'cover'
    }); 

    $('#auuseqgqsi').css('font-weight', 'bolder')
    $('#avudmgsrhq').css('color', '#000')
    $('.nxkwvkcq0b').css('color', '#fff')
    
}
else if(description.includes('clear sky')){

    $('.hfc5uxy70x').css({
        'background-image': 'url("../images/sunny.jpg")',
        'background-size':'cover',
    }); 
    $('#auuseqgqsi').css('color', '#fff')
    $('#avudmgsrhq').css('color', '#000')
    $('.n8hp0nuw46').css('color', '#fff')
    $('.kkvui9z53a').css('color', '#fff')
   
}
    let icon = d.weather[0].icon;
    document.getElementById('auuseqgqsi').innerHTML = description;
    document.getElementById('gwsqhihlbm').innerHTML = celcius + '&deg;';
    document.getElementById('avudmgsrhq').innerHTML = d.name+' '+d.sys.country;
    console.log(celcius)
}
document.addEventListener("DOMContentLoaded", () => {
    // Handling button click
    document.querySelector(".iis1enrd8y").addEventListener("click", () => {

        const searchedCity = document.querySelector('.ouumif3trb');

        console.log(searchedCity.value);
     
        if(searchedCity.value){
            weatherForecast(searchedCity.value);
        }   
        searchedCity.value = '';   

   }) 
 });



let allDate = new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"});
document.querySelector('.nxkwvkcq0b').innerHTML = allDate;


$(".j64z86sju7").click(function(){
    let $this = $(this);
    if($this.data('clicked', true) && $('.tmrsc04dij').data('clicked', true)) {
        let inputVal = $('.ouumif3trb').val();
        console.log(inputVal); 
        let div = `<div  class="gnkhnxtlns">
        <div class="yvgcxfgqyl">
          <div class="qlnveetliq">${inputVal} <div class="cksiddtmqh"></div></div>
          
        </div>
        </div>`;
        
        $('ul').append(div);
        $('.gnkhnxtlns').addClass('aworbdblsm');
           
    $( ".qlnveetliq" ).click(function() {
    $('.xnhqwn0a6q').removeClass( "qrq6jy2w97");
    $('.sjsuztmoaq').slideUp(1000);
    let value = this.innerText;
    $('.ouumif3trb').val(value)
    });

    $( ".cksiddtmqh" ).click(function() {
    $(this).parent().remove()
    $('.xnhqwn0a6q').addClass( "qrq6jy2w97");
    $('.sjsuztmoaq').slideDown(1000)
    });
   
    }
    else {
       console.log('not ckiled')
    }
});

$( ".tmrsc04dij" ).click(function() {
    $('.xnhqwn0a6q').removeClass("ggms5tou3r");
    $('.xnhqwn0a6q').addClass( "qrq6jy2w97" );
    $('hr').css('display', 'none')
    $(".sjsuztmoaq").slideDown(1500);
    setTimeout(() =>{  
        $('.gnkhnxtlns').addClass('aworbdblsm');
    }, 1500);
    
 });
 
 $( ".x-xwia1elgka" ).click(function() {
     $('.xnhqwn0a6q').removeClass( "qrq6jy2w97");
     $(".sjsuztmoaq").slideUp(1000);
     $('.gnkhnxtlns').removeClass('aworbdblsm');
  });

  