import React from 'react';
import './ProblemSolutionFlow.css';

const ProblemSolutionFlow = () => {
  return (
    <div className="flow-container ">
      {/* Left Side: The Problem (Chaos) */}
      <div className="flow-section problem-side ">
        <div className="chaos-bg"></div>
        <h3 className="flow-label">Caos Manual</h3>
        <div className="chaos-elements">
          <div className="file-icon file-red delay-1">📄</div>
          <div className="file-icon file-red delay-2">📑</div>
          <div className="file-icon file-red delay-3">📝</div>
          <div className="file-icon file-red delay-4">📂</div>
          <svg className="tangled-lines" viewBox="0 0 200 200">
            <path d="M10,10 Q50,100 10,190 T100,100 T190,10" fill="none" stroke="#ff6b6b" strokeWidth="2" />
            <path d="M190,190 Q100,50 10,100" fill="none" stroke="#ff8787" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Center: The Transformation (MARF) */}
      <div className="flow-center">
        <div className="processor-ring"></div>
        <div className="processor-core">
          <span role="img" aria-label="robot">🤖</span>
        </div>
        <div className="arrow-connector">→</div>
      </div>

      {/* Right Side: The Solution (Order) */}
      <div className="flow-section solution-side">
        <div className="order-bg"></div>
        <h3 className="flow-label text-black">Ordem Automatizada</h3>
        <div className="order-elements">
          <div className="stream-path"></div>
          <div className="file-icon file-blue flow-1">📄</div>
          <div className="file-icon file-blue flow-2">📄</div>
          <div className="file-icon file-blue flow-3">📄</div>
          <div className="target-icon">✅</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionFlow;
