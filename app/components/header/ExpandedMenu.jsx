import React from 'react'
import {
    DropDown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function ExpandedMenu() {
    const menuItems = {

    }
    
    return (
        <DropDown className="aboslute bg-white" id="expandedMenu" aria-label="Static Actions">
            <DropdownMenu>
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
            </DropdownItem>
      </DropdownMenu>
        </DropDown>
    );
}
