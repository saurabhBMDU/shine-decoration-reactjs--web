import React from "react";

const Banner3 = () => {
  return (
    <section className="banner3-container d-flex justify-content-center align-items-center">
        <div className="text-center position-relative">
            <img src="/img/banner3bg.jpg" alt="banner 3"  />
            <div className="position-absolute text-overlay">
                <p className="">Don’t be afraid to create your own style and your own rules, your own pottery.</p>
                <p>view more <span>&rarr;</span></p>
            </div>
        </div>
    </section>
  )
}

export default Banner3;
