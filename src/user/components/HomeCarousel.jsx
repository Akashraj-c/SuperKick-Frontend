import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const HomeCarousel = () => {
    return (
        <>
            <Carousel fade className='carouselMain' style={{ width: '100%',zIndex:'0',marginTop:'130px'}} >
                <Carousel.Item>
                    <img src="https://cdn.culture-circle.com/media/home%20banners/CJ%20Desktop.webp" alt="no img" style={{ height: '100%', width: '100%' }} />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cdn.culture-circle.com/media/home%20banners/AJ1OBS%20Desktop.webp" alt="no img" style={{ height: '100%', width: '100%' }} />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cdn.culture-circle.com/media/home%20banners/home%20banners%2028_07/No%20Nazar%20New%20Desktop.webp" alt="no img" style={{ height: '100%', width: '100%' }} />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cdn.culture-circle.com/media/home%20banners/IBSD%20banners/Vomero%206hrs%20MRP%20Desktop.webp" alt="no img" style={{ height: '100%', width: '100%' }} />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cdn.culture-circle.com/media/home%20banners/Festive%20Drip%20Deals/FDD%20desktop.webp" alt="no img" style={{ height: '100%', width: '100%' }} />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomeCarousel