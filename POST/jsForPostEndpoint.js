(function(){

    window.addEventListener("load", initialize);
    
    function initialize(){
    
        document.getElementById("hello-btn").addEventListener("click", getHello);
    }
    })();
    
    
    const URL = "http://127.0.0.1:8000";
    
    
    function getHello(){
    
        let url = `${URL}/api/ext/setCategory`;
        let data= new FormData();
        data.append('name', document.getElementById("idName").value);
        data.append('description', document.getElementById("idDescription").value);
    
        fetch(url, {method: 'POST', body: data})
        .then(x=>x.text())//checkStatus)
        .then(showhello)
        .catch(console.log)
    }
    let getToken = function(txtToken){
        console.log(txtToken);
        return txtToken;
    }
    
    let showhello = function(result){
    
        let arrResponse = JSON.parse(result);
        let objPerson = arrResponse[0];
        document.getElementById("result").textContent = `JSON: ${result}`;
    }