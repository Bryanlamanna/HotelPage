var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var responseData = JSON.parse(this.responseText);
        console.log("Dados recebidos do servidor:", responseData);
        displayReservas(responseData);
    } else if (this.readyState == 4) {
        console.error("Erro ao receber os dados do servidor. Status:", this.status);
    }
};

xhttp.open("GET", "http://localhost:3000/reserva", true);
xhttp.send();

function displayReservas(reservas) {
    var reservasDiv = document.getElementById("reservas");

    reservas.forEach(function(reserva) {
        var reservaElement = document.createElement("div");
        reservaElement.innerHTML = `
            <h2>${reserva.nome}</h2>
            <p>ID: ${reserva.id}</p>
            <p>Data de entrada: ${reserva.dataIn}</p>
            <p>Data de saída: ${reserva.dataOut}</p>
            <p>Observações: ${reserva.obs}</p>
            <p>Email: ${reserva.email}</p>
            <p>Adultos: ${reserva.adultos}</p>
            <p>Crianças: ${reserva.criancas}</p>
        `;
        reservasDiv.appendChild(reservaElement);
    });
}
