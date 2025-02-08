import Nav from '../Nav/Nav';
import driverExchangeImg from '../../assets/driver-exchange.svg';

const bodyClass = 'font-normal text-copy mb-4';
const headingClass =
  'text-2xl font-[495] tracking-[-.036em] font-regular font-serif text-primary';

const DriverExchangeStudy = () => {
  return (
    <div className='max-w-4xl min-h-screen bg-white mx-auto'>
      <Nav />
      <img
        src={driverExchangeImg}
        alt='Driver Exchange Application Interface'
        className='w-full mb-8 mt-8 md:px-4'
      />

      <header className='max-w-4xl mx-auto p-8'>
        <p className='text-md font-semibold text-blue uppercase'>
          Driver Exchange
        </p>
        <h1 className='text-3xl font-[495] tracking-[-.036em] font-regular font-serif text-primary'>
          Streamlining Minor Accident Reporting
        </h1>
      </header>

      <section className='max-w-4xl mx-auto px-8'>
        <p className={bodyClass}>
          In 2020, I partnered with the Carfax for Police product team as design
          lead on MyCrash's initial rollout. Through user research and
          stakeholder workshops with police departments, we shaped the core user
          flows for emergency scene reporting. Early testing revealed critical
          trust barriers that influenced our security-first design approach.
        </p>
      </section>

      <div className='max-w-4xl mx-auto p-8 flex flex-col gap-12'>
        <section>
          <h3 className={headingClass}>Stakeholders</h3>
          <div className='pl-4'>
            <p className={bodyClass}>
              <strong>Officers:</strong> Overwhelmed by paperwork, prefer active
              patrol
            </p>
            <p className={bodyClass}>
              <strong>Drivers:</strong> Stressed, need clear guidance
            </p>
          </div>
        </section>

        <section>
          <h3 className={headingClass}>The Challenge</h3>
          <p className={bodyClass}>
            Police departments waste countless hours responding to minor
            accidents. At Seattle PD alone, officers spent 73 minutes average
            per fender-bender - time better spent on critical emergencies. Both
            departments and officers were desperate for a solution that would
            let citizens self-report these incidents.
          </p>
        </section>

        <section>
          <h3 className={headingClass}>What we Learned in User Testing</h3>
          <p className={bodyClass}>
            Early testing revealed two critical barriers: trust and form
            fatigue.
          </p>
          <p className={bodyClass}>
            Users immediately questioned app legitimacy. "How do I know this is
            real?" came up in a number of sessions. The Carfax branding alone
            wasn't enough - users needed explicit security messaging. This
            shaped our initial screen design - clear police endorsement and
            security messaging all visible from the start.
          </p>
        </section>

        <section>
          <h3 className={headingClass}>Minimizing Post-Accident Stress</h3>
          <p className={bodyClass}>
            Research shows users abandon lengthy forms due to cognitive load and
            fatigue. While accident reporting carries inherent motivation due to
            its official nature (high task criticality), the emotional stress of
            a crash makes complex forms especially draining. We hacked this
            psychological barrier by starting progress at 30% - making the task
            feel partially complete before it really begins.
          </p>
        </section>

        <section>
          <h3 className={headingClass}>QR's Pandemic Revival</h3>
          <p className={bodyClass}>
            Early designs avoided QR codes, assuming they'd overwhelm stressed
            users. COVID flipped this assumption - suddenly everyone was using
            QR codes daily for menus and check-ins. QR adoption was undergoing a
            surge during the design process. We leaned into this cultural shift,
            making QR-based sharing central to our design.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DriverExchangeStudy;
