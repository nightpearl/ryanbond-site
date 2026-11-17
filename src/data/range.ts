// The range of hats Ryan wears, and where each shows up in the featured stories.
// Evidence lines draw only on facts from Ryan's resumes and old site. No result numbers
// here: Ryan asked to keep results off the home page.

export const hats = [
  {
    id: 'product',
    label: 'Product',
    line: 'Owning vision, roadmap and P&L: Britannica’s consumer products, SteelSeries GG software, and an AI health app taken from concept to Beta.',
  },
  {
    id: 'projects',
    label: 'Programs & projects',
    line: 'Running the work: Fortune 500 retainers and geo-dispersed teams at Razorfish, and a steady bi-weekly release rhythm at SteelSeries.',
  },
  {
    id: 'strategy',
    label: 'Strategy',
    line: 'Deciding where to play: retention strategy at Epsilon, Britannica’s move to outcome-driven teams, and helping founders land on a fundable direction.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    line: 'Getting it noticed: brand campaigns for Kellogg’s and Microsoft, Scouting council communications, and marketing for theatre, podcasts and games.',
  },
  {
    id: 'production',
    label: 'Production',
    line: 'Making the thing itself: online games for kids, a voice adventure with a full cast, and video campaigns from concept to final cut.',
  },
] as const;

export type HatId = (typeof hats)[number]['id'];

// Which hats each featured story involved (by story id).
export const storyHats: Record<string, HatId[]> = {
  'scouting-america': ['strategy', 'marketing', 'production', 'product'],
  fractional: ['product', 'strategy', 'projects', 'production'],
  britannica: ['product', 'strategy', 'marketing', 'production', 'projects'],
  steelseries: ['product', 'projects', 'strategy', 'marketing'],
  advertising: ['projects', 'marketing', 'production'],
  gaming: ['production', 'projects', 'strategy', 'marketing'],
};
