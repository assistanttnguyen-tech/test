/**
 * STANTON UNIVERSITY - ACTIVITIES & EVENTS
 * JavaScript for WordPress Integration
 * 
 * NOTE: Replace image URLs with your actual WordPress media URLs
 */

// ========================================
// DATA CONFIGURATION
// ========================================

// Banner Images - REPLACE WITH YOUR WORDPRESS MEDIA URLS
const bannerImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80'
];

// Events Data - REPLACE WITH YOUR WORDPRESS CUSTOM POST TYPE DATA
const events = [
    {
        id: 1,
        title: 'ISMC Club Challenge',
        date: 'March 8, 2026 • 2:00 PM - 5:00 PM',
        location: 'Computer Lab, Building A',
        category: 'Competition',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
        description: 'Test your programming and problem-solving skills in an exciting team-based competition.',
        fullDescription: 'Join the Information Systems and Management Club (ISMC) for an exciting afternoon of competitive programming and technical challenges.\n\nThis event brings together students passionate about technology, coding, and problem-solving. Teams will compete in various challenges including algorithm design, web development tasks, database problem-solving, and system design scenarios.\n\nWhether you\'re a beginner or advanced programmer, there are challenges for all skill levels. Form a team with your friends or join individually and we\'ll match you with teammates. Prizes will be awarded to top-performing teams!\n\nRefreshments will be provided. Bring your laptop and be ready to code!',
        featured: true,
        capacity: '80 participants',
        registered: 67,
        maxCapacity: 80,
        section: 'featured'
    },
    {
        id: 2,
        title: 'Cultivating Mindful Leadership Seminar',
        date: 'March 9, 2026 • 9:00 AM - 12:00 PM',
        location: 'Conference Center, Building B',
        category: 'Leadership',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        description: 'Develop mindful leadership skills and learn techniques to enhance your professional effectiveness.',
        fullDescription: 'Join us for an inspiring seminar on cultivating mindful leadership in today\'s fast-paced world.\n\nThis interactive session will explore principles of mindful leadership and self-awareness, techniques for effective decision-making under pressure, building resilient and collaborative teams, managing stress and maintaining work-life balance, and practical mindfulness exercises for daily practice.\n\nLed by renowned leadership coaches and mindfulness practitioners, this seminar is designed for students aspiring to leadership roles, current student organization leaders, and anyone interested in personal and professional development.\n\nLight refreshments will be provided. Space is limited, so register early!',
        featured: true,
        capacity: '60 participants',
        registered: 60,
        maxCapacity: 60,
        section: 'featured'
    },
    {
        id: 3,
        title: 'Class of 2026 Graduation Ceremony',
        date: 'March 10, 2026 • 10:00 AM - 12:30 PM',
        location: 'University Auditorium',
        category: 'Academic',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        description: 'Celebrate the achievements of our graduating class at this special commencement ceremony.',
        fullDescription: 'Celebrate the achievements of our graduating class at this special commencement ceremony honoring the Class of 2026.\n\nThis formal ceremony will recognize the hard work and dedication of our graduates. Family members and friends are warmly invited to attend and celebrate this milestone.\n\nThe ceremony will feature keynote speakers, the conferral of degrees, and recognition of academic achievements. A reception will follow in the Grand Hall.',
        capacity: '2,000 seats',
        registered: 1456,
        maxCapacity: 2000,
        section: 'upcoming'
    },
    {
        id: 4,
        title: 'Professional Communication Skills Through the ISM Club',
        date: 'March 11, 2026 • 2:00 PM - 5:00 PM',
        location: 'Conference Room, Building C',
        category: 'Professional Development',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
        description: 'Enhance your professional communication skills with practical workshops and expert guidance.',
        fullDescription: 'Join the Information Systems and Management (ISM) Club for an intensive workshop designed to elevate your professional communication skills.\n\nThis comprehensive session covers effective business communication strategies, professional email and written correspondence, presentation skills and public speaking, active listening and interpersonal communication, networking and professional etiquette, and digital communication in the modern workplace.\n\nLed by industry professionals and faculty advisors, this workshop combines theory with hands-on practice. Participants will engage in role-playing exercises, group discussions, and receive personalized feedback.\n\nWhether you\'re preparing for internships, job interviews, or enhancing your leadership capabilities, this workshop will provide essential skills for success in any professional environment.\n\nRefreshments will be provided. Limited seats available - register early!',
        capacity: '45 participants',
        registered: 38,
        maxCapacity: 45,
        section: 'upcoming'
    },
    {
        id: 5,
        title: 'International Cuisine Presentation',
        date: 'March 12, 2026 • 5:00 PM - 8:00 PM',
        location: 'University Culinary Arts Center',
        category: 'Cultural',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
        description: 'Experience authentic international cuisine prepared and presented by talented culinary students.',
        fullDescription: 'Join us for an extraordinary culinary journey around the world, featuring authentic dishes prepared and presented by our talented culinary arts students.\n\nThis special presentation showcases live cooking demonstrations from various cultures, traditional recipes and cooking techniques, cultural storytelling through food, tasting opportunities of international dishes, meet the student chefs and learn their culinary inspirations, and recipe cards and cooking tips to take home.\n\nFrom Asian delicacies to European classics, Mediterranean flavors to Latin American specialties, experience the rich diversity of world cuisine all in one evening.\n\nTickets are $20 for students and include all tastings. A portion of proceeds supports the Culinary Arts scholarship fund. Limited seats available - reserve your spot today!',
        capacity: '150 attendees',
        registered: 42,
        maxCapacity: 150,
        section: 'upcoming'
    },
    {
        id: 6,
        title: 'Culinary Arts Showcase',
        date: 'March 13, 2026 • 6:00 PM - 9:00 PM',
        location: 'University Dining Hall',
        category: 'Cultural',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
        description: 'Discover culinary traditions from around the world prepared by our talented students.',
        fullDescription: 'Discover culinary traditions from around the world prepared by our talented students and guest chefs.\n\nThis evening celebration of food and culture features live cooking demonstrations, tasting stations with international cuisine, meet the chefs sessions, and recipe sharing and cooking tips.\n\nTickets are $15 for students and include all tastings. A portion of proceeds supports the Culinary Arts scholarship fund.',
        capacity: '200 attendees',
        registered: 185,
        maxCapacity: 200,
        section: 'student'
    },
    {
        id: 7,
        title: 'ISM Club Resume Workshop',
        date: 'March 14, 2026 • 1:00 PM - 4:00 PM',
        location: 'Career Services Center, Building C',
        category: 'Career',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        description: 'Get expert feedback on your resume and learn how to craft a standout professional profile.',
        fullDescription: 'Join the Information Systems and Management (ISM) Club for a comprehensive resume workshop designed to help you create a professional resume that stands out to employers.\n\nThis hands-on workshop includes one-on-one resume reviews with career advisors, best practices for resume formatting and design, how to highlight your skills and achievements effectively, tailoring your resume for specific industries and positions, common mistakes to avoid, cover letter writing tips, and LinkedIn profile optimization.\n\nBring your current resume (or draft) on a laptop for personalized feedback. Our experienced career counselors and industry professionals will provide actionable advice to strengthen your application materials.\n\nWhether you\'re applying for internships, part-time positions, or preparing for your post-graduation job search, this workshop will give you the tools and confidence to present yourself professionally.\n\nRefreshments will be provided. Limited spots available - register early!',
        capacity: '40 participants',
        registered: 28,
        maxCapacity: 40,
        section: 'academic'
    },
    {
        id: 8,
        title: 'Culinary Excellence at California Food Expo',
        date: 'March 15, 2026 • 10:00 AM - 6:00 PM',
        location: 'California Convention Center',
        category: 'Exhibition',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
        description: 'Stanton culinary students showcase innovative food products at California\'s premier industry exhibition.',
        fullDescription: 'Join us in celebrating our culinary students\' exceptional representation at the California Food Expo, one of the premier food industry exhibitions on the West Coast.\n\nThis prestigious event showcases student-led professional exhibition booth featuring NAFTA Distributors products, live product demonstrations and expert tastings, professional networking with industry leaders, distributors, and buyers, hands-on experience with the latest food trends and technologies, career connections with potential employers and industry partners, and real-world business development and marketing experience.\n\nOur talented students represent Stanton University\'s renowned Culinary Arts and Food Science programs, showcasing their industry knowledge and professional skills to thousands of food industry professionals, distributors, retailers, and culinary enthusiasts.\n\nThis invaluable opportunity allows students to gain real-world exhibition experience, build meaningful industry connections, apply classroom knowledge in a professional setting, and develop essential business and presentation skills that will serve them throughout their careers.\n\nTransportation and industry badges provided. Register early as student participant spots are limited!',
        capacity: '20 student participants',
        registered: 20,
        maxCapacity: 20,
        section: 'student'
    },
    {
        id: 9,
        title: 'Resume Review & Professional Headshot Workshop',
        date: 'March 16, 2026 • 10:00 AM - 4:00 PM',
        location: 'Career Services Center, Building C',
        category: 'Career',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
        description: 'Get personalized resume feedback and professional headshots for your career portfolio.',
        fullDescription: 'Elevate your professional presence with our comprehensive Resume Review & Professional Headshot Workshop - a one-stop opportunity to perfect your career application materials.\n\nThis exclusive full-day workshop offers one-on-one resume reviews with experienced career advisors and industry professionals for personalized feedback, professional headshot photography perfect for LinkedIn, job applications, and professional portfolios, resume optimization including best practices for formatting, content, and tailoring, personal branding session to create a cohesive professional brand across all platforms, cover letter consultation and tips on writing compelling cover letters, and LinkedIn profile review to optimize your online professional presence.\n\nWhat to Expect: 30-minute individual resume review sessions (appointments scheduled upon registration), professional photography station with quick turnaround - receive your edited photos within 48 hours, drop-in consultation area for quick questions. Bring your current resume on a laptop or printed copy, and dress professionally for your headshot (solid colors recommended, avoid busy patterns).\n\nPerfect for students preparing for internships, job searches, graduate school applications, or anyone looking to update their professional materials. All services are completely free for Stanton University students!\n\nSpace is limited for individual resume review sessions - register early to secure your preferred time slot. Walk-ins welcome for headshots based on availability.',
        capacity: '50 scheduled appointments + walk-ins',
        registered: 33,
        maxCapacity: 50,
        section: 'academic'
    },
    {
        id: 10,
        title: 'Friendsgiving Meet & Greet',
        date: 'March 17, 2026 • 4:00 PM - 7:00 PM',
        location: 'Student Union Lounge',
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        description: 'Celebrate friendship and gratitude at our annual Friendsgiving gathering.',
        fullDescription: 'Join fellow students for a warm and welcoming Friendsgiving celebration - a perfect opportunity to connect with friends old and new before the holiday break.\n\nThis special event features potluck-style dinner with traditional Thanksgiving favorites, icebreaker activities and networking games, gratitude wall where students can share what they\'re thankful for, photo booth with festive props, prizes and giveaways throughout the evening, and music and entertainment.\n\nWhether you\'re staying on campus for the holidays or looking to connect with the Stanton community, this is the perfect opportunity to build friendships and create lasting memories. International students especially welcome!\n\nIf you\'d like to contribute a dish, please sign up during registration. Otherwise, just bring yourself and an appetite for fun and friendship!\n\nFree admission for all students. Space is limited, so RSVP early!',
        capacity: '100 students',
        registered: 76,
        maxCapacity: 100,
        section: 'student'
    },
    {
        id: 11,
        title: 'Voice of Experience',
        date: 'March 18, 2026 • 9:00 AM - 5:00 PM',
        location: 'Science Building Auditorium',
        category: 'Professional Development',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
        description: 'Learn from industry leaders and successful alumni sharing their career journeys and insights.',
        fullDescription: 'Join us for an inspiring day of knowledge sharing and networking at our annual "Voice of Experience" event.\n\nThis premier professional development event brings together distinguished industry leaders, successful alumni, and experienced professionals to share their career journeys, insights, and lessons learned.\n\nEvent highlights include keynote presentations from industry veterans, panel discussions on career pathways and industry trends, breakout sessions by field (Business, Technology, Healthcare, Engineering, Arts), Q&A sessions with speakers, networking opportunities with professionals and alumni, career advice and mentorship connections, and industry insights and best practices.\n\nWhether you\'re exploring career options, seeking mentorship, or looking to expand your professional network, this event offers invaluable opportunities to learn from those who\'ve successfully navigated their career paths.\n\nPerfect for students at all levels - from freshmen exploring majors to seniors preparing for graduation. Hear real-world perspectives that you won\'t find in textbooks.\n\nFree admission for all students. Lunch will be provided. Register early as seating is limited!',
        capacity: '300 attendees',
        registered: 198,
        maxCapacity: 300,
        section: 'academic'
    },
    {
        id: 12,
        title: 'Wellness Week: Yoga & Meditation Session',
        date: 'March 19, 2026 • 7:00 AM - 8:30 AM',
        location: 'Campus Recreation Center',
        category: 'Wellness',
        image: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=800&q=80',
        description: 'Start your day with rejuvenating yoga and guided meditation to enhance wellness and reduce stress.',
        fullDescription: 'Begin your morning with a peaceful yoga and meditation session designed specifically for students managing academic stress.\n\nThis wellness session offers guided yoga suitable for all levels (beginners welcome!), breathing exercises and mindfulness techniques, meditation practices for stress relief, tips for maintaining wellness during busy academic periods, and meet other wellness-minded students.\n\nBring your own yoga mat or borrow one from us. Wear comfortable clothing and arrive a few minutes early to settle in.\n\nPart of our Wellness Week initiative promoting student health and well-being. Free for all students!',
        capacity: '30 participants',
        registered: 18,
        maxCapacity: 30,
        section: 'upcoming'
    },
    {
        id: 13,
        title: 'Photography Club Workshop',
        date: 'March 20, 2026 • 3:00 PM - 6:00 PM',
        location: 'Arts Building, Room 205',
        category: 'Creative Arts',
        image: 'https://images.unsplash.com/photo-1539741642672-b3fada926d3a?w=800&q=80',
        description: 'Learn photography fundamentals and advanced techniques from professional photographers.',
        fullDescription: 'Join the Photography Club for an engaging workshop covering essential photography skills and creative techniques.\n\nWorkshop topics include camera basics and manual settings, composition and framing techniques, lighting fundamentals, portrait and landscape photography, photo editing basics, and building your photography portfolio.\n\nBring your camera (DSLR, mirrorless, or smartphone) and laptop if you have one. We\'ll have hands-on shooting exercises and live editing demonstrations.\n\nPerfect for beginners and intermediate photographers looking to improve their skills. Professional photographers will provide personalized feedback on your work.\n\nRefreshments provided. Limited spots available!',
        capacity: '25 participants',
        registered: 19,
        maxCapacity: 25,
        section: 'student'
    },
    {
        id: 14,
        title: 'Game Night Extravaganza',
        date: 'March 21, 2026 • 6:00 PM - 10:00 PM',
        location: 'Student Union Game Room',
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?w=800&q=80',
        description: 'Unwind with board games, video games, and friendly competition at our monthly game night.',
        fullDescription: 'Take a break from studying and join us for an epic Game Night filled with fun, food, and friendly competition!\n\nEvent features wide selection of board games (strategy, party, classics), video game tournaments (prizes for winners!), card game stations, trivia challenges, pizza and snacks provided, and meet new friends and form gaming groups.\n\nWhether you\'re into classic board games like Settlers of Catan and Ticket to Ride, or prefer video game competitions, we\'ve got something for everyone.\n\nCome solo or bring friends - we\'ll help you find your perfect gaming match. All skill levels welcome!\n\nFree admission and free food for all students. Just bring your competitive spirit!',
        capacity: '80 students',
        registered: 52,
        maxCapacity: 80,
        section: 'student'
    },
    {
        id: 15,
        title: 'Entrepreneurship Pitch Competition',
        date: 'March 22, 2026 • 2:00 PM - 6:00 PM',
        location: 'Business School Auditorium',
        category: 'Entrepreneurship',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        description: 'Present your startup ideas to a panel of investors and compete for funding and mentorship.',
        fullDescription: 'Pitch your innovative business idea at Stanton University\'s annual Entrepreneurship Competition and compete for cash prizes, mentorship, and startup resources!\n\nCompetition highlights include present your startup idea to successful entrepreneurs and investors, compete for $10,000 in total prize money (First place: $5,000 + 3 months of business mentorship, Second place: $3,000 + business plan consultation, Third place: $2,000 + entrepreneurship resources), network with venture capitalists and angel investors, receive feedback from industry experts, and connect with potential co-founders and team members.\n\nOpen to all students with innovative business ideas in any industry - tech, social enterprise, consumer products, services, and more.\n\nApplication deadline: March 15. Selected finalists will be notified by March 18 and will pitch at the main event.\n\nAudience welcome! Come support student entrepreneurs and be inspired by innovative ideas.\n\nFree admission. Register to pitch or attend as audience member.',
        capacity: '15 presenting teams + 150 audience',
        registered: 12,
        maxCapacity: 15,
        section: 'academic'
    },
    {
        id: 16,
        title: 'Industry Networking Mixer',
        date: 'March 23, 2026 • 5:00 PM - 8:00 PM',
        location: 'University Conference Center',
        category: 'Networking',
        image: 'https://images.unsplash.com/photo-1582848890404-ed087c1b3f0c?w=800&q=80',
        description: 'Connect with industry professionals and alumni in an informal networking environment.',
        fullDescription: 'Build valuable professional connections at our Industry Networking Mixer - a relaxed evening designed to connect students with professionals across various industries.\n\nEvent features meet professionals from technology, finance, healthcare, marketing, and more, informal conversations in a comfortable setting, speed networking sessions, industry-specific breakout areas, career advice and mentorship opportunities, resume drop-off station, professional headshot station, and light refreshments and appetizers.\n\nRepresented industries include Technology & Software, Finance & Consulting, Healthcare & Biotechnology, Marketing & Communications, Engineering & Manufacturing, and Hospitality & Tourism.\n\nPerfect for students seeking internships, exploring career paths, or building their professional network. Bring business cards (or we\'ll help you create digital ones) and dress in business casual attire.\n\nThis is your chance to make meaningful connections that could shape your career path!\n\nFree admission for students. Register early - space is limited!',
        capacity: '120 students',
        registered: 87,
        maxCapacity: 120,
        section: 'academic'
    },
    {
        id: 17,
        title: 'Undergraduate Research Symposium',
        date: 'March 24, 2026 • 10:00 AM - 4:00 PM',
        location: 'Science & Engineering Complex',
        category: 'Research',
        image: 'https://images.unsplash.com/photo-1580130857334-2f9b6d01d99d?w=800&q=80',
        description: 'Discover cutting-edge research conducted by undergraduate students across all disciplines.',
        fullDescription: 'Celebrate student scholarship at our annual Undergraduate Research Symposium, showcasing innovative research projects from across all academic disciplines.\n\nSymposium highlights include 50+ student research presentations and poster sessions, oral presentation sessions by discipline, interactive poster hall, faculty-judged competitions with awards, keynote address by distinguished researcher, networking with faculty and graduate program representatives, and graduate school information fair.\n\nResearch areas include STEM (Science, Technology, Engineering, Mathematics), Social Sciences, Humanities & Arts, Business & Economics, and Health Sciences.\n\nWhether you\'re presenting your own research, exploring research opportunities, or considering graduate school, this event offers invaluable exposure to academic research culture.\n\nAwards will be presented for Best Oral Presentation (by discipline), Best Poster Presentation (by discipline), and People\'s Choice Award.\n\nPresenting students: Registration deadline March 10. Abstract submission required.\nAttendees: Open to all students, faculty, and guests.\n\nFree admission. Lunch provided for registered participants.',
        capacity: '50 presenters + 200 attendees',
        registered: 156,
        maxCapacity: 250,
        section: 'academic'
    }
];

