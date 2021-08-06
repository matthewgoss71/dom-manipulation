//add <div> element with textContent

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//add <p> element with red text

const redText = document.createElement('p');
redText.classList.add('pRedText');
redText.textContent = 'Hey I\'m red!';
redText.style.color = 'red';

container.appendChild(redText);

//add an <h3> with blue text that says “I’m a blue h3!"

const blueText = document.createElement('h3');
blueText.classList.add('h3BlueText');
blueText.textContent = 'I\'m a blue h3!'
blueText.style.color = 'blue';

container.appendChild(blueText);

//add a <div> with a black border and pink background color

const containerPink = document.createElement('div');
containerPink.classList.add('divContainerPink');
containerPink.style.backgroundColor = 'pink';
containerPink.style.border = 'solid';

//add another <h1> that says “I’m in a div”

const newH1 = document.createElement('h1');
newH1.classList.add('newH1');
newH1.textContent = 'I\'m in a div';

containerPink.appendChild(newH1);

//add a <p> that says “ME TOO!”

const newP = document.createElement('p');
newP.classList.add('newP');
newP.textContent = 'ME TOO!';

containerPink.appendChild(newP);
container.appendChild(containerPink);


