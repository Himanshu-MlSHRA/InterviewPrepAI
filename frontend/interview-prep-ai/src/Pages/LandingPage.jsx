import React, { useState } from 'react';
import { APP_FEATURES } from '../utils/data';
import HERO_IMG from '../assets/image.png';
import { LuSparkles, LuMessageSquare, LuBookOpen, LuFolderTree, LuBrain, LuTarget } from 'react-icons/lu';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import Login from "./Auth/login";
import SignUp from './Auth/SignUp';
import Modal from "../Components/Modal";


const LandingPage = () => {
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const iconMap = [LuTarget, LuMessageSquare, LuBrain, LuFolderTree, LuBookOpen];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#F5F3F4] via-white to-[#F5F3F4]">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#A4161A]/10 to-[#E5383B]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#BA181B]/10 to-[#660708]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #A4161A 2%, transparent 0%), 
                              radial-gradient(circle at 75px 75px, #E5383B 2%, transparent 0%)`,
              backgroundSize: '100px 100px'
            }}
          ></div>
        </div>

        {/* Header */}
        <header className="relative z-20 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto animate-fadeIn">
          <div className="text-2xl font-bold text-[#161A1D] font-alan  tracking-tight">
          <button>Interview Prep AI</button>
          </div>
          <button 
            className="bg-gradient-to-r from-[#A4161A] to-[#BA181B] text-white px-6 py-2.5 rounded-xl hover:from-[#660708] hover:to-[#A4161A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => setOpenAuthModel(true)}
          >
            Login / Sign Up
          </button>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E5383B] to-[#BA181B] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <LuSparkles className="w-4 h-4"/>AI Powered
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-[#161A1D] mb-6 leading-tight">
                Ace Interviews with{' '}
                <span className="bg-gradient-to-r from-[#A4161A] to-[#E5383B] bg-clip-text text-transparent">
                  AI Powered
                </span>{' '}
                Learning
              </h1>
              
              <p className="text-lg text-[#0B090A]/80 mb-8 leading-relaxed">
                Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery - your ultimate interview toolkit is here.
              </p>
              
              <button 
                className="bg-gradient-to-r from-[#BA181B] to-[#E5383B] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#A4161A] hover:to-[#BA181B] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                onClick={() => setOpenAuthModel(true)}
              >
                Get Started Free
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#A4161A] to-[#E5383B] rounded-2xl blur-lg opacity-20"></div>
                <img 
                  src={HERO_IMG} 
                  alt="App Interface" 
                  className="relative w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 bg-gradient-to-b from-white to-[#F5F3F4]">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(30deg, #A4161A 12%, transparent 12.5%, transparent 87%, #A4161A 87.5%, #A4161A),
                               linear-gradient(150deg, #A4161A 12%, transparent 12.5%, transparent 87%, #A4161A 87.5%, #A4161A),
                               linear-gradient(30deg, #A4161A 12%, transparent 12.5%, transparent 87%, #A4161A 87.5%, #A4161A),
                               linear-gradient(150deg, #A4161A 12%, transparent 12.5%, transparent 87%, #A4161A 87.5%, #A4161A),
                               linear-gradient(60deg, #E5383B77 25%, transparent 25.5%, transparent 75%, #E5383B77 75%, #E5383B77),
                               linear-gradient(60deg, #E5383B77 25%, transparent 25.5%, transparent 75%, #E5383B77 75%, #E5383B77)`,
              backgroundSize: '80px 140px',
              backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
            }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#161A1D] mb-4">
                Features That Make You <span className="text-[#A4161A]">Shine</span>
              </h2>
              <p className="text-lg text-[#0B090A]/80 max-w-2xl mx-auto">
                Everything you need to prepare for your dream job interview, powered by advanced AI technology
              </p>
            </div>

            {/* Top 3 Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {APP_FEATURES.slice(0, 3).map((feature, index) => {
                const Icon = iconMap[index];
                return (
                  <div 
                    key={feature.id}
                    className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D3D3D3]/50 hover:border-[#A4161A]/30 hover:scale-105 transform"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#A4161A] to-[#E5383B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#161A1D] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#0B090A]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom 2 Features - Centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {APP_FEATURES.slice(3).map((feature, index) => {
                const Icon = iconMap[index + 3];
                return (
                  <div 
                    key={feature.id}
                    className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D3D3D3]/50 hover:border-[#A4161A]/30 hover:scale-105 transform"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#A4161A] to-[#E5383B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#161A1D] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#0B090A]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gradient-to-br from-[#0B090A] to-[#161A1D] text-white py-16 border-t border-[#161A1D]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
              {/* Creator */}
              <div className="animate-fadeIn">
                <h3 className="text-lg font-medium text-[#B1A7A6] mb-2">Created by</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-[#E5383B] to-[#BA181B] bg-clip-text text-transparent">
                  HIMANSHU RATNAKAR MISHRA
                </p>
              </div>

              {/* Tech Stack */}
              <div className="animate-fadeIn">
                <h3 className="text-lg font-medium text-[#B1A7A6] mb-4 text-center lg:text-left">Built with</h3>
                <div className="flex gap-5 items-center">
                  {[
                    { Icon: SiReact, color: 'text-[#61DAFB]', name: 'React' },
                    { Icon: SiNodedotjs, color: 'text-[#339933]', name: 'Node.js' },
                    { Icon: SiExpress, color: 'text-white', name: 'Express' },
                    { Icon: SiMongodb, color: 'text-[#47A248]', name: 'MongoDB' },
                    { Icon: SiTailwindcss, color: 'text-[#06B6D4]', name: 'Tailwind CSS' }
                  ].map((tech, index) => (
                    <div key={index} className="group relative">
                      <tech.Icon 
                        className={`w-9 h-9 ${tech.color} hover:scale-110 transition-all duration-300 cursor-pointer drop-shadow-lg`}
                        title={tech.name}
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-[#B1A7A6] whitespace-nowrap">{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-[#161A1D]">
              <p className="text-[#B1A7A6] text-sm">© 2025 Interview Prep AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <div className={`fixed inset-0 z-50 ${openAuthModel ? 'block' : 'hidden'}`}>
        <Modal
          isOpen={openAuthModel}
          onClose={() => {
            setOpenAuthModel(false);
            setCurrentPage("login");
          }}
          hideHeader
        >
          <div>
            {currentPage === "login" && (
              <Login setCurrentPage={setCurrentPage} />
            )}
            {currentPage === "signup" && (
              <SignUp setCurrentPage={setCurrentPage} />
            )}
          </div>
        </Modal>
        </div>
    </>
  );
};

export default LandingPage;