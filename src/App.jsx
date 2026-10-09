import { BookList } from "./BookList";
import './index.css';

function App() {
  const car = "Toyota";

  return (
    <div className="py-10">
      <h1 className="text-center mb-16 mt-8 text-[40px] font-semibold capitalize">Welcome to my book launch</h1>
      <BookList title="The great gatsby" author = "Emmanuel Joel" price={10.99} car={car}/>
    </div>
  );
}

export default App; 

// 01:12:56
//Class-6
