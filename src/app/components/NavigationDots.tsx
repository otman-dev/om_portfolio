interface NavigationDotsProps {
  sections: string[];
  activeSection: string;
}

export default function NavigationDots({ sections, activeSection }: NavigationDotsProps) {
  const sectionNames: { [key: string]: string } = {
    header: 'Home',
    summary: 'Summary',
    build: 'What I Build',
    experience: 'Experience',
    competitions: 'Competitions',
    skills: 'Skills',
    certifications: 'Certifications',
    languages: 'Languages',
    philosophy: 'Philosophy',
    contact: 'Contact'
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section} className="group relative flex items-center">
            <button
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                activeSection === section
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400'
              }`}
              aria-label={`Navigate to ${sectionNames[section]}`}
            />
            <span className="absolute right-full mr-4 py-1 px-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              {sectionNames[section]}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
