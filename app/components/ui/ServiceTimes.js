import { Clock } from "lucide-react";

export default function ServiceTimes() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-gray-600 mr-2" />
        <h3 className="text-xl font-semibold">Service Times</h3>
      </div>
      <ul className="space-y-2">
        <li>Glory service: Sundays 8:30am - 11.30am</li>
        <li>Midweek service: Wednesdays 6:30pm - 8.30pm</li>
        <li>Fridays Dominion Service 7:00pm - 9:00pm</li>
      </ul>
    </div>
  );
}
