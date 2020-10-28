CSS.registerProperty({
    name: '--waveTime',
    syntax: '<number>',
    inherits: false,
    initialValue: '0'
  });
CSS.paintWorklet.addModule('css-worklet.js');



const elementsToDuplicateText = [...document.querySelectorAll('.text-dup')];
// duplicate text
document.querySelector('.text-source').oninput = (evt) => {
    const { value } = evt.target;
    elementsToDuplicateText.forEach(elem => elem.innerText = value);
};
