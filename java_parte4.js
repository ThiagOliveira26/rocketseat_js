// - REQUISICAO AJAX
/*var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/ThiagOliveira26');
xhr.send(null);

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}*/

// - REQUISICAO COM PROMISSE
/*var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/ThiagOliveira26');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição);');
                }
            }
        }
        
    });
}

    minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });*/

//UTILIZANDO AXIOS
   axios.get('https://api.github.com/users/ThiagOliveira26')
    .then(function(response){
        console.log(response);
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });