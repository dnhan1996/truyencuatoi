import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';


export default function ResEditorSlider(){
    const itemStore = useSelector(state => state.novels)
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return <>
    <Carousel responsive={responsive}>
        <div><img src="https://dichtienghoa.com/static/img/logo_header.gif" alt="#"  />
            <span>H 1</span>
        </div>
        <div><img src="https://dichtienghoa.com/static/img/logo_header.gif" alt="#"  />
            <span>H 2</span>
        </div>
        <div><img src="https://dichtienghoa.com/static/img/logo_header.gif" alt="#"  />
            <span>H 3</span>
        </div>
        <div><img src="https://dichtienghoa.com/static/img/logo_header.gif" alt="#"  />
            <span>H 4</span>
        </div>
    </Carousel>;
    </>
}