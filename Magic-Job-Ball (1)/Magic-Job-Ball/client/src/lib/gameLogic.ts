export interface Question {
  text: string;
  options: Array<{
    text: string;
    value: string;
    icon: string;
  }>;
}

export interface JobPrediction {
  title: string;
  description: string;
  icon: string;
  confidence: number;
}

const baseQuestions: Question[] = [
  {
    text: "How do you prefer to spend your ideal work environment?",
    options: [
      { text: "Working alone in quiet concentration", value: "alone", icon: "User" },
      { text: "Collaborating with a dynamic team", value: "team", icon: "Users" },
      { text: "A balance of both solitude and collaboration", value: "mixed", icon: "Scale" }
    ]
  },
  {
    text: "What energizes you most about work?",
    options: [
      { text: "Solving complex problems and puzzles", value: "problem-solving", icon: "Puzzle" },
      { text: "Helping and interacting with people", value: "helping", icon: "Heart" },
      { text: "Creating and building new things", value: "creating", icon: "Hammer" }
    ]
  },
  {
    text: "Which work schedule appeals to you?",
    options: [
      { text: "Structured 9-5 with clear boundaries", value: "structured", icon: "Clock" },
      { text: "Flexible hours with project deadlines", value: "flexible", icon: "Calendar" },
      { text: "Varied schedule with travel or fieldwork", value: "varied", icon: "Plane" }
    ]
  },
  {
    text: "What type of challenges excite you?",
    options: [
      { text: "Technical and analytical challenges", value: "technical", icon: "Settings" },
      { text: "Creative and artistic challenges", value: "creative", icon: "Palette" },
      { text: "Social and communication challenges", value: "social", icon: "MessageCircle" }
    ]
  },
  {
    text: "How do you prefer to learn new skills?",
    options: [
      { text: "Through books, research, and self-study", value: "self-study", icon: "Book" },
      { text: "Through hands-on practice and experimentation", value: "hands-on", icon: "Wrench" },
      { text: "Through mentoring and collaborative learning", value: "mentoring", icon: "GraduationCap" }
    ]
  },
  {
    text: "What motivates you most in your career?",
    options: [
      { text: "Financial stability and growth", value: "financial", icon: "DollarSign" },
      { text: "Making a positive impact on society", value: "impact", icon: "Globe" },
      { text: "Personal fulfillment and passion", value: "fulfillment", icon: "Star" }
    ]
  },
  {
    text: "In your free time, you're most likely to:",
    options: [
      { text: "Read, research, or learn new technologies", value: "learning", icon: "Laptop" },
      { text: "Engage in creative hobbies or arts", value: "arts", icon: "Paintbrush" },
      { text: "Socialize, volunteer, or help others", value: "social-help", icon: "Handshake" }
    ]
  },
  {
    text: "What's your preferred communication style at work?",
    options: [
      { text: "Written communication and documentation", value: "written", icon: "FileText" },
      { text: "Face-to-face meetings and presentations", value: "verbal", icon: "Mic" },
      { text: "Visual presentations and demonstrations", value: "visual", icon: "Eye" }
    ]
  },
  {
    text: "Which work environment do you thrive in?",
    options: [
      { text: "Quiet office or remote workspace", value: "quiet", icon: "Home" },
      { text: "Bustling collaborative workspace", value: "bustling", icon: "Building2" },
      { text: "Outdoor or field-based locations", value: "outdoor", icon: "Trees" }
    ]
  },
  {
    text: "How do you handle stress and pressure?",
    options: [
      { text: "Break down problems methodically", value: "methodical", icon: "Calculator" },
      { text: "Brainstorm creative solutions", value: "creative-stress", icon: "Lightbulb" },
      { text: "Seek support from others", value: "collaborative-stress", icon: "Users2" }
    ]
  },
  {
    text: "What type of projects excite you most?",
    options: [
      { text: "Long-term strategic initiatives", value: "long-term", icon: "Target" },
      { text: "Quick wins and immediate results", value: "short-term", icon: "Zap" },
      { text: "Ongoing maintenance and improvement", value: "continuous", icon: "RefreshCw" }
    ]
  },
  {
    text: "How do you prefer to make decisions?",
    options: [
      { text: "Data analysis and research", value: "data-driven", icon: "BarChart3" },
      { text: "Intuition and gut feeling", value: "intuitive", icon: "Brain" },
      { text: "Group consensus and collaboration", value: "collaborative-decision", icon: "Vote" }
    ]
  },
  {
    text: "What role do you naturally take in group settings?",
    options: [
      { text: "The leader who organizes and directs", value: "leader", icon: "Crown" },
      { text: "The supporter who helps others succeed", value: "supporter", icon: "HandHeart" },
      { text: "The specialist who provides expertise", value: "specialist", icon: "Award" }
    ]
  },
  {
    text: "Which type of feedback motivates you?",
    options: [
      { text: "Detailed performance metrics", value: "metrics", icon: "LineChart" },
      { text: "Personal recognition and praise", value: "recognition", icon: "Trophy" },
      { text: "Constructive improvement suggestions", value: "constructive", icon: "MessageSquare" }
    ]
  },
  {
    text: "How do you approach new technologies or tools?",
    options: [
      { text: "Early adopter - love trying new things", value: "early-adopter", icon: "Rocket" },
      { text: "Cautious learner - wait for proven results", value: "cautious", icon: "Shield" },
      { text: "Practical user - adopt when necessary", value: "practical", icon: "Tool" }
    ]
  },
  {
    text: "What's your ideal work-life balance?",
    options: [
      { text: "Clear separation between work and personal", value: "separate", icon: "Home" },
      { text: "Integrated blend of work and life", value: "integrated", icon: "Blend" },
      { text: "Work-focused with minimal distractions", value: "work-focused", icon: "Focus" }
    ]
  },
  {
    text: "Which achievement would make you most proud?",
    options: [
      { text: "Solving a complex technical problem", value: "technical-achievement", icon: "Cpu" },
      { text: "Helping someone reach their potential", value: "helping-achievement", icon: "GraduationCap" },
      { text: "Creating something beautiful or innovative", value: "creative-achievement", icon: "Sparkles" }
    ]
  },
  {
    text: "How do you prefer to organize your work?",
    options: [
      { text: "Detailed plans and schedules", value: "planned", icon: "Calendar" },
      { text: "Flexible priorities and adaptation", value: "adaptive", icon: "Wind" },
      { text: "Goal-oriented with milestone tracking", value: "goal-oriented", icon: "Target" }
    ]
  },
  {
    text: "What type of recognition matters most to you?",
    options: [
      { text: "Professional advancement and titles", value: "advancement", icon: "TrendingUp" },
      { text: "Peer respect and collaboration", value: "peer-respect", icon: "Handshake" },
      { text: "Personal satisfaction and growth", value: "personal-growth", icon: "Seed" }
    ]
  },
  {
    text: "Which work challenge would you find most rewarding?",
    options: [
      { text: "Optimizing systems for maximum efficiency", value: "optimization", icon: "Settings2" },
      { text: "Building relationships and networks", value: "networking", icon: "Network" },
      { text: "Innovating new solutions or products", value: "innovation", icon: "Lightbulb" }
    ]
  }
];

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Export function to get randomized questions
export function getRandomizedQuestions(count?: number): Question[] {
  const shuffled = shuffleArray(baseQuestions);
  return count ? shuffled.slice(0, count) : shuffled;
}

