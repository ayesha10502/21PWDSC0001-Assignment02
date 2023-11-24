document.addEventListener('DOMContentLoaded', function () {
    // Fetch books and populate book container
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const bookContainer = document.getElementById('card-row');
            let currentRow = document.createElement('div');
            currentRow.classList.add('row');

            // Loop through the books and create cards
            data.forEach((book, index) => {
                if (index % 4 === 0 && index !== 0) {
                    // Start a new row after every 4 cards
                    bookContainer.appendChild(currentRow);
                    currentRow = document.createElement('div');
                    currentRow.classList.add('row');
                }

                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-4', 'card'); // Bootstrap classes for grid and card styling

                const image = document.createElement('img');
                image.src = book.cover_image;
                image.classList.add('card-img-top');
                card.appendChild(image);

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const title = document.createElement('h5');
                title.classList.add('card-title');
                title.textContent = book.title;
                cardBody.appendChild(title);

                const author = document.createElement('p');
                author.classList.add('card-text');
                author.textContent = `Author: ${book.author}`;
                cardBody.appendChild(author);

                const price = document.createElement('p');
                price.classList.add('card-text');
                price.textContent = `Price: $${book.price}`;
                cardBody.appendChild(price);

                const addToCartBtn = document.createElement('button');
                addToCartBtn.classList.add('btn', 'btn-primary', 'mr-2');
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.addEventListener('click', function () {
                    addToCart(book);
                });
                cardBody.appendChild(addToCartBtn);

                const viewCartBtn = document.createElement('button');
                viewCartBtn.classList.add('btn', 'btn-success');
                viewCartBtn.textContent = 'View Cart';
                viewCartBtn.addEventListener('click', function () {
                    window.location.href = 'cart.html';
                });
                cardBody.appendChild(viewCartBtn);

                card.appendChild(cardBody);
                currentRow.appendChild(card);
            });

            // Append the last row if it's not empty
            if (currentRow.children.length > 0) {
                bookContainer.appendChild(currentRow);
            }
        });

    // Add to Cart function
    function addToCart(book) {
        // Implement your logic to add the book to the cart (use cart.js or any other method)
        // For demonstration purposes, you can alert the user
        alert(`Added "${book.title}" to the cart!`);
    }
});