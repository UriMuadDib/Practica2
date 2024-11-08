import * as React from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={500} height={500} {...props}>
    <path
      d="M83.651 36.419h375.318v421.12H83.651z"
      style={{
        stroke: "#000",
        fill: "#123962",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M120.547 73.314h304.707v109.415H120.547zM120.547"
      style={{
        fill: "#fff",
        stroke: "#000",
      }}
    />

    <path
      d="M120.547 222.805h306.616v92.875H120.547z"
      style={{
        fill: "#953734",
        stroke: "#000",
      }}
    />
    <text
      x={214.059}
      y={136.291}
      style={{
        whiteSpace: "pre",
        fill: "#333",
        fontFamily: "Arial,sans-serif",
        fontSize: 28,
      }}
    >
      {"Edificio 1"}
    </text>
    <text
      x={208.97}
      y={269.879}
      style={{
        whiteSpace: "pre",
        fill: "#333",
        fontFamily: "Arial,sans-serif",
        fontSize: 28,
      }}
    >
      {"Edificio 2"}
    </text>
  </svg>
)
export default SvgComponent
