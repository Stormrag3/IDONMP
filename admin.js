// Initialize Firebase
function calldata(id){
    var firestore;  
    return document.getElementById(id).value;
    }

function init(){
    var firebaseConfig = {
        apiKey: "AIzaSyBA1tSl76muFV6mE-H6BbG8a3a15StAv4A",
        authDomain: "heredata-6181c.firebaseapp.com",
        databaseURL: "https://heredata-6181c.firebaseio.com",
        projectId: "heredata-6181c",
        storageBucket: "heredata-6181c.appspot.com",
        messagingSenderId: "936389003107",
        appId: "1:936389003107:web:35a65f5ea9469ab6"
      };
  firebase.initializeApp(firebaseConfig);
  firestore= firebase.firestore();
  document.getElementById('retrivebutton1').addEventListener('click', fetchthedata);
}
  
  

  function fetchthedata(e){ 
    //e.preventDefault();
    var projectname = calldata('Adminprojectname');
    console.log(projectname);
    document.getElementById("parentdiv").innerHTML="";
    if(projectname=='ALL'){
        var projList = document.getElementById('Adminprojectname').options;
        for(var i=0;i<projList.length;i++){
            retrieveData(projList[i].value);
        }
    }else{
        retrieveData(projectname);
    }
  }

function retrieveData(projName){
    document.getElementById('successbar').innerHTML="";
    document.getElementById('failbar').innerHTML="";
    var docRef= firestore.doc("NMP/"+projName);
    console.log(projName);
    console.log("Retriving the data!");
    docRef.get().then(function(doc){
        createPanel(doc)
    }).catch(function(error){
        console.log("got an error!", error);
        document.getElementById('failbar').innerHTML="RETRIVAL UNSUCCESSFUL!";
    });
}
function createPanel(doc){
    if(doc && doc.exists){
        var parentDiv = document.getElementById("parentdiv");
        var childDiv = document.createElement('div');
        parentDiv.appendChild(childDiv);
        const myData = doc.data();
        childDiv.innerHTML ="<div> Name: " + myData.name +"</div>" +
                            "<div> Date: " + myData.datedata +"</div>"+
                            "<div> Project : " + myData.projectname +"</div>"+
                            "<div> Keyhighlights : " + myData.keyhighlights +"</div>"+
                            "<div> Achievements : " + myData.achievements +"</div>"+
                            "<div> Concerns : " + myData.concerns +"</div>"+
                            "<div> Other Concerns : " + myData.othrconcerns +"</div>"+
                            "<div> Upcoming Events : " + myData.upevents +"</div><br><br>";
        document.getElementById('successbar').innerHTML="RETRIVAL SUCCESSFUL!";
    }
}

function Export2Doc(){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById('admindata').innerHTML+postHtml;
    
    var filename="NavMapProcessing";
    
    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
   
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
   
    filename = filename?filename+'.doc':'document.doc';
    
    
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        
        downloadLink.href = url;
        
        
        downloadLink.download = filename;
        
      
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}

