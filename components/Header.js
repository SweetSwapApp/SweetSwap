import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    // <header className="pt-20 pb-12">
    //   <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
    //   <p className="text-2xl dark:text-white text-center">
    //     <Link href="/">
    //       {name}
    //     </Link>
    //   </p>
    // </header>
    <header className="mt-10">
      <div className="bg-[#091339] rounded-r-full w-[68%]">
        <h1 className="text-white font-bold text-[7vw] tablet:text-[46px] pl-[5%]">
          SweetSwap
          <Link href="/">
            <Image
              src="/logo.png" // Ensure the logo.png is in your public folder
              alt="Logo"
              width={300} // Set the width of the logo
              height={300} // Set the height of the logo
              className="inline-block rounded-r-full w-[30%]" // Add inline-block to align it with text if needed
            />
          </Link>
        </h1>
      </div>
    </header>
  );
}
