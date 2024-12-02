document.addEventListener('DOMContentLoaded', () => {
    var searchBtn = document.getElementById('search-button');
    var searchInput = document.getElementById('search-input');
    var result = document.getElementById('result');

    searchBtn.addEventListener('click', function() {
        const httpRequest = new XMLHttpRequest();

        
        let url = "superheroes.php";
        let searchVal = searchInput.value.trim();
        url += "?query=" + encodeURIComponent(searchVal);

        httpRequest.onreadystatechange = getXml;
        httpRequest.open('GET', url);
        httpRequest.send();

        function getXml() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let response = httpRequest.responseText;
                    result.innerHTML = response; 
                } else {
                    result.innerHTML = 'There was a problem with the request.'; 
                }
            }
        }
    });
});