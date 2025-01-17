import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16 lg:mt-52 md:mt-52 mb-10">
      <div className="flex  justify-center gap-9">
        <Image 
        src="./picture/fb.svg"
        alt="Facebook Logo"
        width={30}
        height={30}
        />
        <Image 
        src="./picture/insta.svg"
        alt="Instagram Logo"
        width={30}
        height={30}
        />
        <Image 
        src="./picture/Vector.svg"
        alt="Twitter Logo"
        width={30}
        height={30}
        />
        <Image 
        src="./picture/Linkedin.svg"
        alt="LinkedIn Logo"
        width={30}
        height={30}
        />
      </div>
      <p className="text-center font-heebo py-10 text-lg font-semibold">
      Copyright &copy;2020 All rights reserved 
      </p>
    </footer>
  );
};

export default Footer;