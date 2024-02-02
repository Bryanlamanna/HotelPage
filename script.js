function submitForm() {
    const form = document.getElementById('reservationForm');
    const formData = new FormData(form);

    // Formata os dados do formulário de acordo com o modelo JSON 
    const reservationData = {
       
            id: null, // O servidor atribuirá um ID
            nome: formData.get('nome'),
            dataIn: formData.get('dataIn'),
            obs: formData.get('obs'),
            email: formData.get('email'),
            dataOut: formData.get('dataOut'),
            adultos: parseInt(formData.get('adultos')),
            criancas: parseInt(formData.get('criancas'))
        
    };

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar formulário');
        }
        return response.json();
    })
    .then(data => {
        alert('Formulário enviado com sucesso');
        console.log(data); // Se o servidor retornar dados, você pode acessá-los aqui
        form.reset(); // Limpa o formulário após o envio bem-sucedido
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar formulário');
    });
}