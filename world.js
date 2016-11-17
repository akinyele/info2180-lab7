window.onload = function() {
    
document.getElementById("lookup").addEventListener("click",function() {
    
    alert('hello');
    
    var url = 'https://lab-7-akinyele.c9users.io/world.php';
    var lookup = document.getElementById('country').value;
    
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function(){
    
       
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                
                var result = httpRequest.responseText;
                
                document.getElementById("result").innerHTML = result;
                
            }
            else{
             alert("There was an error recieving the request form the server.");
            }
        }
        
    };
    
    
    if( document.getElementById("myCheck").checked == true ){
    
       
       httpRequest.open('GET', url + "?all=true", true);
       
     }
    else{
        
       
        httpRequest.open('GET', url + "?country=" + lookup , true);
    }
    
    httpRequest.send();
    
    
});
    
};