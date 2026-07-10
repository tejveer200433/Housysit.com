'use client'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CARDS = [
    {
        id: 1,
        title: 'Enterprise Software & Custom Application Development',
        category: 'Digital Transformation',
        description:
            'Crafting scalable, cloud-native applications and robust backend architectures. From internal ERPs to consumer-facing platforms, we build software that drives business logic.',
        image: '/digital-transformation.png', // Suggestion: High-res dashboard/code visual
    },
    {
        id: 2,
        title: 'Smart City & Automated Parking Ecosystems',
        category: 'IoT & Automation',
        description:
            'The "Brain" behind the barrier. We develop full-stack ANPR and Parking Management Systems that unify hardware like boom barriers with real-time payment and analytics software.',
        image: '/iot.png', // Suggestion: App screen controlling a barrier
    },
    {
        id: 3,
        title: 'Intelligent Access & Visitor Identity Management',
        category: 'Security Software',
        description:
            'Moving beyond simple entry. We build sophisticated Visitor Management Systems (VMS) integrated with turnstiles and biometric hardware for ironclad perimeter control.',
        image: '/vms.png',
    },
    {
        id: 4,
        title: 'High-Throughput E-Ticketing & Event Tech',
        category: 'Platform Engineering',
        description:
            'Architecture capable of handling millions. Our Stadium E-Ticketing solutions bridge digital sales with physical gate synchronization for seamless crowd flow.',
        image: '/platform-engineering.png',
    },
    {
        id: 5,
        title: 'Industrial IoT: UVSS & AI Threat Detection',
        category: 'Computer Vision',
        description:
            'Leveraging AI and Computer Vision to transform hardware data. Our Under Vehicle Surveillance Systems (UVSS) use neural networks to identify threats automatically.',
        image: '/computer-vision.jpg',
    },
    {
        id: 6,
        title: 'Legacy System Modernization & Cloud Migration',
        category: 'IT Infrastructure',
        description:
            'We transition rigid legacy infrastructure into agile, cloud-ready environments, ensuring your software scales at the speed of your hardware growth.',
        image: '/cloud-services.jpg',
    },
    {
        id: 7,
        title: 'Automated Toll & Revenue Management',
        category: 'Tech + Hardware',
        description:
            'Precision software for highway automation. We integrate sensors and RFID tech with secure payment gateways to ensure zero-leakage financial tracking.',
        image: '/tech-and-hardware.png',
    }
]

const Carousel = () => {
    const containerRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    // Infinite auto-scroll effect
    useEffect(() => {
        const getScrollAmount = () => {
            if (window.innerWidth >= 1024) return 320 // lg: 3 cards
            if (window.innerWidth >= 768) return 312  // md: 2 cards
            return 288 // sm: 1 card
        }

        const scrollAmount = getScrollAmount()
        const interval = setInterval(() => {
            const container = containerRef.current
            if (!container || isHovered) return

            container.scrollBy({ left: scrollAmount, behavior: 'smooth' })

            // Reset if near the end
            if (
                container.scrollLeft + container.offsetWidth >= container.scrollWidth - scrollAmount
            ) {
                setTimeout(() => {
                    container.scrollTo({ left: 0, behavior: 'auto' })
                }, 600)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [isHovered])

    const getScrollAmount = () => {
        if (window.innerWidth >= 1024) return 320 // lg: 3 cards
        if (window.innerWidth >= 768) return 312  // md: 2 cards
        return 288 // sm: 1 card
    }

    const scrollLeft = () => {
        containerRef.current?.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' })
    }

    const scrollRight = () => {
        containerRef.current?.scrollBy({ left: getScrollAmount(), behavior: 'smooth' })
    }

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 text-black">
            <p className="text-sm font-semibold text-blue-500 mb-2">Problem–solution approach</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl">
                Real Challenges. Practical Solutions. Built for Impact.
            </h2>
            <p className="text-gray-500 max-w-2xl mb-6 md:mb-8 text-sm sm:text-base">
                We solve real business problems with smart, scalable IT solutions — designed to simplify workflows, boost
                performance, and deliver results that last.
            </p>

            {/* Scroll Buttons */}
            <div className="z-10 hidden sm:flex justify-end gap-2 mb-6 md:mb-8">
                <button
                    onClick={scrollLeft}
                    className="p-2 bg-white border-2 border-gray-300 text-gray-300 rounded-full hover:border-black hover:text-blue-500 transition-all duration-300"
                    aria-label='Scroll Left'
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-2 bg-white border-2 border-gray-300 text-gray-300  rounded-full hover:border-black hover:text-blue-500 transition-all duration-300"
                    aria-label='Scroll Right'
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {[...CARDS].map((card, idx) => (
                    <div
                        key={`${card.id}-${idx}`}
                        className="w-95 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-95 md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start flex flex-col justify-between border-2 border-gray-50 hover:border-blue-500 rounded-4xl p-4 md:p-7 hover:shadow-xl transition-all duration-800 bg-white group"
                    >
                        <div>
                            <p className="text-base text-gray-500 group-hover:text-black transition-all duration-800 mb-8">
                                <span className="w-3 h-3 border border-gray-800 rounded-full inline-block mr-3 group-hover:border-black group-hover:bg-blue-500 transition-all duration-800"></span>
                                {card.category}
                            </p>
                            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                            <p className="text-base text-gray-500 mb-6">{card.description}</p>
                        </div>
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                            <Image
                                src={card.image}
                                alt="Card"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Carousel
