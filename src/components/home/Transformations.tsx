import { testimonials } from '../../data/testimonials';

export default function Transformations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing <span className="text-orange-500">Transformations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Witness the incredible journeys of our members who transformed their lives with dedication and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={testimonial.afterImage}
                  alt={`${testimonial.name} transformation`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-2xl font-bold mb-1">{testimonial.name}</div>
                  <div className="text-orange-400 font-semibold mb-2">
                    {testimonial.transformation}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.duration} • {testimonial.program}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
