import styled from "./Carousel.module.css";

const Carousel = () => {
    return (
        <div class={styled.carousel}>
            <div class={`${styled.carouselItem} ${styled.one}`}></div>
            <div class={`${styled.carouselItem} ${styled.two}`}></div>
            <div class={`${styled.carouselItem} ${styled.three}`}></div>
            <div class={`${styled.carouselItem} ${styled.four}`}></div>
            <div class={`${styled.carouselItem} ${styled.five}`}></div>
        </div>
    )
}

export default Carousel;