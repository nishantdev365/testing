import Image from "next/image";

import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="menu_options">
          <div className="logo">
            <Image src={Logo} alt="Celebfie" width={180} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
