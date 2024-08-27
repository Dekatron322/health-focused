import Image from "next/image"
import CompareArrowsIcon from "@mui/icons-material/CompareArrows"
import PaymentIcons from "@mui/icons-material/Payment"
import CallMissedOutgoingOutlinedIcon from "@mui/icons-material/CallMissedOutgoingOutlined"
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined"
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined"
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
