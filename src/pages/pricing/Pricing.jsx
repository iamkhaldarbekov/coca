import like from '../../assets/icons/like.svg';
import energy from '../../assets/icons/energy.svg';
import crown from '../../assets/icons/crown.svg';
import checked from '../../assets/icons/checked.svg';

export default function Pricing() {
  return (
    <div className="wrapper py-[90px] pb-[80px]">
      <div>
        <div>
          <p className="font-semibold text-[#1463FF] block w-fit py-[4px] px-[12px] mx-auto rounded-[16px] bg-[#1463FF1A]/[0.10]">Pricing plans</p>
          <h3 className="title1 text-center mt-[24px]">Choose a plan for a more<br />advanced business</h3>
          <p className="comment text-center mt-[56px]">Annual pricing (save 20%)</p>
        </div>
        <div className="flex justify-between mt-[120px]">
          <div className="px-[24px] py-[40px] max-w-[378px] rounded-[16px] border-[#EDEDED] border-[1px] mt-[64px]">
            <img src={like} />
            <div>
              <p className="text-dark text-[24px] font-semibold mt-[16px]">Starter</p>
              <p className="font-medium text-[#7E8492] mt-[8px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <p className="title mt-[24px]">$100 <span className="font-medium text-[16px] text-[#7E8492]">/mo</span></p>
            <ul className="mt-[24px]">
              <p className="font-bold text-dark">What's included:</p>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Unlimited Upload</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Advanced Statistic</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Profile Badge</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Access to the community</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">History of all Liked Photos</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">Directory Listing</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">Customize Your Profile</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">Display Your Workshops</li>
              </div>
            </ul>
            <button className="btn-white mt-[40px] block mx-auto">Choose Plan</button>
          </div>
          <div className="px-[24px] py-[40px] max-w-[378px] bg-[#161A34] rounded-[16px] border-[#EDEDED] border-[1px]">
            <div className="flex justify-between items-center">
              <img src={energy} />
              <p className="bg-[#1463FF] rounded-[16px] py-[6px] px-[12px] text-white text-[14px] font-medium">Best Offers</p>
            </div>
            <div>
              <p className="text-white text-[24px] font-semibold mt-[16px]">Popular</p>
              <p className="font-medium text-[#7E8492] mt-[8px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <p className="title mt-[24px] text-white">$1400 <span className="font-medium text-[16px] text-white">/mo</span></p>
            <ul className="mt-[24px]">
              <p className="font-bold text-white">What's included:</p>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-white font-medium">Unlimited Upload</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-white font-medium">Advanced Statistic</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-white font-medium">Profile Badge</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-white font-medium">Access to the community</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">History of all Liked Photos</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-white font-medium">Directory Listing</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">Customize Your Profile</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <li className="text-[#7E8492] line-through font-medium">Display Your Workshops</li>
              </div>
            </ul>
            <button className="btn-white mt-[40px] block mx-auto">Choose Plan</button>
          </div>
          <div className="px-[24px] py-[40px] max-w-[378px] rounded-[16px] border-[#EDEDED] border-[1px] mt-[64px]">
            <img src={crown} />
            <div>
              <p className="text-dark text-[24px] font-semibold mt-[16px]">Enterprise</p>
              <p className="font-medium text-[#7E8492] mt-[8px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <p className="title mt-[24px]">$2100 <span className="font-medium text-[16px] text-[#7E8492]">/mo</span></p>
            <ul className="mt-[24px]">
              <p className="font-bold text-dark">What's included:</p>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Unlimited Upload</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Advanced Statistic</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Profile Badge</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Access to the community</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">History of all Liked Photos</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Directory Listing</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Customize Your Profile</li>
              </div>
              <div className="flex items-center mt-[16px]">
                <img className="mr-[8px]" src={checked} />
                <li className="text-dark font-medium">Display Your Workshops</li>
              </div>
            </ul>
            <button className="btn-white mt-[40px] block mx-auto">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  )
}