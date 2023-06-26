import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '..';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import Header from './Header';
import { useState } from 'react';


const defaultFn = () => { };

function Menu({ offset ,children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={styles['menu-list']} tabIndex="-1" {...attrs}>
            <PopperWrapper className={styles['menu-popper']}>
                {history.length > 1 && (
                    <Header
                        title="Language"
                        onBack={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                    />
                )}
                <div className={styles['menu-body']}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={offset}
            hideOnClick={false}
            placement="bottom-end"
            render={renderResult}
            //reset menu when click out
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;