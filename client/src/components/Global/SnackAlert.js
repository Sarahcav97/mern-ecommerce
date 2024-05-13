import { Fragment, useEffect, useState } from 'react';
import { useAlert } from '../../context/AlertContext';

export default function SnackAlert({ variant, message }) {
	const { show, setShow } = useAlert();
	const [classes, setClasses] = useState('');

	useEffect(() => {
		switch (variant) {
			case 'error':
				setClasses('alert alert-danger');
				return;
			case 'success':
				setClasses('alert alert-success');
				break;
			case 'info':
				setClasses('alert alert-info');
				break;
			case 'warning':
				setClasses('alert alert-warning');
				break;
			default:
				setClasses('alert alert-primary');
		}
		return;
	}, [variant]);
	if (show)
		return (
			<div>
				{/* Global notification live region, render this permanently at the end of the document */}
				<div className={`${classes} fixed-top`}>
					<div className=''>
						{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
						<div className=''>
							<div className=''>
								<div className='d-flex flex-row-reverse'>
									<button
										type='button'
										id='close-snackbar'
										className='btn-close'
										onClick={() => {
											setShow(false);
										}}
									></button>
								</div>
								<div className=''>
									<p>{message}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
