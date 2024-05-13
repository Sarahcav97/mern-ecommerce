import React, { createContext, useContext, useEffect, useState } from 'react';
import SnackAlert from '../components/Global/SnackAlert';

const AlertContext = createContext();
// serverity can be one of the following:
// error, warning, success, info
const AlertProvider = ({ children }) => {
	const [severity, setSeverity] = useState('success');
	const [message, setMessage] = useState('');
	const [show, setShow] = useState(false);

	const hideNotification = () => {
		setTimeout(() => {
			setShow(false);
			setSeverity('');
			setMessage('');
		}, 3500);
	};
	/**
	 *
	 * takes in severity (error, warning, info, success) and a message.
	 * @param {string} s severity
	 * @param {string} m message
	 * @returns
	 */
	function setAlert(s, m) {
		setSeverity(s);
		setMessage(m);
		setShow(true);
		hideNotification();
		return;
	}
	useEffect(() => {
		hideNotification();
	}, [message, severity]);
	if (!children) return console.log('no children');

	return (
		<AlertContext.Provider
			value={{
				message,
				setMessage,
				severity,
				setSeverity,
				setAlert,
				show,
				setShow,
			}}
		>
			<SnackAlert
				variant={severity}
				message={message || ''}
			/>
			{children}
		</AlertContext.Provider>
	);
};

export const useAlert = () => useContext(AlertContext);

export default AlertProvider;
