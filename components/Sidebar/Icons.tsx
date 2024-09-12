import Image from "next/image"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import { VscPerson } from "react-icons/vsc"
import { FaHouseChimneyWindow } from "react-icons/fa6"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import { PiBankBold } from "react-icons/pi"
import { IoDocumentTextOutline } from "react-icons/io5"
import { IoSettingsOutline } from "react-icons/io5"

export const LogoIcon = () => <Image src="/Hidden.svg" height={44} width={44} alt="" />

export const DashboardIcon = () => <DashboardOutlinedIcon className="text-lg" />

export const AccountsIcon = () => <VscPerson className="text-lg" size={18} />

export const CardsIcon = () => <FaHouseChimneyWindow className="text-lg" size={18} />

export const TransactionsIcon = () => <BadgeOutlinedIcon className="text-lg" />

export const PaymentIcon = () => <PiBankBold className="text-lg" size={18} />

export const InvoicingIcon = () => <IoDocumentTextOutline className="text-lg" size={18} />

export const TradingIcon = () => <IoSettingsOutline className="text-lg" />

export const SettingsIcon = () => <SettingsOutlinedIcon className="text-lg" />
