import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Location() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <MapPin className="w-6 h-6 text-gray-600 mr-2" />
        <h3 className="text-xl font-semibold">Location</h3>
      </div>
      <p> Agona Ashanti. Ghana </p>
      <Link
        href="/contact"
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        Get Directions
      </Link>
    </div>
  );
}
