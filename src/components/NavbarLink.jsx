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
          color: lightgray;
        }

        .link:hover {
          color: white;
        }

        .bar {
          height: 2px;
          width: 30px;
          background-color: lightgray;
        }
      `}</style>
    </>
  )
}

export default NavbarLink
