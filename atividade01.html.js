const elementoForm = document.getElementById('formulario');

elementoForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

const elementoCor = document.getElementById('elementoCor');

elementoCor.addEventListener('input', (e) => {
    const corNova = e.target.value;

    // Atualiza a variável CSS
    document.documentElement.style.setProperty(
        '--primary-color',
        corNova
    );

    // Salva no localStorage
    localStorage.setItem('primaryColor', corNova);
});

document.addEventListener('DOMContentLoaded', () => {

    const corSalva = localStorage.getItem('primaryColor');

    if (corSalva) {

        // Define o valor do input
        elementoCor.value = corSalva;

        // Aplica a cor salva
        document.documentElement.style.setProperty(
            '--primary-color',
            corSalva
        );

    } else {

        // Pega a cor padrão do CSS
        const rootStyles = window.getComputedStyle(
            document.documentElement
        );

        const primaryColor = rootStyles
            .getPropertyValue('--primary-color')
            .trim();

        // Define no input
        elementoCor.value = primaryColor;
    }

});