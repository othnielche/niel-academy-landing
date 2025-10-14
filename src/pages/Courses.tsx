import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

export function Courses() {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      level: "Beginner",
      price: "$299",
      description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js",
      image: "🌐"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Dr. Michael Chen",
      duration: "16 weeks",
      level: "Intermediate",
      price: "$399",
      description: "Learn data analysis, visualization, and machine learning algorithms",
      image: "📊"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      duration: "10 weeks",
      level: "Beginner",
      price: "$249",
      description: "Create beautiful and user-friendly interfaces with modern design principles",
      image: "🎨"
    },
    {
      id: 4,
      title: "Python for Data Analysis",
      instructor: "Alex Thompson",
      duration: "8 weeks",
      level: "Beginner",
      price: "$199",
      description: "Learn Python programming for data analysis and visualization",
      image: "🐍"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "David Kim",
      duration: "14 weeks",
      level: "Intermediate",
      price: "$349",
      description: "Build iOS and Android apps with React Native and Flutter",
      image: "📱"
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      instructor: "Lisa Wang",
      duration: "12 weeks",
      level: "Beginner",
      price: "$279",
      description: "Learn essential cybersecurity concepts and best practices",
      image: "🔒"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-success text-white';
      case 'Intermediate':
        return 'bg-warning text-white';
      case 'Advanced':
        return 'bg-error text-white';
      default:
        return 'bg-neutral-500 text-white';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-brand-primary text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          Discover our comprehensive range of courses designed to advance your skills and career
        </p>
      </div>

      {/* Filter Section */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-brand-primary hover:opacity-90">
              All Courses
            </Button>
            <Button variant="outline">
              Beginner
            </Button>
            <Button variant="outline">
              Intermediate
            </Button>
            <Button variant="outline">
              Advanced
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4 text-center">{course.image}</div>
              <CardTitle className="text-neutral-800">{course.title}</CardTitle>
              <CardDescription>by {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <Badge className={getLevelColor(course.level)}>
                  {course.level}
                </Badge>
                <span className="text-neutral-500 text-sm">{course.duration}</span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-brand-primary">{course.price}</span>
                <Button className="bg-brand-primary hover:opacity-90">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-6 opacity-90">
          Join thousands of students who are already advancing their careers with Niel Academy
        </p>
        <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Browse All Courses
        </button>
      </div>
    </div>
  );
}
