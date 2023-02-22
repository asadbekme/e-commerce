import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { sliderImgs } from '../../assets/images';
import './Slider.scss';

const Slider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='slider'>
      <div className='container'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            {sliderImgs.map((_, i) => (
              <div className='slider-item'>
                <img src={sliderImgs[i]} alt="slider image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Slider;