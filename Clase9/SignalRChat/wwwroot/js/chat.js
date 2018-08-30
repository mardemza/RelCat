(function () {
    "use strict";

    // -- Inicio vars
    var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    var messages = document.querySelector("#messagesList");
    var user = document.querySelector("#userInput");
    var message = document.querySelector("#messageInput");
    var sendBtn = document.querySelector("#sendButton");

    // -- Declaro función para cuando se reciben los mensajes
    connection.on("ReceiveMessage", function (user, message) {
        var msg = message;
        var encodedMsg = user + " dice: " + msg;
        var li = document.createElement("li");
        li.textContent = encodedMsg;

        messages.appendChild(li);
    });

    // -- Inicio el hub y declaro funcion por si hay algun error
    connection.start();

    // -- Declaro función para cuando presionen el boton enviar
    sendBtn.onclick = function (event) {    
        connection.invoke("SendMessage", user.value, message.value);
        event.preventDefault();
    };
})();