// Past Events Data
const pastEvents = [
    {
        id: 1,
        title: 'Culinary Arts Showcase 2025',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
        images: [
            { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', caption: 'Culinary Arts Showcase – Main Event' },
            { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80', caption: 'Students enjoying the culinary showcase' },
            { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80', caption: 'International food spread featuring Korean cuisine' }
        ],
        hasGallery: true
    },
    {
        id: 2,
        title: 'Golf Open House',
        image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80',
        images: [
            { src: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80', caption: 'Golf Open House – Welcome' },
            { src: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80', caption: 'Instructor demonstrating golf swing technique' }
        ],
        hasGallery: true
    },
    {
        id: 3,
        title: 'Guest Speaker Series',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
        hasGallery: false
    },
    {
        id: 4,
        title: 'Sports Tournament 2025',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
        hasGallery: false
    },
    {
        id: 5,
        title: 'Cultural Festival Spring 2025',
        image: 'https://images.unsplash.com/photo-1555725305-e823b44548de?w=600&q=80',
        hasGallery: false
    },
    {
        id: 6,
        title: 'Technology Innovation Fair',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80',
        hasGallery: false
    },
    {
        id: 7,
        title: 'Community Service Day',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
        hasGallery: false
    }
];

// Museums Data
const museums = [
    {
        name: 'Bowers Museum',
        address: '2002 N Main St, Santa Ana, CA 92706',
        distance: '~8 miles',
        description: 'One of the finest art museums in California, featuring world-class exhibitions of fine arts and indigenous cultures.',
        hours: 'Tue–Sun: 10AM–4PM',
        website: 'https://www.bowers.org',
        category: 'Art & Culture'
    },
    {
        name: 'Fullerton Museum Center',
        address: '301 N Pomona Ave, Fullerton, CA 92832',
        distance: '~5 miles',
        description: 'A regional museum presenting changing exhibitions in art, history, science, and culture for the greater Orange County community.',
        hours: 'Wed–Sun: 12PM–4PM',
        website: 'https://www.cityofFullerton.com/museum',
        category: 'History & Science'
    },
    {
        name: 'Richard Nixon Presidential Library',
        address: '18001 Yorba Linda Blvd, Yorba Linda, CA 92886',
        distance: '~12 miles',
        description: 'The birthplace and final resting place of the 37th President, featuring interactive exhibits on American history and diplomacy.',
        hours: 'Mon–Sun: 10AM–5PM',
        website: 'https://www.nixonlibrary.gov',
        category: 'Presidential Library'
    },
    {
        name: 'Discovery Cube Orange County',
        address: '2500 N Main St, Santa Ana, CA 92705',
        distance: '~9 miles',
        description: 'An interactive science and technology museum with hands-on exhibits perfect for curious minds of all ages.',
        hours: 'Mon–Sun: 10AM–5PM',
        website: 'https://www.discoverycube.org',
        category: 'Science & Technology'
    },
    {
        name: 'Laguna Art Museum',
        address: '307 Cliff Dr, Laguna Beach, CA 92651',
        distance: '~25 miles',
        description: 'Dedicated to American art with an emphasis on California artists and the distinctive art colony of Laguna Beach.',
        hours: 'Mon, Thu–Sun: 11AM–5PM',
        website: 'https://www.lagunaartmuseum.org',
        category: 'Fine Arts'
    },
    {
        name: 'LACMA – Los Angeles County Museum of Art',
        address: '5905 Wilshire Blvd, Los Angeles, CA 90036',
        distance: '~30 miles',
        description: 'The largest art museum in the western United States, housing over 150,000 works spanning 6,000 years of history.',
        hours: 'Mon, Tue, Thu: 11AM–6PM | Fri: 11AM–8PM | Sat–Sun: 10AM–7PM',
        website: 'https://www.lacma.org',
        category: 'World-Class Art'
    }
];

// Libraries Data
const libraries = [
    {
        name: 'La Palma City Library',
        address: '7842 Walker St, La Palma, CA 90623',
        distance: '~0.5 miles',
        description: 'The closest public library to campus, offering a quiet study environment, free Wi-Fi, printing services, and a wide collection of academic and leisure titles.',
        hours: 'Mon–Thu: 10AM–8PM | Fri–Sat: 10AM–5PM | Sun: Closed',
        website: 'https://www.cityoflapalma.org/library',
        category: 'City Library'
    },
    {
        name: 'Cerritos Public Library',
        address: '18025 Bloomfield Ave, Cerritos, CA 90703',
        distance: '~2 miles',
        description: 'An award-winning architectural landmark and one of the most technologically advanced public libraries in the US, featuring a saltwater aquarium, a bookstore replica, and cutting-edge digital resources.',
        hours: 'Mon–Thu: 10AM–9PM | Fri–Sat: 10AM–6PM | Sun: 1PM–5PM',
        website: 'https://www.cerritos.edu/library',
        category: 'Public Library'
    },
    {
        name: 'Buena Park Library District',
        address: '7150 La Palma Ave, Buena Park, CA 90620',
        distance: '~2 miles',
        description: 'A well-equipped community library with dedicated study rooms, computer labs, 3D printing access, and a robust digital lending collection.',
        hours: 'Mon–Thu: 10AM–8PM | Fri–Sat: 10AM–5PM | Sun: Closed',
        website: 'https://www.buenaparklibrary.org',
        category: 'Library District'
    },
    {
        name: 'Fullerton Public Library',
        address: '353 W Commonwealth Ave, Fullerton, CA 92832',
        distance: '~6 miles',
        description: 'A large public library offering extensive research databases, private study rooms, career resources, and regular academic workshops for students.',
        hours: 'Mon–Thu: 10AM–8PM | Fri–Sat: 10AM–5PM | Sun: 1PM–5PM',
        website: 'https://fullertonlibrary.org',
        category: 'Public Library'
    },
    {
        name: 'Anaheim Central Library',
        address: '500 W Broadway, Anaheim, CA 92805',
        distance: '~8 miles',
        description: 'A major regional library with a vast collection of academic materials, multilingual resources, digital media labs, and collaborative group study spaces.',
        hours: 'Mon–Thu: 10AM–8PM | Fri–Sat: 10AM–5PM | Sun: 12PM–5PM',
        website: 'https://www.anaheim.net/library',
        category: 'City Library'
    },
    {
        name: 'Yorba Linda Public Library',
        address: '18181 Imperial Hwy, Yorba Linda, CA 92886',
        distance: '~12 miles',
        description: 'A modern library featuring quiet reading rooms, community meeting spaces, digital resources, and a dedicated teen and adult learning center.',
        hours: 'Mon–Thu: 10AM–8PM | Fri–Sat: 10AM–5PM | Sun: Closed',
        website: 'https://www.yorbalindaca.gov/library',
        category: 'Public Library'
    }
];

// Parks Data
const parks = [
    {
        name: 'Carbon Canyon Regional Park',
        address: '4442 Carbon Canyon Rd, Brea, CA 92823',
        distance: '~6 miles',
        description: 'A beautiful 124-acre park featuring hiking trails, a serene lake, picnic areas, and a rare coastal redwood grove with 241 trees.',
        hours: 'Daily: 7AM–Sunset',
        amenities: 'Hiking, Fishing, Playground'
    },
    {
        name: 'Boysen Park',
        address: '951 S Yorba St, Anaheim, CA 92805',
        distance: '~3 miles',
        description: 'A neighborhood park offering sports fields, basketball courts, playgrounds, and open green spaces for recreational activities.',
        hours: 'Daily: 6AM–10PM',
        amenities: 'Sports Fields, Basketball Courts'
    },
    {
        name: 'Yorba Regional Park',
        address: '7600 E La Palma Ave, Anaheim, CA 92807',
        distance: '~5 miles',
        description: 'A scenic 175-acre park along the Santa Ana River featuring bike trails, fishing lakes, and spacious picnic areas perfect for group gatherings.',
        hours: 'Daily: 7AM–Sunset',
        amenities: 'Biking, Fishing, Volleyball'
    },
    {
        name: 'Oak Canyon Nature Center',
        address: '6700 E Walnut Canyon Rd, Anaheim, CA 92807',
        distance: '~7 miles',
        description: 'A 58-acre wilderness park with four miles of hiking trails through woodlands and streams, offering an escape into nature.',
        hours: 'Daily: 9AM–5PM',
        amenities: 'Hiking Trails, Nature Programs'
    },
    {
        name: 'Ralph B. Clark Regional Park',
        address: '8800 Rosecrans Ave, Buena Park, CA 90621',
        distance: '~4 miles',
        description: 'A 105-acre park featuring a lake for fishing, amphitheater, interpretive center, and extensive trails for walking and jogging.',
        hours: 'Daily: 7AM–9PM',
        amenities: 'Fishing, Amphitheater, Trails'
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let state = {
    currentBannerIndex: 0,
    selectedEvent: null,
    selectedGallery: null,
    currentGalleryIndex: 0,
    searchQuery: '',
    carouselIndices: {
        upcoming: 0,
        student: 0,
        academic: 0,
        past: 0
    }
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initBanner();
    initEvents();
    initSearch();
    initScroll();
    initCarousels();
    renderPastEvents();
    renderLocationModals();
});

// ========================================
// BANNER FUNCTIONALITY
// ========================================

function initBanner() {
    const slider = document.getElementById('bannerSlider');
    const indicators = document.getElementById('bannerIndicators');
    
    // Create banner slides
    bannerImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `banner-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="Banner ${index + 1}">`;
        slider.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `banner-indicator ${index === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToBannerSlide(index);
        indicators.appendChild(indicator);
    });
    
    // Auto-rotate every 1 second
    setInterval(() => {
        state.currentBannerIndex = (state.currentBannerIndex + 1) % bannerImages.length;
        updateBannerSlide();
    }, 1000);
}

function goToBannerSlide(index) {
    state.currentBannerIndex = index;
    updateBannerSlide();
}

function updateBannerSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    const indicators = document.querySelectorAll('.banner-indicator');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === state.currentBannerIndex);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentBannerIndex);
    });
}

// ========================================
// EVENTS FUNCTIONALITY
// ========================================

function initEvents() {
    renderEventSection('featured', 'featuredEventsGrid');
    renderEventSection('upcoming', 'upcomingEventsGrid', true);
    renderEventSection('student', 'studentEventsGrid', true);
    renderEventSection('academic', 'academicEventsGrid', true);
}

function getFilteredEvents(section) {
    return events.filter(event => {
        const matchesSection = event.section === section;
        const matchesSearch = state.searchQuery === '' || 
            event.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesSection && matchesSearch;
    });
}

function renderEventSection(section, gridId, isCarousel = false) {
    const grid = document.getElementById(gridId);
    const sectionEvents = getFilteredEvents(section);
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (sectionEvents.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #718096;">No events found</p>';
        return;
    }
    
    const displayEvents = isCarousel ? sectionEvents.slice(0, 3) : sectionEvents;
    
    displayEvents.forEach(event => {
        const card = createEventCard(event);
        grid.appendChild(card);
    });
    
    if (isCarousel && sectionEvents.length > 3) {
        updatePaginationDots(section, sectionEvents.length);
    }
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = `event-card ${event.featured ? 'featured' : ''}`;
    card.onclick = () => openEventModal(event);
    
    card.innerHTML = `
        <div class="event-card-image">
            <img src="${event.image}" alt="${event.title}">
            ${event.featured ? '<div class="event-card-badge">Featured</div>' : ''}
        </div>
        <div class="event-card-content">
            <h3 class="event-card-title">${event.title}</h3>
            <p class="event-card-description">${event.description}</p>
            <div class="event-card-meta">
                <div class="event-card-meta-item">
                    <span class="event-card-meta-icon">📅</span>
                    <span>${event.date}</span>
                </div>
                <div class="event-card-meta-item">
                    <span class="event-card-meta-icon">📍</span>
                    <span>${event.location}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// ========================================
// EVENT MODAL
// ========================================

function openEventModal(event) {
    state.selectedEvent = event;
    const modal = document.getElementById('eventModal');
    const content = document.getElementById('eventModalContent');
    
    const availabilityInfo = getAvailabilityStatus(event);
    
    content.innerHTML = `
        <div class="event-modal-image">
            <img src="${event.image}" alt="${event.title}">
            <div class="event-modal-overlay">
                <div class="event-modal-category">🏷️ ${event.category}</div>
                <h2 class="event-modal-title">${event.title}</h2>
            </div>
        </div>
        <div class="event-modal-body">
            ${availabilityInfo ? createAvailabilityBanner(availabilityInfo, event) : ''}
            
            <div class="event-meta-grid">
                <div class="event-meta-item">
                    <div class="event-meta-icon">📅</div>
                    <div>
                        <div class="event-meta-label">Date & Time</div>
                        <div class="event-meta-value">${event.date}</div>
                    </div>
                </div>
                <div class="event-meta-item">
                    <div class="event-meta-icon">📍</div>
                    <div>
                        <div class="event-meta-label">Location</div>
                        <div class="event-meta-value">${event.location}</div>
                    </div>
                </div>
                ${event.capacity ? `
                    <div class="event-meta-item">
                        <div class="event-meta-icon">👥</div>
                        <div>
                            <div class="event-meta-label">Capacity</div>
                            <div class="event-meta-value">${event.capacity}</div>
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <div class="event-description">
                <h3>About This Event</h3>
                <p>${event.fullDescription}</p>
            </div>
            
            <div style="margin-top: 2rem;">
                ${availabilityInfo && availabilityInfo.status === 'full' ? `
                    <button class="btn-primary btn-disabled" disabled style="width: 100%; padding: 1rem;">
                        Event Full - Waitlist Available
                    </button>
                ` : `
                    <button class="btn-primary" onclick="openRegistrationModal()" style="width: 100%; padding: 1rem;">
                        ${availabilityInfo && availabilityInfo.status === 'limited' ? 'Register Now - Limited Spots!' : 'Register for Event'}
                    </button>
                `}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function getAvailabilityStatus(event) {
    if (!event.registered || !event.maxCapacity) return null;
    
    const percentage = (event.registered / event.maxCapacity) * 100;
    const slotsLeft = event.maxCapacity - event.registered;
    
    if (slotsLeft === 0) {
        return {
            status: 'full',
            label: 'Fully Booked',
            message: 'This event has reached maximum capacity'
        };
    } else if (percentage >= 80) {
        return {
            status: 'limited',
            label: `Only ${slotsLeft} Spot${slotsLeft > 1 ? 's' : ''} Left!`,
            message: `Hurry! Limited availability - ${slotsLeft} spot${slotsLeft > 1 ? 's' : ''} remaining`
        };
    } else {
        return {
            status: 'available',
            label: `${slotsLeft} Spots Available`,
            message: `Join us! ${slotsLeft} spots available out of ${event.maxCapacity}`
        };
    }
}

function createAvailabilityBanner(info, event) {
    const percentage = (event.registered / event.maxCapacity) * 100;
    
    return `
        <div class="availability-banner ${info.status}">
            <div class="availability-header">
                <span style="font-size: 1.5rem;">${info.status === 'full' ? '❌' : info.status === 'limited' ? '⚠️' : '✅'}</span>
                <div style="flex: 1;">
                    <div class="availability-label">${info.label}</div>
                    <div class="availability-message">${info.message}</div>
                </div>
            </div>
            <div class="progress-bar-container">
                <div class="progress-info">
                    <span>${event.registered} registered</span>
                    <span>${event.maxCapacity} capacity</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${info.status}" style="width: ${percentage}%"></div>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// REGISTRATION MODAL
// ========================================

function openRegistrationModal() {
    closeEventModal();
    const modal = document.getElementById('registrationModal');
    const content = document.getElementById('registrationModalContent');
    
    const event = state.selectedEvent;
    
    content.innerHTML = `
        <div class="registration-header">
            <div>
                <h3>Event Registration</h3>
                <p>Fill in your details to register</p>
            </div>
            <button class="modal-close" onclick="closeRegistrationModal()">×</button>
        </div>
        
        <div class="registration-event-info">
            <h4>${event.title}</h4>
            <div class="registration-event-meta">
                <div class="registration-event-meta-item">
                    <span>📅</span>
                    <span>${event.date}</span>
                </div>
                <div class="registration-event-meta-item">
                    <span>📍</span>
                    <span>${event.location}</span>
                </div>
            </div>
        </div>
        
        <form class="registration-form" onsubmit="handleRegistrationSubmit(event)">
            <div class="form-group">
                <label class="form-label">
                    Full Name <span class="required">*</span>
                </label>
                <div class="form-input-wrapper">
                    <span class="form-input-icon">👤</span>
                    <input type="text" name="fullName" class="form-input" placeholder="Enter your full name" required>
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    Email Address <span class="required">*</span>
                </label>
                <div class="form-input-wrapper">
                    <span class="form-input-icon">✉️</span>
                    <input type="email" name="email" class="form-input" placeholder="your.email@stanton.edu" required>
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    Student ID <span class="optional">(Optional)</span>
                </label>
                <div class="form-input-wrapper">
                    <span class="form-input-icon">#</span>
                    <input type="text" name="studentId" class="form-input" placeholder="e.g., SU123456">
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    Phone Number <span class="optional">(Optional)</span>
                </label>
                <div class="form-input-wrapper">
                    <span class="form-input-icon">📞</span>
                    <input type="tel" name="phone" class="form-input" placeholder="(123) 456-7890">
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">
                    Special Requirements or Notes <span class="optional">(Optional)</span>
                </label>
                <div class="form-input-wrapper">
                    <span class="form-input-icon" style="top: 1rem; transform: none;">💬</span>
                    <textarea name="notes" class="form-textarea" rows="4" placeholder="Any dietary restrictions, accessibility needs, or other notes..."></textarea>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="button" class="btn-cancel" onclick="closeRegistrationModal()">Cancel</button>
                <button type="submit" class="btn-submit">Submit Registration</button>
            </div>
        </form>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleRegistrationSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Registration submitted:', {
        ...data,
        event: state.selectedEvent.title
    });
    
    // Show success message
    showRegistrationSuccess(data.email);
}

function showRegistrationSuccess(email) {
    const content = document.getElementById('registrationModalContent');
    const event = state.selectedEvent;
    
    content.innerHTML = `
        <div class="success-container">
            <button class="modal-close" onclick="closeRegistrationModal()" style="position: absolute; top: 1rem; right: 1rem;">×</button>
            
            <div class="success-icon"></div>
            <h3 class="success-title">Registration Successful!</h3>
            <p class="success-message">
                You have successfully registered for <strong>${event.title}</strong>
            </p>
            
            <div class="success-email-notice">
                <p>
                    <span style="font-size: 1.5rem;">✉️</span>
                    <span>A confirmation email will be sent to <strong>${email}</strong></span>
                </p>
            </div>
            
            <p class="success-footer">
                Please check your inbox and spam folder for the confirmation details.
            </p>
        </div>
    `;
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        initEvents();
        renderPastEvents();
    });
}

// ========================================
// SCROLL FUNCTIONALITY
// ========================================

function initScroll() {
    const header = document.getElementById('main-header');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// CAROUSEL FUNCTIONALITY
// ========================================

function initCarousels() {
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section || e.target.parentElement.dataset.section;
            const direction = e.target.classList.contains('carousel-btn-prev') || 
                            e.target.parentElement.classList.contains('carousel-btn-prev') ? -1 : 1;
            navigateCarousel(section, direction);
        });
    });
}

function navigateCarousel(section, direction) {
    const sectionEvents = getFilteredEvents(section);
    const maxIndex = Math.max(0, Math.ceil(sectionEvents.length / 3) - 1);
    
    state.carouselIndices[section] = Math.max(0, Math.min(maxIndex, state.carouselIndices[section] + direction));
    
    renderCarouselSlide(section);
}

function renderCarouselSlide(section) {
    const gridMap = {
        'upcoming': 'upcomingEventsGrid',
        'student': 'studentEventsGrid',
        'academic': 'academicEventsGrid',
        'past': 'pastEventsGrid'
    };
    
    const grid = document.getElementById(gridMap[section]);
    if (!grid || section === 'past') return;
    
    const sectionEvents = getFilteredEvents(section);
    const startIndex = state.carouselIndices[section] * 3;
    const displayEvents = sectionEvents.slice(startIndex, startIndex + 3);
    
    grid.innerHTML = '';
    displayEvents.forEach(event => {
        const card = createEventCard(event);
        grid.appendChild(card);
    });
    
    updatePaginationDots(section, sectionEvents.length);
}

function updatePaginationDots(section, totalEvents) {
    const paginationMap = {
        'upcoming': 'upcomingPagination',
        'student': 'studentPagination',
        'academic': 'academicPagination',
        'past': 'pastPagination'
    };
    
    const pagination = document.getElementById(paginationMap[section]);
    if (!pagination) return;
    
    const totalPages = Math.ceil(totalEvents / 3);
    const currentPage = state.carouselIndices[section];
    
    pagination.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = `pagination-dot ${i === currentPage ? 'active' : ''}`;
        dot.onclick = () => goToCarouselPage(section, i);
        pagination.appendChild(dot);
    }
}

