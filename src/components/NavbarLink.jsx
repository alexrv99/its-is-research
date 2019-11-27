import React from "react"

const NavbarLink = props => {
  return (
    <>
      <div className="link">
        <a>{props.text}</a>
        <div className="bar"></div>
      </div>

      <style jsx>{`
        .link {
          cursor: pointer;
        }

        .link:hover {
          filter: brightness(90%);
        }

        .bar {
          height: 2px;
          width: 30px;
          background-color: var(--text-color);
        }
      `}</style>
    </>
  )
}

export default NavbarLink
