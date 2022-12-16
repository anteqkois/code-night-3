import React from 'react'

export default function CarouselArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", width: '30px', height: '30px', paddingLeft: '5px',paddingTop: '7px',  borderRadius: '100%' }}
      onClick={onClick}
    />
  );
}