function goToCarouselPage(section, page) {
    state.carouselIndices[section] = page;
    renderCarouselSlide(section);
}

// ========================================
// PAST EVENTS GALLERY
// ========================================

function renderPastEvents() {
    const grid = document.getElementById('pastEventsGrid');
    const startIndex = state.carouselIndices.past * 3;
    const displayEvents = pastEvents.slice(startIndex, startIndex + 3);
    
    grid.innerHTML = '';
    displayEvents.forEach(event => {
        const card = createGalleryCard(event);
        grid.appendChild(card);
    });
    
    updatePaginationDots('past', pastEvents.length);
}

function createGalleryCard(event) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.onclick = () => event.hasGallery ? openGalleryModal(event) : null;
    
    card.innerHTML = `
        <div class="gallery-card-image">
            <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="gallery-card-overlay">
            <h4 class="gallery-card-title">${event.title}</h4>
        </div>
        ${event.hasGallery ? '<div class="gallery-badge">📷 Gallery</div>' : ''}
    `;
    
    return card;
}

function openGalleryModal(event) {
    state.selectedGallery = event.images;
    state.currentGalleryIndex = 0;
    
    const modal = document.getElementById('galleryModal');
    const content = document.getElementById('galleryContent');
    
    content.innerHTML = state.selectedGallery.map((img, index) => `
        <div class="gallery-slide ${index === 0 ? 'active' : ''}">
            <img src="${img.src}" alt="${img.caption}">
            <div class="gallery-caption">${img.caption}</div>
        </div>
    `).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateGallery(direction) {
    if (!state.selectedGallery) return;
    
    state.currentGalleryIndex = (state.currentGalleryIndex + direction + state.selectedGallery.length) % state.selectedGallery.length;
    
    const slides = document.querySelectorAll('#galleryContent .gallery-slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === state.currentGalleryIndex);
    });
}

