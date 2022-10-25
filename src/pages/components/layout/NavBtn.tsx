import React from "react";


export type navStateType = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBtn({ navState, setNavState }: navStateType) {
  return (
    <svg
      className="w-10 h-10 absolute right-5 top-3 z-50 lg:hidden"
      viewBox="0 0 24 24"
      onClick={() => setNavState(!navState)}
      
    >
      <path
        fill="currentColor"
        d={`${
          navState
            ? "M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"
            : "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        }`}
      />
    </svg>
  );
}

export default NavBtn;
