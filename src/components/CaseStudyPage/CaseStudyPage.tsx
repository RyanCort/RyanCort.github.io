// src/components/CaseStudyPage.tsx
import { useParams } from 'react-router-dom';

function CaseStudyPage() {
  const { id } = useParams();

  return (
    <div className='max-w-6xl mx-auto px-4 py-24'>
      <h1 className='text-4xl font-semibold mb-6'>Case Study {id}</h1>
      {/* Add more content here */}
    </div>
  );
}

export default CaseStudyPage;
