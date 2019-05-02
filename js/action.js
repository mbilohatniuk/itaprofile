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
    console.log(error, data);

    document.getElementById('courses').innerText = data.courses[0].title;
    var courseID = data.courses[0].id;

    client.getCourseInfo(courseID, function (error, data) {

        var infoEl = document.getElementById('infocourse');
        
    });

    client.getCourseModules(courseID, function (error, modules) {
        console.log(courseID);
        var mod = document.getElementById("modules");
        modules.forEach(function (module) {
            console.log(module);

            var div = document.createElement("div");
            div.innerText = module.title;
            mod.appendChild(div);

            var ul = document.createElement("ul");
            div.appendChild(ul);


            client.getModuleLectures(module.id,function (error,lectures) {
                lectures.forEach(function (lectures) {

                    var li = document.createElement("li");
                    li.innerText = lectures.title;
                    ul.appendChild(li);
                });

                div.onmouseout = function(){
                    this.style.color = 'black';
                };

                div.onmouseover = function () {
                    this.style.color = 'blue';
                };

                div.onclick = function() {
                    ul.classList.toggle('visible');
                };
            });
        });
    });
});
