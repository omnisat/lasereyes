import { ReactNode } from "react";
import { Config, LaserEyesContextType } from "../types";
declare const useLaserEyes: () => LaserEyesContextType;
declare const LaserEyesProvider: ({ children, config, }: {
    children: ReactNode;
    config: Config;
}) => import("react/jsx-runtime").JSX.Element;
export { LaserEyesProvider, useLaserEyes };
//# sourceMappingURL=LaserEyesProvider.d.ts.map