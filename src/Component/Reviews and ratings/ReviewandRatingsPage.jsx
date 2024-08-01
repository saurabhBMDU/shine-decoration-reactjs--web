import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './Reviews.css'

const ReviewandRatingsPage = () => {
  const [reviewForm, setReviewForm] = useState({
    reviewTitle: '',
    reviewDescription: '',
    rating: 0
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  // Handle rating change
  const handleRatingChange = (e) => {
    setReviewForm(prevForm => ({
      ...prevForm,
      rating: parseInt(e.target.value)
    }));
  };

  const handleSubmit = (e)=>{
   e.preventDefault();
   console.log(reviewForm);
  }
  return (
    <section className="px-10 py-4"> 
      <main className="rev-productbox d-flex px-4 py-2 gap-4 ">
        <div>
          <img src="/img/pottery3.jpg" alt="Product" />
        </div>
        <div className="rev-productTextbox">
          <label>Product Name</label>
          <p>Product Category</p>
          <div className="rating-cont">
            <FaStar color="white"/> <span>4.5</span>
          </div>
        </div>
      </main>
      <main className="rating-sec">
        <div className="form-area-review d-flex flex-column gap-2">
          <div className="ratebox">
            <h4>Rate Product</h4>
            <div className="rate d-block justify-self-start">
              {[5, 4, 3, 2, 1].map(star => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={reviewForm.rating === star}
                    onChange={handleRatingChange}
                    required
                  />
                  <label htmlFor={`star${star}`} title={`${star} stars`}>{star} stars</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <h4>Review this Product</h4>
            <form onSubmit=''>

            <main className="text-area-cont">
              <div className="d-flex px-4 justify-content-between py-2 text-heading-area">
                <label htmlFor="reviewDescription">Description</label>
                <label htmlFor="reviewDescription">cannot be empty</label>
              </div>
              <textarea
              required
                id="reviewDescription"
                name="reviewDescription"
                placeholder="Description...."
                className="px-4"
                style={{padding:0}}
                value={reviewForm.reviewDescription}
                onChange={handleInputChange}
              />
              <div className="ratetitle-cont px-4">
                <label htmlFor="reviewTitle" style={{fontSize:'.85rem', fontWeight:500}}>Title (optional)</label>
                <input
                  id="reviewTitle"
                  name="reviewTitle"
                  type="text"
                  placeholder="Review title..."
                  style={{fontSize:'.9rem'}}
                  value={reviewForm.reviewTitle}
                  onChange={handleInputChange}
                />
              </div>
            </main>
            <div className="mt-5 add-photo-cont px-4 ">
              <input type="file" />
              {/* <img src="https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jp" alt="Add photo" /> */}
            </div>
            <div className="submit-rate-button-cont d-flex justify-content-end">
              <button className="submit-rate-button" type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
};

export default ReviewandRatingsPage;
