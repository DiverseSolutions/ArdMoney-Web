declare module "use-mobile-detect-hook" {
  declare const useMobileDetect: () => {
    isMobile: () => boolean;
    isDesktop: () => boolean;
    isAndroid: () => boolean;
    isIos: () => boolean;
    isSSR: () => boolean;
  };
}
