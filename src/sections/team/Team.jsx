import team from '../../assets/img/team.png';

export default function Team() {
  return (
    <div className="wrapper pt-[65px] pb-[160px]">
        <section className='flex justify-between mb-[80px]'>
            <div>
                <p className='font-semibold text-[64px] text-dark'>17k</p>
                <p className='text-[#7E8492] font-medium text-[18px]'>Happy customers on<br />worldwide</p>
            </div>
            <hr />
            <div>
                <p className='font-semibold text-[64px] text-dark'>15+</p>
                <p className='text-[#7E8492] font-medium text-[18px]'>Hours of work<br />experience</p>
            </div>
            <hr />
            <div>
                <p className='font-semibold text-[64px] text-dark'>50+</p>
                <p className='text-[#7E8492] font-medium text-[18px]'>Creativity & passionate<br />members</p>
            </div>
            <hr />
            <div>
                <p className='font-semibold text-[64px] text-dark'>100+</p>
                <p className='text-[#7E8492] font-medium text-[18px]'>Intergrations lorem<br /> ipsum integrations</p>
            </div>
        </section>
        <div>
            <img className='mb-[80px]' src={team} alt="team" />
            <div className='flex justify-between'>
                <h3 className="title">Lift your business to new<br />heights with our digital<br />marketing services</h3>
                <p className="comment">To build software that gives customer facing<br />teams in small and medium-sized businesses<br />the ability to create rewarding and long-lasting<br />relationships with customers</p>
            </div>
        </div>
    </div>
  )
}