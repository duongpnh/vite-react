import { Product } from "@/components/Product"

export const Catalog = () => {

  return (
    <div className="m-4">
      <div className="flex flex-wrap justify-items-start">
        {Array.from({ length: 10 }, (_, k: number) => k + 237).map(k => (<Product id={`${k}`} name="Get the same random image every time based on a seed, by adding" />))}
      </div>
    </div >
  )
}
