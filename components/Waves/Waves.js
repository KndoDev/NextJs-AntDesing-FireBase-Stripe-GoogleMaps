export default function Waves({ children }) {
  return (
    <div>
      {" "}
      {children}
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          width: 100%;
          height: 100vh;
          background: #e9ebee;
          overflow: hidden;
        }
        section .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("/wave.png");
          background-size: 1000px 100px;
        }
        section .wave.wave1 {
          animation: animate 30s linear infinite;
          z-index: 999;
          opacity: 1;
          animation-delay: 0s;
          bottom: 0;
        }
        section .wave.wave2 {
          animation: animate2 15s linear infinite;
          z-index: 998;
          opacity: 0.5;
          animation-delay: -5s;
          bottom: 10px;
        }
        section .wave.wave3 {
          animation: animate 30s linear infinite;
          z-index: 997;
          opacity: 0.2;
          animation-delay: -2s;
          bottom: 15px;
        }
        section .wave.wave4 {
          animation: animate2 5s linear infinite;
          z-index: 996;
          opacity: 0.7;
          animation-delay: -5s;
          bottom: 20px;
        }

        @keyframes animate {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }
        @keyframes animate2 {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: -1000px;
          }
        }
      `}</style>
    </div>
  )
}
