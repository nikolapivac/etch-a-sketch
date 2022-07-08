const container = document.querySelector('#container');
const btn = document.querySelector('.btn');



btn.addEventListener("click", () => {
    container.innerHTML = "";
    let size = prompt("Enter grid size: ");
    let width = 400/size;
    container.style.gridTemplateColumns = `repeat(${size}, ${width}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${width}px)`;

    for(let i = 0; i<(size**2); i++){
        const div = document.createElement('div');
        div.classList.add('div');
    
        div.addEventListener("mouseover", ()=>{
            div.style.backgroundColor = "black";
        })
    
        container.appendChild(div);
    }
})




