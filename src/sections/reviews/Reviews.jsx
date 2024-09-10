import star from '../../assets/icons/star.svg';

export default function Reviews() {
  return (
    <div className="wrapper pt-[70px] pb-[160px]">
        <div className="flex justify-between items-center">
            <h3 className="title">What our customer<br />are saying</h3>
            <p className="comment">We are trusted numerous companies from<br />different business to meet their needs</p>
        </div>
        <div className="mt-[112px] w-[900px] mx-auto">
            <div className='flex'>
                <img className='mr-[8px] w-[20px]' src={star} alt="star" />
                <img className='mr-[8px] w-[20px]' src={star} alt="star" />
                <img className='mr-[8px] w-[20px]' src={star} alt="star" />
                <img className='mr-[8px] w-[20px]' src={star} alt="star" />
                <img className='mr-[8px] w-[20px]' src={star} alt="star" />
                <p>5.0</p>
            </div>
            <p className='font-medium text-[40px] text-dark leading-[52px] mt-[16px]'>“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”</p>
        </div>
    </div>
  )
}