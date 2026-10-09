export const Book = ({ id, title, author, img }) => {
 
  return (
    <article className="text-center bg-white rounded-lg shadow-md p-3 relative">
      <img src={img} alt={title} className="w-full h-[70%] object-contain" />
      <p className="text-base font-semibold my-[10px]">{title}</p>
      <h5 className="text-xs font-normal">{author}</h5>
      <span className="font-semibold h-7 w-7 text-white bg-[#c35600] flex absolute justify-center items-center top-0 left-0 text-xm rounded-tl-[7px] rounded-br-[7px]">
        #{id}
      </span>
    </article>
  );
};

