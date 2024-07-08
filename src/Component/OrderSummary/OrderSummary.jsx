import React from "react";
import css from './ordersummary.module.css'
import { formatNumberWithCommas } from "../../assest/js/checker";
const OrderSummary = () => {
  return (
    <section className={css.maincontainer}>
        <section className={css.leftcontainer}>
            <div className={css.box}>
                <main>
                    <div >
                        <p className="text-primary">1</p>
                    </div>
                    <div className={`${css.textcontent}`}>
                        <h5 className="">LOGIN</h5>
                        <p><span className="flex-nowrap">samuel king</span>744388934989</p>
                    </div>
                </main>
                <div className={css.buttonContent}>
                    <button>change</button>
                </div>

            </div>
            <div className={css.box}>
                <main>
                    <div >
                        <p className="text-primary">2</p>
                    </div>
                    <div className={`${css.addresscontent}`}>
                        <h5 className="">DELIVERY ADDRESS</h5>
                        <p className={css.address}><span>samuelking</span> No.10, Main Market, Near State Bank of India, Nizamuddin West, New Delhi, Delhi <span> 110013</span></p>
                    </div>
                </main>
                <div className={css.buttonContent}>
                    <button>change</button>
                </div>

            </div>       
            <div className={css.summarybox}>
                <div>
                    <p>3</p>
                    <p>Order summary</p>
                </div>
                <main>
                    <div>
                        <img src="/img/pottery1.jpg" alt="" />
                    </div>
                    <section>
                        <div className={css.toptext}>
                            <main>
                                <div className={css.productnames}>
                                <p>name of the product is pot</p>
                                <p>product code </p>
                                </div>
                                <p>seller : name</p>
                            </main>
                            <div>
                                <p>delivery is by 5th august</p>
                            </div>
                        </div>
                        <div className={css.priceoffer}>
                            <p>1000</p>
                            <p>1000</p>
                            <p>60% off</p>
                        </div>
                        <div className={css.summarybutns}>
                            <p>quantity : 2</p>
                             <button>Back to shopping</button>
                        </div>
                    </section>
                    

                </main>
                
            </div>
            
            <div className={css.continueSec}>
                <p>order confirmation will be sent to registered mobile number</p>
                        <button>continue</button>
                </div>
           

        </section>
        <section className={css.priceDetails}>
                <div>
                    <h4>price details</h4>
                </div>
            <main>
                <div className={css.priceTop}>
                    <p><span> price (item:1) </span> <span>$444</span></p>
                    <p><span>delivery charges</span><span className="text-success">free</span></p>
                </div>
                <div className={css.total}>
                    <p>total payable</p>
                    <p>{formatNumberWithCommas(4444)}</p>
                </div>
                <div className={css.savings}>
                    <p className="text-success">your total savings on this order 2342</p>
                </div>
            </main>
        </section>
    </section>
  )
};

export default OrderSummary;
