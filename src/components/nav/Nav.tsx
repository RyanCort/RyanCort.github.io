// Nav.tsx
import logo from '../../assets/logo.svg';

const Nav = () => {
  return (
    <nav className='w-full bg-white/80 backdrop-blur-sm border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 py-8 flex justify-between items-center'>
        {/* Logo section */}
        <div>
          <img src={logo} alt='Logo' />
        </div>
        {/* Nav items */}
        <a
          href='https://cal.com/ryan-cort/30min'
          target='_blank'
          className='px-4 py-2 bg-primary text-white rounded-full hover:bg-gray-800 flex items-center gap-2'
        >
          Let's Talk
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
