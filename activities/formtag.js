document.getElementById('myForm').addEventListener('submit',function(event) {

    const formData = {
        
    };
    console.log(formdata);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById('message').innerHTML = response.message;
        document.getElementById('myForm').innerHTML = "";
    } else if (xhr.readyState === 4) {
        alert('Error submitting form.');
    }
    };
    xhr.send(JSON.stringify(formData));

    event.preventDefault();
    //alert("Form submitted");
    const fullname = document.getElementById("fname").value;
    console.log(fullname);
    const age = document.getElementById("age").value;
    console.log(age);
    const email = document.getElementById("email").value;
    console.log(email);
    const password = document.getElementById("password").value;
    console.log(password);
    const state = document.getElementById("state").value;
    console.log(state);
    const yearSchool = document.getElementById("")

    if (!fullname || !email) {
        alert("You need a name and email.");
        return;
    }

    if (!age || age<18) {
        alert("You need to be 18.");
        return;
    }

    const formdata = {
        name: fullname,
        age: age,
        email: email,
        password: password,
        state: state,
    }
});