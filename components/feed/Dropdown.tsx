import React, { Dispatch, DispatchWithoutAction, SetStateAction } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function DropdownButton({clickEdit, clickDelete, handleDelete}:{
    clickEdit: Dispatch<SetStateAction<boolean>>;
    clickDelete: Dispatch<SetStateAction<boolean>>;
    handleDelete: ()=>void;
}) {
  const items = [
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    }
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="ghost" 
          className="border-none"
        >
          ...
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "default" : "default"}
            className={item.key === "delete" ? "" : ""}
            onClick={()=>{
                if(item.key === "delete"){clickDelete(true); 
                  handleDelete();
                }
                if(item.key==="edit"){
                    clickEdit(true)
                }
                 }}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
