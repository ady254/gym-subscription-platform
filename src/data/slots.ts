export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  capacity: number;
  booked: number;
}

export interface ClassSchedule {
  serviceId: string;
  trainerId: string;
  date: string;
  slots: TimeSlot[];
}

export const generateSlots = (serviceId: string, trainerId: string): ClassSchedule => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '06:00 AM', available: true, capacity: 20, booked: 12 },
    { id: '2', time: '07:30 AM', available: true, capacity: 20, booked: 15 },
    { id: '3', time: '09:00 AM', available: true, capacity: 20, booked: 8 },
    { id: '4', time: '11:00 AM', available: true, capacity: 20, booked: 5 },
    { id: '5', time: '04:00 PM', available: true, capacity: 20, booked: 18 },
    { id: '6', time: '05:30 PM', available: true, capacity: 20, booked: 19 },
    { id: '7', time: '07:00 PM', available: true, capacity: 20, booked: 16 },
    { id: '8', time: '08:30 PM', available: false, capacity: 20, booked: 20 },
  ];

  return {
    serviceId,
    trainerId,
    date: dateStr,
    slots: timeSlots,
  };
};
