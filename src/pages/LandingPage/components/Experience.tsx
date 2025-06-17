import { useState } from "react";
import {
  MapPin,
  Calendar,
  Code,
  Target,
  Award,
  ChevronDown,
  Building,
  // Clock,
} from "lucide-react";

export default function Experience() {
  const [expandedRole, setExpandedRole] = useState<string | null>(
    "reactjs-dev"
  );

  const toggleRole = (roleKey: string | null) => {
    setExpandedRole(expandedRole === roleKey ? null : roleKey);
  };

  const experiences = [
    {
      key: "reactjs-dev",
      title: "ReactJS Developer",
      company: "SoftwareSeni Indonesia",
      type: "Full-time",
      location: "Yogyakarta, Indonesia · Remote",
      period: "Feb 2022 - Present",
      duration: "3 yrs 5 mos",
      current: true,
      description:
        "I embarked on my career as a full-time ReactJS Developer, a role that involved building applications from scratch and scaling them up to production level. My work revolves around the latest technologies from ReactJS, fostering a cutting-edge digital environment.",
      achievements: [
        "Constructed interactive applications using Konva.js to create comprehensive user journey maps. This innovative approach helped in enhancing user experience and engagement.",
        "Assumed the role of a team lead for front-end developers, working collaboratively with a team based in Australia. I have been practicing agile methodologies to ensure smooth and efficient project progression.",
        "Conducted daily stand-up meetings, sprint planning, reporting, and sprint retrospectives with the team. These activities have been instrumental in aligning the team's efforts, setting clear expectations, and reflecting on our performance for continuous improvement.",
        "Undertook PR reviews of my colleagues' frontend code, ensuring maintenance of high code quality. This critical task reinforced our commitment to best coding practices and the delivery of robust applications.",
        "Implemented unit testing using Jest and react-testing-library, in addition to end-to-end (e2e) testing with Cypress and Playwright. These testing procedures have been vital in maintaining the reliability and efficiency of our applications.",
      ],
      summary:
        "In essence, my current role has allowed me to hone my technical skills in ReactJS and other advanced technologies, while also fostering leadership capabilities through active collaboration and team management.",
      skills: ["ReactJS", "JavaScript", "+8 skills"],
    },
    {
      key: "frontend-lead",
      title: "Front-End Developer Lead",
      company: "CV. NineOD",
      type: "Full-time",
      location: "Kota Cimahi, West Java, Indonesia",
      period: "Feb 2019 - Feb 2022",
      duration: "3 yrs 1 mo",
      current: false,
      description:
        "A year of starting my journey as a front-end developer, I was given the responsibility of leading the front-end team. This role allowed me to not only expand my technical skills but also to grow as a leader and mentor.",
      achievements: [
        "Led a team of front-end developers, managing team dynamics and ensuring the successful completion of projects.",
        "Mentored newcomers to the field, guiding them from beginner to intermediate skill levels in front-end development.",
        "Actively helped team members troubleshoot and resolve issues, fostering a collaborative problem-solving environment.",
      ],
      summary:
        "Through this role, I have had the chance to experience the rewarding process of team management and mentorship, alongside enhancing my technical capabilities. I have especially enjoyed helping my teammates overcome challenges and improve their own skills.",
      skills: ["Team Leadership", "Mentoring", "Front-end Development"],
    },
    {
      key: "frontend-dev",
      title: "Front-End Developer",
      company: "CV. NineOD",
      type: "Full-time",
      location: "Kota Cimahi, West Java, Indonesia",
      period: "Feb 2018 - Feb 2022",
      duration: "4 yrs 1 mo",
      current: false,
      description:
        "In this role, I was fortunate to learn a vast array of skills, from building web apps to managing teams and projects. I had the pleasure of working with a great team, and together, we successfully completed various projects for international clients from countries such as Thailand, Switzerland, New Zealand, the United States, and Malaysia.",
      achievements: [
        "Developed numerous web applications using modern JavaScript technologies, including ReactJS, TypeScript, VueJS, and incorporating unit testing with Jest and Testing Library.",
        "Created attractive and user-friendly web interfaces using HTML5, CSS3, Bootstrap, and jQuery, focusing on enhancing the overall user experience.",
        "Gained experience with the view component of Django Python and Ruby on Rails, understanding the interplay between front-end and back-end systems.",
        "Handled multiple international-scale projects simultaneously, fostering efficient communication and cultural understanding.",
      ],
      summary:
        "Overall, this experience has been a critical part of my professional journey as a front-end developer, teaching me valuable technical skills and the importance of collaboration and effective communication.",
      skills: [
        "ReactJS",
        "TypeScript",
        "VueJS",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "jQuery",
        "Jest",
        "Django",
        "Ruby on Rails",
      ],
    },
  ];

  return (
    <div className="bg-gray-950 px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <span className="text-sm text-blue-500 tracking-[0.3em] mr-4">
            03
          </span>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
            Professional Experience
          </h2>
          <div className="flex-grow h-px ml-4 bg-gray-800"></div>
        </div>

        {/* Summary Stats */}
        <div className="mb-16 grid md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/20 transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300 mb-2">
                7+
              </div>
              <p className="text-gray-300 font-medium">Years Experience</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-300 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-emerald-500/20 transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-300 mb-2">
                50+
              </div>
              <p className="text-gray-300 font-medium">Projects Completed</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/20 transition-all duration-300 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300 mb-2">
                5+
              </div>
              <p className="text-gray-300 font-medium">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Background Accent */}
          <div className="absolute font-bold -right-12 -top-12 text-9xl text-blue-500/5 pointer-events-none">
            WORK
          </div>

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-300 hidden md:block"></div>

          {experiences.map((exp) => (
            <div key={exp.key} className="relative mb-8 md:ml-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[4.25rem] top-8 w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-full hidden md:block shadow-lg shadow-blue-500/50"></div>

              {/* Experience Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-blue-500/20 transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleRole(exp.key)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-gray-300 mb-2">
                          <Building size={16} className="mr-2 text-blue-400" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="mx-2 text-gray-600">·</span>
                          <span className="text-sm text-gray-400">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          {/* <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{exp.duration}</span>
                          </div> */}
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <button className="ml-4 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
                        <ChevronDown
                          size={20}
                          className={`transition duration-200 ${
                            expandedRole === exp.key
                              ? "text-blue-400 rotate-180"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedRole === exp.key && (
                    <div className="px-6 pb-6 border-t border-gray-800/50">
                      <div className="pt-6">
                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Target
                              size={18}
                              className="mr-2 text-emerald-400"
                            />
                            Key Achievements
                          </h4>
                          <div className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Code size={18} className="mr-2 text-blue-400" />
                            Skills & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full hover:border-blue-500/30 transition-colors duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Summary */}
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-emerald-300/20 rounded-xl blur opacity-50"></div>
                          <div className="relative p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                            <div className="flex items-start">
                              <Award
                                size={16}
                                className="text-emerald-400 mr-2 mt-0.5 flex-shrink-0"
                              />
                              <p className="text-gray-300 text-sm leading-relaxed italic">
                                {exp.summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
