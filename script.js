function changeUser() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        let user = data.results[0];
  
        document.getElementById("userName").innerHTML =
          user.name.first + " " + user.name.last;
        document.getElementById("userPhone").innerHTML = user.phone;
        document.getElementById("userEmail").innerHTML = user.email;
        document.getElementById("userImage").src = user.picture.large;
        document.getElementById("userLocation").innerHTML = user.location.city;
        document.getElementById("userAge").innerHTML = user.dob.age;
      })
      
  }