// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { NamedFC } from 'common/react/named-fc';
import { StartOverMenuItem } from 'DetailsView/components/start-over-component-factory';
import { CommandBarButton, IButton, IContextualMenuItem, IRefObject } from 'office-ui-fabric-react';
import * as React from 'react';
import * as styles from './command-bar-buttons-menu.scss';

export type CommandBarButtonsMenuProps = {
    renderExportReportButton: () => JSX.Element;
    getStartOverMenuItem: () => StartOverMenuItem;
    buttonRef: IRefObject<IButton>;
};

export const CommandBarButtonsMenu = NamedFC<CommandBarButtonsMenuProps>(
    'CommandBarButtonsMenu',
    props => {
        const overflowItems: IContextualMenuItem[] = [
            {
                key: 'export report',
                onRender: () => <div role="menuitem">{props.renderExportReportButton()}</div>,
            },
            {
                key: 'start over',
                ...props.getStartOverMenuItem(),
            },
        ];

        return (
            <CommandBarButton
                ariaLabel="More items"
                className={styles.commandBarButtonsMenu}
                role="button"
                menuIconProps={{
                    iconName: 'More',
                    className: styles.commandBarButtonsMenuButton,
                }}
                menuProps={{ items: overflowItems, className: styles.commandBarButtonsSubmenu }}
                componentRef={props.buttonRef}
            />
        );
    },
);
