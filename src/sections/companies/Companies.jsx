import airbnb from '../../assets/icons/airbnb.svg';
import amazon from '../../assets/icons/amazon.svg';
import fedex from '../../assets/icons/fedex.svg';
import microsoft from '../../assets/icons/microsoft.svg';
import google from '../../assets/icons/google.svg';
import ola from '../../assets/icons/ola.svg';
import walmart from '../../assets/icons/walmart.svg';
import oyo from '../../assets/icons/oyo.svg';

export default function Companies() {
  return (
    <div className="py-[64px] px-[45px]">
        <div className="flex items-center justify-between">
            <div>
                <h3 className="title mb-[16px]">890+</h3>
                <p className="comment">some big companies that we work<br />with, and trust us very much</p>
            </div>
            <div>
                <div className='flex'>
                    <img className='mr-[90px] w-[90px]' src={airbnb} alt="airbnb" />
                    <img className='mr-[90px] w-[90px]' src={amazon} alt="amazon" />
                    <img className='mr-[90px] w-[90px]' src={fedex} alt="fedex" />
                    <img src={microsoft} alt="microsoft" />
                </div>
                <div className='flex mt-[60px]'>
                    <img className='mr-[90px] w-[90px]' src={google} alt="google" />
                    <img className='mr-[90px] w-[90px]' src={ola} alt="ola" />
                    <img className='mr-[90px] w-[90px]' src={walmart} alt="walmart" />
                    <img src={oyo} alt="oyo" />
                </div>
            </div>
        </div>
    </div>
  )
}