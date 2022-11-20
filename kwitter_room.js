var firebaseConfig = {
      apiKey: "AIzaSyBfTTgEBNwbp5IKhSUTfdPP4PtnUqb6lZ4",
      authDomain: "kwitter-2577d.firebaseapp.com",
      databaseURL: "https://kwitter-2577d-default-rtdb.firebaseio.com",
      projectId: "kwitter-2577d",
      storageBucket: "kwitter-2577d.appspot.com",
      messagingSenderId: "536902272812",
      appId: "1:536902272812:web:4198edfa97b8db3b994e89"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function addRoom(){
      var roomname= document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      var row= "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}