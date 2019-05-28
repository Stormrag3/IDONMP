var firebaseConfig = {
    apiKey: "AIzaSyBA1tSl76muFV6mE-H6BbG8a3a15StAv4A",
    authDomain: "heredata-6181c.firebaseapp.com",
    databaseURL: "https://heredata-6181c.firebaseio.com",
    projectId: "heredata-6181c",
    storageBucket: "heredata-6181c.appspot.com",
    messagingSenderId: "936389003107",
    appId: "1:936389003107:web:35a65f5ea9469ab6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  const docRef= firestore.doc("production/data");

  document.getElementById('retrivebutton').addEventListener('click', fetchthedata);

  function fetchthedata(e){
  e.preventDefault();
  //const projectname= calldata('projectname');
  console.log("Retriving the data!");
  docRef.get().then(function(doc){
    if(doc && doc.exists){
        const myData = doc.data();
        document.getElementById("datashow1").innerHTML=" Name: " + myData.name ;
        document.getElementById("datashow7").innerHTML=" Date: " + myData.datedata ;
        document.getElementById("datashow8").innerHTML=" Project : " + myData.projectname ;
        document.getElementById("datashow2").innerHTML=" Keyhighlights: " + myData.keyhighlights;
        document.getElementById("datashow3").innerHTML=" Achievements: "+ myData.achievements ;
        document.getElementById("datashow4").innerHTML=" Concerns: " + myData.concerns ;
        document.getElementById("datashow5").innerHTML= " Other Concerns: " + myData.othrconcerns;
        document.getElementById("datashow6").innerHTML= " Upcoming Events: " + myData.upevents;
        //  projectname: projectname,
    } 
    document.getElementById('successbar').innerHTML="RETRIVAL SUCCESSFUL!"
    }).catch(function(error){
        console.log("got an error!", error);
        document.getElementById('failbar').innerHTML="RETRIVAL UNSUCCESSFUL!";
    });
};
