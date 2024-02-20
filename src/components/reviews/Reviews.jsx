import React, { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import photo1 from '../../photo/photo1.jpg';
import photo2 from '../../photo/photo2.jpg';
import photo3 from '../../photo/photo3.jpg';
import photo4 from '../../photo/photo4.jpg';

const testimonials = [
  {
    name: 'dskjbdsjkb krainyk',
    title: 'крутий чувак',
    image: photo1,
    quote: "In the heart of every great community lies a welcoming restaurant, where stories are shared, friendships are forged, and memories are made."
  },
  {
    name: 'bpgdan krainyk',
    title: 'csjkbshjcbd чувак',
    image: photo2,
    quote: "A restaurant isn't just about the food on the plate; it's about the joy it brings to those gathered around the table, savoring flavors and creating moments of pure delight."
  },
  {
    name: 'dsjkbdsjkd krainyk',
    title: 'sdcdsdscs чувак',
    image: photo3,
    quote: "Behind every successful restaurant is a team dedicated not only to serving delicious cuisine but also to crafting unforgettable experiences for every guest who walks through the door."
  },
  {
    name: 'dksjhdjkdsb krainyk',
    title: 'pwekwpoek чувак',
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
            <IoIosArrowRoundBack/>
          </span>
        </div>

          <div className="inner">
            <div className="t-image">
              <ul>
                <li>
                  <img src={testimonials[0].image} alt="photo" />
                </li>
              </ul>
            </div>
          </div>

        <div className="arrows right">
          <span>
            <IoIosArrowRoundForward/>
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