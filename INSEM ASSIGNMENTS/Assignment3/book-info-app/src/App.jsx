

function App() {
  const books = [
    {
      title: "Learning JavaScript",
      author: "John Doe",
      isbn: "978-1-23456-789-7",
      publisher: "TechBooks",
      edition: "2nd",
      price: 499
    },
    {
      title: "React Fundamentals",
      author: "Jane Smith",
      isbn: "978-1-98765-432-1",
      publisher: "WebPress",
      edition: "1st",
      price: 599
    },
    {
      title: "Data Structures in C++",
      author: "ABC Author",
      isbn: "978-0-11111-222-3",
      publisher: "CS Publications",
      edition: "3rd",
      price: 650
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Book Information</h1>
      {books.map((book, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #333",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <p><strong>Title of Book:</strong> {book.title}</p>
          <p><strong>Author Name:</strong> {book.author}</p>
          <p><strong>ISBN Number:</strong> {book.isbn}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Edition:</strong> {book.edition}</p>
          <p><strong>Price:</strong> ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;