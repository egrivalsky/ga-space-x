import './App.css';

function App() {
  //name and store variables before return statement
   const name = 'Erik G';
   const post = {
     title: "Dinosaurs are really cool/dead",
     author: "Barry Brontosaurus",
     body: "In this work I will demonstrate how cool dinosaurs are.",
     comments: "This guy is a hack. Just kidding!",
   }
  return (
    <div className="App">
      {/* access variables with curly brackets */}
      <h1>{post.title}</h1>
      <h4>{post.author}</h4>
      <p>{post.body}</p>
      <p>Comments: {post.comments}</p>
    </div>
  );
}

export default App;
