const API_BASE = (process.env.REACT_APP_FLASK_API_URL || '').replace(/\/$/, '');

export default API_BASE;