var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRkZjBmOGI5ZDkwMzRiYzc5NTM1MzE5ODYyZjc4YWUyN2E3OTQ3NDkzN2ExZjgyMDY2Mjc3MDM3YzM4YTFmMTA2YTEzYjg1ZjM2YjcwMjM1In0.eyJhdWQiOiIxMCIsImp0aSI6ImRkZjBmOGI5ZDkwMzRiYzc5NTM1MzE5ODYyZjc4YWUyN2E3OTQ3NDkzN2ExZjgyMDY2Mjc3MDM3YzM4YTFmMTA2YTEzYjg1ZjM2YjcwMjM1IiwiaWF0IjoxNTU1NzUwNjM4LCJuYmYiOjE1NTU3NTA2MzgsImV4cCI6MTg3MTM2OTgzOCwic3ViIjoiMTcwNSIsInNjb3BlcyI6WyJ1c2VyQmFzZUluZm8iLCJ1c2VyRGV0YWlsZWRJbmZvIiwidXNlckNvdXJzZUluZm8iXX0.eK_inoTigHmFiC0ktCz9GNVCxxea8Ua1glQqIdG4Mbu4OO_ZUfIsmO4XsSH0uzZvBHHOqivqaVFPCDYnPu6AgzxOfJvTSFRoBPFHzVjNKuBv42IcAIWOv-ObP8biFLZ_ECjQrHfQ4is06G3cvFDcEcQtaop2kuIsdO1i_0WnaTnnroSvsJ8S5o8t8kXrcbIE8C3VqqWUALclNmbUlg-ENsoTL1SeP6BbxEic8V759rKVDr9c_odBANw3rLTayVWp-u4lYeC_YLYf3mA_jdPirtZScT339GLjD1NOwpkRfnQVjSObEEbVgz6gVqG465D5awLvDUAkbTDL_5uam-lsJ2y27VPi8MPmUbfour8hi3QaMBn6CG8aX92Slr_z8H30pjzqVTUSr4NYW2Dd6ig2uiLS2vKpW79V_85BHosqRrvUCBs7kS9Dm0a2fohmdLamYBSeqF1ulNoQnzZ-lhfWyJ2P8cyHk65qr60SxZvJaVK_rGH04x_b5tvJ58viDRTVnQx4i0H_IBk3ZnirNObU8rwnHLLwA8LIyXNC4-G5-MBb8llesU3Sl04L57c6Mp-i5AAj6VIjjkoFIYSDShKCWxOp1mRtpbDB1bsJ8Sw8mr6hIb7OEWl8lALJREYCOPBGk7tMQjDD6UrK4U4UFQCyi68m-YmZiNB6tNU6v5plAok';
  var client = new INTITAClient({
    key: API_KEY,
 });


  client.getUserDetails(function(error, data) {

  	console.log(data, error);

  	var name = document.getElementById('name').innerText += "  " + data.firstName;
    var secondName = document.getElementById('secondName').innerText += " " + data.secondName;
    var country = document.getElementById('country').innerText += " " + data.country;
    var city = document.getElementById('city').innerText += " " + data.city;
    var address = document.getElementById('address').innerText += " " + data.address;
    var phone = document.getElementById('phone').innerText += " " + data.phone;
    var educationForm = document.getElementById('educationForm').innerText += " " + data.educationForm;
    var email = document.getElementById('email').innerText += " " + data.email;
});

  client.getUserCoursesAndModules(function (error, data) {

  var element= data.courses[0].id;
  var content= document.getElementById("information");
  document.getElementById("course").innerHTML += data.courses[0].title;
    
    client.getCourseModules(element, function (error, data) {
      
        
        data.forEach(function(oneOfTheModules){
            
            var modul = document.createElement("div");
            var allLectures= document.createElement("ul");
           
            allLectures.style.display= "none";
             modul.onclick = function(){
               allLectures.style.display=="none"? allLectures.style.display="block": allLectures.style.display="none";
        }

        modul.innerHTML += oneOfTheModules.title;
        content.appendChild(modul);
        modul.appendChild(allLectures);
            
            
        client.getModuleLectures(oneOfTheModules.id, function(error, data2) {
                console.log(oneOfTheModules.title, error, data2);
                
                data2.forEach(function(nameLecture){
                    
                    
                var lecture = document.createElement("li");
                        lecture.innerHTML =  nameLecture.title;
                        allLectures.appendChild(lecture);
                    });
            });
            
         });
    });
});
 