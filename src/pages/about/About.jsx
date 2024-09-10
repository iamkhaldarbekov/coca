import about from '../../assets/img/about.png';
import about1 from '../../assets/img/about1.png';
import member1 from '../../assets/img/member1.png';
import member2 from '../../assets/img/member2.png';
import member3 from '../../assets/img/member3.png';

export default function About() {
  return (
    <div className="wrapper">
      <div className="pt-[105px] pb-[160px]">
        <div>
          <h3 className="title1">Everything you need to get<br />the attention of your<br />audience</h3>
          <p className="subtitle mt-[118px]">Our digital agency helps clients develop,<br />implement and maintain successful digital<br />marketing strategies across all channels. Also<br />work with you to build your website and create<br />online businesses that grow.</p>
        </div>
        <section className='mt-[135px] flex'>
          <div className='mr-[32px]'>
            <img className='duration-200 hover:scale-[1.05]' src={about} alt="about" />
          </div>
          <div>
            <img className='duration-200 hover:scale-[1.05]' src={about1} alt="about1" />
            <div className='max-w-[502px]'>
              <p className='subtitle mt-[24px]'>What we believe in</p>
              <p className='mt-[8px] comment'>Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...</p>
              <button className="btn mt-[32px]">See Details</button>
            </div>
          </div>
        </section>
      </div>
      <section className='flex justify-between items-center py-[80px]'>
        <p className='title'>Powerful ideas &<br />sales acceleration</p>
        <p className='font-semibold text-dark text-[24px]'>We are a software development firm<br />specializing in digital products. We build<br />beautiful, functional and cross-platform<br />solutions that are accessible to all.</p>
      </section>
      <div className='py-[160px]'>
        <div>
          <h3 className="title">Meet our team of creators,<br />designers, and world-class<br />problem solvers</h3>
          <p className='comment mt-[24px]'>To become the company that customers want, it takes a<br />group of passionate people. Get to know the people who lead</p>
        </div>
        <div className='mt-[80px] flex justify-between'>
          <div>
            <img className='duration-200 hover:scale-[1.05]' src={member1} alt="member1" />
            <div className='mt-[16px]'>
              <p className='text-[24px] text-dark font-semibold'>Arlyne Stefano</p>
              <p className='comment'>Founder & CEO</p>
            </div>
          </div>
          <div>
            <img className='duration-200 hover:scale-[1.05]' src={member2} alt="member2" />
            <div className='mt-[16px]'>
              <p className='text-[24px] text-dark font-semibold'>Katy Cristy</p>
              <p className='comment'>Chief Technology Officer</p>
            </div>
          </div>
          <div>
            <img className='duration-200 hover:scale-[1.05]' src={member3} alt="member3" />
            <div className='mt-[16px]'>
              <p className='text-[24px] text-dark font-semibold'>Roger Dzawin</p>
              <p className='comment'>Chief Technology Officer</p>
            </div>
          </div>
        </div>
        <section className='mt-[100px] flex justify-between'>
          <h3 className="title">Join our team, The one<br />with the master touch</h3>
          <div>
            <p className="comment">We believe it takes great people to make a great product.<br />That’s why we hire not only the perfect professional fits,<br />but people who embody our company values.</p>
            <p className='mt-[24px] text-dark font-semibold'>See Open Position</p>
          </div>
        </section>
      </div>
    </div>
  )
}