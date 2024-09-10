import map from '../../assets/img/map.png';

import {Companies} from '../../sections';

export default function Contact() {
  return (
    <div className='wrapper py-[90px]'>
      <h3 className='title1'>Contact our team to<br />find out more</h3>
      <div className='mt-[100px] flex justify-between'>
        <img className='w-[986px]' src={map} alt="map" />
        <div>
          <div>
            <p className='text-[24px] font-bold text-dark'>Support</p>
            <p className='text-[#7E8492] mt-[8px]'>Our friendly team is<br />here to help.</p>
          </div>
          <div className='mt-[40px]'>
            <p className='text-[24px] font-bold text-dark'>Sales</p>
            <p className='text-[#7E8492] mt-[8px]'>Our friendly team is<br />here to help.</p>
          </div>
          <div className='mt-[40px]'>
            <p className='text-[24px] font-bold text-dark'>Phone</p>
            <p className='text-[#7E8492] mt-[8px]'>Our friendly team is<br />here to help.</p>
          </div>
        </div>
      </div>
      <Companies />
      <div className='pt-[120px] pb-[160px]'>
        <div className='mx-auto px-[48px] py-[56px] w-fit border-[#CED1D8] border-[1px]'>
          <div>
            <p className='text-dark text-[36px] font-semibold'>Let's level up your brand</p>
            <p className="comment mt-[20px]">You can reach us anytime <span className='text-[#1463FF]'>hellosansbrothers@gmail.com</span></p>
          </div>
          <div className='mt-[48px]'>
            <div>
              <input className='outline-none border-[#CED1D8] border-[1px] rounded-[8px] px-[14px] py-[10px] mr-[32px]' type="text" placeholder='First name' />
              <input className='outline-none border-[#CED1D8] border-[1px] rounded-[8px] px-[14px] py-[10px]' type="text" placeholder='Last name' />
            </div>
            <input className='outline-none block mt-[24px] border-[#CED1D8] border-[1px] rounded-[8px] px-[14px] py-[10px]' type="text" placeholder='you@company.com' />
            <input className='outline-none block mt-[24px] border-[#CED1D8] border-[1px] rounded-[8px] px-[14px] py-[10px]' type="text" placeholder='Phone number' />
            <textarea className='outline-none block mt-[24px] border-[#CED1D8] border-[1px] rounded-[8px] px-[14px] py-[10px] resize-none w-[100%] h-[134px]' type="text" placeholder='Leave us a message...' />
            <button className="btn mt-[32px]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}