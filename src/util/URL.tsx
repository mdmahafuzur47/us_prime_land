function setHashInUrl(hash: string): void {
    if (typeof window !== "undefined") {
      // Check if the provided hash starts with '#' and remove it if necessary
      const cleanHash = hash.startsWith("#") ? hash.substring(1) : hash;
      // Update the URL hash
      window.location.hash = cleanHash;
    }
  }


export const URL = {
    setHashInUrl,
}