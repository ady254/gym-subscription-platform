import { Link } from 'react-router-dom';
import { Dumbbell, Zap, Heart, Activity, Music, Shield, HeartPulse } from 'lucide-react';
import { services } from '../../data/services';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const iconMap: Record<string, any> = {
  Dumbbell,
  Zap,
  Heart,
  Activity,
  Music,
  Shield,
  HeartPulse,
};

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Fitness Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of fitness programs designed by experts to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Link key={service.id} to={`/booking?service=${service.id}`}>
                <Card
                  hover
                  className="overflow-hidden group h-full"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-orange-500 p-2 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge
                        variant={
                          service.intensity === 'High'
                            ? 'danger'
                            : service.intensity === 'Medium'
                            ? 'warning'
                            : 'success'
                        }
                      >
                        {service.intensity}
                      </Badge>
                      <Badge variant="info">{service.duration}</Badge>
                    </div>

                    <div className="text-sm text-gray-500">
                      Burns {service.calories} cal
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
