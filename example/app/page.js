'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import { LaserEyesProvider, useLaserEyes } from '@omnisat/lasereyes';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { truncateString } from '@/lib/utils';
export default function Home() {
    return (_jsx(LaserEyesProvider, { children: _jsx(App, {}) }));
}
const App = () => {
    const wallets = [
        'unisat',
        'oyl',
        'xverse',
        'leather',
    ];
    return (_jsx("div", Object.assign({ className: 'flex flex-wrap gap-8' }, { children: wallets.map((walletName) => (_jsx(WalletCard, { walletName: walletName }, walletName))) })));
};
const WalletCard = ({ walletName, }) => {
    const { connect, disconnect, provider, address, hasUnisat, hasOyl, hasLeather, hasXverse, } = useLaserEyes();
    const hasWallet = {
        unisat: hasUnisat,
        oyl: hasOyl,
        leather: hasLeather,
        xverse: hasXverse,
    };
    return (_jsxs(Card, Object.assign({ className: 'grow' }, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, Object.assign({ className: 'uppercase text-center' }, { children: walletName })), _jsx(CardDescription, {})] }), _jsx(CardContent, { children: _jsxs("div", Object.assign({ className: 'flex flex-row space-between items-center gap-6' }, { children: [_jsx(Badge, Object.assign({ variant: provider === walletName ? 'success' : 'destructive' }, { children: provider === walletName ? 'Connected' : 'Disconnected' })), _jsx(Button, Object.assign({ disabled: !hasWallet[walletName], variant: provider === walletName ? 'destructive' : 'default', onClick: () => provider === walletName ? disconnect() : connect(walletName) }, { children: provider === walletName ? 'disconnect' : 'Connect' }))] })) }), _jsx(CardFooter, { children: _jsx("p", Object.assign({ className: 'text-gray-700 m-auto' }, { children: provider === walletName ? truncateString(address, 16) : '' })) })] })));
};
