import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-100">
      <Section 
        title="We are a Sneakers Company with Unlimited Products" 
        content="At our company, we pride ourselves on offering an extensive range of sneakers that cater to every style and need. From classic designs to the latest trends, our collection is ever-growing, ensuring that our customers have access to the best footwear options available. We source our products from top brands and innovative designers to bring you a diverse selection that is both stylish and functional."
      />
      <Section 
        title="Our Commitment to Quality" 
        content="Quality is at the forefront of our mission. We understand that sneakers are not just a fashion statement but also a crucial part of your daily comfort and performance. That's why we meticulously select materials and employ rigorous quality control measures. Each pair of sneakers undergoes thorough testing to meet our high standards, ensuring durability, comfort, and style that our customers can rely on."
      />
      <Section 
        title="Join Our Community" 
        content="Our community of sneaker enthusiasts is what makes us special. We believe in building strong relationships with our customers and fostering a sense of belonging. Join our community to stay updated on the latest releases, exclusive events, and special promotions. Whether you are a collector, an athlete, or someone who appreciates good footwear, we welcome you to be a part of our growing family."
      />
      <Section 
        title="Innovative Designs" 
        content="Our sneakers are crafted with innovative designs that push the boundaries of style and functionality. We believe in creating footwear that not only looks great but also enhances performance. From cutting-edge materials to the latest in footwear technology, we are committed to innovation in every step of our design process. Our designs cater to various activities, ensuring that there's a perfect pair for everyone."
      />
      <Section 
        title="Sustainability Initiatives" 
        content="We are dedicated to sustainability and environmental responsibility. Our company implements eco-friendly practices throughout our production process. We use recycled materials, sustainable sourcing, and energy-efficient manufacturing to minimize our carbon footprint. We believe in creating products that are not only high-quality but also environmentally conscious. Our commitment to sustainability is reflected in our packaging, materials, and production methods."
      />
      <Section 
        title="Customer Satisfaction" 
        content="Customer satisfaction is at the heart of everything we do. We strive to provide exceptional service and ensure that every customer is happy with their purchase. From easy returns and exchanges to responsive customer support, we are here to meet your needs and exceed your expectations. Your satisfaction is our priority, and we work tirelessly to make your shopping experience smooth and enjoyable."
      />
    </div>
  );
}

const Section = ({ title, content }) => (
  <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8 last:mb-0">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
    <p className="text-lg text-gray-600 leading-relaxed">
      {content}
    </p>
  </div>
);

export default About;
