import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';


function Button({
    to,
    href,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    noAction = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (noAction) {
        Comp = "div";
    }

    const classes =
        [styles['wrapper'],
        className != null && className,
        primary && styles.primary,
        outline && styles.outline,
        text && styles.text,
        disabled && styles.disabled,
        rounded && styles.rounded,
        small && styles.small,
        large && styles.large
        ];

    return (
        <Comp className={classes.join(' ')} {...props}>
            {leftIcon && <span className={styles['icon']}>{leftIcon}</span>}
            <span className={styles['title']}>{children}</span>
            {rightIcon && <span className={styles['icon']}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
