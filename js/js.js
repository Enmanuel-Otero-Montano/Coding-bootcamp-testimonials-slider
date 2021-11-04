const previous = document.getElementById("previous")
const next = document.getElementById("next")
const name = document.querySelector(".name")
const profesion = document.querySelector(".profesion")
const testimonial = document.querySelector(".testimonial")
const tanya = document.getElementById("tanya")
const jhon = document.getElementById("jhon")

jhon.hidden = true

const previousButtonClick = () => {
    testimonial.textContent = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    profesion.textContent = "UX Engineer"
    jhon.hidden = true
    tanya.hidden = false
}

previous.addEventListener("click", () => previousButtonClick())
    

addEventListener("keydown", (e) => {
    if(e.key == "ArrowLeft") previousButtonClick()
})

const nextButtonClick = () => {
    testimonial.textContent = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    profesion.textContent = "Junior Front-end Developer"
    jhon.hidden = false
    tanya.hidden = true
}

next.addEventListener("click", () => nextButtonClick())

addEventListener("keydown", (e) => {
    if(e.key == "ArrowRight") nextButtonClick()
})