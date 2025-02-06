// CaseStudyPage.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Stakeholder {
  role: string;
  need: string;
}

interface Stat {
  value: string;
  unit: string;
  description: string;
}

interface Section {
  type: 'intro' | 'stakeholders' | 'challenge' | 'research' | 'image';
  title?: string;
  content?: string;
  items?: Stakeholder[];
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  coverImage: string;
  sections: Section[];
}

function CaseStudyPage() {
  const { id } = useParams();
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudy = async () => {
      try {
        const data = await import(`../../data/case-studies/${id}.json`);
        setStudy(data);
      } catch (err) {
        console.error('Failed to load case study:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStudy();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!study) return <div>Case study not found</div>;

  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'intro':
        return (
          <section key={index} className='mb-16'>
            <p className='text-xl leading-relaxed text-gray-700'>
              {section.content}
            </p>
          </section>
        );

      case 'stakeholders':
        return (
          <section key={index} className='mb-16'>
            <h2 className='text-3xl font-semibold mb-8'>{section.title}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {section.items?.map((item, i) => (
                <div key={i} className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-xl font-medium mb-2'>{item.role}</h3>
                  <p className='text-gray-600'>{item.need}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'challenge':
        return (
          <section key={index} className='mb-16'>
            <h2 className='text-3xl font-semibold mb-8'>{section.title}</h2>
            <p className='text-xl leading-relaxed text-gray-700 mb-8'>
              {section.content}
            </p>
            {section.stats && (
              <div className='bg-gray-50 p-8 rounded-lg'>
                {section.stats.map((stat, i) => (
                  <div key={i} className='text-center'>
                    <div className='text-4xl font-bold mb-2'>
                      {stat.value} {stat.unit}
                    </div>
                    <p className='text-gray-600'>{stat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        );

      case 'image':
        return (
          <section key={index} className='mb-16'>
            {section.title && (
              <h2 className='text-3xl font-semibold mb-8'>{section.title}</h2>
            )}
            <img
              src={section.imageSrc}
              alt={section.imageAlt}
              className='w-full rounded-lg shadow-lg'
            />
          </section>
        );

      default:
        return (
          <section key={index} className='mb-16'>
            {section.title && (
              <h2 className='text-3xl font-semibold mb-8'>{section.title}</h2>
            )}
            <p className='text-xl leading-relaxed text-gray-700'>
              {section.content}
            </p>
          </section>
        );
    }
  };

  return (
    <article className='max-w-4xl mx-auto px-4 py-24'>
      {/* Hero */}
      <div className='h-[70vh] relative mb-16'>
        <img
          src={study.coverImage}
          alt={study.title}
          className='w-full h-full object-cover rounded-lg'
        />
      </div>

      {/* Header */}
      <header className='mb-16'>
        <div className='mb-6'>
          <span className='text-gray-600'>{study.year}</span>
          <span className='mx-3'>•</span>
          <span className='text-gray-600'>{study.role}</span>
        </div>
        <h1 className='text-5xl font-bold mb-4'>{study.title}</h1>
        <p className='text-2xl text-gray-600'>{study.subtitle}</p>
      </header>

      {/* Content Sections */}
      <div className='prose prose-lg max-w-none'>
        {study.sections.map((section, index) => renderSection(section, index))}
      </div>
    </article>
  );
}

export default CaseStudyPage;
