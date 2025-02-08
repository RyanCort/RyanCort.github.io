import Nav from '../Nav/Nav';
import driverExchangeImg from '../../assets/driver-exchange.svg';

const DriverExchangeStudy = () => {
  return (
    <div className='max-w-4xl min-h-screen bg-white mx-auto'>
      <Nav />
      <img
        src={driverExchangeImg}
        alt='Driver Exchange Application Interface'
        className='w-full mb-8 mt-8'
      />

      <div className='max-w-4xl mx-auto p-8'>
        <header className='mb-8'>
          <p className='text-md font-semibold text-blue uppercase'>
            Driver Exchange
          </p>
          <h1 className='text-3xl font-[495] tracking-[-.036em] font-regular font-serif text-primary'>
            Streamlining Minor Accident Reporting
          </h1>
        </header>

        <section className='mb-8'>
          <p className='mb-4'>
            In 2020, I partnered with the Carfax for Police product team as
            design lead on MyCrash's initial rollout. Through user research and
            stakeholder workshops with police departments, we shaped the core
            user flows for emergency scene reporting. Early testing revealed
            critical trust barriers that influenced our security-first design
            approach.
          </p>
        </section>

        <section className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>Stakeholders</h3>
          <div className='pl-4'>
            <p className='mb-2'>
              <strong>Officers:</strong> Overwhelmed by paperwork, prefer active
              patrol
            </p>
            <p className='mb-2'>
              <strong>Drivers:</strong> Stressed, need clear guidance
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>The Challenge</h3>
          <p className='mb-4'>
            Police departments waste countless hours responding to minor
            accidents. At Seattle PD alone, officers spent 73 minutes average
            per fender-bender - time better spent on critical emergencies. Both
            departments and officers were desperate for a solution that would
            let citizens self-report these incidents.
          </p>
        </section>

        <section className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>
            What we Learned in User Testing
          </h3>
          <p className='mb-4'>
            Early testing revealed two critical barriers: trust and form
            fatigue.
          </p>
          <p className='mb-4'>
            Users immediately questioned app legitimacy. "How do I know this is
            real?" came up in a number of sessions. The Carfax branding alone
            wasn't enough - users needed explicit security messaging. This
            shaped our initial screen design - clear police endorsement and
            security messaging all visible from the start.
          </p>
        </section>

        <section className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>
            Minimizing Post-Accident Stress
          </h3>
          <p className='mb-4'>
            Research shows users abandon lengthy forms due to cognitive load and
            fatigue. While accident reporting carries inherent motivation due to
            its official nature (high task criticality), the emotional stress of
            a crash makes complex forms especially draining. We hacked this
            psychological barrier by starting progress at 30% - making the task
            feel partially complete before it really begins.
          </p>
        </section>

        <section className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>QR's Pandemic Revival</h3>
          <p className='mb-4'>
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
