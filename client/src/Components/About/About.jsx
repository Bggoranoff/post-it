import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <div className='title'><h2>ABOUT US</h2></div>
            <div className='website-description'>
                <p>PostIt is a community based ecommerce site for posters design. Here people can create their own designs using their photoshop and art skills. Therefore, PostIt is not just an ecommerce website, it is a social media, helping people all around the world to establish their creative business and build their own portfolio.</p>
                <br />
                <h3>Be a consumer</h3>
                <p>Here, everyone can find the poster that suits their personality - their variety is immence and their quality is guaranteed. Every poster is created by a skillful designer who is part of our team and a lot of effort is put in it. Not only can these posters be used for decoration, but some of them represent artistic symbols. What are you waiting for, then? Visit our posters page and choose your poster!</p>
                <br />
                <h3>Be a creator</h3>
                <p>Register as a posters creator in PostIt today and join our team! Here you can express your creativity and show the world your art content. Furthermore, PostIt creators have the unique opportunity to establish their own business!</p>
                <br />
                <h3>Contact Us</h3>
                <p>Email: example@domain.com</p>
                <p>Address: One Apple Park Way, Cupertino, CA 95014, USA</p>
            </div>
        </div>
    );
}

export default About;