import React, { Component } from 'react';
import $ from "jquery"
import styled from 'styled-components'
import SwiperContent from './slide2data'
import Swiper from 'swiper';
import bgimage from '../../../images/bg.jpg'
import bgimage2 from '../../../images/bg2.jpg'

class SlideTwo extends Component {


componentDidMount(){

    $(document).ready(function() {
        var parallaxSlider;
        var parallaxSliderOptions = {
          speed: 2000,
          autoplay: true,
          parallax: true,
          loop: true,
          grabCursor: true,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            init: function() {
              let swiper = this;
              for (let i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                  .find('.img-container')
                  .attr({
                    'data-swiper-parallax': 0.75 * swiper.width,
                    'data-swiper-paralalx-opacity': 0.5
                  });
      
                $(swiper.slides[i])
                  .find('.title')
                  .attr('data-swiper-parallax', 0.65 * swiper.width);
                $(swiper.slides[i])
                  .find('.description')
                  .attr('data-swiper-parallax', 0.5 * swiper.width);
              }
            },
            resize: function() {
              this.update();
            }
          },
          navigation: {
            nextEl: '.parallax-slider .next-ctrl',
            prevEl: '.parallax-slider .prev-ctrl'
          }
        };
      
        parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
        $(window).on('resize', function() {
          parallaxSlider.destroy();
          parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
        });
      });





}


    render() {
        return (

            <SlidedataWrap>
              <div class="row">
        <div class="col-md-12 p-0">
          <div class="swiper-container parallax-slider">
            <div class="swiper-wrapper">


                <SwiperContent bg={bgimage} containclass="one" title="title 1" text=" Dr. Bruce Banner lives a life caught between the
                              soft-spoken scientist he’s always been and the
                              uncontrollable green monster powered by his rage."/>
              

                <SwiperContent bg={bgimage2}  containclass="two" title="title 2" text="     Dr. Bruce Banner lives a life caught between the
                              soft-spoken scientist he’s always been and the
                              uncontrollable green monster powered by his rage."/>

                <SwiperContent bg={bgimage} containclass="three" title="title 3" text="     Dr. Bruce Banner lives a life caught between the
                              soft-spoken scientist he’s always been and the
                              uncontrollable green monster powered by his rage."/>
                </div>

                <div class="swiper-button-next swiper-nav-ctrl next-ctrl">
              <i class="fas fa-chevron-right"></i>
            </div>
            <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="swiper-pagination pagination-ctrl"></div>
                </div>

          

                </div>
                </div>
                
                </SlidedataWrap>
        );
    }
}


const SlidedataWrap = styled.div`

overflow:hidden;
@import url("https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,900&display=swap");


.parallax-slider {
  font-family:'Titillium Web', sans-serif;
}

.parallax-slider .swiper-slide {
  position: relative;
  overflow: hidden;
}

.parallax-slider .img-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-position: center;
  background-size: cover;
}

.parallax-slider .img-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 8, 8, 0.5)), to(rgba(218, 15, 45, 0.5)));
  background-image: linear-gradient(rgba(8, 8, 8, 0.5), rgba(50, 115, 145, 0.5));
}

.parallax-slider .swiper-slide .content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 100%;
  padding-top: 15rem;
  padding-bottom: 15rem;
}

.parallax-slider .content {
  color: white;
  text-align: center;
}

.parallax-slider .content .title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3.5rem;
}

.parallax-slider .content .title .title-wrapper {
  text-decoration: underline;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 0.1rem 2rem;
}

.parallax-slider .content .description {
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

/*nav controls*/
.parallax-slider .swiper-nav-ctrl {
  background-image: none;
  height: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 1rem;
  color: white;
  width: 30px;
  outline: 0;
}

.parallax-slider .swiper-nav-ctrl.next-ctrl {
  right: 0;
}

.parallax-slider .swiper-nav-ctrl.prev-ctrl {
  left: 0;
}

.parallax-slider .pagination-ctrl {
  max-width: calc(100% - 60px);
  left: 0;
  right: 0;
  margin: auto;
}

.parallax-slider .pagination-ctrl .swiper-pagination-bullet {
  background-color: white;
}





`
export default SlideTwo;