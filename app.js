window.onload = function(){
    var searchBtn = document.getElementById('search-button');

    searchBtn.addEventListener('click', function(){
        const httpRequest = new XMLHttpRequest();

        let url = "http://localhost:8080/superheroes.php";

        httpRequest.onreadystatechange = getXml;
        httpRequest.open('GET', url);
        httpRequest.send();
        
        function getXml(){
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200){
                    let response = httpRequest.responseText;
                    alert(response);
                }else{
                    alert('There was a problem with the request.');
                }
            }
        }
    })
};