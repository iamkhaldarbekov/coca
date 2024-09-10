import calendar from '../../assets/icons/calendar.svg';
import tasks from '../../assets/icons/tasks.svg';
import done from '../../assets/icons/done.svg';
import privacy from '../../assets/icons/privacy.svg';

export default function Benefits() {
  return (
    <div className="bg-dark wrapper py-[100px]">
        <div className="mb-[80px]">
            <h3 className="title text-white">Coca help our client solve<br />complex customer problems<br />with date that does more.</h3>
            <p className="comment mt-[24px]">Our platform offers the modern enterprise full control of how date can be<br />access and used with industry leading software solutions for identity,<br />activation, and date collaboration</p>
        </div>
        <div className='flex justify-between'>
            <div>
                <div>
                    <img className='mb-[24px]' src={calendar} alt="calendar" />
                    <p className='text-white font-semibold text-[32px] leading-[42px] mb-[24px]'>Build your date<br />fundamental</p>
                    <p className='text-[#7E8492]'>Build access to date, develop valuable business insights<br />and drive revenue while maintaining full control over<br />access and use of date at all times.</p>
                </div>
                <div className='mt-[56px]'>
                    <img className='mb-[24px]' src={tasks} alt="tasks" />
                    <p className='text-white font-semibold text-[32px] leading-[42px] mb-[24px]'>Activate your<br />date</p>
                    <p className='text-[#7E8492]'>Accurately address your specific audiences at scale across<br />any channel, platform, publisher or network and safely<br />translate date between identity space to improve results.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='mb-[24px]' src={done} alt="done" />
                    <p className='text-white font-semibold text-[32px] leading-[42px] mb-[24px]'>Measure more<br />effective</p>
                    <p className='text-[#7E8492]'>Effectively measure people-based campaigns with<br />the freedom to choose from best-of breed partners<br />to optimize and drive media innovation.</p>
                </div>
                <div className='mt-[56px]'>
                    <img className='mb-[24px]' src={privacy} alt="privacy" />
                    <p className='text-white font-semibold text-[32px] leading-[42px] mb-[24px]'>Strengthen<br />consumer privacy</p>
                    <p className='text-[#7E8492]'>Protect your customer date with leading privacy-preserving<br />technologies and advanced techniques to minimize date<br />movement while still enabling insight generation.</p>
                </div>
            </div>
        </div>
    </div>
  )
}