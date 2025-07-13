import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Car,
  Plane,
  Users,
  Coffee,
} from "lucide-react";

const OfficeLocations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const officeFeatures = [
    {
      icon: Users,
      title: "Meeting Rooms",
      description: "Modern conference facilities for demos and consultations",
    },
    {
      icon: Coffee,
      title: "Comfortable Space",
      description: "Relaxed environment for productive discussions",
    },
    {
      icon: Car,
      title: "Easy Parking",
      description: "Dedicated parking available for visitors",
    },
    {
      icon: Plane,
      title: "Airport Access",
      description: "15 minutes from Allama Iqbal International Airport",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="section-subtitle">
              Located in the heart of Lahore's tech district, our office is
              designed for collaboration and innovation. Schedule a visit to see
              Analysys in action.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Office Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Analysys Headquarters
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">
                        BesTel, LLC, 121 W. Lamberth Road,
                        <br />
                        Suite A, Sherman,
                        <br />
                        TX 75092, USA
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">
                        +92 42 3584 6201 / 6202
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@analysys.tech</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="btn-primary w-full">Get Directions</button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Office Hours
                  </h3>
                </div>

                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-900">
                        {schedule.day}
                      </span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-blue-900 mb-1">
                        Schedule a Visit
                      </div>
                      <div className="text-sm text-blue-700">
                        We recommend scheduling appointments in advance to
                        ensure our team is available to assist you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Office Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {officeFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Interactive Map */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us
                </h3>

                {/* Map Placeholder */}
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                    <div className="font-semibold mb-2">Interactive Map</div>
                    <div className="text-sm">Analysys Office Location</div>
                    <div className="text-xs mt-2">New Garden Town, Lahore</div>
                  </div>

                  {/* Map overlay with office marker */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center animate-pulse">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    Open in Google Maps
                  </button>
                  <button className="btn-outline flex-1">
                    Download Directions
                  </button>
                </div>
              </div>

              {/* Transportation Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Getting Here
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Car className="w-5 h-5 mr-2 text-blue-600" />
                      By Car
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>• Free parking available on-site</div>
                      <div>• 10 minutes from Mall Road</div>
                      <div>• Easy access from main highways</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Plane className="w-5 h-5 mr-2 text-green-600" />
                      From Airport
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>• 15 minutes from Allama Iqbal Airport</div>
                      <div>• Taxi and ride-sharing available</div>
                      <div>• Airport shuttle on request</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Public Transport
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>• Metro bus stop nearby</div>
                      <div>• Accessible by local bus routes</div>
                      <div>• Rickshaw and taxi readily available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact for Visit */}
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Plan Your Visit</h3>
                <p className="mb-6 opacity-90">
                  Ready to see Analysys in action? Schedule a personalized demo
                  at our office and experience our platform firsthand.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">
                      Personalized product demonstrations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-5 h-5" />
                    <span className="text-sm">Meet our technical team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Flexible meeting times</span>
                  </div>
                </div>

                <button className="w-full bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg mt-6 transition-colors duration-200">
                  Schedule Office Visit
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeLocations;
