import React from 'react';

type Props = {
  name: string;
  text: string;
};

const Testimonial = ({ name, text }: Props) => {
  return (
    <div className="max-w-sm bg-white p-5 rounded-lg shadow-md mx-auto">
      <p className="text-gray-600 mb-3">{`"${text}"`}</p>
      <p className="font-semibold text-amber-600">{name}</p>
    </div>
  );
};

export default Testimonial;
