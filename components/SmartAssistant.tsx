import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, Sparkles, User, Phone, Building } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

// Helper component for Lead Form
const LeadForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const [form, setForm] = useState({ name: '', phone: '', company: '' });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (form.name && form.phone) {
        onSubmit(form);
      }
    };
  
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm animate-in slide-in-from-bottom-2 mt-4 mx-4 mb-2">
         <h4 className="text-sm font-bold text-gray-900 mb-3">Quick Details</h4>
         <form onSubmit={handleSubmit} className="space-y-3">
             <div className="relative">
                 <User size={14} className="absolute left-3 top-3 text-gray-400"/>
                 <input 
                   type="text" 
                   placeholder="Your Name" 
                   required
                   className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                   value={form.name}
                   onChange={e => setForm({...form, name: e.target.value})}
                 />
             </div>
             <div className="relative">
                 <Phone size={14} className="absolute left-3 top-3 text-gray-400"/>
                 <input 
                   type="tel" 
                   placeholder="Phone Number" 
                   required
                   className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                   value={form.phone}
                   onChange={e => setForm({...form, phone: e.target.value})}
                 />
             </div>
             <div className="relative">
                 <Building size={14} className="absolute left-3 top-3 text-gray-400"/>
                 <input 
                   type="text" 
                   placeholder="Company (Optional)" 
                   className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                   value={form.company}
                   onChange={e => setForm({...form, company: e.target.value})}
                 />
             </div>
             <button type="submit" className="w-full bg-[#007aff] text-white font-bold py-2.5 rounded-xl text-sm hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20">
                 Send Details
             </button>
         </form>
      </div>
    );
};

export const SmartAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I can help you find the perfect packaging machine. I can also arrange a callback from our sales team—just let me know what you are looking for!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]); // Added isLoading to dependency to scroll on loading state change

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim() || isLoading) return;

    setInput('');
    
    // Create the new history array
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: textToSend }];
    
    // Update UI immediately
    setMessages(newHistory);
    setIsLoading(true);

    // Pass the FULL history to the service so it remembers Name/Phone
    const responseText = await getGeminiResponse(newHistory);

    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const toggleChat = () => {
      setIsOpen(!isOpen);
      if (showBadge) setShowBadge(false);
  }

  // Check if the last message from the model is requesting lead info
  const lastMessage = messages[messages.length - 1];
  const showLeadForm = !isLoading && lastMessage?.role === 'model' && (
      lastMessage.text.includes('**Name**') || 
      lastMessage.text.includes('**Phone Number**')
  );

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 max-h-[80vh] h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300 ring-1 ring-black/5">
          
          {/* Header */}
          <div className="bg-white p-4 border-b border-gray-100 flex justify-between items-center bg-opacity-80 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-black rounded-xl text-white shadow-md">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Huntech AI</h3>
                <span className="text-[10px] font-medium text-green-600 flex items-center gap-1 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#fbfbfd]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#007aff] text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ 
                      __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') 
                  }} />
                </div>
              </div>
            ))}
            
            {isLoading && (
               <div className="flex justify-start">
               <div className="bg-white border border-gray-100 text-gray-800 p-4 rounded-2xl rounded-bl-none flex items-center gap-3 shadow-sm">
                 <Loader2 size={18} className="animate-spin text-[#007aff]" />
                 <span className="text-sm font-medium text-gray-500">Processing...</span>
               </div>
             </div>
            )}

            {/* In-Chat Lead Form */}
            {showLeadForm && (
                <LeadForm onSubmit={(data) => {
                    const formattedResponse = `My Name is ${data.name}, Phone: ${data.phone}. Company: ${data.company || 'Not specified'}.`;
                    handleSend(formattedResponse);
                }} />
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 z-10 shrink-0">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-2 focus-within:ring-2 focus-within:ring-[#007aff]/20 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500 px-4 h-10"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${input.trim() ? 'bg-[#007aff] text-white shadow-md transform hover:scale-105' : 'bg-gray-200 text-gray-400'}`}
              >
                <Send size={18} className={input.trim() ? 'ml-0.5' : ''} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button Container */}
      <div className="relative group">
         {/* Tooltip Bubble */}
         {!isOpen && showBadge && (
            <div className="absolute bottom-full right-0 mb-4 w-max pointer-events-none">
                <div className="bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-in slide-in-from-bottom-2 duration-500">
                    <Sparkles size={16} className="text-[#007aff]" />
                    <span className="text-sm font-bold text-gray-800">Ask our AI Expert</span>
                    {/* Triangle */}
                    <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45"></div>
                </div>
            </div>
         )}
         
         <button 
            onClick={toggleChat}
            className={`
              h-16 w-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ease-out relative
              ${isOpen ? 'bg-[#1d1d1f] rotate-90 scale-90' : 'bg-[#007aff] hover:scale-105 hover:bg-[#0062cc]'}
              text-white ring-4 ring-white/80 z-50
            `}
          >
            {isOpen ? <X size={28} /> : <Bot size={32} />}
            
            {/* Notification Dot */}
            {!isOpen && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
                </span>
            )}
        </button>
      </div>
    </div>
  );
};