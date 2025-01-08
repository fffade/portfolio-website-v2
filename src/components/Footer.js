/*
  Omar Johnson
  Footer Component
  Implemented into every page in the website
*/

function Footer(props) {

  const { location } = props;

  // Adjust background colour based on component
  const bgColor = location.pathname === "/about" ? 'bg-neutral-900' : 'bg-slate-800';

  return (
    <footer className={`mt-auto p-8 flex flex-col ${bgColor} text-neutral-200 text-sm w-screen h-16 justify-start text-center`}>
      <p>Omar Johnson &copy;2025</p>
    </footer>
  );
}

export default Footer;
