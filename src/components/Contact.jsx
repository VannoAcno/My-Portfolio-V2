"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Mail, Signal } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email sent!\nName: ${senderName}\nFrom: ${emailInput}\nMessage: ${messageInput}`);
    setShowModal(false);
    setSenderName("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
          [COMMUNICATION TERMINAL]
        </h2>
        <Separator className="bg-gradient-to-r from-blue-400 to-transparent h-1" />
      </div>

      {/* Communication Panel */}
      <div className="system-panel bg-blue-500/10 border-2 border-blue-400 rounded-xl p-8 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <Signal className="h-6 w-6 text-blue-400 mr-3" />
          <h3 className="text-xl font-mono text-blue-300">[SIGNAL ESTABLISHED]</h3>
        </div>

        <div className="text-center space-y-8">
          {/* Connection Status */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-400/30">
            <p className="text-blue-100 font-mono text-lg mb-2">
              [SYSTEM MESSAGE] You have connected with the constellation 'Recruiter'
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-blue-300">
              <span>Signal strength:</span>
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`bar-${i}`}
                    className="w-1 h-4 bg-blue-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={`bar-empty-${i}`} className="w-1 h-4 bg-gray-600"></div>
                ))}
              </div>
              <span className="text-cyan-400">80%</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a href="https://github.com/VannoAcno" target="_blank" className="group">
              <Button className="system-button border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 font-mono px-8 py-4">
                <Github className="mr-3 h-6 w-6" />
                GITHUB
              </Button>
            </a>

            <a href="https://www.instagram.com/rantzx1107?igsh=emNrOHU1NmQ3cnli" target="_blank" className="group">
              <Button className="system-button border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 font-mono px-8 py-4">
                <Instagram className="mr-3 h-6 w-6" />
                INSTAGRAM
              </Button>
            </a>

            <a href="https://discord.com/740795479931224166" target="_blank" className="group">
              <Button className="system-button border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 font-mono px-8 py-4">
                <FontAwesomeIcon icon={faDiscord} className="mr-3 h-5 w-5" />
                DISCORD
              </Button>
            </a>

            <a href="https://wa.me/+6281216993899" target="_blank" className="group">
              <Button className="system-button border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 font-mono px-8 py-4">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-3 h-5 w-5" />
                WHATSAPP
              </Button>
            </a>

            <Button
              onClick={() => setShowModal(true)}
              className="system-button border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 font-mono px-8 py-4"
            >
              <Mail className="mr-3 h-6 w-6" />
              EMAIL
            </Button>
          </div>

          {/* Sponsor Message */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg border border-cyan-400/50">
            <p className="text-cyan-300 font-mono text-sm mb-2">
              [CONSTELLATION MESSAGE] 'Recruiter' has sponsored you with 500 coins
            </p>
            <p className="text-blue-100 italic">
              "Your development story shows great potential. Let's discuss new scenarios and opportunities."
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0f172a] border-4 border-blue-400 shadow-lg shadow-cyan-500/20 rounded-2xl p-8 w-full max-w-3xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-300 font-mono mb-4">
                [SYSTEM WINDOW: DIRECT MESSAGE]
              </h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-blue-400 text-blue-100 placeholder-blue-300 focus:outline-none"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-blue-400 text-blue-100 placeholder-blue-300 focus:outline-none"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <textarea
                    required
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-blue-400 text-blue-100 placeholder-blue-300 h-40 resize-none focus:outline-none"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-blue-300 font-mono mb-4">
                    This message will be transmitted securely through the system network to the constellation 'Recruiter'.
                  </p>
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="text-blue-300 border border-blue-400 hover:bg-blue-500/10"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-400 text-gray-900 hover:bg-blue-300 font-bold"
                    >
                      Transmit
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
