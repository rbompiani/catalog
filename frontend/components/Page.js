import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
    return <div>
        <Header />
        <h2>I am the page component</h2>
        {children}
        {cool}
    </div>
}

Page.propTypes = {
    cool: PropTypes.string,
}