DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(50) NOT NULL,
  venue VARCHAR(120) NOT NULL,
  event_date TIMESTAMP NOT NULL,
  category VARCHAR(50) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO events (
  title,
  description,
  location,
  venue,
  event_date,
  category,
  image_url
)
VALUES
(
  'Python for Beginners Workshop',
  'A beginner-friendly workshop where attendees learn Python fundamentals through practical exercises.',
  'Oakland',
  'Oakland Tech Hub',
  '2026-07-10 18:00:00',
  'Workshop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80'
),
(
  'Mock Interview Practice Night',
  'Practice technical and behavioral interview questions with other job seekers and mentors.',
  'Oakland',
  'Impact Hub Oakland',
  '2026-07-18 17:30:00',
  'Career',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
),
(
  'AI Study Group',
  'A collaborative study session focused on artificial intelligence concepts and practical projects.',
  'Berkeley',
  'Berkeley Public Library',
  '2026-07-15 18:30:00',
  'AI',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'
),
(
  'React Portfolio Review',
  'Bring your React portfolio and receive feedback from other developers and mentors.',
  'Berkeley',
  'Berkeley Innovation Center',
  '2026-06-10 17:00:00',
  'Portfolio',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80'
),
(
  'Women in Tech Networking Meetup',
  'A networking event for people interested in building community and careers in technology.',
  'San Francisco',
  'SF Tech Commons',
  '2026-07-22 18:00:00',
  'Networking',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'
),
(
  'Frontend Career Fair Prep',
  'Learn how to prepare your resume, GitHub profile, and portfolio for a technology career fair.',
  'San Francisco',
  'Mission Learning Center',
  '2026-07-05 16:00:00',
  'Career',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80'
),
(
  'Intro to Web Development',
  'An introduction to HTML, CSS, JavaScript, and how modern websites are built.',
  'Emeryville',
  'Emeryville Community Center',
  '2026-07-12 14:00:00',
  'Workshop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
),
(
  'Tech Networking Coffee Chat',
  'Meet other aspiring developers and discuss career goals, projects, and job-search strategies.',
  'Emeryville',
  'Bay Street Workspace',
  '2026-06-01 10:00:00',
  'Networking',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
);