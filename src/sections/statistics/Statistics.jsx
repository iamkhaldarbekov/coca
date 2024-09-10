import statistics from '../../assets/img/statistic.png';
import checked from '../../assets/icons/checked.svg';

export default function Statistics() {
  return (
    <div className="wrapper py-[160px]">
        <div className="flex justify-between">
            <img src={statistics} alt="statistics" />
            <div>
                <h3 className="title mb-[24px]">Passion to increase<br />company revenue up<br />to 85%</h3>
                <p className='comment'>Automate your sales, marketing and<br />service in one platform. Avoid date leaks<br />and enable consistent messaging</p>
                <div className='mt-[40px]'>
                    <div className='flex mb-[32px]'>
                        <img className='mr-[23px]' src={checked} alt="checked" />
                        <p className='leading-[32px] text-[18px] font-medium text-dark'>Close more deals with single - page<br />contact managment</p>
                    </div>
                    <div className='flex mb-[32px]'>
                        <img className='mr-[23px]' src={checked} alt="checked" />
                        <p className='leading-[32px] text-[18px] font-medium text-dark'>Enjoy one-click calling, call scripts and<br />voicemail automation</p>
                    </div>
                    <div className='flex'>
                        <img className='mr-[23px]' src={checked} alt="checked" />
                        <p className='text-[18px] leading-[32px] font-medium text-dark'>Take stages and milestones of your<br />deals to keep the sales process an track</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}