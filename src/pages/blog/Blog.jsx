import blog1 from '../../assets/img/blog1.png';
import blog2 from '../../assets/img/blog2.png';
import blog3 from '../../assets/img/blog3.png';
import blog4 from '../../assets/img/blog4.png';

export default function Blog() {
  return (
    <div>
      <div className="pt-[95px] pb-[120px] wrapper">
        <h3 className="title1">Activity & Updates</h3>
        <p className="subtitle mt-[53px]">Our biggest challenge is making sure we're<br />always designing and building products that<br />will help you run your business better.</p>
      </div>
      <div className="wrapper py-[120px] flex justify-between">
        <div>
          <div className="max-w-[584px]">
            <img className="hover:scale-[1.05] duration-200" src={blog1} />
            <div>
              <p className="text-dark font-semibold leading-[48px] mt-[24px] text-[40px]">How we perform long-running tasks using AWS services</p>
              <p className="comment mt-[24px]">Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
            </div>
          </div>
          <div className="max-w-[584px] mt-[160px]">
            <img className="hover:scale-[1.05] duration-200" src={blog2} />
            <div>
              <p className="text-dark font-semibold leading-[48px] mt-[24px] text-[40px]">Layout Exploration — Simple exercise but big effect</p>
              <p className="comment mt-[24px]">Make alternatives or other options for the design we are making. For example, we are creating a website design. Then there is the testimonial section.</p>
            </div>
          </div>
        </div>
        <div>
        <div className="max-w-[584px]">
            <img className="hover:scale-[1.05] duration-200" src={blog3} />
            <div>
              <p className="text-dark font-semibold leading-[48px] mt-[24px] text-[40px]">How to ask when doing User Research</p>
              <p className="comment mt-[24px]">Bro, the story is that you want to make an application for buying and selling goods on the market. During user research, what do you think you will ask people?</p>
            </div>
          </div>
          <div className="max-w-[584px] mt-[160px]">
            <img className="hover:scale-[1.05] duration-200" src={blog4} />
            <div>
              <p className="text-dark font-semibold leading-[48px] mt-[24px] text-[40px]">Webflow Break the Coding Barrier</p>
              <p className="comment mt-[24px]">Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}