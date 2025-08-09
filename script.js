document.addEventListener('DOMContentLoaded', () => {
    const containerElement = document.querySelector('.container');
    const btn = document.querySelector('.btn');
    const clear = document.querySelector('.clr');

    btn.addEventListener('click', () => {
        let gridsize;
        do {
            gridsize = prompt('Grid size:', );
        } while(!gridsize || gridsize > 100 || isNaN(gridsize) || gridsize <= 0)
        containerElement.innerHTML = '';
        generateGrid(gridsize);
        
        
    })
    clear.addEventListener('click',  () =>  {
        containerElement.innerHTML = '';
    })
    
    function generateGrid(gridsize) {
        const totalGrid = gridsize * gridsize;
        for(let i = 1; i <= totalGrid; i++) {
            const div = document.createElement('div');
            div.setAttribute('style', `border: 0.5px solid black; background-color: gray; width: calc(100% /${gridsize}); height: calc(100% / ${gridsize})`)
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'white';
            })
            containerElement.appendChild(div);
        }
    }

})