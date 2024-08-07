import React, { useEffect, useState } from 'react';
import './ReviewComments.css'; // Ensure you create this CSS file for styling
import { IoClose } from "react-icons/io5";
import { addLikesandDislikes } from '../../action/ReviewActions';
const ReviewComments = ({ product }) => {
    const { reviews, averageRating, totalReviews } = product;
    const [ReviewStat, setReviewStat] = useState({
        excellent: 0,
        good: 0,
        average: 0,
        poor: 0,
        terrible: 0
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        let newStat = {
            excellent: 0,
            good: 0,
            average: 0,
            poor: 0,
            terrible: 0
        };
        reviews.forEach((item) => {
            switch (item.rating) {
                case 1:
                    newStat.terrible += 1;
                    break;
                case 2:
                    newStat.poor += 1;
                    break;
                case 3:
                    newStat.average += 1;
                    break;
                case 4:
                    newStat.good += 1;
                    break;
                case 5:
                    newStat.excellent += 1;
                    break;
                default:
                    return newStat;
            }
        });
        setReviewStat(newStat);
    }, [reviews]);

    const calculatePercentage = (count) => {
        return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    };

    const getStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="fa fa-star star-active"></span>);
            } else {
                stars.push(<span key={i} className="fa fa-star star-inactive"></span>);
            }
        }
        return stars;
    };
     
    const handleLikeAndDislike = (action,id)=>{
        if(action==="like"){
            addLikesandDislikes(id,{like:1})

        }else if(action==='dislike'){
            addLikesandDislikes(id,{dislike:1})
        }

    }
    const openModal = (image) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentImage('');
        setIsModalOpen(false);
    };

    return (
        <div className="container-fluid py-5 mx-auto">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                    <div className="card">
                        <div className="row justify-content-left d-flex">
                            <div className="col-md-4 d-flex flex-column">
                                <div className="rating-box">
                                    <h1 className="pt-2">{averageRating.toFixed(1)}</h1>
                                    <p>out of 5</p>
                                </div>
                                <div>
                                    {getStars(averageRating)}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="rating-bar 0 justify-content-center">
                                    <table className="text-left mx-auto">
                                        <tbody>
                                            <tr className='barcontainer'>
                                                <td className="rating-label">Excellent</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-fill" style={{ width: `${calculatePercentage(ReviewStat.excellent)}%` }}></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">{ReviewStat.excellent}</td>
                                            </tr>
                                            <tr className='barcontainer'>
                                                <td className="rating-label">Good</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-fill" style={{ width: `${calculatePercentage(ReviewStat.good)}%` }}></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">{ReviewStat.good}</td>
                                            </tr>
                                            <tr className='barcontainer'>
                                                <td className="rating-label">Average</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-fill" style={{ width: `${calculatePercentage(ReviewStat.average)}%` }}></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">{ReviewStat.average}</td>
                                            </tr>
                                            <tr className='barcontainer'>
                                                <td className="rating-label">Poor</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-fill" style={{ width: `${calculatePercentage(ReviewStat.poor)}%` }}></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">{ReviewStat.poor}</td>
                                            </tr>
                                            <tr className='barcontainer'>
                                                <td className="rating-label">Terrible</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-fill" style={{ width: `${calculatePercentage(ReviewStat.terrible)}%` }}></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">{ReviewStat.terrible}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {reviews && reviews.map((item, index) => (
                        <div key={index} className="card mt-2">
                            <div className="row d-flex">
                                <div className="d-flex gap-1 justify-content-start align-items-center">
                                    <h6 className="text-capitalize m-0">{item.user.name}</h6>
                                    <div className='ml-2'>
                                        <p className="m-0 d-flex gap-1 align-items-center justify-context-center">
                                            <span className="pr-1" style={{ fontWeight: 600, fontSize: '1rem' }}>{item.rating}.0</span>
                                            {getStars(item.rating)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-left">
                                <h4 className="blue-text m-0" style={{ fontSize: '.90rem' }}>"{item.reviewTitle}"</h4>
                                <p className="content" style={{ fontSize: '.7rem' }}>{item.reviewDescription}</p>
                            </div>
                            <div className="row text-left">
                                {item.images.map((img,index)=>(
                                    <img key={index} className="pic" src={img} alt="Activity" onClick={() => openModal(img)} />
                                ))}
                  
                            </div>
                            <div className="d-flex gap-2 mt-4">
                                <div className="like mr-3 vote " 
                                onClick={()=>handleLikeAndDislike('like',item._id)} style={{cursor:'pointer'}}>
                                    <img src="https://i.imgur.com/mHSQOaX.png" alt="Like" />
                                    <span className="blue-text pl-2">{item.like}</span>
                                </div>
                                <div className="unlike vote"
                                onClick={()=>handleLikeAndDislike('dislike',item._id)} style={{cursor:'pointer'}}>
                                    <img src="https://i.imgur.com/bFBO3J7.png"  alt="Unlike" />
                                    <span className="text-muted pl-2">{item.dislike}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay " onClick={closeModal}>
                    <IoClose className='position-absolute 'size={30} color='white' style={{top:'15px' , right:'10px'}}/>
                    <div className="modal-content">
                        <img src={currentImage} alt="Full Size" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewComments;
