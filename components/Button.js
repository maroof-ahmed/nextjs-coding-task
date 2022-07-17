import React from "react";
import PropTypes from "prop-types";
import Cn from "classnames";

export default function Button({
									primary,
									custom,
									onClick,
									children,
									...props
								}) {
									const isPrimary = primary
										? 'button--primary'
										: 'button--secondary';
									const isCustom = custom ? 'button--custom' : '';

									const classNames = Cn('button', isPrimary, isCustom);

									return (
										<button
											type="button"
											className={classNames}
											{...props}
											onClick={onClick}
										>
											{children}
										</button>
									);
								}

Button.propTypes = {
	primary: PropTypes.bool,
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	custom: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
  custom: false
};
