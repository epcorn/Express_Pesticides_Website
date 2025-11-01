"use client";

export default function FeatureCard({ icon, title, description }) {
  return (
    // This styling matches the icons you're passing in
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
    
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
}

