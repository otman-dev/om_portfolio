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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section} className="group relative flex items-center">
            <button
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                activeSection === section
                  ? 'bg-blue-600 scale-125 ring-2 ring-blue-300 dark:ring-blue-500'
                  : 'bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400'
              }`}
              aria-label={`Navigate to ${sectionNames[section]}`}
              aria-current={activeSection === section ? 'true' : 'false'}
            />
            <span 
              className={`absolute right-full mr-4 py-1 px-2 text-sm rounded-md transition-all duration-200 whitespace-nowrap shadow-lg
                bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-100
                ${activeSection === section 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              {sectionNames[section]}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}
