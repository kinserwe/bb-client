export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container h-[24rem] flex items-center justify-center text-white">
        &copy; {new Date().getFullYear()} wiarale. All rights reserved.
      </div>
    </footer>
  );
};
