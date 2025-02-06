// App.tsx
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className='max-w-6xl min-h-screen bg-white mx-auto'>
      <Nav />
      <main className='max-w-6xl flex flex-col gap-4 mx-auto px-4 py-12'>
        <h1 className='text-lg font-bold text-blue uppercase'>
          Designer & Developer
        </h1>
        <h1 className='text-6xl font-[495] tracking-[-.03em] font-regular font-serif text-primary'>
          Pixels with Purpose
        </h1>
      </main>
    </div>
  );
}

export default App;
