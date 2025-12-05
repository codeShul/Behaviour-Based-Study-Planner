// Data structures
        const tests = {
            '6-10': {
                title: 'Middle Childhood Assessment (Ages 6-10)',
                format: 'multiple',
                traits: {
                   'Honesty': [
                        { q: 'You broke a vase. What do you do?', opts: ['Tell', 'Hide', 'Blame'], scores: [2, 1, 0] },
                        { q: 'You forgot your homework. What do you do?', opts: ['Tell', 'Make excuse', 'Say nothing'], scores: [2, 1, 0] }
                    ],
                    'Empathy': [
                        { q: 'You see someone crying. What do you do?', opts: ['Help', 'Ignore', 'Laugh'], scores: [2, 1, 0] },
                        { q: 'A friend is sad. What do you say?', opts: ['Comfort', 'Tease', 'Stay silent'], scores: [2, 1, 0] }
                    ],
                    'Attention': [
                        { q: "You're bored in class. What do you do?", opts: ['Ask for help', 'Daydream', 'Distract others'], scores: [2, 1, 0] },
                        { q: "You're asked to listen. What do you do?", opts: ['Listen', 'Interrupt', 'Ignore'], scores: [2, 1, 0] }
                    ],
                    'Frustration Tolerance': [
                        { q: 'You lose a game. What do you feel?', opts: ['Okay', 'Sad', 'Angry'], scores: [2, 1, 0] },
                        { q: 'Your drawing gets ruined. What do you do?', opts: ['Try again', 'Complain', 'Quit'], scores: [2, 1, 0] }
                    ],
                    'Rule-Following': [
                        { q: "You're told to stop talking. What do you do?", opts: ['Stop', 'Keep talking', 'Argue'], scores: [2, 1, 0] },
                        { q: "You're asked to clean up. What do you do?", opts: ['Help', 'Hide', 'Complain'], scores: [2, 1, 0] }
                    ],
                    'Inclusion': [
                        { q: 'You see someone left out. What do you do?', opts: ['Invite', 'Ignore', 'Tease'], scores: [2, 1, 0] },
                        { q: 'A new student joins. What do you do?', opts: ['Talk', 'Avoid', 'Laugh'], scores: [2, 1, 0] }
                    ],
                    'Prosocial Behavior': [
                        { q: "You're asked to share. What do you do?", opts: ['Share', 'Refuse', 'Hide it'], scores: [2, 1, 0] },
                        { q: 'A friend needs help. What do you do?', opts: ['Help', 'Say no', 'Complain'], scores: [2, 1, 0] }
                    ],

                }
            },
            '11-13': {
                title: 'Early Adolescence Assessment (Ages 11-13)',
                format: 'multiple',
                traits: {
                    'Autonomy': [
                        { q: "You're given a choice. What do you do?", opts: ['Decide yourself', 'Ask others', 'Avoid choosing'], scores: [2, 1, 0] },
                        { q: "You're asked to plan your day. What do you do?", opts: ['Plan', 'Wait for help', 'Do nothing'], scores: [2, 1, 0] }
                    ],
                    'Emotional Regulation': [
                        { q: 'You feel angry. What do you do?', opts: ['Breathe', 'Shout', 'Leave'], scores: [2, 1, 0] },
                        { q: "You're upset. What do you do?", opts: ['Talk', 'Hide', 'Blame others'], scores: [2, 1, 0] }
                    ],
                    'Peer Sensitivity': [
                        { q: 'Friends laugh at your mistake. What do you do?', opts: ['Laugh with them', 'Get angry', 'Cry'], scores: [2, 1, 0] },
                        { q: "You're not invited. What do you do?", opts: ['Accept', 'Complain', 'Tease'], scores: [2, 1, 0] }
                    ],
                    'Resilience': [
                        { q: 'You fail a test. What do you do?', opts: ['Learn', 'Blame', 'Give up'], scores: [2, 1, 0] },
                        { q: 'You lose a match. What do you do?', opts: ['Try again', 'Quit', 'Blame teammates'], scores: [2, 1, 0] }
                    ],
                    'Help-Seeking': [
                        { q: "You don't understand something. What do you do?", opts: ['Ask', 'Guess', 'Ignore'], scores: [2, 1, 0] },
                        { q: "You're stuck on homework. What do you do?", opts: ['Ask', 'Copy', 'Leave it'], scores: [2, 1, 0] }
                    ],
                    'Self-Confidence': [
                        { q: "You're asked to lead. What do you do?", opts: ['Try', 'Refuse', 'Panic'], scores: [2, 1, 0] },
                        { q: "You're learning something new. What do you do?", opts: ['Try', 'Avoid', 'Complain'], scores: [2, 1, 0] }
                    ],
                    'Attention Control': [
                        { q: "You're studying. What do you do?", opts: ['Focus', 'Check phone', 'Daydream'], scores: [2, 1, 0] },
                        { q: "You're bored. What do you do?", opts: ['Stay focused', 'Distract others', 'Leave'], scores: [2, 1, 0] }
                    ],

                }
            },
            '14-18': {
                title: 'Adolescence Assessment (Ages 14-18)',
                format: 'likert',
                traits: {
                    'Goal Orientation': [
                        'I set goals and work steadily toward them.',
                        'I track my progress to stay motivated.'
                    ],
                    'Emotional Intelligence': [
                        'I reflect on how my emotions affect my actions.',
                        'I try to understand how others feel in difficult situations.'
                    ],
                    'Learning Style': [
                        'I prefer learning through hands-on activities.',
                        'I enjoy solving complex problems that challenge me.'
                    ],
                    'Perspective-Taking': [
                        'I try to understand others\' viewpoints during disagreements.',
                        'I consider how my actions affect others.'
                    ],
                    'Self-Discipline': [
                        'I stay focused even when I don\'t enjoy the task.',
                        'I complete assignments on time without reminders.'
                    ],
                    'Intrinsic Motivation': [
                        'I feel motivated when I understand the purpose of a task.',
                        'I enjoy learning even when there\'s no reward.'
                    ],
                    'Social Comparison': [
                        'I compare myself to others on social media.',
                        'I feel discouraged when others seem more successful.'
                    ],

                }
            },
            '18-22': {
                title: 'Young Adults Assessment (Ages 18-22)',
                format: 'likert',
                traits: {
                    'Executive Function': [
                        'I break large tasks into smaller steps.',
                        'I organize my work to meet deadlines.'
                    ],
                    'Self-Regulation': [
                        'I avoid procrastination even when tasks are difficult.',
                        'I stay focused despite distractions.'
                    ],
                    'Feedback Orientation': [
                        'I seek feedback even when it\'s critical.',
                        'I use feedback to improve my performance.'
                    ],
                    'Emotional Intelligence': [
                        'I reflect on how my emotions influence my decisions.',
                        'I manage my emotions in high-pressure situations.'
                    ],
                    'Work Style': [
                        'I prefer working independently over collaborating.',
                        'I stay productive whether working alone or in a team.'
                    ],
                    'Attention Control': [
                        'I limit distractions like social media while working.',
                        'I maintain focus during long tasks.'
                    ],
                    'Curiosity': [
                        'I enjoy learning new things even if they\'re challenging.',
                        'I explore topics beyond what\'s required.'
                    ],

                }
            }
        };

        let currentAge = '';
        let currentAnswers = {};
        let allQuestions = [];
        let currentQuestionIndex = 0;
        let studentResults = [];

        function scrollToPortal() {
            document.getElementById('portalSelection').scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToFeatures() {
            document.getElementById('featuresSection').scrollIntoView({ behavior: 'smooth' });
        }

        function selectPortal(portal) {
            if (portal === 'student') {
                document.getElementById('heroSection').style.display = 'none';
                document.getElementById('featuresSection').style.display = 'none';
                document.getElementById('portalSelection').classList.remove('active');
                document.getElementById('ageSelection').classList.add('active');
            } else {
                document.getElementById('heroSection').style.display = 'none';
                document.getElementById('featuresSection').style.display = 'none';
                document.getElementById('portalSelection').classList.remove('active');
                document.getElementById('teacherDashboard').classList.add('active');
                loadTeacherDashboard();
            }
        }

        function startTest(age) {
            currentAge = age;
            currentAnswers = {};
            allQuestions = [];
            currentQuestionIndex = 0;
            
            const testData = tests[age];
            let qIndex = 0;
            
            for (let trait in testData.traits) {
                if (testData.format === 'multiple') {
                    testData.traits[trait].forEach(q => {
                        allQuestions.push({
                            trait: trait,
                            question: q.q,
                            options: q.opts,
                            scores: q.scores,
                            index: qIndex++
                        });
                    });
                } else {
                    testData.traits[trait].forEach(q => {
                        allQuestions.push({
                            trait: trait,
                            question: q,
                            index: qIndex++
                        });
                    });
                }
            }
            
            document.getElementById('ageSelection').classList.remove('active');
            document.getElementById('testContainer').classList.add('active');
            displayQuestion();
        }

        function displayQuestion() {
            const container = document.getElementById('questionsContainer');
            const q = allQuestions[currentQuestionIndex];
            const testData = tests[currentAge];
            
            let html = `<div class="question">
                <h3>Question ${currentQuestionIndex + 1}: ${q.question}</h3>
                <div class="${testData.format === 'likert' ? 'likert-scale' : 'options'}">`;
            
            if (testData.format === 'likert') {
                const likertOptions = ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'];
                likertOptions.forEach((opt, i) => {
                    const selected = currentAnswers[q.index] === (i + 1) ? 'selected' : '';
                    html += `<div class="likert-option ${selected}" onclick="selectAnswer(${q.index}, ${i + 1})">
                        <div><strong>${i + 1}</strong></div>
                        <div>${opt}</div>
                    </div>`;
                });
            } else {
                q.options.forEach((opt, i) => {
                    const selected = currentAnswers[q.index] === i ? 'selected' : '';
                    html += `<div class="option ${selected}" onclick="selectAnswer(${q.index}, ${i})">${opt}</div>`;
                });
            }
            
            html += '</div></div>';
            container.innerHTML = html;
            
            updateProgress();
            
            if (currentQuestionIndex === allQuestions.length - 1 && currentAnswers[q.index] !== undefined) {
                document.getElementById('submitBtn').style.display = 'inline-block';
            }
        }

        function selectAnswer(qIndex, answer) {
            currentAnswers[qIndex] = answer;
            
            if (currentQuestionIndex < allQuestions.length - 1) {
                currentQuestionIndex++;
                setTimeout(() => displayQuestion(), 300);
            } else {
                document.getElementById('submitBtn').style.display = 'inline-block';
                displayQuestion();
            }
        }

        function updateProgress() {
            const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
            document.getElementById('progressText').textContent = 
                `Question ${currentQuestionIndex + 1} of ${allQuestions.length}`;
        }

        function submitTest() {
            const results = calculateResults();
            displayResults(results);
            saveStudentResults(results);
            
            document.getElementById('testContainer').classList.remove('active');
            document.getElementById('dashboard').classList.add('active');
        }

        function calculateResults() {
            const testData = tests[currentAge];
            const traitScores = {};
            
            allQuestions.forEach(q => {
                if (!traitScores[q.trait]) {
                    traitScores[q.trait] = { total: 0, max: 0, count: 0 };
                }
                
                if (testData.format === 'likert') {
                    traitScores[q.trait].total += currentAnswers[q.index] || 0;
                    traitScores[q.trait].max += 5;
                } else {
                    const answerIndex = currentAnswers[q.index];
                    traitScores[q.trait].total += q.scores[answerIndex] || 0;
                    traitScores[q.trait].max += 2;
                }
                traitScores[q.trait].count++;
            });
            
            const results = {};
            for (let trait in traitScores) {
                const percentage = (traitScores[trait].total / traitScores[trait].max) * 100;
                results[trait] = {
                    score: traitScores[trait].total,
                    max: traitScores[trait].max,
                    percentage: Math.round(percentage),
                    level: percentage >= 80 ? 'strong' : percentage >= 60 ? 'typical' : 'needs-support'
                };
            }
            
            return results;
        }

        function displayResults(results) {
            const container = document.getElementById('resultsContainer');
            const statsContainer = document.getElementById('summaryStats');
            
            let totalPercentage = 0;
            let strongCount = 0;
            let needsSupportCount = 0;
            
            for (let trait in results) {
                totalPercentage += results[trait].percentage;
                if (results[trait].level === 'strong') strongCount++;
                if (results[trait].level === 'needs-support') needsSupportCount++;
            }
            
            const avgPercentage = Math.round(totalPercentage / Object.keys(results).length);
            
            statsContainer.innerHTML = `
                <div class="stat-card">
                    <div class="stat-value">${avgPercentage}%</div>
                    <div class="stat-label">Overall Score</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value score-green">${strongCount}</div>
                    <div class="stat-label">Strong Traits</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value score-red">${needsSupportCount}</div>
                    <div class="stat-label">Areas for Growth</div>
                </div>
            `;
            
            let html = '';
            for (let trait in results) {
                const r = results[trait];
                const colorClass = r.level === 'strong' ? 'green' : r.level === 'typical' ? 'yellow' : 'red';
                const recommendation = getRecommendation(trait, r.level, currentAge);
                
                html += `
                    <div class="trait-result">
                        <div class="trait-header">
                            <span class="trait-name">${trait}</span>
                            <span class="trait-score score-${colorClass}">${r.percentage}%</span>
                        </div>
                        <div class="trait-bar">
                            <div class="trait-bar-fill bg-${colorClass}" style="width: ${r.percentage}%">
                                ${r.score}/${r.max}
                            </div>
                        </div>
                        <div class="recommendation">
                            <h4>${r.level === 'strong' ? '✓ Strong Development' : r.level === 'typical' ? '○ Typical Development' : '△ Needs Support'}</h4>
                        
                        </div>
                    </div>
                `;
            }
            
            container.innerHTML = html;
        }

        function getRecommendation(trait, level, age) {
            const recommendations = {
                'Honesty': {
                    'strong': 'Excellent! You consistently demonstrate honesty. Continue being truthful and encourage others to do the same.',
                    'typical': 'You show honesty in most situations. Practice being truthful even when it feels difficult.',
                    'needs-support': 'Focus on building trust by being honest, even when facing consequences. Remember that honesty builds strong relationships.'
                },
                'Empathy': {
                    'strong': 'You have a wonderful ability to understand and care about others\' feelings. Keep spreading kindness!',
                    'typical': 'You care about others. Try to actively listen and imagine how others feel in different situations.',
                    'needs-support': 'Practice putting yourself in others\' shoes. Ask friends how they feel and show that you care.'
                },
                'Attention': {
                    'strong': 'Great focus! You pay attention well and stay engaged. This will help you learn effectively.',
                    'typical': 'You can focus when needed. Try minimizing distractions and taking short breaks to stay sharp.',
                    'needs-support': 'Work on staying focused for longer periods. Try the Pomodoro technique: focus for 25 minutes, then take a 5-minute break.'
                },
                'Frustration Tolerance': {
                    'strong': 'You handle frustration really well! This resilience will help you overcome challenges.',
                    'typical': 'You manage frustration most of the time. When upset, try deep breathing or taking a short walk.',
                    'needs-support': 'Practice patience when things don\'t go your way. Count to 10, breathe deeply, and remember that challenges help us grow.'
                },
                'Rule-Following': {
                    'strong': 'You follow rules consistently. This shows respect and helps create a positive environment.',
                    'typical': 'You usually follow rules. Remember that rules help everyone stay safe and work together.',
                    'needs-support': 'Understanding why rules exist can help. Rules keep us safe and help everyone get along better.'
                },
                'Inclusion': {
                    'strong': 'You\'re great at including others! Your kindness makes everyone feel welcome.',
                    'typical': 'You include others sometimes. Make it a habit to invite someone new to join your activities.',
                    'needs-support': 'Everyone wants to feel included. Try inviting someone who looks lonely to join your group.'
                },
                'Prosocial Behavior': {
                    'strong': 'Your caring and sharing nature makes a positive impact. Keep being generous!',
                    'typical': 'You help and share when asked. Try looking for opportunities to help without being asked.',
                    'needs-support': 'Practice small acts of kindness daily. Sharing and helping others makes everyone happier, including you.'
                },
                'Compliance': {
                    'strong': 'You listen and follow directions well. This helps you learn and work effectively with others.',
                    'typical': 'You follow directions most of the time. Practice active listening to improve even more.',
                    'needs-support': 'Focus on listening carefully to instructions. If you don\'t understand, ask questions politely.'
                },
                'Emotional Awareness': {
                    'strong': 'You understand your emotions well! This self-awareness helps you make good decisions.',
                    'typical': 'You\'re developing emotional awareness. Try naming your feelings to understand them better.',
                    'needs-support': 'Start by noticing how you feel throughout the day. Use a feelings chart to identify emotions.'
                },
                'Persistence': {
                    'strong': 'Your determination is impressive! You don\'t give up easily, which leads to success.',
                    'typical': 'You persist through some challenges. Remember that effort matters more than immediate success.',
                    'needs-support': 'When tasks feel hard, break them into smaller steps. Celebrate small progress along the way.'
                },
                'Autonomy': {
                    'strong': 'You make independent decisions confidently. This shows maturity and self-reliance.',
                    'typical': 'You\'re developing independence. Practice making small decisions on your own to build confidence.',
                    'needs-support': 'Start with small decisions and gradually take on more responsibility. Trust your judgment.'
                },
                'Emotional Regulation': {
                    'strong': 'You manage your emotions effectively. This skill helps in all areas of life.',
                    'typical': 'You regulate emotions fairly well. Try mindfulness exercises to improve emotional control.',
                    'needs-support': 'Learn coping strategies like deep breathing, journaling, or talking to someone you trust.'
                },
                'Peer Sensitivity': {
                    'strong': 'You handle peer situations maturely. This emotional intelligence serves you well.',
                    'typical': 'You\'re moderately affected by peer opinions. Remember your self-worth isn\'t determined by others.',
                    'needs-support': 'Focus on your own values and goals. True friends accept you for who you are.'
                },
                'Resilience': {
                    'strong': 'Your ability to bounce back from setbacks is excellent! This strength will carry you far.',
                    'typical': 'You show resilience in many situations. View failures as learning opportunities.',
                    'needs-support': 'Remember that setbacks are temporary. Focus on what you can learn and how to improve.'
                },
                'Help-Seeking': {
                    'strong': 'You know when to ask for help - a sign of wisdom and strength!',
                    'typical': 'You ask for help sometimes. Remember that seeking help shows courage, not weakness.',
                    'needs-support': 'Don\'t hesitate to ask questions. Teachers and peers are there to support your learning.'
                },
                'Self-Confidence': {
                    'strong': 'Your confidence shines through! Believe in yourself while staying humble.',
                    'typical': 'You\'re building confidence. Challenge yourself with new experiences to grow.',
                    'needs-support': 'Build confidence by setting small, achievable goals. Celebrate your successes.'
                },
                'Attention Control': {
                    'strong': 'Your focus and concentration are excellent! This discipline helps you achieve your goals.',
                    'typical': 'You maintain attention fairly well. Minimize distractions and create a good study environment.',
                    'needs-support': 'Use techniques like removing phone notifications and setting specific focus times.'
                },
                'Social Preference': {
                    'strong': 'You balance social connections well, being open to new friendships.',
                    'typical': 'You have established social patterns. Try occasionally stepping out of your comfort zone.',
                    'needs-support': 'Challenge yourself to meet new people. Diverse friendships enrich your life.'
                },
                'Metacognition': {
                    'strong': 'You understand how you learn best - this self-awareness is powerful!',
                    'typical': 'You\'re developing self-awareness about learning. Reflect on what strategies work for you.',
                    'needs-support': 'Experiment with different learning methods and notice what helps you understand best.'
                },
                'Growth Mindset': {
                    'strong': 'You embrace challenges and view them as opportunities to grow. Excellent mindset!',
                    'typical': 'You\'re developing a growth mindset. Remember that abilities can be developed through effort.',
                    'needs-support': 'Replace "I can\'t" with "I can\'t yet." View challenges as chances to improve.'
                },
                'Goal Orientation': {
                    'strong': 'Your goal-setting and pursuit skills are impressive. Stay focused on your dreams!',
                    'typical': 'You set goals sometimes. Make them specific, measurable, and write them down.',
                    'needs-support': 'Start with small, achievable goals. Break large goals into manageable steps.'
                },
                'Emotional Intelligence': {
                    'strong': 'You have exceptional emotional intelligence. This helps in all relationships and decisions.',
                    'typical': 'You understand emotions fairly well. Practice empathy and self-reflection regularly.',
                    'needs-support': 'Work on recognizing emotions in yourself and others. Read about body language and emotional cues.'
                },
                'Learning Style': {
                    'strong': 'You know how you learn best and use it effectively. Keep exploring!',
                    'typical': 'You\'re discovering your learning preferences. Try different approaches to find what works.',
                    'needs-support': 'Experiment with visual, auditory, and kinesthetic learning to find your strengths.'
                },
                'Perspective-Taking': {
                    'strong': 'You excel at seeing situations from multiple viewpoints. This skill creates understanding.',
                    'typical': 'You consider others\' perspectives sometimes. Practice actively listening without judging.',
                    'needs-support': 'Before reacting, pause and think: "How might they see this situation?"'
                },
                'Self-Discipline': {
                    'strong': 'Your self-discipline is commendable! This trait leads to long-term success.',
                    'typical': 'You show discipline in some areas. Create routines and stick to them consistently.',
                    'needs-support': 'Start with small commitments. Use rewards and accountability to build discipline.'
                },
                'Intrinsic Motivation': {
                    'strong': 'You\'re driven by internal satisfaction rather than external rewards. This is powerful!',
                    'typical': 'You find motivation in various sources. Connect tasks to your personal interests.',
                    'needs-support': 'Discover what truly interests you. Find meaning and purpose in your activities.'
                },
                'Social Comparison': {
                    'strong': 'You maintain healthy perspective without excessive social comparison. Well done!',
                    'typical': 'You compare yourself to others sometimes. Focus on your own growth and progress.',
                    'needs-support': 'Limit social media time. Remember that people share highlights, not their full reality.'
                },
                'Communication Confidence': {
                    'strong': 'You communicate effectively and confidently. This skill opens many doors!',
                    'typical': 'You communicate adequately. Practice speaking up more in group settings.',
                    'needs-support': 'Start with small groups. Prepare what you want to say and practice speaking clearly.'
                },
                'Stress Management': {
                    'strong': 'You handle stress excellently! Your coping strategies serve you well.',
                    'typical': 'You manage stress fairly well. Develop a consistent self-care routine.',
                    'needs-support': 'Learn stress-reduction techniques: exercise, meditation, proper sleep, and talking to others.'
                },
                'Executive Function': {
                    'strong': 'Your planning and organizational skills are outstanding! These will help throughout life.',
                    'typical': 'You organize reasonably well. Use planners and to-do lists to improve.',
                    'needs-support': 'Break tasks into steps. Use tools like calendars, reminders, and checklists.'
                },
                'Self-Regulation': {
                    'strong': 'You control impulses and stay focused excellently. This maturity is impressive!',
                    'typical': 'You regulate yourself most of the time. Identify triggers and plan responses.',
                    'needs-support': 'Pause before acting on impulses. Create an environment that supports focused work.'
                },
                'Feedback Orientation': {
                    'strong': 'You seek and use feedback effectively - the mark of a continuous learner!',
                    'typical': 'You accept feedback sometimes. View criticism as information, not personal attack.',
                    'needs-support': 'Ask for specific feedback regularly. Focus on the message, not how it\'s delivered.'
                },
                'Work Style': {
                    'strong': 'You adapt your work style effectively to different situations. Great flexibility!',
                    'typical': 'You have work preferences but can adapt. Experience both independent and team work.',
                    'needs-support': 'Identify your preferred work style but develop the other. Both skills are valuable.'
                },
                'Curiosity': {
                    'strong': 'Your curiosity drives deep learning! Never lose this love of discovery.',
                    'typical': 'You show interest in some topics. Explore new subjects to broaden your horizons.',
                    'needs-support': 'Ask more questions. Follow your interests, even if they seem unusual.'
                },
                'Time Management': {
                    'strong': 'You manage time effectively! This skill reduces stress and increases productivity.',
                    'typical': 'You manage time adequately. Use time-blocking and prioritization techniques.',
                    'needs-support': 'Create a weekly schedule. Estimate how long tasks take and plan accordingly.'
                },
                'Proactivity': {
                    'strong': 'You take initiative without being asked. This leadership quality is valuable!',
                    'typical': 'You show initiative sometimes. Look for opportunities to contribute proactively.',
                    'needs-support': 'Don\'t wait to be told. Identify needs and take action to address them.'
                }
            };
            
            return recommendations[trait] ? recommendations[trait][level] : 'Continue working on developing this important trait.';
        }

        function saveStudentResults(results) {
            const studentId = 'Student_' + Date.now();
            const studentData = {
                id: studentId,
                name: studentId,
                age: currentAge,
                date: new Date().toLocaleDateString(),
                results: results,
                timestamp: Date.now()
            };
            
            studentResults.push(studentData);

       
            
            document.getElementById('totalStudents').textContent = studentResults.length;
            
            if (studentResults.length > 0) {
                let totalAvg = 0;
                studentResults.forEach(student => {
                    let studentTotal = 0;
                    let count = 0;
                    for (let trait in student.results) {
                        studentTotal += student.results[trait].percentage;
                        count++;
                    }
                    totalAvg += studentTotal / count;
                });
                document.getElementById('avgScore').textContent = Math.round(totalAvg / studentResults.length) + '%';
            } else {
                document.getElementById('avgScore').textContent = '0%';
            }
            
            document.getElementById('completedTests').textContent = studentResults.length;
            
            const studentList = document.getElementById('studentList');
            let html = '';
            
            if (studentResults.length === 0) {
                html = '<p style="text-align: center; color: #666; padding: 40px;">No student assessments yet. Students will appear here after completing their tests.</p>';
            } else {
                studentResults.forEach((student, index) => {
                    let totalPercentage = 0;
                    let count = 0;
                    for (let trait in student.results) {
                        totalPercentage += student.results[trait].percentage;
                        count++;
                    }
                    const avgPercentage = Math.round(totalPercentage / count);
                    const colorClass = avgPercentage >= 80 ? 'green' : avgPercentage >= 60 ? 'yellow' : 'red';
                    
                    html += `
                        <div class="student-card" onclick="viewStudentDetails(${index})">
                            <div class="student-info">
                                <div>
                                    <h3>${student.name}</h3>
                                    <p style="color: #666;">Age Group: ${student.age} | Date: ${student.date}</p>
                                </div>
                                <div>
                                    <div class="trait-score score-${colorClass}">${avgPercentage}%</div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            studentList.innerHTML = html;
        }

        function viewStudentDetails(index) {
            const student = studentResults[index];
            alert(`Student: ${student.name}\nAge Group: ${student.age}\nDate: ${student.date}\n\nDetailed view would show full trait breakdown and progress tracking in a production version.`);
        }

        function goBack(to) {
            document.querySelectorAll('.portal-selection, .age-selection, .test-container, .dashboard').forEach(el => {
                el.classList.remove('active');
            });
            
            if (to === 'portal') {
                document.getElementById('heroSection').style.display = 'block';
                document.getElementById('featuresSection').style.display = 'block';
                document.getElementById('portalSelection').classList.add('active');
            } else if (to === 'age') {
                document.getElementById('ageSelection').classList.add('active');
            }
        }
