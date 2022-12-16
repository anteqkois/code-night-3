"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className=" mx-32">
      <Slider {...settings} className="mx-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) =>
          <div className="my-4">
            <div className="mx-auto bg-gray-500 w-72 h-60 text-center rounded">
              <h3 className="text-sm font-medium py-3 rounded-t border-b-4 border-black">Mercedes-AMG S 63 E PERFORMANCE.</h3>
              <Image className="block mx-auto pb-5" alt="car" width={208} height={1} src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2HdcUfp8qXGEubSJ0l3IJOB2NS1bApRTyI5uGoxQC30CQkzNBtum7jA2mhKViSF%25vq4tTyLRgLFYaxPrSrH1yBRn8wYTyoiZrMYM4FAK2Tg95Yn6PDCruSeWzQWtsd8htcUfircXGE4TXJ0lg6ZOB2PbnbApe79I5ul6xQC3vT6khQOZ9wJ1SeWvyVtsdPJ%25cUfxpBXGE0GYJ0lBHtOB2A85bAp5ilI5uCmZQC3zSTkzN7lbm7sDgubYwR9hDsxevqKj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=350" />
              <div className="border-t-4 border-black pt-3 flex justify-evenly">
                <span>2016</span>
                <span>92 000 km</span> 
                <span>Benzyna</span> 
              </div>
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
}