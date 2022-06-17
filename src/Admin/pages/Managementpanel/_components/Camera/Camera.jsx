import * as React from "react"

const Camera = (props) => (
  <svg
    width={19}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.462 8.64 13.934 6.3l2.528-2.34v4.68ZM11.96 9.9a.9.9 0 0 1-.9.9h-8.1a.9.9 0 0 1-.9-.9V2.7a.9.9 0 0 1 .9-.9h8.1a.9.9 0 0 1 .9.9v7.2Zm5.412-7.969a1.545 1.545 0 0 0-1.666.276l-1.945 1.8V2.7c0-1.489-1.211-2.7-2.7-2.7h-8.1a2.703 2.703 0 0 0-2.7 2.7v7.2c0 1.49 1.211 2.7 2.7 2.7h8.1c1.489 0 2.7-1.21 2.7-2.7V8.594l1.945 1.8a1.551 1.551 0 0 0 1.666.276c.548-.24.889-.752.889-1.336V3.267c0-.584-.341-1.096-.89-1.336Z"
      fill="#505050"
    />
  </svg>
)

export default Camera