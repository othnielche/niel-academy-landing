import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';


export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-brand-primary text-4xl font-bold mb-4">About Niel Academy</h1>
        <p className="text-neutral-600 text-lg">
          Empowering learners with comprehensive courses and expert instruction
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Our Mission</h2>
          <p className="text-neutral-600 mb-6">
            At Niel Academy, we believe that education should be accessible, engaging, and transformative. 
            Our mission is to provide high-quality learning experiences that empower individuals to achieve 
            their personal and professional goals.
          </p>
          <p className="text-neutral-600">
            We combine cutting-edge technology with proven teaching methodologies to create an environment 
            where every learner can thrive and succeed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Our Vision</h2>
          <p className="text-neutral-600 mb-6">
            We envision a world where quality education is available to everyone, regardless of their 
            background or circumstances. Through innovative learning platforms and expert instruction, 
            we're building a community of lifelong learners.
          </p>
          <p className="text-neutral-600">
            Our goal is to be the leading platform for online education, known for excellence, 
            accessibility, and student success.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Why Choose Niel Academy?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Expert Instructors</h3>
              <p className="text-neutral-600">
                Learn from industry professionals with years of real-world experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Modern Curriculum</h3>
              <p className="text-neutral-600">
                Stay current with the latest technologies and industry best practices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Community Support</h3>
              <p className="text-neutral-600">
                Join a vibrant community of learners and professionals
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-center">Our Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">10,000+</div>
              <div className="text-neutral-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
              <div className="text-neutral-600">Courses Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">95%</div>
              <div className="text-neutral-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
              <div className="text-neutral-600">Expert Instructors</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
