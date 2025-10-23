import React from "react";

const ChatBotButton = () => {
  const handleClick = () => {
    alert("Chatbot coming soon! 🚀");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* 🔵 Ripple Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="ripple-circle" style={{ animationDelay: "0s" }}></span>
        <span className="ripple-circle" style={{ animationDelay: "0.8s" }}></span>
        <span className="ripple-circle" style={{ animationDelay: "1.6s" }}></span>
      </div>

      {/* 🟡 Chatbot Button */}
      <button
        onClick={handleClick}
        className="relative  p-3  hover:scale-105 transition-transform"
      >
        <img
          src="/images/bot.png" // replace with your bot logo
          alt="Chat with us"
          className="w-20 h-20 object-contain"
        />
      </button>

      {/* ✅ Inline CSS Animation */}
      <style>{`
        .ripple-circle {
          position: absolute;
          width: 110px;
          height: 110px;
          border: 2px solid rgba(59, 130, 246, 0.7); /* Tailwind blue-500 tone */
          border-radius: 50%;
          animation: ripplePulse 3s ease-out infinite;
        }

        @keyframes ripplePulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.8);
            opacity: 0;
          }
          70% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatBotButton;
