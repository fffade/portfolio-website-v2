/*
  Omar Johnson
  Footer Component
  Implemented into every page in the website
  Also includes the router location
*/
import { useLocation, useNavigate } from 'react-router';

/* Makeshift function to connect navigation history to component */
const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		const location = useLocation();
		return <Component history={history} location={location} {...props} />;
	};
	return Wrapper;
};


/* Returns the correct colour for the footer based on the given pathname */
const getFooterColour = (path) =>
{
	switch(path)
	{
		case '/about':
			return 'bg-neutral-900';

		case '/projects':
			return 'bg-slate-900';

		default:
			return 'bg-slate-800';
	}
}


/* Footer */
function Footer(props) {

  const { location } = props;

  // Adjust background colour based on component
  // TODO: Change this to a cleaner more organized method
  const bgColor = getFooterColour(location ? location.pathname : '/');

  return (
    <footer className={`mt-auto p-8 flex flex-col ${bgColor} text-neutral-200 text-lg sm:text-sm w-screen h-16 justify-start text-center`}>
      <p>Omar Johnson &copy;2025</p>
    </footer>
  );
}

export { withRouter, Footer };
