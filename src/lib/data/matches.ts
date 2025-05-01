export const matches = [
	{
		opponent: 'Team Drip',
		date: '2025-05-10',
		time: '18:00 AEST',
		result: null
	},
	{
		opponent: 'GigaChads United',
		date: '2025-05-13',
		time: '20:00 AEST',
		result: 'Win 2-1'
	},
	{
		opponent: 'Bronze 5 Blitzers',
		date: '2025-05-16',
		time: '16:00 AEST',
		result: 'Loss 0-2'
	}
];
// Add more past matches with silly results and future matches
matches.push(
	{
		opponent: 'Keyboard Warriors',
		date: '2025-05-20',
		time: '19:00 AEST',
		result: 'Win 999-0'
	},
	{
		opponent: 'The Spaghetti Coders',
		date: '2025-05-23',
		time: '17:30 AEST',
		result: 'Draw 404-404'
	},
	{
		opponent: 'Syntax Error Squad',
		date: '2025-05-27',
		time: '21:00 AEST',
		result: 'Win by forfeit (opponent code crashed)'
	},
	{
		opponent: 'Git Merge Conflict Crew',
		date: '2025-06-01',
		time: '18:45 AEST',
		result: 'Loss (our team accidentally deleted itself)'
	},
	{
		opponent: 'Quantum Computing Pioneers',
		date: '2045-08-15',
		time: '20:00 AEST',
		result: null
	},
	{
		opponent: 'Mars Colonial Force',
		date: '2071-03-22',
		time: '14:00 MARS TIME',
		result: null
	},
	{
		opponent: 'AI Overlords',
		date: '2099-12-31',
		time: '23:59 AEST',
		result: null
	},
	{
		opponent: 'Time Travelers United',
		date: '3025-01-01',
		time: '00:01 AEST',
		result: null
	},
	{
		opponent: 'Intergalactic Byte Benders',
		date: '2150-06-10',
		time: '12:00 UNIVERSAL',
		result: null
	}
);

// Sort matches to show upcoming ones at the top, ordered by date
matches.sort((a, b) => {
	// If one is upcoming and one is past, put upcoming first
	if (a.result === null && b.result !== null) return -1;
	if (a.result !== null && b.result === null) return 1;

	// If both are the same type (upcoming or past), sort by date
	return new Date(a.date).getTime() - new Date(b.date).getTime();
});
