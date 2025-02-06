// Nav.tsx
import logo from '../../assets/logo.svg';

const Nav = () => {
  return (
    <nav className='sticky top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo section */}
        <div>
          <img src={logo} alt='Logo' />
        </div>
        {/* Nav items */}
        <a
          href='https://cal.com/ryan-cort'
          target='_blank'
          className='px-4 py-2 bg-primary text-white rounded-full hover:bg-gray-800'
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Nav;
