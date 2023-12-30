import PropTypes from 'prop-types';

const Footer = ({ content }) => {
  if (!content) return null;

  return (
    <div>
      {/* {loading ? (
        skeleton({ width: 'w-52', height: 'h-6' })
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )} */}
    </div>
  );
};

Footer.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Footer;
