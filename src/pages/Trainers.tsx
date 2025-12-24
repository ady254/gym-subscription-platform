import { Award, Clock } from 'lucide-react';
import { trainers } from '../data/trainers';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

export default function Trainers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Expert Trainers</h1>
          <p className="text-xl">
            Meet the professionals who will guide your fitness journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card
              key={trainer.id}
              hover
              className="overflow-hidden"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <div className="flex items-center gap-2 text-orange-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{trainer.experience} experience</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialization.map((spec, idx) => (
                    <Badge key={idx} variant="info">
                      {spec}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{trainer.bio}</p>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold">Certifications:</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx}>• {cert}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
