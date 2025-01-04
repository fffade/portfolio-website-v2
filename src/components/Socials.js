/*
  Omar Johnson
  Socials component
  1/5/25

  Defines the little box with social links for each page
*/

function Socials() {
  return (
    <div className="fixed flex flex-row right-8 bottom-8 w-1/6 h-16 text-end text-gray-100 text-6xl float-right gap-x-12">
      <a href="#"><i className="fa-brands fa-instagram"></i></a>
      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
      <a href="#"><i className="fa-brands fa-github"></i></a>
    </div>
  );
}

export default Socials;
