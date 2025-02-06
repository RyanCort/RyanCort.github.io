// App.tsx
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className='max-w-6xl min-h-screen bg-white mx-auto'>
      <Nav />
      <main className='max-w-6xl flex flex-col gap-4 mx-auto px-4 py-24'>
        <h1 className='text-md font-bold text-blue uppercase'>
          Designer & Developer
        </h1>
        <h1 className='text-8xl font-[495] tracking-[-.036em] font-regular font-serif text-primary'>
          Pixels with purpose.
        </h1>
      </main>
    </div>
  );
}

export default App;
