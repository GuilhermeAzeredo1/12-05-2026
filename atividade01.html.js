const elementoForm = document.getElementById('formulario');
elementoForm.addEventListener('submit', (e) => e.preventDefault()
);

const elementoCor = document.getElementById('elementoCor');
elementoCor.addEventListener('input', (e) => {
    let corNova = e.target.value;

    document.documentElement.style.setProperty('--primary-color', corNova);
});

document.addEventListener('DOMContentLoaded', (e) =>
{
   const rootStyles =
       window.getComputedStyle
       (document.documentElement);

   const primaryColor = rootStyles.getPropertyValue('--primary-color').trim();
});


