document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('list-item-generator');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const textArea = document.getElementById('list-entry');
        const shoppingList = document.getElementById('shopping-list');
        const listItem = document.createElement('div');
        const shoppingItem = document.createElement('li')
        const deleteButton = document.createElement('button');
        const checkMark = document.createElement('input');

        shoppingList.appendChild(listItem);
        listItem.className = "list-item"
        listItem.appendChild(checkMark);
        checkMark.type = 'checkbox';
        listItem.appendChild(shoppingItem)
        shoppingItem.textContent = textArea.value;
        listItem.appendChild(deleteButton);
        deleteButton.className = 'delete-button'

        deleteButton.addEventListener('click', () => {
            listItem.remove();
        })

        checkMark.addEventListener('click', () => {
            shoppingItem.style.textDecoration = 'line-through';
        })
    })
})