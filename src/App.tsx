// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import CaseStudyPage from './components/CaseStudyPage/CaseStudyPage';
import { Link } from 'react-router-dom';

function CaseStudy({
  id,
  title,
  description
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <Link to={`/case-study/${id}`} className='block'>
      <div className='bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <div className='max-w-6xl min-h-screen bg-white mx-auto'>
      <Nav />
      <main className='max-w-6xl flex flex-col gap-4 mx-auto px-4 py-24'>
        <h1 className='text-md font-semibold text-blue uppercase'>
          Designer & Developer
        </h1>
        <h1 className='text-5xl font-[495] tracking-[-.036em] font-regular font-serif text-primary'>
          Pixels with purpose.
        </h1>
        <p className='text-lg font-sans font-normal text-primary max-w-lg'>
          I like to build for impact and measurable success. <br></br> I will
          not rest until every pixel pulls its weight.
        </p>
        <div className='grid grid-cols-1 gap-6 mt-12'>
          <CaseStudy
            id='driver-exchange'
            title='Driver Exchange'
            description='Description of the first case study'
          />
          <div className='grid grid-cols-2 gap-6'>
            <CaseStudy
              id='2'
              title='Case Study 2'
              description='Description of the second case study'
            />
            <CaseStudy
              id='3'
              title='Case Study 3'
              description='Description of the third case study'
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/case-study/:id' element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
