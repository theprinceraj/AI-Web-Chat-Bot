const chatArea = document.getElementById("chat-area");

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await getResponse();
});

async function getResponse() {
    const inputText = document.querySelector("#input").value;
    alert(inputText);
    if (inputText === "") {
        alert("Please enter a message before sending.");
        return;
    }

    const question = document.createElement("div");
    const textDiv = document.createElement("div");
    textDiv.innerText = inputText;
    textDiv.style.overflowY = "auto";
    textDiv.style.overflowX = "hidden";
    question.appendChild(textDiv);
    question.classList.add("box", "user");
    chatArea.appendChild(question);

    document.getElementById("input").value = "";

    let res = await fetch("/chat",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: inputText,
            }),
        });

    const data = await res.json();

    if (data.message) {
        const answer = document.createElement("div");
        const textDiv = document.createElement("div");
        textDiv.innerText = data.message;
        answer.appendChild(textDiv);
        answer.classList.add("box", "answer");
        chatArea.appendChild(answer);
    }
    // The remaining code goes inside this function
    scrollChatAreaToBottom();
}

function scrollChatAreaToBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
}