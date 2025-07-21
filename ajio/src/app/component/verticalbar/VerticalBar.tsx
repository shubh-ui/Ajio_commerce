import React from 'react';

const VerticalBarsUI = ({onChageGrid, grid} : {onChageGrid: any, grid : number}) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="flex gap-1">
        {/* First container with 3 bars */}
        <div className="border border-gray-300 bg-white px-1 py-0.5">
          <div className="flex gap-0.5 cursor-pointer" onClick={() => onChageGrid(3)}>
            {[1, 2, 3].map((bar) => (
              <div
                key={bar}
                className={`w-1 h-3 ${grid == 3 ? 'bg-gray-400' : 'bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Second container with 5 bars */}
        <div className="border border-gray-300 bg-white px-1 py-0.5">
          <div className="flex gap-0.5 cursor-pointer" onClick={() => onChageGrid(5)}>
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className={`w-1 h-3 ${grid == 5 ? 'bg-gray-400' : 'bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBarsUI;