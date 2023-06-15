// your code here

 document.getElementById("form").addEventListener("submit", function(event){
        event.preventDefault()
    });

	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
    let button = document.getElementById("button");

    button.addEventListener("click", function(){
        button.classList.remove("button");
        button.classList.add("button-blue");
    })

    button.addEventListener("blur", function(){
        button.classList.remove("button-blue");
        button.classList.add("button");
    })

	let url = document.getElementById("url");

    console.log(`name ----->` + name);
    console.log(year);
	
	if(name !== '' && year === ''){
        url.innerHTML = `https://localhost:8080/`+`?name=${name}`; 
    }else if(name === '' && year !== ''){
        url.innerHTML = `https://localhost:8080/`+`?year=${year}`;
    }else if(name !== '' && year !== ''){
        url.innerHTML = `https://localhost:8080/` +`?name=${name}&year=${year}`;
    }