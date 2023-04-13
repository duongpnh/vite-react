interface IProps {
  id: string;
  name: string;
}

export const Product = (props: IProps) => {
  return (
    <div className="h-250px w-200px bg-cyan-7 m-4 relative">
      <div className="w-full h-250px">
        <img src={`https://picsum.photos/id/${props.id}/200/300`} alt="" width={200} height={250} className="object-cover" />
      </div>
      <div className="font-300 text-4 flex flex-col p-2 absolute bottom-0 bg-pink-50">
        <div className="pb-2">{props.name}</div>
        <div className="flex justify-around">
          <button className="border-blueGray border-2 border-dashed outline-none bg-transparent color-black hover:border-blue-5 hover:color-blue-5 transition-all border-rd-1 cursor-pointer">Add to card</button>
          <button className="border-none outline-none color-white bg-blue p-2 hover:bg-blue-6 hover:color-light transition-all border-rd-1 cursor-pointer">Buy Now</button>
        </div>
      </div>
    </div>
  )
}