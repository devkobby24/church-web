import { Clock } from "lucide-react";

export default function ServiceTimes() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-gray-600 mr-2" />
        <h3 className="text-xl font-semibold">Service Times</h3>
      </div>
      <ul className="space-y-2">
        <li><span className="font-semibold">Glory Service: Sunday:</span> 8:30 AM - 11:30 AM</li>
        <li><span className="font-semibold">Midweek Service: Wednesday:</span> 6:30 PM - 8:30 PM</li>
        <li><span className="font-semibold">Dominion Service: Friday:</span> 7:00 PM - 9:00 PM</li>
      </ul>
    </div>
  );
}
