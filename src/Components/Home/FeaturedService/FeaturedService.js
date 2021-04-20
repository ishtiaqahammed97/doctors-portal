import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="features-services pb-0 pd-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat porro laboriosam maxime nam! Hic ipsa quas officiis perferendis. Quibusdam, odio amet velit veritatis explicabo, magni optio necessitatibus sequi aspernatur exercitationem alias, cupiditate esse incidunt quam voluptates nulla! Fugit, accusamus tempore. Molestias voluptates voluptatibus aliquid nam doloremque magnam nesciunt. Nostrum corporis consequatur minus illum impedit distinctio fuga perferendis unde provident?</p>
                        <button className="btn btn-primary"> Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;