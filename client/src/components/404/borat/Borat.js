import React, { useState, useEffect } from "react";
import range from "lodash.range";
import { scaleLinear } from "d3-scale";
import { interpolateInferno } from "d3-scale-chromatic";
import { easeElastic } from "d3-ease";
import { NodeGroup } from "react-move";
import "./borat.css";

const linear = scaleLinear().domain([0, window.innerWidth]);

function Borat() {
  const [axis, setAxis] = useState({ x: 250, y: 300 });
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = ({ pageX: x, pageY: y }) => {
    setAxis({ x, y });
  };

  return (
    <div className="borat">
      <NodeGroup
        data={range(6).map((d) => {
          return {
            key: `key-${d}`,
            x: axis.x,
            y: axis.y,
          };
        })}
        keyAccessor={(d) => d.key}
        start={(data) => {
          return { x: data.x, y: data.y };
        }}
        update={(data, index) => {
          return {
            x: [data.x],
            y: [data.y],
            timing: {
              delay: index * 120,
              duration: 2500,
              ease: easeElastic,
            },
          };
        }}
      >
        {(nodes) => (
          <div>
            {nodes.map(({ key, data, state: { x, y } }, index) => (
              <div
                className="boratMan"
                key={key}
                style={{
                  backgroundColor: interpolateInferno(linear(x)),
                  WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  zIndex: nodes.length - index + 5000,
                }}
              />
            ))}
          </div>
        )}
      </NodeGroup>
    </div>
  );
}

export default Borat;
