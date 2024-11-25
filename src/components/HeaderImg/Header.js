import React from "react";

function Header() {
  return (
    <>
      <div className="bg-black flex items-center justify-center h-[400px] select-none">
        <img
          src="/images/Stage-Revolution-Black-Logo-1920x1080.webp"
          alt="Header Banner"
          width={700}
          height={300}
          className="m-auto"
        />
      </div>
      <hr className="border-t border-gray-500" />
    </>
  );
}

export default Header;
