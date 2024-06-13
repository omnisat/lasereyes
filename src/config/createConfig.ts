import { Config } from "../types";

export const createConfig = (config: Config): Config => {
  return {
    ...config,
  };
};
