// src/components/sections/Contact/ContactSection.tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { sendEmail } from "@/app/actions/sendEmail";
import InteractiveDotGrid from "../Hero/InteractiveDotGrid";

const InputField = ({ label, name, type = "text", placeholder, required = true }: any) => (
  <div className="flex flex-col gap-2 w-full group border-b border-black/10 focus-within:border-primary transition-all duration-500 pb-3">
    <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-parkinsans">{label} {required && "*"}</label>
    <div className="overflow-hidden">
      <input 
        name={name} 
        type={type} 
        required={required} 
        placeholder={placeholder} 
        className="w-full bg-transparent outline-none font-outfit text-xl text-black placeholder:text-black/5"
      />
    </div>
  </div>
);

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    if (result.success) {
      setIsSent(true);
    } else {
      alert("Submission failed. Check console.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative w-full py-24 md:py-23  overflow-hidden text-black"><InteractiveDotGrid />
      {/* Editorial Grid Background */}
      {/* <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }} /> */}

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-10 gap-10">
        
        {/* LEFT COLUMN (40%) */}
        <div className="lg:col-span-4 space-y-2 ">
          <div className="space-y-6 bg-background py-6 px-5 rounded-t-3xl rounded-br-3xl" >
            <h2 className="font-parkinsans text-4xl  md:text-6xl font-semibold tracking-tighter leading-[0.85]">Get In Touch</h2>
            <p className="font-outfit text-black/70 text-sm max-w-md">Every vision needs an architect. Let’s scale your brand. Your search for a top digital marketing agency ends here! We help businesses achieve real results through innovative marketing strategies. Connect with our experts today and take your brand to the next level!</p>
          </div>

          <div className="space-y-2 py-4 px-5 bg-background rounded-t-3xl rounded-bl-3xl">
            <div className="flex items-center gap-2 group cursor-pointer ">
              <div className=" rounded-full border border-black/5  transition-all"><Phone size={16}/></div>
              <span className="font-outfit text-[14px]">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className=" rounded-full border border-black/5 transition-all"><Mail size={16}/></div>
              <span className="font-outfit text-[14px]">admin@weblinxmedia.com</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <Clock size={16}/>
              <span className="font-outfit text-[14px]">Mon - Fri: 9am - 6pm EST</span>
            </div>
          </div>
 <div className="space-y-6 bg-background py-6 px-5 rounded-t-3xl rounded-br-3xl" >
            {/* <h2 className="font-parkinsans text-6xl  md:text-6xl font-semibold tracking-tighter leading-[0.85]">Get In Touch</h2> */}
            <p className="font-parkinsans text-black text-lg max-w-md">Whether it's to discuss your next project, learn more about services, or join our team, drop us a line and get the conversation started.</p>          </div>
          <button className="px-10 py-3 bg-acid-lime text-black font-parkinsans font-regular border-2 border-background text-md tracking-tight rounded-t-xl rounded-br-xl hover:bg-background hover:cursor-pointer transition-bg duration-300  shadow-xl shadow-lime-500/10">
            Let's Connect
          </button>
        </div>

        {/* RIGHT COLUMN (60%) */}
        <div className="lg:col-span-6 relative">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                className=" p-8 md:p-12 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.04)] bg-black"
              >
                <div className="mb-12">
                  <h3 className="font-parkinsans text-white text-3xl mb-2 md:text-6xl font-semibold tracking-tight leading-[0.85]">Let's Chat</h3>
                  <p className="font-montserrat text-background/70">Schedule a consultation to see how we can transform your brand identity into a powerful business asset</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                   <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl"><InputField label="First Name" name="firstName" placeholder="Jane"/></div>
                   <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl"> <InputField label="Last Name" name="lastName" placeholder="Doe" /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl">  <InputField label="Phone" name="phone" type="tel" placeholder="+1 000" /></div>
                  <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl">  <InputField label="Email" name="email" type="email" placeholder="jane@co.com" /></div>
                  </div>

                <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl"><div className="flex flex-col gap-2 w-full border-b border-black/10 focus-within:border-primary transition-all pb-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-parkinsans">Service Required</label>
                    <select name="service" className="w-full bg-transparent outline-none font-outfit text-xl text-black appearance-none cursor-pointer">
                      
                      {siteConfig.services.map(s => (
                        
                        <option className="hover:bg-background bg-background px-3" key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div></div>  

              <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl">    <InputField label="Estimated Budget" name="budget" placeholder="e.g. $10k+" required={false} /></div>  
                 <div className="bg-white rounded-tr-3xl px-3 pt-2 rounded-bl-3xl"> <InputField label="Project Details" name="message" placeholder="Describe your goals..." /></div>  

                  <div className="flex gap-3 items-center group pt-4">
                  <div className="w-fit">
    <input type="checkbox" id="cbx2" style={{display: 'none'}}/>
    <label className="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
    </label>
</div>
                    <span className="font-outfit text-regular text-[13px] w-full md:w-[80%] text-background/70 leading-relaxed">
                    By checking this box, I agree to be contacted by <Link href="/" className=" text-white">Weblinx Media</Link> via phone, text, and email regarding my enquiry I understand that this concern is not a condition of purchase.
                    </span>
                  </div>

                  <motion.button 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    className="w-full py-6 bg-background text-black font-parkinsans cursor-pointer font-regular tracking-wide text-md rounded-4xl hover:bg-acid-lime transition-all duration-500 disabled:opacity-50"
                  >
                    {isSubmitting ? "Syncing with Weblinx..." : "I'd like a Quote"}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-16 md:p-24  shadow-2xl border border-primary/20 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-acid-lime rounded-full flex items-center justify-center mb-8 shadow-lg shadow-lime-500/20">
                  <CheckCircle2 size={48} className="text-black" />
                </div>
                <h3 className="font-parkinsans text-4xl tracking-tight font-bold mb-4">We'd Received Your Query</h3>
                <p className="font-outfit text-black/70 text-md max-w-md">Our team has secured your request. An architect will reach out to you within 24 hours.</p>
                <button onClick={() => setIsSent(false)} className="mt-10 cursor-pointer text-xs font-parkinsans font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-primary hover:border-primary transition-all">Send another inquiry</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}