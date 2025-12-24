import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import { trainers } from '../data/trainers';
import { generateSlots } from '../data/slots';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialService = searchParams.get('service') || services[0].id;

  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedTrainer, setSelectedTrainer] = useState(trainers[0].id);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const service = services.find((s) => s.id === selectedService);
  const trainer = trainers.find((t) => t.id === selectedTrainer);
  const schedule = generateSlots(selectedService, selectedTrainer);

  const handleBooking = () => {
    if (!selectedSlot) return;
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    const slot = schedule.slots.find((s) => s.id === selectedSlot);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Your class has been successfully booked. See you at the gym!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-lg mb-4">Booking Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Class:</span>
                <span className="font-semibold">{service?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Trainer:</span>
                <span className="font-semibold">{trainer?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">
                  {new Date(schedule.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold">{slot?.time}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              fullWidth
              onClick={() => {
                setShowConfirmation(false);
                setSelectedSlot(null);
              }}
            >
              Book Another Class
            </Button>
            <Button fullWidth variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-orange-500">Fitness Class</span>
          </h1>
          <p className="text-xl text-gray-600">
            Choose your preferred class, trainer, and time slot
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-orange-500" />
                Select Class
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedService(s.id);
                      setSelectedSlot(null);
                    }}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedService === s.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-bold text-gray-900 mb-1">{s.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{s.duration}</div>
                    <Badge
                      variant={
                        s.intensity === 'High'
                          ? 'danger'
                          : s.intensity === 'Medium'
                          ? 'warning'
                          : 'success'
                      }
                    >
                      {s.intensity}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-500" />
                Select Trainer
              </h2>

              <div className="space-y-3">
                {trainers
                  .filter((t) =>
                    t.specialization.some((spec) =>
                      service?.name.includes(spec)
                    ) || trainers.indexOf(t) < 3
                  )
                  .map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setSelectedTrainer(t.id);
                        setSelectedSlot(null);
                      }}
                      className={`w-full p-4 rounded-lg border-2 transition-all flex items-center gap-4 ${
                        selectedTrainer === t.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left flex-1">
                        <div className="font-bold text-gray-900">{t.name}</div>
                        <div className="text-sm text-gray-600">
                          {t.specialization.join(', ')}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {t.experience} experience
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-orange-500" />
                Select Time Slot
              </h2>

              <div className="mb-4 text-sm text-gray-600">
                Date: {new Date(schedule.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {schedule.slots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setSelectedSlot(slot.id)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedSlot === slot.id
                        ? 'border-orange-500 bg-orange-50'
                        : slot.available
                        ? 'border-gray-200 hover:border-orange-300'
                        : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                    }`}
                  >
                    <div className="font-semibold text-sm">{slot.time}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {slot.available
                        ? `${slot.capacity - slot.booked} spots`
                        : 'Full'}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Booking Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Class</div>
                  <div className="font-semibold text-gray-900">
                    {service?.name}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Trainer</div>
                  <div className="font-semibold text-gray-900">
                    {trainer?.name}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-1">Date</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(schedule.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                </div>

                {selectedSlot && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Time</div>
                    <div className="font-semibold text-gray-900">
                      {schedule.slots.find((s) => s.id === selectedSlot)?.time}
                    </div>
                  </div>
                )}
              </div>

              <Button
                fullWidth
                size="lg"
                disabled={!selectedSlot}
                onClick={handleBooking}
              >
                Confirm Booking
              </Button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                This booking requires an active membership
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
