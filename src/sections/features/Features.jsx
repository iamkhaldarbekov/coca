import adv1 from '../../assets/img/adv1.png';
import adv2 from '../../assets/img/adv2.png';
import adv3 from '../../assets/img/adv3.png';
import adv4 from '../../assets/img/adv4.png';

export default function Features() {
  return (
    <div className="wrapper pt-[160px] pb-[100px]">
        <div>
            <h3 className="title">Advertise, analyze, and<br />optimize! We do it all for<br />you</h3>
            <p className="comment mt-[24px]">Build more meaningful and lasting relationships -<br />better understand their needs, identify new<br />opportunities to help address any problems faster</p>
        </div>
        <div className="flex justify-between mt-[80px]">
            <div>
                <div className='flex'>
                    <img className='mr-[60px] duration-200 hover:scale-[1.05]' src={adv1} alt="adv1" />
                    <div className='max-w-[268px] pt-[17px]'>
                        <p className='text-[32px] text-dark font-semibold leading-[42px]'>Lead happiness for customers</p>
                        <p className='mt-[24px] text-[#7E8492] font-medium'>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                    </div>
                </div>
                <div className='flex mt-[56px]'>
                    <img className='mr-[60px] duration-200 hover:scale-[1.05]' src={adv2} alt="adv2" />
                    <div className='max-w-[268px] pt-[17px]'>
                        <p className='text-[32px] text-dark font-semibold leading-[42px]'>Mutually support each other</p>
                        <p className='mt-[24px] text-[#7E8492] font-medium'>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <img className='mr-[60px] duration-200 hover:scale-[1.05]' src={adv3} alt="adv3" />
                    <div className='max-w-[268px] pt-[17px]'>
                        <p className='text-[32px] text-dark font-semibold leading-[42px]'>Have fun growing together</p>
                        <p className='mt-[24px] text-[#7E8492] font-medium'>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                    </div>
                </div>
                <div className='flex mt-[56px]'>
                    <img className='mr-[60px] duration-200 hover:scale-[1.05]' src={adv4} alt="adv4" />
                    <div className='max-w-[268px] pt-[17px]'>
                        <p className='text-[32px] text-dark font-semibold leading-[42px]'>Make Your Business Grow</p>
                        <p className='mt-[24px] text-[#7E8492] font-medium'>Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}