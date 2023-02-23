import '../sass/main.scss';


// Define a Book interface
interface Book {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    price: number;
  }
  
  // Define an array of books
  const books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5169XGXAYBL.jpg',
      price: 9.99,
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1e9O-L.jpg',
      price: 8.99,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81B+L4B4LnL.jpg',
      price: 7.99,
    },
  ];
  
  // Define a function to render a single book item
  function renderBook(book: Book): string {
    return `
      <div class="book">
        <img src="${book.imageUrl}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>$${book.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      </div>
    `;
  }
  
  // Get a reference to the main content area
  const main = document.querySelector('main');
  
  // Render each book item and add it to the main content area
  books.forEach(book => {
    const bookHtml = renderBook(book);
    main.innerHTML += bookHtml;
  });