import React from 'react';

const SlideData = (props) => {
    return (
        
        
      

<div class="swiper-slide">
                <div  class={`img-container ${props.containclass}`} style={{backgroundImage:`url('${props.bg}')`}} >   </div>  
                <div class="container h-100">
                  <div class="row h-100">
                    <div class="col-md-12">
                      <div class="content">
                        <h1 class="title">
                          <div class="title-wrapper">
                            {props.title}
                          </div>
                        </h1>
                        <div class="row">
                          <div class="col-md-10 offset-md-1">
                            <p class="description">

                                {
                                    props.text
                                }
                         
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         

    );
};


export default SlideData;