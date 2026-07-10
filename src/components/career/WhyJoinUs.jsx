const benefits = [
  {
    title: "Learning & Growth",
    description:
      "Work with experienced mentors and continuously improve your technical skills."
  },
  {
    title: "Latest Technologies",
    description:
      "Build projects using React, Next.js, AI, Cloud, and modern development tools."
  },
  {
    title: "Flexible Work Culture",
    description:
      "We believe in collaboration, flexibility, and maintaining a healthy work-life balance."
  },
  {
    title: "Career Development",
    description:
      "Grow through challenging projects, training programs, and leadership opportunities."
  }
];

export default function WhyJoinUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Join Houston Systems?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We build innovative digital solutions while creating an environment
            where every employee can learn, grow, and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}