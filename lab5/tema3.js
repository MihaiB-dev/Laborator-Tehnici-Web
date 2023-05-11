function tema3(){
    const paragraphs = document.querySelectorAll("p");
    paragraphs[0].onmouseover = () => {changestyle(paragraphs[1])};
    paragraphs[1].onmouseover = () => {changestyle(paragraphs[0])};

    function changestyle(el)
    {
        el.style.color = "red";
    }

    const btn = document.querySelector("button");
    btn.onclick = findword;

    function findword()
    {
        let[idx,word] = print("Nr [aragraf si cuvant").split(" ");
        word = word.toLowerCase();
        const text = paragraphs[idx-1].innerText.toLowerCase();

        const nroperatii = text.split(" ").filter(el => el == word).length;
        alert("Numar operatii" + nroperatii);

    }
}
window.onload = tema3;