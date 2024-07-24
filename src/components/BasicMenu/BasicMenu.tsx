import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";

export default function BasicMenu({
  setSort,
  categories,
  children,
}: {
  setSort: (sort: string) => void;
  categories: string[];
  children: React.ReactNode;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChoose = (sort: string) => {
    setSort(sort);
    handleClose();
  };
  return (
    <div>
      <IconButton
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((category: string) => (
          <MenuItem
            onClick={() => onChoose(category)}
            key={category}
            value={category}
          >
            {category[0].toUpperCase() + category.slice(1)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
