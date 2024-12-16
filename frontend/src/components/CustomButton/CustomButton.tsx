import styles from './CustomButton.module.scss';
import cn from 'classnames';
import { CustomButtonProps } from './CustomButton.props';


export const CustomButton = ({ className, variant, onClick, size, children, ...props }: CustomButtonProps) => {

	const handleOnClick = () => {
		if ( onClick) {
			onClick()
		}
	}
	
	return (
		<button className={cn(styles.button, {
			[styles.primary]: variant == "primary",
			[styles.secondary]: variant == "secondary",
			[styles.s]: size == "s",
			[styles.m]: size == "m"
		}, className)}
			onClick={handleOnClick}
			{...props}>{children}</button>
	);
};

export default CustomButton;
