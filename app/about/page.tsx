import { Metadata } from 'next';
import { Target, Users, Rocket, Heart, Github, Linkedin, Mail, Globe } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - DevBlog',
  description: 'Learn more about Abhi Sharma and the mission behind DevBlog.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Computer Science Student • Web Developer • Problem Solver
          </p>
        </div>

        {/* Personal Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 p-8 rounded-xl border bg-card">
          
          {/* Profile Image (optional) */}
          <div className="w-100 h-100 rounded-full overflow-hidden border shadow">
            <Image
              src="/images/profile.jpg" // <-- Add your image (profile.jpg) in public/images/
              alt="Abhi Sharma"
              width={500}
              height={500}
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-3">Abhi Sharma</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a passionate and driven Computer Science Student at M.S. Ramaiah Institute of Technology
              with a strong foundation in programming, web development, and problem-solving.  
              I love building impactful projects and continuously improving my technical expertise.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="mailto:abhisharma.rediffmail@gmail.com" className="flex items-center gap-2 hover:underline">
                <Mail className="h-5 w-5" /> Email
              </a>
              <a href="https://www.linkedin.com/in/abhisharma290/" target="_blank" className="flex items-center gap-2 hover:underline">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="https://github.com/Abhi-Sharma" target="_blank" className="flex items-center gap-2 hover:underline">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://portfolio-abhi-sharma.vercel.app/" target="_blank" className="flex items-center gap-2 hover:underline">
                <Globe className="h-5 w-5" /> Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold">M.S. Ramaiah Institute of Technology, Bangalore</h3>
              <p className="text-muted-foreground">B.E in Computer Science • CGPA: 9.22</p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold">Shiksha Niketan Sr. Sec. School, Jammu</h3>
              <p className="text-muted-foreground">Senior Secondary • 96.4%</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold">Web Developer Intern — Unified Mentor Ltd.</h3>
            <p className="text-muted-foreground mt-2">
              • Built frontend projects including Calculator, Tic Tac Toe, Currency Converter, and Gym Management System. <br />
              • Improved UI/UX skills, code structuring, and collaborative development using GitHub.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "C++", "C", "Python (Basics)", "HTML", "CSS",
              "SQL", "MySQL", "MongoDB", "GitHub", "VS Code",
              "Data Structures", "Algorithms"
            ].map((skill) => (
              <div key={skill} className="p-4 bg-background rounded-lg border text-center font-semibold">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>INSPIRE Scholarship Merit Holder</li>
            <li>Institution Rank 200 on GeeksForGeeks</li>
            <li>450+ DSA Problems Solved (300+ LeetCode)</li>
            <li>5★ Problem Solver at HackerRank</li>
            <li>20th rank in “22 Yards of Code” coding competition</li>
            <li>Led Adobe Hackathon 2025 at college</li>
          </ul>
        </div>

        {/* Existing DevBlog Sections */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DevBlog</h1>
          <p className="text-xl text-muted-foreground">
            Empowering developers with knowledge and insights
          </p>
        </div>

        {/* Mission cards (kept same) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide accessible, high-quality educational content for developers worldwide.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Community</h3>
            <p className="text-muted-foreground">
              A vibrant network of learners and developers growing together.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              Covering the latest technologies, frameworks, and developer tools.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Passion</h3>
            <p className="text-muted-foreground">
              Dedicated to delivering impactful and helpful content for developers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
