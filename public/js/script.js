const btn = document.getElementByID('btn');

btn.addEventListener('click', getResponse);

async function getResponse() {                  
  var inputText = document.getElementById("input").value;      
  const parentDiv = document.getElementById("chat-area");

  if(inputText === '') { 
    return;
  }
  // The remaining code goes inside this function
}
