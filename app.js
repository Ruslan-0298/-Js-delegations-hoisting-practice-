const showButton=document.querySelector(".main-btn")


document.addEventListener("click",(event)=>{
    const touchSquare=document.querySelector(".square")
    if(event.target.closest(".main-btn")){
        if(touchSquare){
            touchSquare.remove();
            showButton.textContent="Показать квадрат"
        }else{
            showButton.textContent="Скрыть квадрат";

            const square=document.createElement("div")
            square.classList.add("square")
    
            const spanSquare=document.createElement("span")
            spanSquare.textContent="x"
            spanSquare.classList.add("span-x")
    
            square.append(spanSquare)
            document.body.append(square)
        }
    }
    if (event.target.closest(".span-x")) {
        const square = event.target.closest(".square");
        if (square) { 
            square.remove();
            showButton.textContent="Показать квадрат"
        }
    }
    const square = event.target.closest(".square");
    if (!square && !event.target.closest(".main-btn")) {
        const takeSquare = document.querySelector(".square");
        if (takeSquare) {
            takeSquare.remove();
            showButton.textContent = "Показать квадрат";
        }
    }
})
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const takeSquare = document.querySelector(".square");
        if (takeSquare) {
            takeSquare.remove();
            showButton.textContent = "Показать квадрат";
        }
    }
});