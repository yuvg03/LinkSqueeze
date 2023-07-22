let original_link = document.getElementById("original_link")
let generate = document.getElementById("generate")
let shorten_link = document.getElementById("shorten_link")
let copy = document.getElementById("copy")

generate.addEventListener("click",short);
function short(){
        let url = original_link.value;
         fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((resp) => resp.json())
        .then((value) =>{
            shorten_link.value = value.result.short_link;
        })
        .catch((error) => {
            shorten_link.value = "Something went wrong!!";
        });
}

copy.onclick =() => {
    shorten_link.select();
    window.navigator.clipboard.writeText(shorten_link.value);
    // window.alert('Copied!');
    copy.text("Copied!");
    // copy.innerHTML="Copied!";
    setTimeout(()=> {
        // window.alert('Copied!');
        // copy.innerHTML="Copied!";
        copy.text("Copy");

    }, 1000);

}

