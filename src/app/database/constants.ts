// Main
export const appTitle = `Ranker`;

// Environments
export const showDevFeatures = true;
export const urlHostIncludes = (string: string) => window.location.host.includes(string);
export const localEnv = urlHostIncludes(`local`) || urlHostIncludes(`:81`) ? showDevFeatures : false;
export const devEnv = localEnv || urlHostIncludes(`dev`) ? showDevFeatures : false;
export const prodEnv = urlHostIncludes(`kenzacloud.com`) && (!localEnv && !devEnv) ? true : false;
