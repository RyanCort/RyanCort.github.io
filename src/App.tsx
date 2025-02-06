// App.tsx
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Nav />
      <main className='max-w-7xl mx-auto px-4 py-12'>
        {/* Your main content here */}
        <h1 className='text-4xl font-bold'>Welcome</h1>
      </main>
    </div>
  );
}

export default App;
