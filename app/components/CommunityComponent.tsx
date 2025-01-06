"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, MessageCircle, Heart, Star, 
  Calendar, Award, BookOpen, Sparkles, 
  LucideIcon
} from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
  }

  interface EventCardProps {
    title: string;
    date: string;
    description: string;
    spots: string;
    icon: LucideIcon;
  }

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, index }) => (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const EventCard: React.FC<EventCardProps> = ({ title, date, description, spots, icon: Icon }) => (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-emerald-600" />
        <h4 className="font-medium text-gray-800">{title}</h4>
      </div>
      <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
        {date}
      </span>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{spots} spots left</span>
      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
        Join Event →
      </button>
    </div>
  </motion.div>
);

export default function PoetryCommunity() {
  const features = [
    {
      title: "Writing Circles",
      description: "Join intimate groups of poets who meet regularly to share work, provide feedback, and support each other's creative growth.",
      icon: Users
    },
    {
      title: "Mentorship Program",
      description: "Connect with experienced poets who provide personalized guidance and help you develop your unique voice.",
      icon: Heart
    },
    {
      title: "Monthly Contests",
      description: "Participate in themed poetry contests with constructive feedback from our community of writers.",
      icon: Award
    },
    {
      title: "Live Readings",
      description: "Share your work in virtual poetry readings and connect with audiences worldwide.",
      icon: MessageCircle
    }
  ];

  const events = [
    {
      title: "Haiku Workshop",
      date: "Next Tuesday",
      description: "Learn the art of haiku with award-winning poet Sarah Chen.",
      spots: "5",
      icon: BookOpen
    },
    {
      title: "Open Mic Night",
      date: "This Friday",
      description: "Share your latest work in our supportive virtual gathering.",
      spots: "12",
      icon: MessageCircle
    },
    {
      title: "Poetry & Nature",
      date: "Next Month",
      description: "Explore the connection between nature and poetry in this special workshop.",
      spots: "15",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-16 h-16 mx-auto mb-6 text-emerald-600 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Users className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl font-serif mb-6 text-gray-800">Join Our Garden</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Become part of a flourishing community where poets nurture each other's growth 
            and creativity blooms in the company of fellow writers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            Join the Garden
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-serif mb-4 text-gray-800">Upcoming Events</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our upcoming workshops, readings, and gatherings to connect with fellow poets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}