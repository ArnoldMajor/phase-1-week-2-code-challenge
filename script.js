//This event listener that checks if the HTML code has completely loaded before executing any code 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('list-item-generator');

    // itemsArray is declared, it will hold all the user's list inputs 
    let itemsArray = [];

    // This event listener runs the code when the submit button is clicked, it adds the input to the list, as well as other elements 
    form.addEventListener('submit', (e) => {
        // This method prevents the form from refreshing when submitted
        e.preventDefault();

        // All necessary elements are initialized to the respective variables
        const deleteButton = document.createElement('button');
        const checkMark = document.createElement('input');
        const listItem = document.createElement('div');
        const shoppingItem = document.createElement('li');
        const textArea = document.getElementById('list-entry');
        const shoppingList = document.getElementById('shopping-list');
        const clearList = document.getElementById('clear-button')

        // This condition checks whether there's an input submitted, if not it will remind the user to put in a value
        if (textArea.value) {
            // When the submit button is clicked, a list item is added. It will hold the input item
            shoppingList.appendChild(listItem);
            listItem.className = "list-item"

            // When the submit button is clicked, for every list item a check mark is added. It will be used to mark whether an item has been bought
            listItem.appendChild(checkMark);
            checkMark.type = 'checkbox';
            checkMark.className = 'check-mark'
            checkMark.name = 'check'

            // When the submit button is clicked, for every list item a list tag <li> is added. It will hold the input item text
            listItem.appendChild(shoppingItem);
            shoppingItem.className = 'item-text';

            // When the submit button is clicked, for every list item a delete button is added. It will be used to remove an item from the list
            listItem.appendChild(deleteButton);
            deleteButton.className = 'delete-button';

            // When the submit button is clicked, every user input will be passed into the items Array 
            itemsArray.push(textArea.value.toString());
            // This loop will take every element of the Items array and pass it into the <li> tag that was created
            for (const element of itemsArray) {
                shoppingItem.textContent = element.toString();
            }

            // This event listener will remove the item from the list when the delete button is clicked
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            })

            // This event listener will add a strikethrough to the item when it is marked as purchased
            checkMark.addEventListener('click', () => {
                if (checkMark.checked) { shoppingItem.style.textDecoration = 'line-through'; }
                else if (!checkMark.checked) { shoppingItem.style.textDecoration = 'none'; }
            })

            // This event listener will remove all items from the list when the Clear List button is clicked 
            clearList.addEventListener('click', () => {
                listItem.remove()
            })

            // When the submit button is clicked, the input field will be empty
            textArea.value = '';
        } else {
            alert('Please put in a shopping item!')
        }
    })
})


