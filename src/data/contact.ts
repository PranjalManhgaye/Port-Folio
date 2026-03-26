export type ContactInfo = {
  email?: string;
  locationLine: string;
  socials: {
    github: string;
    linkedin?: string;
    leetcode?: string;
  };
};

export const contact: ContactInfo = {
  // NOTE: replace with your real email to enable the mailto contact buttons.
  email: "manhgayepranjal@gmail.com",
  locationLine: "Gwalior, India",
  socials: {
    github: "https://github.com/PranjalManhgaye",
    linkedin: undefined,
    leetcode: undefined,
  },
};

