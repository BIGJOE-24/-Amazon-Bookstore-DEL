import { Book } from "./Book";
import { books } from './data';

export const BookList = ({car}) => {
  console.log({car});


 return (
   <section className="max-w-[860px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-5">
     {books.map((book) => {
       return <Book key={book.id} {...book} />;
     })}
   </section>
 );
};

