import {
  XVERSE,
  WIZZ,
  LEATHER,
  MAGIC_EDEN,
  OKX,
  PHANTOM,
  UNISAT,
  OYL,
  ORANGE,
  ASIGNA,
} from "../consts/wallets";
import { WizzLogo } from "./wizz";
import { XverseLogo } from "./xverse";
import { LeatherLogo } from "./leather";
import { MagicEdenLogo } from "./magiceden";
import { OkxLogo } from "./okx";
import { PhantomLogo } from "./phantom";
import { UnisatLogo } from "./unisat";
import { OylLogo } from "./oyl";
import OrangeLogo from "./orange";

const WalletIcon = ({
  size,
  className,
  variant,
  walletName,
}: {
  size: number;
  className?: string;
  variant?: "first" | "second";
  walletName:
    | typeof UNISAT
    | typeof XVERSE
    | typeof MAGIC_EDEN
    | typeof LEATHER
    | typeof PHANTOM
    | typeof OKX
    | typeof MAGIC_EDEN
    | typeof OYL
    | typeof ORANGE
    | typeof WIZZ
    | typeof ASIGNA;
}) => {
  if (walletName === XVERSE) {
    return <XverseLogo size={size} className={className} variant={variant} />;
  } else if (walletName === WIZZ) {
    return <WizzLogo size={size} className={className} variant={variant} />;
  } else if (walletName === LEATHER) {
    return <LeatherLogo size={size} className={className} variant={variant} />;
  } else if (walletName === MAGIC_EDEN) {
    return (
      <MagicEdenLogo size={size} className={className} variant={variant} />
    );
  } else if (walletName === OKX) {
    return <OkxLogo size={size} className={className} variant={variant} />;
  } else if (walletName === PHANTOM) {
    return <PhantomLogo size={size} className={className} variant={variant} />;
  } else if (walletName === UNISAT) {
    return <UnisatLogo size={size} className={className} variant={variant} />;
  } else if (walletName === OYL) {
    return <OylLogo size={size} className={className} variant={variant} />;
  } else if (walletName === ORANGE) {
    return <OrangeLogo size={size} className={className} variant={variant} />;
  } else {
    return <LeatherLogo size={size} className={className} variant={variant} />;
  }
};

export { WalletIcon };
