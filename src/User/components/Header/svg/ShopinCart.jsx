import * as React from "react"

const ShoppingCart = (props) => (
  <svg
    width={18}
    height={18}
    fill={props.bool === '/shopbox' ? '#fff' : '#505050'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.938 15.188c0 .93.757 1.687 1.687 1.687a1.69 1.69 0 0 0 1.688-1.688A1.69 1.69 0 0 0 5.625 13.5a1.69 1.69 0 0 0-1.688 1.688Zm2.25 0a.563.563 0 0 1-1.125 0 .563.563 0 0 1 1.125 0ZM14.063 15.188a1.69 1.69 0 0 0-1.688-1.688 1.69 1.69 0 0 0-1.688 1.688c0 .93.758 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.688Zm-2.25 0a.563.563 0 0 1 1.124 0 .563.563 0 0 1-1.124 0ZM2.306 1.688l.966 9.176c.09.861.812 1.511 1.679 1.511h8.765c.79 0 1.484-.561 1.65-1.334l1.352-6.305a1.119 1.119 0 0 0-.226-.943 1.121 1.121 0 0 0-.875-.418H3.615l-.243-2.308a.563.563 0 0 0-.56-.504H1.125a.563.563 0 0 0 0 1.125h1.181ZM15.616 4.5l-1.35 6.305a.567.567 0 0 1-.55.445H4.95a.561.561 0 0 1-.56-.503L3.733 4.5h11.884Z"
    />
  </svg>
)

export default ShoppingCart