import React from 'react';
import Shopproduct from './Shopproduct';
import './shop.css'

function shop() {
  return (
    <>
      <section className='container py-2'>
        <div className="row">
          <div className="col-lg-3 pt-4">
            <div className='pt-3'>
              <h6>CATEGORIES</h6>
              <div class="search-box">
                <input type="text" placeholder="Search..." className='w-100' />
                <button type="submit"><i class="fa-solid fa-magnifying-glass text-black"></i></button>
              </div>
              <div className='p-2'>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Bone China" value="This is an inbox layout" />
                  <label for="Bone China" className='px-2' style={{ fontSize: "15px" }}>Bone China</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Wooden" value="This is an inbox layout" />
                  <label for="Wooden" className='px-2' style={{ fontSize: "15px" }}>Wooden</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Ceramic" value="This is an inbox layout" />
                  <label for="Ceramic" className='px-2' style={{ fontSize: "15px" }}>Ceramic</label>
                </div>
              </div>
            </div>
            <div className='pt-3'>
              <h6>MATERIALS</h6>
              <div class="search-box">
                <input type="text" placeholder="Search..." className='w-100' />
                <button type="submit"><i class="fa-solid fa-magnifying-glass text-black"></i></button>
              </div>
              <div className='p-2'>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Metal" value="This is an inbox layout" />
                  <label for="Metal" className='px-2' style={{ fontSize: "15px" }}>Metal</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Glass" value="This is an inbox layout" />
                  <label for="Glass" className='px-2' style={{ fontSize: "15px" }}>Glass</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="PVC" value="This is an inbox layout" />
                  <label for="PVC" className='px-2' style={{ fontSize: "15px" }}>PVC</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Resin" value="This is an inbox layout" />
                  <label for="Resin" className='px-2' style={{ fontSize: "15px" }}>Resin</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Jute" value="This is an inbox layout" />
                  <label for="Jute" className='px-2' style={{ fontSize: "15px" }}>Jute</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="Ceramic" value="This is an inbox layout" />
                  <label for="Ceramic" className='px-2' style={{ fontSize: "15px" }}>Ceramic</label>
                </div>
              </div>
            </div>
            <div className='pt-3'>
              <h6>DISCOUNT</h6>
              <div class="search-box">
                <input type="text" placeholder="Search..." className='w-100' />
                <button type="submit"><i class="fa-solid fa-magnifying-glass text-black"></i></button>
              </div>
              <div className='p-2'>
                <div class="input-group">
                  <input type="checkbox" name="options" id="10% & above" value="This is an inbox layout" />
                  <label for="10% & above" className='px-2' style={{ fontSize: "15px" }}>
                    10% & above
                  </label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="20% & above" value="This is an inbox layout" />
                  <label for="20% & above" className='px-2' style={{ fontSize: "15px" }}>20% & above</label>
                </div>
                <div class="input-group">
                  <input type="checkbox" name="options" id="30% & above" value="This is an inbox layout" />
                  <label for="30% & above" className='px-2' style={{ fontSize: "15px" }}>30% & above</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div style={{paddingTop:"32px"}}>
              <Shopproduct />
            </div>
            <Shopproduct />
          </div>
        </div>
      </section>
    </>
  )
}
export default shop;
