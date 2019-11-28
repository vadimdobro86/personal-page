var API_KEY='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE4NjJmMzFhYjU4NDU1NGFjNTg5MDdjZDc3NzUzMzdlYmJhNzg0ZWRmODk2NTZiMzc0Y2MyMTIwMGQ0MzYzY2Q1ZmRjYjE4MTBlMDI0MjZiIn0.eyJhdWQiOiIxMCIsImp0aSI6ImE4NjJmMzFhYjU4NDU1NGFjNTg5MDdjZDc3NzUzMzdlYmJhNzg0ZWRmODk2NTZiMzc0Y2MyMTIwMGQ0MzYzY2Q1ZmRjYjE4MTBlMDI0MjZiIiwiaWF0IjoxNTU0NTMxNzk5LCJuYmYiOjE1NTQ1MzE3OTksImV4cCI6MTg3MDE1MDk5OSwic3ViIjoiMTU1MCIsInNjb3BlcyI6WyJ1c2VyQmFzZUluZm8iLCJ1c2VyRGV0YWlsZWRJbmZvIiwidXNlckNvdXJzZUluZm8iXX0.N_EswbjOemt0fFWfIuE2VSJahprffsCAHrIsdyUNuW0kzm8EQHiM33fCYBgtDGcwLqlbHTQf13cgCJlJKyyxVWNrICwTkTwSr7Q7UPm1DhppbbxcRFrGErDoxVJ64PUczzSorHx7AzFzM6nKwsa6Q_AR7FZSYfK4K60ADyX0ffFSLMb1ja_JRWbUrbt21r8Y9ZaDrcKFj3jzQtkt-AIFMQwOEuVxmRwiLddKMNUf4uTkfj6zH9wgP-u0ogkfQFK7Bj95fUy9vbdPKFvYMDHZrE3tOprwiS-BJZp5DWV433ownMS695JumEXOjHupph5npYgk4AnEkOzYhDqe72yx_VZ6Hp4RGWATu3LZwGmFfR-X3row-gH1hLHHeESnaJiwFrIJFvLBU2t3VRew-bWAmqeDcBLH0shDgPYJCUJF_Mdi2SuAxyW5KASRK0Kzjz3yJbraZLxVnQoExUs4Nt_hkrxlkL9Dis8AxWYl1VCXdQYlnhuifN8t_-xzA4o-8go-jARcKcmBLmkREmqzBbJrThGfomXty4Rp5Es9qv3knpfZEahLZ0te9svQ-S4YMQktvID7jf44SQyENjIQCpcOLGSC679dswNM4DYm_Q1OvBk-E3kCZgC3wBmrQzIbmwSdz4SoTiJghZSHh7OXsqVDqlzbHEX17pH02FVpmLMPMz8'
var client = new INTITAClient({key: API_KEY,})
client.getUserDetails(function (error, data) {

    //document.getElementById('avatar').src = data.avatar;
    document.getElementById('name').innerText = 'Імя :  ' +data.firstName;
    document.getElementById('SecondName').innerText = 'Прізвище :  ' +data.secondName;
    document.getElementById("city").innerText = 'Адреса: ' + data.city + ', ' + data.country +', ' +data.address;
    document.getElementById("phone").innerText = 'Тел :  ' +data.phone ;
    document.getElementById("email").innerText = 'Email :  ' +data.email;

   });
client.getUserCoursesAndModules(function (error, data) {

    document.getElementById('courses').innerText = data.courses[0].title;
    var courseId = data.courses[0].id;

    client.getCourseInfo(courseId, function (error, data) {

        var infoEl = document.getElementById('infocourse').innerText=data.courses ;
    });

    client.getCourseModules(courseId, function (error, modules) {
        
        var myModules = document.getElementById("modules");

        modules.forEach(function (module) {
           
        var container = document.createElement("h6");
        container.innerText = module.title;
        myModules.appendChild(container);

        });
    });
});



	