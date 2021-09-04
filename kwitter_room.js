
  var firebaseConfig = {
    apiKey: "AIzaSyClgQuVCaq4-N8eDaVniHz9t5dyzzB8M2U",
    authDomain: "kwitter-project-by-ryan.firebaseapp.com",
    databaseURL: "https://kwitter-project-by-ryan-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-by-ryan",
    storageBucket: "kwitter-project-by-ryan.appspot.com",
    messagingSenderId: "714075230307",
    appId: "1:714075230307:web:94808856145a876b116856"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