export const jobPredictions: Record<string, JobPrediction> = {
  'tech-developer': {
    title: 'Software Developer',
    description: 'The digital realm calls to you! Your analytical mind and creative problem-solving abilities point toward a future in software development, where you\'ll craft digital solutions that shape the world.',
    icon: 'Code',
    confidence: 0.85
  },
  'data-scientist': {
    title: 'Data Scientist',
    description: 'Numbers whisper their secrets to you! Your love for analysis and pattern recognition guides you toward data science, where you\'ll unlock insights hidden in vast oceans of information.',
    icon: 'BarChart3',
    confidence: 0.88
  },
  'healthcare': {
    title: 'Healthcare Professional',
    description: 'The healing arts await! Your compassionate nature and desire to help others guide you toward healthcare, where you\'ll make a tangible difference in people\'s lives.',
    icon: 'Heart',
    confidence: 0.80
  },
  'creative': {
    title: 'Creative Professional',
    description: 'Your artistic soul shines bright! The creative industries beckon - whether in design, writing, or media, you\'ll thrive bringing beauty and innovation to the world.',
    icon: 'Palette',
    confidence: 0.78
  },
  'education': {
    title: 'Educator',
    description: 'Knowledge flows through you! Your natural teaching abilities and love of learning point toward education, where you\'ll inspire and guide the next generation.',
    icon: 'GraduationCap',
    confidence: 0.82
  },
  'business-leader': {
    title: 'Business Leader',
    description: 'The corporate world calls! Your leadership skills and strategic thinking align with executive roles where you\'ll drive growth and innovation at the highest levels.',
    icon: 'Crown',
    confidence: 0.83
  },
  'project-manager': {
    title: 'Project Manager',
    description: 'Order emerges from chaos through your guidance! Your organizational skills and collaborative nature point toward project management, where you\'ll orchestrate success across teams.',
    icon: 'Target',
    confidence: 0.79
  },
  'consultant': {
    title: 'Business Consultant',
    description: 'Wisdom flows through your counsel! Your analytical thinking and communication skills guide you toward consulting, where you\'ll solve complex challenges across industries.',
    icon: 'Lightbulb',
    confidence: 0.81
  },
  'trades': {
    title: 'Skilled Tradesperson',
    description: 'Your hands build the future! Practical skills and craftsmanship guide you toward the trades, where you\'ll create and maintain the world around us.',
    icon: 'Wrench',
    confidence: 0.80
  },
  'researcher': {
    title: 'Research Scientist',
    description: 'Truth reveals itself through your investigation! Your methodical approach and love of discovery point toward research, where you\'ll push the boundaries of human knowledge.',
    icon: 'Microscope',
    confidence: 0.86
  },
  'entrepreneur': {
    title: 'Entrepreneur',
    description: 'Innovation burns within your spirit! Your creative thinking and risk-taking nature guide you toward entrepreneurship, where you\'ll build the future with your own hands.',
    icon: 'Rocket',
    confidence: 0.84
  },
  'sales': {
    title: 'Sales Professional',
    description: 'Connections spark through your presence! Your interpersonal skills and persuasive nature point toward sales, where you\'ll build relationships that drive success.',
    icon: 'Handshake',
    confidence: 0.77
  }
};

