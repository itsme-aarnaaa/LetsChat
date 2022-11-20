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
    //YOUR FIREBASE LINKS
    user_name= localStorage.getItem("user");
    roomname= localStorage.getItem("room_name");
    function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value= "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