// ========================================
// LOCATION MODALS
// ========================================

function renderLocationModals() {
    renderMuseums();
    renderLibraries();
    renderParks();
}

function renderMuseums() {
    const content = document.getElementById('museumsContent');
    content.innerHTML = museums.map(museum => `
        <div class="location-item">
            <div class="location-item-header">
                <div>
                    <h3 class="location-item-title">${museum.name}</h3>
                    <p class="location-item-distance">${museum.distance}</p>
                </div>
                <div class="location-item-category">${museum.category}</div>
            </div>
            <p class="location-item-address">📍 ${museum.address}</p>
            <p class="location-item-description">${museum.description}</p>
            <div class="location-item-info">
                <div><strong>Hours:</strong> ${museum.hours}</div>
                <div><a href="${museum.website}" target="_blank" class="location-item-link">Visit Website →</a></div>
            </div>
        </div>
    `).join('');
}

function renderLibraries() {
    const content = document.getElementById('librariesContent');
    content.innerHTML = libraries.map(library => `
        <div class="location-item">
            <div class="location-item-header">
                <div>
                    <h3 class="location-item-title">${library.name}</h3>
                    <p class="location-item-distance">${library.distance}</p>
                </div>
                <div class="location-item-category">${library.category}</div>
            </div>
            <p class="location-item-address">📍 ${library.address}</p>
            <p class="location-item-description">${library.description}</p>
            <div class="location-item-info">
                <div><strong>Hours:</strong> ${library.hours}</div>
                <div><a href="${library.website}" target="_blank" class="location-item-link">Visit Website →</a></div>
            </div>
        </div>
    `).join('');
}

function renderParks() {
    const content = document.getElementById('parksContent');
    content.innerHTML = parks.map(park => `
        <div class="location-item">
            <div class="location-item-header">
                <div>
                    <h3 class="location-item-title">${park.name}</h3>
                    <p class="location-item-distance">${park.distance}</p>
                </div>
            </div>
            <p class="location-item-address">📍 ${park.address}</p>
            <p class="location-item-description">${park.description}</p>
            <div class="location-item-info">
                <div><strong>Hours:</strong> ${park.hours}</div>
                <div><strong>Amenities:</strong> ${park.amenities}</div>
            </div>
        </div>
    `).join('');
}

function openMuseumModal() {
    document.getElementById('museumsModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMuseumModal() {
    document.getElementById('museumsModal').classList.remove('active');
    document.body.style.overflow = '';
}

function openLibraryModal() {
    document.getElementById('librariesModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLibraryModal() {
    document.getElementById('librariesModal').classList.remove('active');
    document.body.style.overflow = '';
}

function openParksModal() {
    document.getElementById('parksModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeParksModal() {
    document.getElementById('parksModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// MOBILE MENU
// ========================================

document.getElementById('mobileMenuToggle')?.addEventListener('click', function() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
});
