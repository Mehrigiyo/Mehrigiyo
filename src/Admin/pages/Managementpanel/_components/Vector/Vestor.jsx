import * as React from "react"

const Vector = ({width=19, height=21,fill='none'}) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.16 5.6a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0Zm-4.8-2.4a.6.6 0 1 0-1.2 0V5h-1.8a.6.6 0 1 0 0 1.2h1.8V8a.6.6 0 1 0 1.2 0V6.2h1.8a.6.6 0 0 0 0-1.2h-1.8V3.2Zm0 15.622v-6.648a6.585 6.585 0 0 0 1.2-.222V20a.6.6 0 0 1-.954.485L7.36 15.942l-6.247 4.543A.6.6 0 0 1 .159 20V4.4a3 3 0 0 1 3-3h4.509c-.306.37-.57.773-.789 1.2H3.16a1.8 1.8 0 0 0-1.8 1.8v14.422l5.647-4.107a.6.6 0 0 1 .706 0l5.647 4.107Z"
      fill={fill}
    />
  </svg>
)

export default Vector
