import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-100">
      <Section 
        title="Welcome to Our Movie Theater" 
        content="Experience the magic of cinema at our state-of-the-art movie theater. We offer a wide variety of films from the latest blockbusters to timeless classics. Our comfortable seating and high-quality sound and visual systems ensure that you enjoy every moment of your movie experience."
        bgColor="bg-red-500"
      />
      <Section 
        title="Our Movie Collection" 
        content="Our extensive collection includes films from all genres. Whether you're in the mood for action, comedy, drama, or animation, we have something for everyone. We continually update our selection to include the newest releases and all-time favorites."
        bgColor="bg-blue-500"
      />
      <Section 
        title="Special Screenings and Events" 
        content="Join us for special screenings and exclusive events. From midnight premieres to themed movie nights, we offer unique experiences for movie enthusiasts. Check our schedule regularly to stay updated on upcoming events."
        bgColor="bg-green-500"
      />
      <Section 
        title="Comfort and Convenience" 
        content="Our theater is designed with your comfort in mind. Enjoy plush seating, ample legroom, and a variety of concessions to enhance your viewing experience. We strive to create a welcoming and enjoyable environment for all our guests."
        bgColor="bg-yellow-500"
      />
      <Section 
        title="Commitment to Quality" 
        content="We are committed to providing the highest quality movie-going experience. Our screens and sound systems are regularly maintained to ensure they meet the highest standards. We believe in delivering a premium experience every time you visit."
        bgColor="bg-purple-500"
      />
      <Section 
        title="Customer Satisfaction" 
        content="Your satisfaction is our top priority. We are dedicated to making your visit memorable and enjoyable. Our friendly staff is always ready to assist you and ensure that you have a fantastic time at our theater."
        bgColor="bg-orange-500"
      />
    </div>
  );
}

const Section = ({ title, content, bgColor }) => (
  <div className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg mb-8 last:mb-0 ${bgColor}`}>
    <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
    <p className="text-lg text-white leading-relaxed">
      {content}
    </p>
  </div>
);

export default About;
