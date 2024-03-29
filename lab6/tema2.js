window.addEventListener('load', () => {
    const square = document.getElementById("patrat");
    let canMouse =true;
    square.addEventListener('click', ()=>{
        canMouse=  !canMouse;
    });

    window.addEventListener('keydown', (e) => {
        if(!canMouse){return;}
        const x = parseFloat(square.style.left || 0);
        const y = parseFloat(square.style.top || 0);

        switch(e.code)
        {
            case "ArrowUp":
                square.style.top = (y-5)+'px';
                break;
            case "ArrowDown":
                square.style.top = (y + 5) + 'px';
                break;
            case "ArrowLeft":
                square.style.left = (x -5) + 'px';
                break;
            case "ArrowRight":
                square.style.left = (x + 5) + 'px';
                break;
        }
    });

});