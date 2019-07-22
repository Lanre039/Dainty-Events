var i = 0;
var images = ["img/events.jpg", "img/events-1.jpg", "img/events-3.jpg"];
var time = 3000;

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

function Contact(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}


function handleSubmit(Contact) {
    this.axios.post('http://www.enformed.io/41qi9muq', Contact)
    .then((result) => {
    console.log(result); 
    })
    .catch((error) => {
        console.log(error);
    })
}

handleSubmit(Contact);


 