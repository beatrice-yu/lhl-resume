import './App.scss';
import Education from './components/Education';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

function App() {
  const skills = [
    'Responsive Web Design',
    'HTML5',
    'CSS3',
    'SCSS/SASS',
    'Bootstrap',
    'Foundation',
    'Javascript',
    'jQuery',
    'Liquid',
    'C#',
    'ASP.NET',
    'T-SQL',
    'Digital Marketing',
    'Salesforce Marketing Cloud',
    'Ampscript',
    'SOQL',
    'Graphic Design',
    'Adobe Photoshop',
    'Adobe Illustraor',
    'Wireframing',
    'Figma/Balsamiq',
    'Print Publishing',
    'Adobe InDesign'
  ];

  const education = [
    {
      'institution': 'De La Salle University',
      'credential': 'Post-Graduate Diploma',
      'study': 'Computer Science',
      'yearGraduated': '2013'
    },
    {
      'institution': 'Ateneo de Manila University',
      'credential': 'Bachelor of Fine Arts',
      'study': 'Major in Information Design',
      'yearGraduated': '2010'
    }
  ];

  const experience = [
    {
      'company': 'In Social Incorporated',
      'position': 'Web Developer',
      'startDate': 'September 2021',
      'endDate': '',
      'location': 'Ontario, Canada'
    },
    {
      'company': 'Resorts World Genting',
      'position': 'Assistant Manager - Product Marketing and Promotions (Salesforce Developer)',
      'startDate': 'July 2017',
      'endDate': 'July 2020',
      'location': 'Kuala Lumpur, Malaysia'
    },
    {
      'company': 'Mercola Consulting Services, LLC.',
      'position': 'Front-End Web Developer',
      'startDate': 'February 2017',
      'endDate': 'July 2017',
      'location': 'Manila, Philippines'
    },
    {
      'company': 'Mercola Consulting Services, LLC.',
      'position': 'C# Web Developer',
      'startDate': 'December 2014',
      'endDate': 'February 2017',
      'location': 'Manila, Philippines'
    }
    ,
    {
      'company': 'Mercola Consulting Services, LLC.',
      'position': 'Web Designer',
      'startDate': 'August 2011',
      'endDate': 'December 2014',
      'location': 'Manila, Philippines'
    }
    ,
    {
      'company': 'Mercola Consulting Services, LLC.',
      'position': 'Junior Web Designer',
      'startDate': 'August 2010',
      'endDate': 'August 2011',
      'location': 'Manila, Philippines'
    }
  ];

  return (
    <div className="App">
      <Sidebar name="Beatrice Yu" picture="https://via.placeholder.com/500x500?text=Profile+Picture+Placeholder" title="Multimedia Designer & Front-end Web Developer" description="Experienced holistic web designer and developer with relevant educational background and 10 years of professional experience in handling both front and back-end development. Proficient in leveraging technical, analytical, and problem-solving skills in designing, building, and maintaining web systems and a dedicated and committed fast-learner and hard-worker who adapts quickly to any environment and is a reliable team player." />
      <main>
        <Skills content={skills} />
        <Experience content={experience} />
        <Education content={education} />
      </main>
    </div>
  );
}

export default App;
