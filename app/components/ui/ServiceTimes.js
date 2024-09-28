import { Clock } from "lucide-react";

export default function ServiceTimes() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-gray-600 mr-2" />
        <h3 className="text-xl font-semibold">Service Times</h3>
      </div>
      <ul className="space-y-2">
        <li>Sunday Worship: 9:00 AM & 11:00 AM</li>
        <li>Wednesday Bible Study: 7:00 PM</li>
        <li>Youth Group: Fridays at 6:30 PM</li>
      </ul>
    </div>
  );
}