export function calculateJobPrediction(answers: string[]): JobPrediction {
  const answerCounts: Record<string, number> = {};
  
  // Count answer types
  answers.forEach(answer => {
    answerCounts[answer] = (answerCounts[answer] || 0) + 1;
  });
  
  // Calculate scores for each career path
  const careerScores: Record<string, number> = {};
  
  // Tech Developer scoring
  careerScores['tech-developer'] = 0;
  careerScores['tech-developer'] += (answerCounts['alone'] || 0) * 2;
  careerScores['tech-developer'] += (answerCounts['problem-solving'] || 0) * 3;
  careerScores['tech-developer'] += (answerCounts['technical'] || 0) * 3;
  careerScores['tech-developer'] += (answerCounts['self-study'] || 0) * 2;
  careerScores['tech-developer'] += (answerCounts['learning'] || 0) * 2;
  careerScores['tech-developer'] += (answerCounts['written'] || 0) * 1;
  careerScores['tech-developer'] += (answerCounts['quiet'] || 0) * 2;
  careerScores['tech-developer'] += (answerCounts['methodical'] || 0) * 2;
  careerScores['tech-developer'] += (answerCounts['early-adopter'] || 0) * 2;
  careerScores['tech-developer'] += (answerCounts['technical-achievement'] || 0) * 3;
  careerScores['tech-developer'] += (answerCounts['optimization'] || 0) * 2;
  
  // Data Scientist scoring
  careerScores['data-scientist'] = 0;
  careerScores['data-scientist'] += (answerCounts['problem-solving'] || 0) * 3;
  careerScores['data-scientist'] += (answerCounts['technical'] || 0) * 2;
  careerScores['data-scientist'] += (answerCounts['self-study'] || 0) * 2;
  careerScores['data-scientist'] += (answerCounts['data-driven'] || 0) * 4;
  careerScores['data-scientist'] += (answerCounts['methodical'] || 0) * 3;
  careerScores['data-scientist'] += (answerCounts['metrics'] || 0) * 2;
  careerScores['data-scientist'] += (answerCounts['cautious'] || 0) * 1;
  careerScores['data-scientist'] += (answerCounts['technical-achievement'] || 0) * 2;
  careerScores['data-scientist'] += (answerCounts['planned'] || 0) * 2;
  careerScores['data-scientist'] += (answerCounts['optimization'] || 0) * 3;
  
  // Healthcare scoring
  careerScores['healthcare'] = 0;
  careerScores['healthcare'] += (answerCounts['helping'] || 0) * 4;
  careerScores['healthcare'] += (answerCounts['impact'] || 0) * 3;
  careerScores['healthcare'] += (answerCounts['social-help'] || 0) * 2;
  careerScores['healthcare'] += (answerCounts['verbal'] || 0) * 2;
  careerScores['healthcare'] += (answerCounts['collaborative-stress'] || 0) * 2;
  careerScores['healthcare'] += (answerCounts['supporter'] || 0) * 2;
  careerScores['healthcare'] += (answerCounts['constructive'] || 0) * 1;
  careerScores['healthcare'] += (answerCounts['helping-achievement'] || 0) * 4;
  careerScores['healthcare'] += (answerCounts['peer-respect'] || 0) * 2;
  careerScores['healthcare'] += (answerCounts['networking'] || 0) * 1;
  
  // Creative Professional scoring
  careerScores['creative'] = 0;
  careerScores['creative'] += (answerCounts['creating'] || 0) * 3;
  careerScores['creative'] += (answerCounts['creative'] || 0) * 4;
  careerScores['creative'] += (answerCounts['arts'] || 0) * 4;
  careerScores['creative'] += (answerCounts['fulfillment'] || 0) * 2;
  careerScores['creative'] += (answerCounts['visual'] || 0) * 2;
  careerScores['creative'] += (answerCounts['creative-stress'] || 0) * 3;
  careerScores['creative'] += (answerCounts['intuitive'] || 0) * 2;
  careerScores['creative'] += (answerCounts['recognition'] || 0) * 1;
  careerScores['creative'] += (answerCounts['creative-achievement'] || 0) * 4;
  careerScores['creative'] += (answerCounts['adaptive'] || 0) * 2;
  careerScores['creative'] += (answerCounts['innovation'] || 0) * 3;
  
  // Education scoring
  careerScores['education'] = 0;
  careerScores['education'] += (answerCounts['helping'] || 0) * 3;
  careerScores['education'] += (answerCounts['mentoring'] || 0) * 4;
  careerScores['education'] += (answerCounts['impact'] || 0) * 3;
  careerScores['education'] += (answerCounts['social-help'] || 0) * 2;
  careerScores['education'] += (answerCounts['verbal'] || 0) * 3;
  careerScores['education'] += (answerCounts['collaborative-decision'] || 0) * 2;
  careerScores['education'] += (answerCounts['supporter'] || 0) * 2;
  careerScores['education'] += (answerCounts['constructive'] || 0) * 2;
  careerScores['education'] += (answerCounts['helping-achievement'] || 0) * 4;
  careerScores['education'] += (answerCounts['personal-growth'] || 0) * 2;
  
  // Business Leader scoring
  careerScores['business-leader'] = 0;
  careerScores['business-leader'] += (answerCounts['team'] || 0) * 2;
  careerScores['business-leader'] += (answerCounts['financial'] || 0) * 2;
  careerScores['business-leader'] += (answerCounts['verbal'] || 0) * 2;
  careerScores['business-leader'] += (answerCounts['bustling'] || 0) * 2;
  careerScores['business-leader'] += (answerCounts['long-term'] || 0) * 3;
  careerScores['business-leader'] += (answerCounts['leader'] || 0) * 4;
  careerScores['business-leader'] += (answerCounts['metrics'] || 0) * 1;
  careerScores['business-leader'] += (answerCounts['practical'] || 0) * 1;
  careerScores['business-leader'] += (answerCounts['advancement'] || 0) * 3;
  careerScores['business-leader'] += (answerCounts['networking'] || 0) * 2;
  
  // Project Manager scoring
  careerScores['project-manager'] = 0;
  careerScores['project-manager'] += (answerCounts['team'] || 0) * 3;
  careerScores['project-manager'] += (answerCounts['mixed'] || 0) * 2;
  careerScores['project-manager'] += (answerCounts['structured'] || 0) * 2;
  careerScores['project-manager'] += (answerCounts['social'] || 0) * 2;
  careerScores['project-manager'] += (answerCounts['collaborative-decision'] || 0) * 3;
  careerScores['project-manager'] += (answerCounts['supporter'] || 0) * 2;
  careerScores['project-manager'] += (answerCounts['constructive'] || 0) * 2;
  careerScores['project-manager'] += (answerCounts['planned'] || 0) * 3;
  careerScores['project-manager'] += (answerCounts['goal-oriented'] || 0) * 3;
  careerScores['project-manager'] += (answerCounts['peer-respect'] || 0) * 2;
  
  // Consultant scoring
  careerScores['consultant'] = 0;
  careerScores['consultant'] += (answerCounts['problem-solving'] || 0) * 3;
  careerScores['consultant'] += (answerCounts['varied'] || 0) * 2;
  careerScores['consultant'] += (answerCounts['social'] || 0) * 2;
  careerScores['consultant'] += (answerCounts['data-driven'] || 0) * 2;
  careerScores['consultant'] += (answerCounts['specialist'] || 0) * 3;
  careerScores['consultant'] += (answerCounts['constructive'] || 0) * 2;
  careerScores['consultant'] += (answerCounts['adaptive'] || 0) * 2;
  careerScores['consultant'] += (answerCounts['advancement'] || 0) * 2;
  careerScores['consultant'] += (answerCounts['networking'] || 0) * 3;
  careerScores['consultant'] += (answerCounts['innovation'] || 0) * 2;
  
  // Trades scoring
  careerScores['trades'] = 0;
  careerScores['trades'] += (answerCounts['creating'] || 0) * 3;
  careerScores['trades'] += (answerCounts['hands-on'] || 0) * 4;
  careerScores['trades'] += (answerCounts['structured'] || 0) * 2;
  careerScores['trades'] += (answerCounts['outdoor'] || 0) * 2;
  careerScores['trades'] += (answerCounts['methodical'] || 0) * 2;
  careerScores['trades'] += (answerCounts['short-term'] || 0) * 2;
  careerScores['trades'] += (answerCounts['practical'] || 0) * 3;
  careerScores['trades'] += (answerCounts['separate'] || 0) * 2;
  careerScores['trades'] += (answerCounts['personal-growth'] || 0) * 1;
  careerScores['trades'] += (answerCounts['optimization'] || 0) * 1;
  
  // Researcher scoring
  careerScores['researcher'] = 0;
  careerScores['researcher'] += (answerCounts['alone'] || 0) * 2;
  careerScores['researcher'] += (answerCounts['problem-solving'] || 0) * 3;
  careerScores['researcher'] += (answerCounts['self-study'] || 0) * 3;
  careerScores['researcher'] += (answerCounts['impact'] || 0) * 2;
  careerScores['researcher'] += (answerCounts['learning'] || 0) * 3;
  careerScores['researcher'] += (answerCounts['written'] || 0) * 2;
  careerScores['researcher'] += (answerCounts['quiet'] || 0) * 2;
  careerScores['researcher'] += (answerCounts['methodical'] || 0) * 3;
  careerScores['researcher'] += (answerCounts['long-term'] || 0) * 2;
  careerScores['researcher'] += (answerCounts['cautious'] || 0) * 2;
  careerScores['researcher'] += (answerCounts['technical-achievement'] || 0) * 2;
  
  // Entrepreneur scoring
  careerScores['entrepreneur'] = 0;
  careerScores['entrepreneur'] += (answerCounts['creating'] || 0) * 3;
  careerScores['entrepreneur'] += (answerCounts['flexible'] || 0) * 2;
  careerScores['entrepreneur'] += (answerCounts['creative'] || 0) * 2;
  careerScores['entrepreneur'] += (answerCounts['fulfillment'] || 0) * 3;
  careerScores['entrepreneur'] += (answerCounts['creative-stress'] || 0) * 2;
  careerScores['entrepreneur'] += (answerCounts['intuitive'] || 0) * 2;
  careerScores['entrepreneur'] += (answerCounts['leader'] || 0) * 3;
  careerScores['entrepreneur'] += (answerCounts['early-adopter'] || 0) * 3;
  careerScores['entrepreneur'] += (answerCounts['integrated'] || 0) * 2;
  careerScores['entrepreneur'] += (answerCounts['creative-achievement'] || 0) * 2;
  careerScores['entrepreneur'] += (answerCounts['innovation'] || 0) * 4;
  
  // Sales scoring
  careerScores['sales'] = 0;
  careerScores['sales'] += (answerCounts['team'] || 0) * 2;
  careerScores['sales'] += (answerCounts['helping'] || 0) * 2;
  careerScores['sales'] += (answerCounts['social'] || 0) * 3;
  careerScores['sales'] += (answerCounts['financial'] || 0) * 3;
  careerScores['sales'] += (answerCounts['verbal'] || 0) * 4;
  careerScores['sales'] += (answerCounts['bustling'] || 0) * 2;
  careerScores['sales'] += (answerCounts['short-term'] || 0) * 2;
  careerScores['sales'] += (answerCounts['intuitive'] || 0) * 2;
  careerScores['sales'] += (answerCounts['recognition'] || 0) * 3;
  careerScores['sales'] += (answerCounts['advancement'] || 0) * 2;
  careerScores['sales'] += (answerCounts['networking'] || 0) * 4;
  
  // Find the career with the highest score
  let bestCareer = 'consultant'; // default fallback
  let highestScore = 0;
  
  for (const [career, score] of Object.entries(careerScores)) {
    if (score > highestScore) {
      highestScore = score;
      bestCareer = career;
    }
  }
  
  // Calculate confidence based on score distribution
  const totalAnswers = answers.length;
  const maxPossibleScore = totalAnswers * 4; // assuming max weight of 4
  const confidence = Math.min(0.95, Math.max(0.65, highestScore / maxPossibleScore + 0.3));
  
  const prediction = { ...jobPredictions[bestCareer] };
  prediction.confidence = confidence;
  
  return prediction;
}
