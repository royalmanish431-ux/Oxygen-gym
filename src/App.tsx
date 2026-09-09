/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Dumbbell, Menu, Zap, Calendar, ArrowRight, Activity, Brain, Flame, Target, User, Mail, Phone, MapPin, Building } from 'lucide-react';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const PricingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Pro Tier</span>
            <h3 className="text-2xl font-black text-neutral-900">Standard Plan</h3>
          </div>
          <span className="bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-bold px-3 py-1 rounded-full">Popular</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-neutral-900">800₹</span>
          <span className="text-stone-500 text-xs font-semibold">/ month</span>
        </div>
        <ul className="space-y-3 text-xs font-semibold text-stone-700">
          {['Custom Training Programs', 'Full Gym Equipment Access', '1-on-1 Coach Guidance', 'Weekly Nutrition Advice'].map(item => (
            <li key={item} className="flex items-center gap-2.5"><Target className="w-4 h-4 text-[#FF3B00]" /> {item}</li>
          ))}
        </ul>
        <button onClick={() => { setShowPricingModal(false); setShowModal(true); }} className="w-full bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm transition">
          Join Now
        </button>
        <button onClick={() => setShowPricingModal(false)} className="w-full text-stone-500 font-bold py-2 text-sm">Cancel</button>
      </div>
    </div>
  );

  const RegistrationModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-black mb-4">Join Now</h2>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert('Form submitted!'); }}>
          {['First Name', 'Last Name'].map(label => (
            <div key={label}>
              <label className="block text-xs font-bold text-stone-700 mb-1">{label} *</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <input type="text" required placeholder={`e.g. ${label === 'First Name' ? 'Sarah' : 'Jenkins'}`} className="w-full pl-9 pr-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#FF3B00]" />
              </div>
            </div>
          ))}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <input type="email" required placeholder="sarah.jenkins@example.com" className="w-full pl-9 pr-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#FF3B00]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Number *</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <input type="tel" required placeholder="Enter 10-digit phone number" className="w-full pl-9 pr-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#FF3B00]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Street Address *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <input type="text" required placeholder="e.g. 742 Evergreen Terrace, Apt 4B" className="w-full pl-9 pr-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#FF3B00]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">City *</label>
            <div className="relative">
              <Building className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <input type="text" required placeholder="e.g. Houston" className="w-full pl-9 pr-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#FF3B00]" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">State *</label>
            <select required className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#FF3B00]">
              <option>Uttar Pradesh</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#FF3B00] text-white font-bold py-3 rounded-xl text-sm hover:bg-orange-600">Submit</button>
          <button type="button" onClick={() => setShowModal(false)} className="w-full text-stone-500 font-bold py-2 text-sm">Cancel</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] selection:bg-orange-500 selection:text-white">
      {/* NAVBAR */}
      <header className="w-full max-w-md mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF3B00] flex items-center justify-center text-white">
            <Dumbbell className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-black">Oxygen gym</span>
        </div>

        <nav className="flex items-center gap-3">
          <a href="#" className="text-xs font-bold text-stone-600 hover:text-[#FF3B00]">Home</a>
          <button onClick={() => setShowPricingModal(true)} className="text-xs font-bold text-stone-600 hover:text-[#FF3B00]">Join Now</button>
          <a href="#" className="text-xs font-bold text-stone-600 hover:text-[#FF3B00]">Contact us</a>
        </nav>
      </header>

      <main className="w-full max-w-md mx-auto px-5 pb-20 space-y-16">
        {showPricingModal && <PricingModal />}
        {showModal && <RegistrationModal />}
        {/* HERO SECTION */}
        <section className="pt-4 flex flex-col items-center text-center">
          <div className="inline-flex items-center bg-white border border-stone-200 rounded-full pl-1 pr-4 py-1 gap-2 shadow-xs mb-6">
            <span className="bg-[#FF3B00] text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">#1 Top</span>
            <span className="text-xs font-bold tracking-wider text-stone-800 uppercase">Train Hard. Look Strong.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-[1.15] mb-6">
            Build Muscle and Get Stronger
          </h1>

          <div className="relative w-full flex justify-center my-2">
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" 
              alt="Athlete Training" 
              className="w-full h-80 object-cover rounded-3xl shadow-sm"
            />
          </div>

          <div className="w-full bg-white rounded-2xl p-5 border border-stone-200/80 mt-5 text-left shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" alt="Member"/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Member"/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" alt="Member"/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Member"/>
              </div>
              <span className="text-xs font-extrabold tracking-wide text-neutral-800">5K+ HAPPY MEMBERS</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Their coaches guided me every step, and now I train harder and recover faster daily.
            </p>
            <button onClick={() => setShowPricingModal(true)} className="w-full sm:w-auto bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm">
              Join Now
            </button>
          </div>
        </section>

        {/* HIGHLIGHTS BANNER */}
        <section className="bg-[#FF3B00] -mx-5 px-6 py-4 grid grid-cols-2 gap-y-3 gap-x-4 text-white text-xs font-bold tracking-wide">
          {[
            { Icon: Zap, label: 'Easy training' },
            { Icon: Zap, label: 'Stay fit' },
            { Icon: Zap, label: 'Gain strength' },
            { Icon: Zap, label: 'Burn calories' }
          ].map(({ Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="w-4 h-4 fill-white" />
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* ABOUT US SECTION */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222]">
            <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
            About us
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            Build a stronger body. Live better.
          </h2>

          <p className="text-stone-600 text-sm leading-relaxed">
            Our expert coaches support you throughout your journey, keeping every workout focused.
          </p>

          <button className="bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition inline-block">
            Start Today
          </button>

          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs mt-6">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" 
              alt="Dumbbell Workout" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-2">
              <h3 className="font-bold text-lg text-neutral-900 leading-snug">
                Transforming lives through fitness, one powerful workout at a time.
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Personalized training plans tailored to your goals, fitness level, lifestyle, and consistency for lasting results.
              </p>
            </div>
          </div>
        </section>

        {/* TRAINING PROGRAMS CARDS */}
        <section className="space-y-5">
            {[
                { title: 'Strength Builder', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', tags: 'Strength • Mobility • Endurance' },
                { title: 'Total Fitness', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', tags: 'Recovery • Mobility • Flexibility' },
                { title: 'Fat Burn', img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop', tags: 'Cardio • Stamina • Conditioning' },
                { title: 'Active Recovery', img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop', tags: 'Strength • Cardio • Mobility' }
            ].map((prog, i) => (
                <div key={i} className="relative rounded-3xl overflow-hidden h-[340px] text-white flex flex-col justify-between p-6 shadow-sm">
                    <img src={prog.img} className="absolute inset-0 w-full h-full object-cover z-0" alt={prog.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-0"></div>
                    <div className="relative z-10 flex justify-between text-xs font-semibold text-stone-300">
                      <span>(0{i+1})</span>
                      <span>(TRAINING PROGRAMS)</span>
                    </div>
                    <div className="relative z-10 text-center space-y-3">
                      <h3 className="text-2xl font-bold">{prog.title}</h3>
                      <p className="text-xs text-stone-300 font-medium">{prog.tags}</p>
                      <button className="bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition">
                        Start Today
                      </button>
                    </div>
                </div>
            ))}
        </section>

        {/* BLOGS SECTION */}
        <section className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222] mb-3">
                <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
                Blogs
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
              Gym Tips and Workout Guides
            </h2>
          </div>

          {[
            { tag: 'Training', title: 'Simple Workouts to Boost Your Strength', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop', date: 'Aug 23, 2026', desc: 'Learn easy exercises to increase strength, stay active, and improve your overall fitness daily.' },
            { tag: 'Insight', title: 'Recover Better To Support Muscle Growth', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop', date: 'Aug 23, 2026', desc: 'Support muscle growth with simple recovery habits that help your body repair, rebuild, and prepare for your next workout. Learn how sleep, nutrition, hydration, and rest can improve your overall training routine.' },
            { tag: 'Article', title: 'Start Your Fat Loss Journey The Right Way', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop', date: 'Aug 23, 2026', desc: 'Build sustainable fat loss habits with simple nutrition, exercise, and lifestyle strategies designed to help beginners make steady progress without extreme diets or complicated routines.' }
          ].map((blog, i) => (
            <div key={i} className="space-y-3 pt-4">
                <div className="relative rounded-3xl overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 bg-[#FF3B00] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">{blog.tag}</span>
                    <img src={blog.img} className="w-full h-64 object-cover" alt={blog.title} />
                </div>
                <div className="text-stone-500 text-xs flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{blog.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{blog.desc}</p>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222]">
            <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
            How it works
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            Simple Steps to Reach Your Goals
          </h2>
          <div className="divide-y divide-stone-200/90 border-y border-stone-200/90">
            {[
              { num: '001', title: 'Set Your Goal', desc: 'Choose your fitness goal and decide what you want to achieve — lose fat, build muscle, gain strength, or improve fitness.' },
              { num: '002', title: 'Choose Your Plan', desc: 'Select a training plan that matches your goal and fitness level, then follow each workout step by step.' },
              { num: '003', title: 'Track & Progress', desc: 'Stay disciplined, monitor changes over time, and celebrate milestone improvements each week.' }
            ].map((step, i) => (
              <div key={i} className="py-6 flex items-center justify-between group cursor-pointer">
                <div className="space-y-1 pr-4">
                  <span className="text-xs font-bold text-stone-400">{step.num}</span>
                  <h3 className="text-lg font-extrabold uppercase text-neutral-900 tracking-tight">{step.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
                <button className="w-10 h-10 shrink-0 rounded-full bg-neutral-900 text-white flex items-center justify-center transition group-hover:bg-[#FF3B00]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="space-y-5">
          <div className="w-full flex justify-center mb-6">
            <div className="w-full h-80 rounded-t-full rounded-b-2xl overflow-hidden border border-stone-200">
              <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop" alt="Coach" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222]">
            <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
            Why Choose us
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
            Training that builds strength, confidence, and a better lifestyle
          </h2>
          <div className="space-y-6 pt-2">
            {[
              { Icon: Activity, title: 'Strong Body', desc: 'Build strength, improve endurance, and develop a healthier, stronger body.' },
              { Icon: Brain, title: 'Strong Mind', desc: 'Stay focused, motivated, and disciplined while building a positive mindset toward fitness.' },
              { Icon: Flame, title: 'Muscle Growth', desc: 'Improve your stamina, energy, flexibility, and overall physical performance.' },
              { Icon: Target, title: 'Fitness Goals', desc: 'Whether you want to lose fat, build muscle, or get stronger, our training helps you stay on track.' }
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF3B00] text-white flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-neutral-900">{title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222]">
              <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
              Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            Choose the Best Plan For You
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            Flexible membership options designed to help you train consistently and achieve your fitness goals.
          </p>
        </section>

        {/* PRICING CARD */}
        <section className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Pro Tier</span>
                <h3 className="text-2xl font-black text-neutral-900">Standard Plan</h3>
              </div>
              <span className="bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-bold px-3 py-1 rounded-full">Popular</span>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-neutral-900">800₹</span>
              <span className="text-stone-500 text-xs font-semibold">/ month</span>
            </div>

            <ul className="space-y-3 text-xs font-semibold text-stone-700">
              {['Custom Training Programs', 'Full Gym Equipment Access', '1-on-1 Coach Guidance', 'Weekly Nutrition Advice'].map(item => (
                <li key={item} className="flex items-center gap-2.5"><Target className="w-4 h-4 text-[#FF3B00]" /> {item}</li>
              ))}
            </ul>

            <button onClick={() => setShowPricingModal(true)} className="w-full bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm transition">
              Join Now
            </button>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222]">
              <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
              Testimonials
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            Real Results From Real Members
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
            Read reviews from members enjoying effective workouts, better health, and stronger results.
          </p>

          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
              alt="Member Review" 
              className="w-full h-72 object-cover"
            />
            <div className="p-6 space-y-3">
              <div>
                <h3 className="font-bold text-base text-neutral-900">Chinedu Okafor</h3>
                <p className="text-stone-500 text-xs font-medium">Fitness Beginner</p>
              </div>

              <p className="text-stone-600 text-xs leading-relaxed italic">
                "As a beginner, I was nervous about starting my fitness journey. The trainers made every workout simple, motivating, and enjoyable. Their guidance helped me build confidence and stay consistent."
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex text-[#FF3B00]">
                  {[...Array(5)].map((_, i) => <Flame key={i} className="w-4 h-4 fill-[#FF3B00]" />)}
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-lg bg-stone-100 text-stone-400 flex items-center justify-center hover:bg-stone-200 transition">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center hover:bg-[#FF3B00] transition">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-4 pt-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E0D8] bg-white text-[13px] font-semibold text-[#222]">
              <div className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full"></div>
              FAQ
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            Gym Questions and Fitness Answers
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Find answers about workouts, nutrition, memberships, and simple ways to reach your fitness goals.
          </p>

          <div className="flex items-center gap-3 pt-1 pb-4">
            <button className="bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition">
              Contact Us
            </button>
            <button className="bg-neutral-900 hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-xs transition">
              See Pricing
            </button>
          </div>

          <div className="space-y-3">
            {[
              { q: 'HOW DO I START A FITNESS PROGRAM?', a: 'You can start by choosing one of our introductory training plans or booking a consultation with our certified coaches.' },
              { q: 'WHAT WORKOUT IS BEST FOR BEGINNERS?', a: 'Compound bodyweight movements and light functional strength workouts are best to build a foundation before lifting heavy loads.' },
              { q: 'HOW OFTEN SHOULD I TRAIN EACH WEEK?', a: '3 to 4 days of consistent training with proper rest intervals is ideal for steady progress and recovery.' },
              { q: 'CAN I BUILD MUSCLE AND LOSE FAT?', a: 'Yes, body recomposition is possible with progressive overload training coupled with high-protein nutrition.' },
              { q: 'DO I NEED A STRICT DIET TO TRAIN?', a: 'No strict diet is needed. Sustainable healthy habits and adequate protein intake bring long-term success.' },
              { q: 'HOW LONG UNTIL I SEE FITNESS RESULTS?', a: 'Noticeable strength gains happen within 3 to 4 weeks, with clear visual body changes occurring around 8 to 12 weeks.' }
            ].map((faq, i) => (
              <div key={i} className="faq-item bg-white rounded-2xl border border-stone-200/80 p-4">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="text-xs font-bold text-neutral-900 uppercase">{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION (CTA BANNER) */}
        <section className="bg-[#FF3B00] -mx-5 px-6 py-12 text-white relative overflow-hidden rounded-t-[2.5rem]">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase opacity-90">• Start today</span>
            
            <h2 className="text-3xl font-black uppercase tracking-tight leading-tight">
              Build Your Body,<br/>Live Your Best Life
            </h2>

            <p className="text-xs text-orange-100 leading-relaxed max-w-xs">
              Join today and get customized workouts, healthy nutrition tips, and expert training plans for better daily results.
            </p>

            <form className="pt-2 flex items-center bg-white rounded-xl p-1 shadow-sm">
              <input 
                type="email" 
                required 
                placeholder="your@email.com" 
                className="w-full px-3 py-2 text-xs text-neutral-900 focus:outline-none placeholder:text-stone-400 bg-transparent"
              />
              <button type="submit" className="bg-neutral-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-lg transition shrink-0">
                Send
              </button>
            </form>

            <div className="pt-6 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" 
                alt="Workout Athlete" 
                className="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-6 space-y-8 text-neutral-900">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF3B00] flex items-center justify-center text-white">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">Oxygen gym</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
              A smart fitness solution created to improve performance and stay consistent.
            </p>
            <button className="bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-xl text-xs transition">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="font-bold text-stone-900 mb-3">Nav Links</h4>
              <ul className="space-y-2 text-stone-600">
                {['Home', 'About', 'Training Programs', 'Contact'].map(link => <li key={link}><a href="#" className="hover:text-[#FF3B00] transition">{link}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-3">CMS pages</h4>
              <ul className="space-y-2 text-stone-600">
                <li><a href="#" className="hover:text-[#FF3B00] transition">Blogs</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 text-center space-y-1 text-xs text-stone-500 font-medium">
            <p>© 2026 Oxygen gym • Built in Framer</p>
            <p>Created by <span className="font-bold text-neutral-900">Galaxy Studio</span></p>
          </div>
        </footer>
      </main>
    </div>
  );
}
