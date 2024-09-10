import sales from '../../assets/img/sales.png';
import salesreport from '../../assets/img/salesreport.png';
import cusgrowth from '../../assets/img/cusgrowth.png';

export default function Header() {
  return (
    <div className="wrapper pt-[105px] pb-[140px]">
      <div>
        <div className="mb-[70px] flex">
          <div>
            <h3 className="text-[72px] text-dark leading-[96px] font-bold max-w-[740px]">Digitally forward creative</h3>
            <p className="subtitle max-w-[514px] mt-[114px]">When it comes to interactive marketing, we've got you covered. Be where the world is going</p>
          </div>
          <div>
            <div>
              <img className='hidden' src={salesreport} alt="salesreport" />
              <img className='hidden' src={sales} alt="sales" />
            </div>
            <img className='hidden' src={cusgrowth} alt="cusgrowth" />
          </div>
        </div>
        <input className='outline-none pb-[23px] border-[#CED1D8] border-b-[1px] mr-[16px]' type="text" placeholder='Enter your email' />
        <button className="btn">Try for free</button>
      </div>
    </div>
  )
}