import React, { useRef } from "react";
import './Reviews.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import photo1 from '../../photo/photo1.jpg';
import photo2 from '../../photo/photo2.jpg';
import photo3 from '../../photo/photo3.jpg';
import photo4 from '../../photo/photo4.jpg';

const testimonials = [
  {
    name: 'Emily Roberts',
    title: 'Lead, Instagram',
    image: photo1,
    quote: "In the heart of every great community lies a welcoming restaurant, where stories are shared, friendships are forged, and memories are made."
  },
  {
    name: 'Sarah Thompson',
    title: 'Software Enginer, Telegram',
    image: photo2,
    quote: "A restaurant isn't just about the food on the plate; it's about the joy it brings to those gathered around the table, savoring flavors and creating moments of pure delight."
  },
  {
    name: ' Michael Anderson',
    title: 'Tech Lead, Google',
    image: photo3,
    quote: "Behind every successful restaurant is a team dedicated not only to serving delicious cuisine but also to crafting unforgettable experiences for every guest who walks through the door."
  },
  {
    name: 'David Johnson',
    title: 'Brand Coordinator, Facebook',
    image: photo4,
    quote: "Within the walls of a restaurant, strangers become friends, and meals become celebrations of life's simple pleasures, reminding us to savor each moment and cherish the company we keep."
  }
]


function Reviews() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrows left">
          <span>
            <IoIosArrowRoundBack />
          </span>
        </div>

        <div className="inner">
          <div className="t-image">
            <ul>
              <li>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="arrows right">
          <span>
            <IoIosArrowRoundForward />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Reviews;

{/* 
      <IoIosArrowRoundBack />
      <IoIosArrowRoundForward /> */}