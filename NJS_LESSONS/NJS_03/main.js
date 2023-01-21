const sm = document.getElementById('small')
const med = document.getElementById('medium')
const big = document.getElementById('big')

const handler1 = (e) => {
    console.log(e)
}
const handler2 = (e) => {
    alert(e)
}

// sm.onclick = handler1
// sm.onclick = handler2
//
// sm.addEventListener("click", handler1)
// sm.addEventListener("click", handler2)
// sm.removeEventListener('click', handler1)
// sm.removeEventListener('click', handler2)

sm.onclick = handler1
med.onclick = handler1
big.onclick = handler1