/*

Day 9: DOM Manipulation

    Tasks/Activities:

        Activity 1: Selecting and Manipulating Elements

            Task 1: Select an HTML element by its ID and change its text content.

            Task 2: Select an HTML element by its class and change its background color.

        Activity 2: Creating and Appending Elements

            Task 3: Create a new div element with some text content and append it to the body.

            Task 4: Create a new li element and add it to an existing ul list.

        Activity 3: Removing Elements

            Task 5: Select an HTML element and remove it from the DOM.

            Task 6: Remove the last child of a specific HTML element.

        Activity 4: Modifying Attributes and Classes

            Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

            Task 8: Add and remove a CSS class to/from an HTML element.

        Activity 5: Event Handling

            Task 9: Add a click event listener to a button that changes the text content of a paragraph. 
            
            Task 10: Add a mouseover event listener to an element that changes its border color.

*/

// Activity 1
const h1 = document.getElementById('Heading');
h1.innerHTML = "Day 9 - DOM Manipulation"

const main = document.querySelector('.main');
main.style.backgroundColor = 'red';

// Ativity 2
const divElement = document.createElement('div');
divElement.className = 'div2'
const addText = document.createTextNode("Challenge for Day 9");
divElement.appendChild(addText)
document.body.appendChild(divElement)

const ul = document.querySelector('ul');
const li = document.createElement('li');
const addText2 = document.createTextNode("Mango");
li.appendChild(addText2);
ul.appendChild(li);

// Activity 3
const divToRemove = document.querySelector('.div2');
divToRemove.remove();

const lastChildOfli = document.querySelector('li:last-child');
lastChildOfli.remove()

// Activity 4
const image = document.querySelector('#image');
image.setAttribute('src', 'https://images.pexels.com/photos/15763644/pexels-photo-15763644/free-photo-of-scuba-divers-in-masks-snorkeling-underwater.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')

const div3 = document.querySelector('.div3');
div3.classList.add('bgColor')

// Activity 5
const button = document.getElementById('button');
button.addEventListener('click', () => {
    const text = document.createTextNode("This is a paragraph.")
    document.getElementById('para').textContent = '';
    document.getElementById('para').appendChild(text);
})


const h2 = document.querySelector('h2');
h2.addEventListener('mouseover', () => {
    h2.style.borderColor = 'red';
})


