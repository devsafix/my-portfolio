/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeader from "../SectionHeader";

// Contact information data - make this dynamic later
const contactInfo = {
  office: {
    title: "Our Office:",
    address: "Jurain, Dhaka Bangladesh",
  },
  phone: {
    title: "Contact Number:",
    number: "+1234321321",
  },
  email: {
    title: "Email Us:",
    address: "websitename@mail.com",
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
    } catch (error: any) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4">
      <div className="bg-card border border-border rounded-3xl p-5 md:p-10 shadow-xl hover:shadow-2xl transition-all">
        {/* Header */}
        <SectionHeader
          title="Contact With Me"
          subtitle="Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8 border border-border rounded-2xl p-10">
            {/* Office Address */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 border border-border hover:bg-accent rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  {contactInfo.office.title}
                </h3>
                <p className="text-muted-foreground">
                  {contactInfo.office.address}
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 border border-border hover:bg-accent rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  {contactInfo.phone.title}
                </h3>
                <p className="text-muted-foreground">
                  {contactInfo.phone.number}
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 border border-border hover:bg-accent rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  {contactInfo.email.title}
                </h3>
                <p className="text-muted-foreground">
                  {contactInfo.email.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 border border-border hover:bg-accent rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  {contactInfo.email.title}
                </h3>
                <p className="text-muted-foreground">
                  {contactInfo.email.address}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 border border-border rounded-2xl p-10"
            >
              {/* Full Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Me Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
