//primavara (soare) -> (soare) anotimp 

function tema1() {
    const elements = document.getElementsByTagName("li");
    const seasons = [...elements].map(el => el.innerText);
    for (let i=0; i < elements.length; i++){
        const[season,emoji] = seasons[i].split(" ");
        elements[i].innerText = `${emoji} Anotimpul ${i+1} (urmat de ${seasons[(i+1)%elements.length]})`;
        /// const[season,emoji] = elements[i].innerText.split(" ");
        ///elements[i].innerText = `${emoji} Anotimpul ${i+1} (urmat de ${elements[(i+1)%elements.length].innerText})`;
    }        
}
window.onload=tema1;