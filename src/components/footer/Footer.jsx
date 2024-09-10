import logo from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';

export default function Footer() {
  return (
    <div className="wrapper pt-[112px] pb-[60px] relative bg-dark">
        <div className="pb-[45px]">
            <h4 className="font-semibold text-[64px] text-white mb-[32px]">Think beyond the wave</h4>
            <p className="comment">Ask about Sans products, pricing, implementation, or anything<br />else. Our highly trained reps are standing by, ready to help</p>
        </div>
        <button className="btn-white absolute top-[190px] right-[120px]">Try for free</button>
        <div className="pt-[90px] flex justify-between">
            <div>
                <img src={logo} alt="logo" />
                <p className="font-medium text-[#7E8492]">We built an elegant solution. Our team<br />created a fully integrated sales and<br />marketing solution for SMBs</p>
            </div>
            <div className="flex justify-between">
                <ul className='mr-[93px]'>
                    <p className='font-bold text-white mb-[24px]'>Company</p>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">About</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Pricing</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Jobs</a></li>
                    <li><a className="text-[#7E8492]" href="#">Blog</a></li>
                </ul>
                <ul className='mr-[93px]'>
                    <p className='font-bold text-white mb-[24px]'>Product</p>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Sales Software</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Marketplace</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Terms & Conditions</a></li>
                    <li><a className="text-[#7E8492]" href="#">Privacy Policy</a></li>
                </ul>
                <ul className='mr-[93px]'>
                    <p className='font-bold text-white mb-[24px]'>Discover</p>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">CRM Comparision</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Partner Program</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">What is CRM</a></li>
                    <li><a className="text-[#7E8492]" href="#">Resource</a></li>
                </ul>
                <ul>
                    <p className='font-bold text-white mb-[24px]'>Help Center</p>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Community</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Knowledge Base</a></li>
                    <li className='mb-[16px]'><a className="text-[#7E8492]" href="#">Academy</a></li>
                    <li><a className="text-[#7E8492]" href="#">Support</a></li>
                </ul>
            </div>
        </div>
        <hr className='mt-[56px] mb-[40px] border-[#606060]' />
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='flex mr-[72px]'>
                    <img className='mr-[24px]' src={facebook} alt="facebook" />
                    <img className='mr-[24px]' src={instagram} alt="instagram" />
                    <img className='mr-[24px]' src={linkedin} alt="linkedin" />
                    <img src={twitter} alt="twitter" />
                </div>
                <ul className='flex'>
                    <li className='mr-[40px] text-white'>Privacy Policy</li>
                    <li className='mr-[40px] text-white'>Terms & Conditions</li>
                    <li className='text-white'>Support</li>
                </ul>
            </div>
            <p className="inline-block text-white">© Copyright 2023, All Rights Reserved</p>
        </div>
    </div>
  )
}