  import { Star } from 'lucide-react';
import Image from 'next/image';
const testimonials = [
  {
    rating: 5,
    text: "Their software development team in the UAE delivered a seamless, customized solution for our business.",
    author: "Zain Hayat",
    role: "Dubai, United Arab Emirates",
    avatar: "/testimonial1.jpg"
  },
  {
    rating: 5,
    text: "The AI and ML solutions provided in Saudi Arabia transformed our data into actionable insights, boosting decision-making.",
    author: "Sara Al-Qahtani",
    role: "Riyadh",
    avatar: "/testimonial2.jpg"
  },
  {
    rating: 5,
    text: "Thanks to their cloud services, our business operations are now faster, secure, and scalable.",
    author: "Maja Sulek",
    role: "Poland",
    avatar: "/testimonial5.jpg"
  },
  {
    rating: 5,
    text: "Their UI/UX design team created an intuitive and visually stunning interface that enhanced our customer experience.",
    author: "Steven Kelly",
    role: "United Kingdom",
    avatar: "/testimonial3.jpg"
  },
  {
    rating: 5,
    text: "The IoT systems solutions exceeded our expectations, improving automation and efficiency in all our operations.",
    author: "Lachlan Smith",
    role: "Canberra, Australia",
    avatar: "/testimonial4.jpg"
  },
  {
    rating: 5,
    text: "Houston Systems IT makes me more productive and gets the job done in a fraction of the time. I'm glad I found Houston Systems IT.",
    author: "James Wilson",
    role: "United States",
    avatar: "/testimonial6.jpg"
  }
];

const Testimonials = () => {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                        See What Our Customers Are Saying
                    </h2>
                    <p className="text-gray-600">Real feedback from our satisfied clients</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between items-start">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                            <div className="flex items-center">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    height={50}
                                    width={50}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials