import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Card from '../ui/Card';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-orange-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real transformations from real people. Your success story starts here.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <Quote className="w-10 h-10 text-orange-500 mb-4 mx-auto md:mx-0" />
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[current].quote}"
                </p>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {testimonials[current].name}
                  </div>
                  <div className="text-orange-500 font-semibold">
                    {testimonials[current].transformation} in {testimonials[current].duration}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[current].program}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === current
                        ? 'bg-orange-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
