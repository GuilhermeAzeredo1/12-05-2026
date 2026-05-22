const elementoForm = document.getElementById('formulario');
elementoForm.addEventListener('submit', (e) => e.preventDefault()
);

const elementoCor = document.getElementById('elementoCor');
elementoCor.addEventListener('input', (e) => {
    let corNova = e.target.value;

    localStorage.setItem('primaryColor',corNova);
    document.documentElement.style.setProperty
    ('--primary-color', corNova);


});

document.addEventListener('DOMContentLoaded', async () => {
    if (localStorage.getItem('primaryColor')){
        elementoCor.value = localStorage.getItem('primaryColor');

        document.documentElement.style.setProperty
        ('--primary-color', elementoCor.value);

    } else {



   const rootStyles =
       window.getComputedStyle
       (document.documentElement);

   const primaryColor = rootStyles.getPropertyValue('--primary-color').trim();

   elementoCor.value = primaryColor;

    }
});


