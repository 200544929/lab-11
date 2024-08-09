document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the value of the input field
    const item = document.getElementById('item').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = item;

    // Add a delete button to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);

    // Append the list item to the list
    document.getElementById('list').appendChild(li);

    // Clear the input field
    document.getElementById('item').value = '';
    document.getElementById('item').focus();
});
