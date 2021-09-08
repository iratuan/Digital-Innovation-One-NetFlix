import { Item } from "./styles";

const NavItem = ({ link, children }) => <Item href={link}>{children}</Item>;
export default NavItem;
