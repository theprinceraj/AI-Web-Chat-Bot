const btn = document.getElementByID('btn');

btn.addEventListener('click', getResponse);

async function getResponse() {                  
  var inputText = document.getElementById("input").value;      
  const parentDiv = document.getElementById("chat-area");

  if(inputText === '') { 
    return;
  }

  const question = document.createElement('div');
question.innerHTML = inputText;
question.classList.add("box");
parentDiv.appendChild(question);
  
  document.getElementByID('input').value = '';
  // The remaining code goes inside this function
}
