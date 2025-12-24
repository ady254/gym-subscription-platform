import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function CallToAction() {
  const benefits = [
    'Access to all fitness programs',
    'Expert trainer guidance',
    'Flexible class timings',
    'State-of-the-art equipment',
    'Nutrition consultation',
    'Track your progress',
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of members who have already transformed their lives. Get started with our exclusive membership plans today!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-orange-50">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plans">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-orange-500 hover:bg-gray-100"
                >
                  View Membership Plans
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fitness training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-orange-500 mb-1">7 Days</div>
              <div className="text-gray-700 font-semibold">Free Trial Available</div>
              <div className="text-sm text-gray-600 mt-1">No credit card required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
