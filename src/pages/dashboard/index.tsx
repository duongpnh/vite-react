import Slider from "react-slick";
import { Product } from "@/components/Product";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
}

export const Dashboard = () => {

  return (
    <div className="m-4">
      <div text="green-7 30px" className="hover:text-cyan">Well come someone</div>
      <div className="new-collection w-full">
        <h2 text="green-7" className="font-300">New Collection</h2>
        <div className="new-collection-slider">
          <Slider {...settings}>
            {Array.from({ length: 7 }, (_, k: number) => k + 237).map(k => (<Product key={k} id={`${k}`} name="Get the same random image every time based on a seed, by adding" />))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-wrap justify-items-start">
        {Array.from({ length: 10 }, (_, k: number) => k + 237).map(k => (<Product id={`${k}`} name="Get the same random image every time based on a seed, by adding"/>))}
      </div>
    </div >
  )
}
