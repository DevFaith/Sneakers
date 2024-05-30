import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-100">
      <Section 
        title="We are a Sneakers Company with Unlimited Products" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quisquam necessitatibus quibusdam harum beatae aliquid quos eaque laborum, ipsa recusandae velit tempora minima ratione fugit, unde sequi aspernatur quidem veritatis."
      />
      <Section 
        title="Our Commitment to Quality" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quisquam necessitatibus quibusdam harum beatae aliquid quos eaque laborum, ipsa recusandae velit tempora minima ratione fugit, unde sequi aspernatur quidem veritatis."
      />
      <Section 
        title="Join Our Community" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quisquam necessitatibus quibusdam harum beatae aliquid quos eaque laborum, ipsa recusandae velit tempora minima ratione fugit, unde sequi aspernatur quidem veritatis."
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
