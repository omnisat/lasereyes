'use client';
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { LaserEyesProvider } from '@omnisat/lasereyes';
export default function AppLayout({ children }) {
    return (_jsx(LaserEyesProvider, { children: _jsx(_Fragment, { children: children }) }));
}
