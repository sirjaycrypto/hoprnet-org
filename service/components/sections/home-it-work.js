import React, { useEffect, useState } from 'react'


export default function HomeHomeItWork() {

  const dataInfo = [
    {
      img: '/assets/images/how-work-1.svg',
      title: 'Private',
      paragraph:
        'Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stakers as a reward for relaying cover traffic.',
      mirrorBox: false,
    },
    {
      img: '/assets/images/how-work-2.svg',
      title: 'Profitable',
      paragraph:
        'Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stakers as a reward for relaying cover traffic.',
      mirrorBox: true,
    },
    {
      img: '/assets/images/how-work-2.svg',
      title: 'Private',
      paragraph:
        'Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stakers as a reward for relaying cover traffic.',
      mirrorBox: false,
    },
  ]

  return (
    <>
      <section className="section-how-work padding-section-aux">
        <div className="aux-container">
          <div className="container-center-center">
            <h2>HOW DOES IT WORK?</h2>
            
          </div>
          {/*  */}
          <div className="element-boxing">
            {dataInfo.map((e,index) => {
              const { img, title, paragraph, mirrorBox } = e
              return    ( 
              <div key={index} className={'info-box-line ' + (mirrorBox ? 'flex-line' : '')}>
                <div className="info-cont aux-padding-box-read">
                  <h3>{title}</h3>
                  <p>{paragraph}</p>
                </div>
                <div>
                <img src={img} alt={title} /> 
              </div>
            </div>)
            })}
          </div>
          {/*  */}
        </div>
      </section>
    </>
  )
}
