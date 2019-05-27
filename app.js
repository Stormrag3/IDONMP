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


function calldata(id){
return document.getElementById(id).value;
}

document.getElementById('mainform').addEventListener('submit', storethedata);


function storethedata(e){
e.preventDefault();

const name= calldata('name');
//const projectname= calldata('projectname');
const keyhighlights= calldata('keyhighlights');
const achievements= calldata('achievements');
const concerns= calldata('concerns');
const othrconcerns= calldata('othrconcerns');
const upevents= calldata('upevents');


console.log("Storing data for " + name +" now!");
  docRef.set({
    name: name,
    //  projectname: projectname,
    keyhighlights: keyhighlights,
    achievements: achievements,
    concerns: concerns,
    othrconcerns: othrconcerns,
    upevents: upevents
}).then(function(){
    console.log("Data saved!");
    document.getElementById('successbar').innerHTML="SUBMIT SUCCESSFUL!";
}).catch(function (error){
    console.log("Got an error!", error);
    document.getElementById('failbar').innerHTML="SUBMIT UNSUCCESSFUL!";
});
}; 

