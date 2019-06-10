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

    //document.getElementById("parentdiv").innerHTML="";

    retrieveDataAll();

    /*if(projectname=='ALL'){

        var projList = document.getElementById('Adminprojectname').options;

        for(var i=0;i<projList.length;i++){

            (projList[i].value);

        }

    }else{

        retrieveData(projectname);

    }*/

  }

 

function retrieveDataAll(){

    document.getElementById('successbar').innerHTML="";

    document.getElementById('failbar').innerHTML="";

    var docRef= firestore.collection("NMP");

    //console.log(projName);

    console.log("Retriving the data!");

    docRef.get().then(function(querySnapshot){

        createPanel(querySnapshot)

    }).catch(function(error){

        console.log("got an error!", error);

        document.getElementById('failbar').innerHTML="RETRIVAL UNSUCCESSFUL!";

    });

}

function createPanel(querySnapshot){

    querySnapshot.forEach(function(doc) {

        // doc.data() is never undefined for query doc snapshots

        console.log(doc.id, " => ", doc.data());

        const myData = doc.data();

 

        var kh = document.getElementById("div_kh");

        var childDiv = document.createElement('div');

        kh.appendChild(childDiv);

       

        childDiv.innerHTML ="<div><b> " + myData.projectname +" </b> </div><br>" + 

                            "<div>   " + myData.keyhighlights +"</div><br>";

       

        var achive = document.getElementById("div_achive");

        childDiv = document.createElement('div');

        achive.appendChild(childDiv);

        childDiv.innerHTML ="<div> <b> " + myData.projectname +"</b> </div><br>" + 

                            "<div>   " + myData.achievements +"</div><br>";

                          

                            

        var pissue = document.getElementById("div_pissue");

        childDiv = document.createElement('div');

        pissue.appendChild(childDiv);

        childDiv.innerHTML ="<div> <b> " + myData.projectname +" </b> </div><br>" + 

                            "<div>   " + myData.achievements +"</div><br>";

                          

                            

        var oissue = document.getElementById("div_oissue");

        childDiv = document.createElement('div');

        oissue.appendChild(childDiv);

        childDiv.innerHTML ="<div> <b> " + myData.projectname +" </b> </div><br>" + 

                            "<div>   " + myData.achievements +"</div><br>";

                           

                            

        var upevent = document.getElementById("div_upevent");

        childDiv = document.createElement('div');

        upevent.appendChild(childDiv);

        childDiv.innerHTML ="<div> <b> " + myData.projectname +" </b> </div><br>" + 

                            "<div>   " + myData.achievements +"</div><br>";

                          

                            /*"<div> Keyhighlights :" + myData.keyhighlights +"</div><br>"+

       

                            "<div> Project : "+myData.keyhighlights+"</div><br>"+

        

                            "<div><br> Achievements : </div><br>"+

        

                            "<div> Project : " + myData.projectname +"</div><br>"+ myData.achievements +

 

                            "<div><br> Primary Issues And Concerns : </div><br>"+

        

                            "<div> Project : " + myData.projectname +"</div><br>"+ myData.concerns +

 

                            "<div><br> Other Issue And Concerns : </div><br>"+

                            

                            "<div> Project : " + myData.projectname +"</div><br>"+ myData.othrconcerns +

       

                            "<div><br> Upcoming Events : </div><br>"+

                            

                            "<div> Project : " + myData.projectname +"</div><br>"+ myData.upevents +"</div><br><br><br><br><br>";*/

       

                            document.getElementById('successbar').innerHTML="RETRIVAL SUCCESSFUL!";

    });

}

 

function Export2Doc(){

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";

    var postHtml = "</body></html>";

    var html = preHtml+document.getElementById('admindata').innerHTML+postHtml;

   

    var filename="NavMapProcessing";

   

    var blob = new Blob(['\ufeff', html], {

        type: 'application/msword'

    });

   

    // Specify link url

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

   

    // Specify file name

    filename = filename?filename+'.doc':'document.doc';

   

    // Create download link element

    var downloadLink = document.createElement("a");

 

    document.body.appendChild(downloadLink);

   

    if(navigator.msSaveOrOpenBlob ){

        navigator.msSaveOrOpenBlob(blob, filename);

    }else{

        // Create a link to the file

        downloadLink.href = url;

       

        // Setting the file name

        downloadLink.download = filename;

       

        //triggering the function

        downloadLink.click();

    }

   

    document.body.removeChild(downloadLink);

}

 