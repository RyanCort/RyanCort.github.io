// App.tsx
import Nav from './components/nav/Nav';

function CaseStudy({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className='max-w-4xl min-h-screen bg-white mx-auto'>
      <Nav />
      <main className='max-w-6xl flex flex-col gap-8 mx-auto px-4 py-24'>
        <h1 className='text-md font-semibold text-blue uppercase'>
          Designer & Developer
        </h1>
        <h1 className='text-6xl font-normal tracking-[-.036em] font-regular font-serif text-primary'>
          Pixels with purpose.
        </h1>
        <p className='text-lg font-sans font-normal text-primary max-w-lg'>
          I like to build for impact and measurable success. <br></br> I will
          not rest until every pixel pulls its weight.
        </p>
        <div className='grid grid-cols-1 gap-6 mt-12'>
          <CaseStudy
            title='Case Study 1'
            description='Description of the first case study'
          />
          <div className='grid grid-cols-2 gap-6'>
            <CaseStudy
              title='Case Study 2'
              description='Description of the second case study'
            />
            <CaseStudy
              title='Case Study 3'
              description='Description of the third case study'
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
