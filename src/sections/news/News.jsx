import news1 from '../../assets/img/news1.png';
import news2 from '../../assets/img/news2.png';

export default function News() {
  return (
    <div className="wrapper pt-[60px] pb-[90px]">
        <div>
            <h3 className="title text-center">Trending news from Coca</h3>
            <p className="comment text-center mt-[24px]">we have some new Service to pamper you</p>
        </div>
        <div className="mt-[80px] flex justify-between">
            <div className='max-w-[582px]'>
                <img className='h-[332px] duration-200 hover:scale-[1.05]' src={news1} alt="news1" />
                <div className='flex justify-between mt-[16px]'>
                    <p className='inline-block text-[14px] text-[#7E8492]'>Published in Insight Jan 30, 2021</p>
                    <p className='inline-block text-[14px] text-[#7E8492]'>by : Albert Sans</p>
                </div>
                <p className='text-[32px] font-semibold text-dark mt-[16px]'>What makes an authentic employee profile, and why does it matter ?</p>
            </div>
            <div className='max-w-[582px]'>
                <img className='h-[332px] duration-200 hover:scale-[1.05]' src={news2} alt="news2" />
                <div className='flex justify-between mt-[16px]'>
                    <p className='inline-block text-[14px] text-[#7E8492]'>Published in Insight Jan 30, 2021</p>
                    <p className='inline-block text-[14px] text-[#7E8492]'>by : Albert Sans</p>
                </div>
                <p className='text-[32px] font-semibold text-dark mt-[16px]'>How to build a Kaylen relationship with a good company</p>
            </div>
        </div>
    </div>
  )
}