const userInput = document.getElementById("userInput")

const sendBtn = ()=>{
    const message = userInput.value
    if (!message) return;
    alert('send')
}