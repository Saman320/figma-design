// import NavbarLi from "./NavbarLi"

// const Navbar = () => {
//   return (
//     <nav className='text-black'>
//    <ul className='flex justify-center md:justify-end lg:justify-end gap-6 p-8 font-inter my-4 mx-4'>
//     <NavbarLi name='Works' href='/' />
//     <NavbarLi name='Blog' href='/'/>
//     <NavbarLi name='Contact' href='/'/>
//     </ul>     
//     </nav>
//   )
// }

// export default Navbar



import NavbarLi from "./NavbarLi";

const Navbar = () => {
  return (
    <nav className="text-black">
      <ul className="flex justify-center md:justify-end lg:justify-end gap-4 sm:gap-6 p-4 sm:p-8 font-inter my-2 sm:my-4 mx-2 sm:mx-4">
        <NavbarLi name="Works" href="/" />
        <NavbarLi name="Blog" href="/" />
        <NavbarLi name="Contact" href="/" />
      </ul>
    </nav>
  );
};

export default Navbar;
