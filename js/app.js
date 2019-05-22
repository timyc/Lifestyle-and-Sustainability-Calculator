// GLOBAL VARS
var version = 0.19;
var waterT = 0.000;
var carbonT = 0.000;
// Ajax to prevent page refresh on submit
$('#submit').submit(function () {
 	return false;
});
$(document).ready(function() {
    $('#criteria3').slider();
    $("#criteria3").on("slide", function(slideEvt) {
        $("#criteria3SliderVal").text(slideEvt.value);
    });
    document.getElementById('versionString').innerHTML += version;
});
$("#chocoButton").click(function(event) {
  event.preventDefault();
});
// option to preload images
function preloadImages() {
    document.getElementById('preloadText').innerHTML = "Preloading Images...";
    $.getScript("js/cavemanPreload.js")
        .done(function(script, textStatus) {
            document.getElementById('preloadText').innerHTML = "<b>Preloading Complete!</b>";
            $("#preloadIButton").prop("disabled", true);
        })
        .fail(function( jqxhr, settings, exception ) {
            document.getElementById('preloadText').innerHTML = "<b class='text-danger'>Preloading FAILED!</b>";
    });
}
// On to the next q
function nextQuestion(curQ) {
	var qAppend = document.getElementById('page' + curQ);
	var nQ = curQ + 1;
    var qnAppend = document.getElementById('page' + nQ);  
    $('#page' + curQ).fadeTo(500, 0, function() {  
        removeQ(qAppend);
        $('#page' + nQ).fadeTo(1000, 1, function() {
            afterQ(qnAppend);
        });   
    });
}
// On to the prev q
function prevQuestion(curQ) {
    var qAppend = document.getElementById('page' + curQ);
    var nQ = curQ - 1;
    var qnAppend = document.getElementById('page' + nQ);  
    $('#page' + curQ).fadeTo(500, 0, function() {  
        removeQ(qAppend);
        $('#page' + nQ).fadeTo(1000, 1, function() {
            afterQ(qnAppend);
        });   
    });
}
// Remove cur q
function removeQ(getQ) {
    getQ.style.display = "none";
}
// Add next q
function afterQ(nextQ) {
    nextQ.style.display = "";
}
// de-opacitize
function deOpacitize(element) {
    $('#' + element).fadeTo('fast', 0.25, function() {   
        document.getElementById('deopacitize' + element).style.display = "none";
        document.getElementById('reopacitize' + element).style.display = "block";
        document.getElementById('container' + element).style.backgroundImage = "url('img/infographic-" + element + ".png')";
    });
}
// re-opacitize
function reOpacitize(element) {
    $('#' + element).fadeTo('fast', 1, function() { 
        document.getElementById('deopacitize' + element).style.display = "block";
        document.getElementById('reopacitize' + element).style.display = "none";  
        document.getElementById('container' + element).style.backgroundImage = "url('img/infographic-" + element + "-blurred.png')";
    });
}
// update data for CRITERIA1
$(function() {
    $('#criteria1').change(function(){
        if($('#criteria1').val() == 'yes') {
            var decimal_places = 1;
            var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
            $('#waterGFromVeg').animateNumber({
                    number: 9877 * decimal_factor,

                    numberStep: function(now, tween) {
                        var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                        if (decimal_places > 0) {
                            floored_number = floored_number.toFixed(decimal_places);
                        }
                        target.text(floored_number);
                    }
                },
                5000,
                function() {
                    $('#addVegInfo').fadeTo(1000, 1, function() { 
                    document.getElementById('addVegInfo').style.display = "";
                });
            });
        } else { 
            document.getElementById('waterGFromVeg').innerHTML = "0.0";  
            document.getElementById('addVegInfo').style.display = "none";                 
        }
    });
});
// update data for CRITERIA2
$(function() {
    $('#criteria2').change(function(){
        if($('#criteria2').val() == 'yes') {
            $('#diamondBad').fadeTo(1000, 1, function() { 
                document.getElementById('diamondBad').style.display = "";
            });
        } else { 
            document.getElementById('diamondBad').style.display = "none";   
        }
    });
});
// update data for CRITERIA3
$(function() {
    $('#criteria3').change(function(){
        if($('#criteria3').val() >= 1) {
            $('#albedoGraph').fadeTo(0, 1, function() { 
                document.getElementById('albedoGraph').style.display = "";
            });
        } else {
            document.getElementById('albedoGraph').style.display = "none";
        }
    });
});
// update data for CRITERIA4
$(function() {
    $('#criteria4').change(function(){
        if($('#criteria4').val() == 'wood') {
            $('#houseInfoWood').fadeTo(1000, 1, function() { 
                document.getElementById('houseInfoWood').style.display = "";
            });
            document.getElementById('houseInfoConcrete').style.display = "none";
            document.getElementById('houseInfoSteel').style.display = "none";
        } else if ($('#criteria4').val() == 'concrete') {
            $('#houseInfoConcrete').fadeTo(1000, 1, function() { 
                document.getElementById('houseInfoConcrete').style.display = "";
            }); 
            document.getElementById('houseInfoWood').style.display = "none";    
            document.getElementById('houseInfoSteel').style.display = "none";
        } else {
            $('#houseInfoSteel').fadeTo(1000, 1, function() { 
                document.getElementById('houseInfoSteel').style.display = "";
            });
            document.getElementById('houseInfoWood').style.display = "none";
            document.getElementById('houseInfoConcrete').style.display = "none";
        }
    });
});
// update data for CRITERIA5
$(function() {
    $('#criteria5').change(function(){
        if($('#criteria5').val() == 'yes') {
            var decimal_places = 3;
            var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
            $('#carbonFromCoal').animateNumber({
                    number: 12610.426 * decimal_factor,

                    numberStep: function(now, tween) {
                        var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                        if (decimal_places > 0) {
                            floored_number = floored_number.toFixed(decimal_places);
                        }
                        target.text(floored_number);
                    }
                },
                5000,
                function() {
                    $('#addCarbInfo').fadeTo(1000, 1, function() { 
                    document.getElementById('addCarbInfo').style.display = "";
                });
            });
        } else {
            document.getElementById('addCarbInfo').style.display = "none";
            document.getElementById('carbonFromCoal').innerHTML = "0.000";           
        }
    });
});
// update data for CRITERIA6
$(function() {
    $('#criteria6').change(function(){
        if($('#criteria6').val() == 'us') {
            $('#pyramidUS').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'cn') {
            $('#pyramidCN').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'fr') {
            $('#pyramidFR').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'sa') {
            $('#pyramidSA').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'zw') {
            $('#pyramidZW').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'br') {
            $('#pyramidBR').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'jp') {
            $('#pyramidJP').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "";
                document.getElementById('pyramidNZ').style.display = "none";
            });
        } else if ($('#criteria6').val() == 'nz') {
            $('#pyramidNZ').fadeTo('fast', 1, function() { 
                document.getElementById('pyramidUS').style.display = "none";
                document.getElementById('pyramidCN').style.display = "none";
                document.getElementById('pyramidFR').style.display = "none";
                document.getElementById('pyramidSA').style.display = "none";
                document.getElementById('pyramidZW').style.display = "none";
                document.getElementById('pyramidBR').style.display = "none";
                document.getElementById('pyramidJP').style.display = "none";
                document.getElementById('pyramidNZ').style.display = "";
            });
        }
    });
});
// update data for CRITERIA7
$(function() {
    $('#criteria7').change(function(){
        if($('#criteria7').val() == 'yes') {
            $('#gotWater1').fadeTo(1000, 1, function() { 
                document.getElementById('gotWater1').style.display = "";
            });
            document.getElementById('gotWater2').style.display = "none";
            document.getElementById('waterGameText2').innerHTML = "";
            document.getElementById('hiddenCounter2').innerHTML = "0";
        } else { 
            $('#gotWater2').fadeTo(1000, 1, function() { 
                document.getElementById('gotWater2').style.display = "";
            }); 
            document.getElementById('gotWater1').style.display = "none";
            document.getElementById('waterGameText1').innerHTML = "";
            document.getElementById('hiddenCounter1').innerHTML = "0";
        }
    });
});
// game for CRITERIA7
function playWaterGame1() {
    var cAppend = document.getElementById('hiddenCounter1');
    var cVal = document.getElementById('hiddenCounter1').innerHTML;
    var cToInt = parseInt(cVal, 10);
    var counter = cToInt+1;
    cAppend.innerHTML = "";
    cAppend.innerHTML += cToInt+1;
    switch (counter) {
        case 1:
            document.getElementById('waterGameText1').innerHTML = "You are walking to get water. Keep clicking.";
            break;
        case 10:
            document.getElementById('waterGameText1').innerHTML = "You are STILL walking to get water. Keep clicking.";
            break;
        case 20:
            document.getElementById('waterGameText1').innerHTML = "You are almost to the halfway point of your journey. Keep clicking.";
            break;
        case 30:
            document.getElementById('waterGameText1').innerHTML = "You are finally at your local river to get water. Keep clicking.";
            break;
        case 40:
            document.getElementById('waterGameText1').innerHTML = "You finished gathering water, time to go back. Keep clicking.";
            break;
        case 50:
            document.getElementById('waterGameText1').innerHTML = "Ah here we go walkin' again. Keep clicking.";
            break;
        case 60:
            document.getElementById('waterGameText1').innerHTML = "You've finally walked home and quite a bit of the water you collected has evaporated. I hope you drank some at the river. Also the water isn't even clean.";
            break;
    }
}
function playWaterGame2() {
    var cAppend = document.getElementById('hiddenCounter2');
    var cVal = document.getElementById('hiddenCounter2').innerHTML;
    var cToInt = parseInt(cVal, 10);
    var counter = cToInt+1;
    cAppend.innerHTML = "";
    cAppend.innerHTML += cToInt+1;
    switch (counter) {
        case 1:
            document.getElementById('waterGameText2').innerHTML = "You've walked to the faucet to gather clean water. Keep clicking.";
            break;
        case 5:
            document.getElementById('waterGameText2').innerHTML = "You take a big sip of fresh cold water. Wasn't that easy? If you want to simulate how it feels to not have an easily accessible source of water, choose 'yes' for the question.";
            break;
    }
}
// update data for CRITERIA8
$(function() {
    $('#criteria8').change(function(){
        if($('#criteria8').val() == 'yes') {
            $('#selfishnessTOTC').fadeTo(1000, 1, function() { 
                document.getElementById('selfishnessTOTC').style.display = "";
            });
            document.getElementById('nselfishnessTOTC').style.display = "none";
        } else { 
            $('#nselfishnessTOTC').fadeTo(1000, 1, function() { 
                document.getElementById('nselfishnessTOTC').style.display = "";
            }); 
            document.getElementById('selfishnessTOTC').style.display = "none";
        }
    });
});
//update data for CRITERIA9
function calcChoco() {
    $('#chocoText').fadeTo(1000, 1, function() { 
        document.getElementById('chocoText').style.display = "";
    });
    var inputCVal = document.getElementById('criteria9').value;
    var cToInt = parseInt(inputCVal, 10);
    $('#chocoWater').animateNumber({
        number: (2061 * cToInt)
    },
    {
        duration: 5000
    });
}
// update data for CRITERIA10
$(function() {
    $('#criteria10').change(function(){
        if($('#criteria10').val() == 'solar') {
            $('#useSolar').fadeTo('fast', 1, function() { 
                document.getElementById('useSolar').style.display = "";
                document.getElementById('useCoal').style.display = "none";
                document.getElementById('useWind').style.display = "none";
                document.getElementById('useHydro').style.display = "none";
                document.getElementById('useGas').style.display = "none";
                document.getElementById('useGeo').style.display = "none";
            });
        } else if ($('#criteria10').val() == 'coal') {
            $('#useCoal').fadeTo('fast', 1, function() { 
                document.getElementById('useSolar').style.display = "none";
                document.getElementById('useCoal').style.display = "";
                document.getElementById('useWind').style.display = "none";
                document.getElementById('useHydro').style.display = "none";
                document.getElementById('useGas').style.display = "none";
                document.getElementById('useGeo').style.display = "none";
            });
        } else if ($('#criteria10').val() == 'wind') {
            $('#useWind').fadeTo('fast', 1, function() { 
                document.getElementById('useSolar').style.display = "none";
                document.getElementById('useCoal').style.display = "none";
                document.getElementById('useWind').style.display = "";
                document.getElementById('useHydro').style.display = "none";
                document.getElementById('useGas').style.display = "none";
                document.getElementById('useGeo').style.display = "none";
            });
        } else if ($('#criteria10').val() == 'hydro') {
            $('#useHydro').fadeTo('fast', 1, function() { 
                document.getElementById('useSolar').style.display = "none";
                document.getElementById('useCoal').style.display = "none";
                document.getElementById('useWind').style.display = "none";
                document.getElementById('useHydro').style.display = "";
                document.getElementById('useGas').style.display = "none";
                document.getElementById('useGeo').style.display = "none";
            });
        } else if ($('#criteria10').val() == 'gas') {
            $('#useGas').fadeTo('fast', 1, function() { 
                document.getElementById('useSolar').style.display = "none";
                document.getElementById('useCoal').style.display = "none";
                document.getElementById('useWind').style.display = "none";
                document.getElementById('useHydro').style.display = "none";
                document.getElementById('useGas').style.display = "";
                document.getElementById('useGeo').style.display = "none";
            });
        } else {
            $('#useGeo').fadeTo('fast', 1, function() { 
                document.getElementById('useSolar').style.display = "none";
                document.getElementById('useCoal').style.display = "none";
                document.getElementById('useWind').style.display = "none";
                document.getElementById('useHydro').style.display = "none";
                document.getElementById('useGas').style.display = "none";
                document.getElementById('useGeo').style.display = "";
            });
        }
    });
});
//update data for CRITERIA11
$(function() {
    $('#criteria11').change(function(){
        if($('#criteria11').val() == 'yes') {
            $('#saveEnergy').fadeTo(1000, 1, function() { 
                document.getElementById('saveEnergy').style.display = "";
            });
        } else { 
            document.getElementById('saveEnergy').style.display = "none";   
        }
    });
});
//update data for CRITERIA12
function calcSelfDrive() {
    $('#driveCar').fadeTo(1000, 1, function() { 
        document.getElementById('driveCar').style.display = "";
    });
    var inputCVal = document.getElementById('criteria12').value;
    var cToInt = parseInt(inputCVal, 10);
    $('#carCO2').animateNumber({
        number: (((36.67/23.6) * cToInt)*20)
    },
    {
        duration: 3000
    });
}
//update data for CRITERIA13
function calcGangDrive() {
    $('#pubTransport').fadeTo(1000, 1, function() { 
        document.getElementById('pubTransport').style.display = "";
    });
    var inputCVal = document.getElementById('criteria13').value;
    var cToInt = parseInt(inputCVal, 10);
    $('#busCO2').animateNumber({
        number: ((((36.67/23.6) * cToInt)*20)/40)
    },
    {
        duration: 1000
    });
}
//update data for CRITERIA14
function calcAirplane() {
    $('#flyAirplane').fadeTo(1000, 1, function() { 
        document.getElementById('flyAirplane').style.display = "";
    });
    var inputCVal = document.getElementById('criteria14').value;
    var cToInt = parseInt(inputCVal, 10);
    $('#planeCO2').animateNumber({
        number: (198.416 * cToInt)
    },
    {
        duration: 3000
    });
}
//update data for CRITERIA15
$(function() {
    $('#criteria15').change(function(){
        if($('#criteria15').val() == 'yes') {
            document.getElementById('friendFB').innerHTML = "<em class='text-success'>Although a single cleanup would barely affec the whole scheme of things, this shows that you are willing to sacrifice your own time for the environment.</em>";
            $('#friendFB').fadeTo(1000, 1, function() { 
                document.getElementById('friendFB').style.display = "";
            });
        } else { 
            document.getElementById('friendFB').innerHTML = "Video games are always a priority!";
            $('#friendFB').fadeTo(1000, 1, function() { 
                document.getElementById('friendFB').style.display = "";
            });  
        }
    });
});
//update data for CRITERIA16
function calcFlushes() {
    $('#flushCount').fadeTo(1000, 1, function() {
        document.getElementById('flushCount').style.display = '';
    });
    var inputVal = document.getElementById('criteria16').value;
    var valToInt = parseInt(inputVal, 10);
    var decimal_places = 1;
    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
    $('#flushGals').animateNumber({
        number: ((1.6 * decimal_factor) * valToInt),
        numberStep: function(now, tween) {
                        var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                        if (decimal_places > 0) {
                            floored_number = floored_number.toFixed(decimal_places);
                        }
                        target.text(floored_number);
                    }
    },
    {
        duration: 1000
    });
}
//final CALCULATION
function finalCalc() {
    document.getElementById('didNotFillAll').style.display = "none";
    document.getElementById('lifeRank').innerHTML = "";
    var points = 0;
    var age = 0;
    var criteria1 = document.getElementById('criteria1').value;
    var criteria2 = document.getElementById('criteria2').value;
    var criteria4 = document.getElementById('criteria4').value;
    var criteria5 = document.getElementById('criteria5').value;
    var criteria6 = document.getElementById('criteria6').value;
    var criteria7 = document.getElementById('criteria7').value;
    var criteria8 = document.getElementById('criteria8').value;
    var criteria9 = document.getElementById('criteria9').value;
    var criteria10 = document.getElementById('criteria10').value;
    var criteria11 = document.getElementById('criteria11').value;
    var criteria12 = document.getElementById('criteria12').value;
    var criteria13 = document.getElementById('criteria13').value;
    var criteria14 = document.getElementById('criteria14').value;
    var criteria15 = document.getElementById('criteria15').value;
    var criteria16 = document.getElementById('criteria16').value;
    if (criteria1 == "" || criteria2 == "" || criteria4 == "" || criteria5 == "" || criteria6 == "" || criteria7 == "" || criteria8 == "" || criteria9 == "" || criteria10 == "" || criteria11 == "" || criteria12 == "" || criteria13 == "" || criteria14 == "" || criteria15 == "" || criteria16 == "") {
        document.getElementById('didNotFillAll').style.display = "";
        return false;
    };
    if (criteria6 == "us") {
        age = 79;
    } else if (criteria6 == "cn") {
        age = 76;
    } else if (criteria6 == "fr") {
        age = 82;
    } else if (criteria6 == "sa") {
        age = 63;
    } else if (criteria6 == "zw") {
        age = 61;
    } else if (criteria6 == "br") {
        age = 75;
    } else if (critiera6 == "jp") {
        age = 84;
    } else {
        age = 82;
    }
    carbonT += ((((36.67/23.6) * criteria13)*20)/40)*52;
    document.getElementById('miscText').innerHTML += "<u>Miscellaneous tips/data based on responses</u>";
    if (criteria1 == "no") {
        points += 5;
        age += 1;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Homegrown produce is definitely healthier, considering you don't use pesticides and either use your own urine or don't use fertilizers at all. </li>";
    } else {
        age -= 1;
        waterT += 9877;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Not only does consuming grocery store vegetables use a lot of water, there will also be pesticide residues regardless of whether the produce is organic or not. </li>";
    }
    if (criteria2 == "no") {
        points += 5;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Not only did you save money by not buying diamonds for cosmetic use, you are also helping the environment. </li>";
    } else {
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Using diamonds cosmetically is actually pointless and harms the environment for no reason. </li>";
    }
    if (document.getElementById('criteria3').value < 3) {
        points += 5;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Consuming less meat helps the environment and also your own personal health. </li>";
    } else if (document.getElementById('criteria3').value > 10) {
        age -= 2;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Scientific studies have shown that consuming excess meat can reduce a person's lifespan. </li>";
    }
    if (criteria4 == "concrete") {
        points += 5;
    }
    if (criteria4 == "steel") {
        points += 2;
    }
    if (criteria5 == "no") {
        points += 5;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Using less coal means cleaner air to breathe, reducing the probability of certain lung diseases. </li>";
    } else {
        carbonT += 12610.426;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;The amount of people dying each year from air pollution is much higher in China and India partly because of their excess coal usage. </li>";
    }
    if (criteria7 == "no") {
        age -= 1;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Water-borne diseases are more common when people don't have easy access to fresh and clean water sources. </li>";
    } else {
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;With easy access to fresh and clean water sources, water-borne diseases are less likely to find its way into your body. </li>";
    }
    if (criteria8 == "no") {
        points += 5;
    }
    if (criteria9 <= 5) {
        waterT += (criteria9*2061);
        points += 5;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Light consumption of extremely dark chocolate is benefitial to your health. </li>";
    } else if (criteria9 > 22) {
        waterT += (criteria9*2061);
        age -= 2;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Excess chocolate consumption can lead to diabetes and other bad things. </li>";
    }
    if ((criteria10 != 'coal') && (criteria10 != 'gas')) {
        points += 5;
    } else {
        age -=2;
    }
    if (criteria11 == "yes") {
        points += 5;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Little actions like turning off the lights in your room when you're not in it can add up over time. </li>";
    } else {
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Granted that unnecessary electricity usage is minimal if you don't turn off the lights for 5 minutes, this usage can build up over time. </li>";
    }
    if (criteria12 < 7) {
        carbonT += (criteria12*31*52);
        points += 5;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Walking is a great alternative to driving. </li>";
    } else {
        carbonT += (criteria12*31*52);
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;You should consider walking to a location if it's less than a mile away. </li>";
    }
    if (criteria14 < 10) {
        carbonT += (criteria14*198*52);
        points += 5;
    } else {
        carbonT += (criteria14*198*52);
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Minimizing airplane travel time is a great way to reduce carbon footprints. </li>";
    }
    if (criteria15 == "yes") {
        points += 5;
    }
    if (criteria16 <= 3) {
        points += 3;
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;Flushing the toilet once before you take a dump and once after is plenty. </li>";
    } else {
        waterT += (criteria16*1.6*365);
        document.getElementById('otherStats').innerHTML += "<li class='list-group-item'>&bull;&nbsp;If you urine smells bad enough that you have to flush each time after going, you should start drinking a little bit more water. </li>";
    }
    if (points >= 50) {
        document.getElementById('reachedEnd').style.display = "none";
        document.getElementById('calcuButton').style.display = "none";
        document.getElementById('goBack').style.display = "none";
        document.getElementById('lifeRank').innerHTML += "<h1>Your life rank: </h1><img src='img/rankA.png' width='150' height='150' />";
        document.getElementById('earthNum').innerHTML += "If everyone lived like you, we'd still need <b class='text-danger'>1.5</b> Earths to sustain everyone.";
    }
    if (points >= 40 && points < 50) {
        document.getElementById('reachedEnd').style.display = "none";
        document.getElementById('calcuButton').style.display = "none";
        document.getElementById('goBack').style.display = "none";
        document.getElementById('lifeRank').innerHTML += "<h1>Your life rank: </h1><img src='img/rankB.png' width='150' height='150' />";
        document.getElementById('earthNum').innerHTML += "If everyone lived like you, we'd still need <b class='text-danger'>3</b> Earths to sustain everyone.";
    }
    if (points >= 30 && points < 40) {
        document.getElementById('reachedEnd').style.display = "none";
        document.getElementById('calcuButton').style.display = "none";
        document.getElementById('goBack').style.display = "none";
        document.getElementById('lifeRank').innerHTML += "<h1>Your life rank: </h1><img src='img/rankC.png' width='150' height='150' />";
        document.getElementById('earthNum').innerHTML += "If everyone lived like you, we'd need <b class='text-danger'>5</b> Earths to sustain everyone.";
    }
    if (points >= 20 && points < 30) {
        document.getElementById('reachedEnd').style.display = "none";
        document.getElementById('calcuButton').style.display = "none";
        document.getElementById('goBack').style.display = "none";
        document.getElementById('lifeRank').innerHTML += "<h1>Your life rank: </h1><img src='img/rankD.png' width='150' height='150' />";
        document.getElementById('earthNum').innerHTML += "If everyone lived like you, we'd need <b class='text-danger'>7</b> Earths to sustain everyone.";
    }
    if (points < 20) {
        document.getElementById('reachedEnd').style.display = "none";
        document.getElementById('calcuButton').style.display = "none";
        document.getElementById('goBack').style.display = "none";
        document.getElementById('lifeRank').innerHTML += "<h1>Your life rank: </h1><img src='img/rankF.png' width='150' height='150' />";
        document.getElementById('earthNum').innerHTML += "If everyone lived like you, we'd need over <b class='text-danger'>9</b> Earths to sustain everyone.";
    }
    document.getElementById('lifeAge').innerHTML += "Your approximated lifespan: " + "<b class='text-primary'>" + age + "</b> years";
    document.getElementById('yCarbon').innerHTML += "Your unnecessary yearly carbon output: " + "<b class='text-warning'>" + carbonT + "</b> pounds";
    document.getElementById('yWater').innerHTML += "Your unnecessary yearly water usage: " + "<b class='text-warning'>" + waterT + "</b> gallons <br />";
    $('#endResults').fadeTo(1000, 1, function() { 
        document.getElementById('endResults').style.display = "";
    });
}