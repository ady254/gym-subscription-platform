import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
              Transform Your Body, Transform Your Life
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Your Fitness Journey
            <span className="block text-orange-500">Starts Here</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Join India's fastest-growing fitness community. Expert trainers, world-class facilities, and proven results. Get access to 7+ workout formats including Strength Training, HIIT, Yoga, CrossFit, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/booking">
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/plans">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                <Play className="w-5 h-5" />
                View Plans
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50K+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">7+</div>
              <div className="text-gray-300">Workout Formats</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}
