import Image from "next/image"
import CompareArrowsIcon from "@mui/icons-material/CompareArrows"
import PaymentIcons from "@mui/icons-material/Payment"
import CallMissedOutgoingOutlinedIcon from "@mui/icons-material/CallMissedOutgoingOutlined"
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined"
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined"
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined"

export const LogoIcon = () => <Image src="/Hidden.svg" height={44} width={44} alt="" />

export const DashboardIcon = () => <TimelapseOutlinedIcon className="text-lg" />

export const AccountsIcon = () => <InboxOutlinedIcon className="text-lg" />

export const CardsIcon = () => <PaymentIcons className="text-lg" />

export const TransactionsIcon = () => <CompareArrowsIcon className="text-lg" />

export const PaymentIcon = () => <CallMissedOutgoingOutlinedIcon className="text-lg" />

export const InvoicingIcon = () => <ArticleOutlinedIcon className="text-lg" />

export const TradingIcon = () => <InsightsOutlinedIcon className="text-lg" />

export const ReportsIcon = () => <EqualizerOutlinedIcon className="text-lg" />

export const UsdIcon = () => <Image src="/USD.svg" height={20} width={20} alt="" />

export const EurIcon = () => <Image src="/EUR.svg" height={20} width={20} alt="" />

export const GbpIcon = () => <Image src="/GBP.svg" height={20} width={20} alt="" />

export const SettingsIcon = () => <SettingsOutlinedIcon className="text-lg" />

export const PlusIcon = () => <ControlPointOutlinedIcon className="text-lg" />
