DROP TABLE IF EXISTS quiz;
DROP TABLE IF EXISTS flashcard;
DROP TABLE IF EXISTS score;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(60) UNIQUE NOT NULL,
  email VARCHAR(120) NOT NULL,
  password VARCHAR(140) NOT NULL,
  correct_answers INT DEFAULT 0,
  isAdmin BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (user_id)
);

INSERT INTO users (username, email, password, isAdmin) VALUES ('admin', 'admin@appname.org', 'admin', TRUE);
INSERT INTO users (username, email, password) VALUES ('users', 'users@appname.org', 'users');

CREATE TABLE quiz (
  question_id INT GENERATED ALWAYS AS IDENTITY,
  quiz_id INT NOT NULL,
  quiz VARCHAR(100) NOT NULL,
  question VARCHAR(256) NOT NULL,
  answer VARCHAR(256) NOT NULL,
  fake_answer1 VARCHAR(256) NOT NULL,
  fake_answer2 VARCHAR(256) NOT NULL,
  fake_answer3 VARCHAR(256) NOT NULL,
  PRIMARY KEY (question_id)
);

INSERT INTO quiz (quiz_id, quiz, question, answer, fake_answer1, fake_answer2, fake_answer3) VALUES ('1', 'Geography', 'What is the capital of Australia?', 'Canberra', 'Sydney', 'Melbourne', 'Brisbane'), ('1', 'Geography', 'What is the highest mountain in Africa?', 'Mount Kilimanjaro', 'Mount Everest', 'Mount Elbrus', 'Denali'), ('1', 'Geography', 'What is the longest river in South America?', 'Amazon River', 'Orinoco River', 'Paraguay River', 'Magdalena River'), ('1', 'Geography', 'What is the largest country in South America?', 'Brazil', 'Argentina', 'Colombia', 'Peru'), ('1', 'Geography', 'What is the largest desert in the world?', 'Sahara Desert', 'Gobi Desert', 'Arabian Desert', 'Kalahari Desert'), ('1', 'Geography', 'What is the name of the ocean between Asia and North America?', 'Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'), ('1', 'Geography', 'What is the name of the strait that connects the Atlantic and Pacific Oceans?', 'Strait of Magellan', 'Strait of Gibraltar', 'Bering Strait', 'Davis Strait'), ('1', 'Geography', 'What is the capital of Canada?', 'Ottawa', 'Toronto', 'Vancouver', 'Montreal'), ('1', 'Geography', 'What is the name of the largest lake in Africa?', 'Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'), ('1', 'Geography', 'What is the name of the largest island in the Mediterranean?', 'Sicily', 'Cyprus', 'Crete', 'Corsica'), ('1', 'Geography', 'What is the name of the mountain range that runs through South America?', 'Andes', 'Rockies', 'Himalayas', 'Alps'), ('1', 'Geography', 'What is the name of the largest reef system in the world?', 'Great Barrier Reef', 'Coral Sea Reefs', 'Red Sea Coral Reefs', 'Belize Barrier Reef'), ('1', 'Geography', 'What is the capital of Mexico?', 'Mexico City', 'Cancun', 'Guadalajara', 'Monterrey'), ('1', 'Geography', 'What is the name of the largest island in the world?', 'Greenland', 'Madagascar', 'Borneo', 'Sumatra'), ('1', 'Geography', 'What is the name of the river that flows through Paris?', 'Seine River', 'Thames River', 'Danube River', 'Rhine River'), ('2', 'Sports', 'What sport uses a shuttlecock?', 'Badminton', 'Tennis', 'Volleyball', 'Table Tennis'), ('2', 'Sports', 'What is the most popular sport in the world?', 'Football (Soccer)', 'Cricket', 'Basketball', 'Baseball'), ('2', 'Sports', 'What is the only sport to have been played on the moon?', 'Golf', 'Tennis', 'Basketball', 'Football (Soccer)'), ('2', 'Sports', 'What is the diameter of a basketball hoop in inches?', '18 inches', '16 inches', '20 inches', '22 inches'), ('2', 'Sports', 'What is the name of the professional American football league?', 'NFL (National Football League)', 'NBA (National Basketball Association)', 'NHL (National Hockey League)', 'MLB (Major League Baseball)'), ('2', 'Sports', 'What is the name of the highest trophy in professional football (soccer)?', 'FIFA World Cup', 'UEFA Champions League', 'Premier League Trophy', 'Copa Libertadores'), ('2', 'Sports', 'What is the highest score achievable in a single turn in professional ten-pin bowling?', '300', '100', '200', '250'), ('2', 'Sports', 'What sport features a mallet, ball, and wickets?', 'Croquet', 'Polo', 'Hockey', 'Golf'), ('2', 'Sports', 'What is the name of the annual championship game of the NFL?', 'Super Bowl', 'World Series', 'NBA Finals', 'Stanley Cup Finals'), ('2', 'Sports', 'What is the distance of a marathon race in kilometers?', '42.195 kilometers', '26.2 kilometers', '50 kilometers', '100 kilometers'), ('2', 'Sports', 'What is the name of the most prestigious cycling race in the world?', 'Tour de France', 'Giro d`Italia', 'Vuelta a España', 'Tour de Suisse'), ('2', 'Sports', 'What is the name of the professional basketball league in China?', 'CBA (Chinese Basketball Association)', 'NBA (National Basketball Association)', 'EuroLeague', 'LNB Pro A (Ligue Nationale de Basket Pro A)'), ('2', 'Sports', 'What sport is known as ''The Sport of Kings''?', 'Horse Racing', 'Polo', 'Fencing', 'Golf'), ('2', 'Sports', 'What is the name of the equipment used to hit the puck in ice hockey?', 'Stick', 'Club', 'Racket', 'Bat'), ('2', 'Sports', 'What is the name of the international governing body of cricket?', 'ICC (International Cricket Council)', 'BCCI (Board of Control for Cricket in India)', 'ECB (England and Wales Cricket Board)', 'CA (Cricket Australia)');

CREATE TABLE flashcard (
  card_id INT GENERATED ALWAYS AS IDENTITY,
  collection VARCHAR(100) NOT NULL,
  question VARCHAR(256) NOT NULL,
  fact VARCHAR(256) NOT NULL,
  user_id INT DEFAULT (1),
  PRIMARY KEY (card_id),
  FOREIGN KEY (user_id) REFERENCES users("user_id")
);

INSERT INTO flashcard (collection, question, fact) VALUES ('Chemistry', 'What is the most abundant element in the Earth''s atmosphere?', 'Nitrogen'), ('Chemistry', 'What is the lightest element?', 'Hydrogen'), ('Chemistry', 'What is the densest naturally occurring element?', 'Osmium'), ('Chemistry', 'What element is the primary component of diamonds?', 'Carbon'), ('Chemistry', 'What element has the symbol Fe?', 'Iron'), ('Chemistry', 'What element is used to make light bulbs?', 'Tungsten'), ('Chemistry', 'What element has the atomic number 79?', 'Gold'), ('Chemistry', 'What element is used to make computer chips?', 'Silicon'), ('Chemistry', 'What element is commonly used as a coolant in nuclear reactors?', 'Helium'), ('Chemistry', 'What element has the atomic number 47?', 'Silver'), ('Chemistry', 'What element is used in thermometers?', 'Mercury'), ('Chemistry', 'What is the rarest naturally occurring element?', 'Astatine'), ('Chemistry', 'What element is used to create purple color in fireworks?', 'Potassium'), ('Chemistry', 'What is the only element that is a liquid at room temperature?', 'Mercury'), ('Chemistry', 'What element is used to create blue color in fireworks?', 'Copper'), ('Chemistry', 'What element is used to create red color in fireworks?', 'Strontium'), ('Chemistry', 'What element is used in batteries?', 'Lithium'), ('Chemistry', 'What is the heaviest element that occurs naturally?', 'Uranium'), ('Chemistry', 'What element is used to make fertilizer?', 'Phosphorus'), ('Chemistry', 'What is the most electronegative element?', 'Fluorine'), ('1', 'Geography', 'What is the capital of Spain?', 'Madrid'), ('1', 'Geography', 'What is the largest country in South America?', 'Brazil'), ('1', 'Geography', 'What is the highest mountain in Africa?', 'Mount Kilimanjaro'), ('1', 'Geography', 'What is the capital of Japan?', 'Tokyo'), ('1', 'Geography', 'What is the longest river in Africa?', 'Nile'), ('1', 'Geography', 'What is the smallest country in the world?', 'Vatican City'), ('1', 'Geography', 'What is the capital of Italy?', 'Rome'), ('1', 'Geography', 'What is the largest desert in the world?', 'Sahara Desert'), ('1', 'Geography', 'What is the capital of Egypt?', 'Cairo'), ('1', 'Geography', 'What is the largest island in the world?', 'Greenland'), ('1', 'Geography', 'What is the highest mountain in the world?', 'Mount Everest'), ('1', 'Geography', 'What is the capital of Australia?', 'Canberra'), ('1', 'Geography', 'What is the largest ocean in the world?', 'Pacific Ocean'), ('1', 'Geography', 'What is the smallest continent?', 'Australia'), ('1', 'Geography', 'What is the capital of Russia?', 'Moscow'), ('1', 'Geography', 'What is the largest lake in Africa?', 'Lake Victoria'), ('1', 'Geography', 'What is the highest peak in North America?', 'Denali/Mount McKinley'), ('1', 'Geography', 'What is the longest river in Europe?', 'Volga River'), ('1', 'Geography', 'What is the capital of Canada?', 'Ottawa'), ('1', 'Geography', 'What is the largest country in the world?', 'Russia'), ('History', 'Who was the first female Prime Minister of the UK?', 'Margaret Thatcher'), ('History', 'Who was the monarch during the Elizabethan era?', 'Queen Elizabeth I'), ('History', 'Which British monarch was known as the ''Virgin Queen''?', 'Queen Elizabeth I'), ('History', 'Who was the leader of the Labour Party during WWII?', 'Clement Attlee'), ('History', 'What event in 1066 is known as the last successful invasion of England?', 'The Norman Conquest'), ('History', 'What was the name of the ship that transported the Pilgrims to the New World in 1620?', 'Mayflower'), ('History', 'Which king was beheaded during the English Civil War?', 'King Charles I'), ('History', 'What was the name of the first successful steam locomotive, invented by George Stephenson?', 'The Rocket'), ('History', 'What was the name of the first British female physician, who practiced medicine in the 19th century?', 'Elizabeth Garrett Anderson'), ('History', 'What was the name of the first woman to be elected to the UK Parliament?', 'Constance Markievicz'), ('History', 'What was the name of the war fought between England and France from 1337 to 1453?', 'The Hundred Years'' War'), ('History', 'Who was the king of England during the Battle of Hastings?', 'Harold II'), ('History', 'What was the name of the infamous prison in London that was in use from the 12th century until 1952?', 'The Tower of London'), ('History', 'Who was the leader of the suffragette movement in the early 20th century?', 'Emmeline Pankhurst'), ('History', 'What was the name of the British passenger liner that sank in the North Atlantic Ocean in 1912?', 'The Titanic'), ('History', 'Which British monarch was known as the ''Merry Monarch''?', 'King Charles II'), ('History', 'Who was the leader of the UK during World War II?', 'Winston Churchill'), ('History', 'What was the name of the battle fought in 1314 where the Scots defeated the English?', 'The Battle of Bannockburn'), ('History', 'Who was the first British monarch to be publicly crowned in a Christian ceremony?', 'King Æthelstan'), ('History', 'What was the name of the military campaign during World War II where the UK and its allies invaded Nazi-occupied Europe?', 'D-Day'), ('Physics', 'What is the force that opposes motion between two surfaces in contact?', 'Friction'), ('Physics', 'What is the formula for calculating work?', 'Work = Force x Distance'), ('Physics', 'What is the force that causes an object to fall to the ground?', 'Gravity'), ('Physics', 'What is the unit of measurement for frequency?', 'Hertz'), ('Physics', 'What is the law that states that every action has an equal and opposite reaction?', 'Newton''s Third Law of Motion'), ('Physics', 'What is the formula for calculating force?', 'Force = Mass x Acceleration'), ('Physics', 'What is the unit of measurement for power?', 'Watt'), ('Physics', 'What is the force that holds atoms together in a molecule?', 'Chemical Bonding'), ('Physics', 'What is the law that states that the total energy in a system remains constant?', 'Law of Conservation of Energy'), ('Physics', 'What is the unit of measurement for electric current?', 'Ampere'), ('Physics', 'What is the phenomenon where a wave changes direction as it passes through a medium?', 'Refraction'), ('Physics', 'What is the unit of measurement for electric potential difference?', 'Volt'), ('Physics', 'What is the phenomenon where light waves change direction as they pass through an opening?', 'Diffraction'), ('Physics', 'What is the unit of measurement for resistance?', 'Ohm'), ('Physics', 'What is the force that causes a moving object to curve?', 'Centripetal Force'), ('Physics', 'What is the unit of measurement for capacitance?', 'Farad'), ('Physics', 'What is the phenomenon where waves overlap and combine?', 'Interference'), ('Physics', 'What is the unit of measurement for magnetic field strength?', 'Tesla'), ('Physics', 'What is the unit of measurement for frequency?', 'Hertz');

CREATE TABLE score (
  score_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (256) NOT NULL,
  score INT NOT NULL,
  score_out_of NOT NULL,
  PRIMARY KEY (score_id),
  FOREIGN KEY username REFERENCES users AS (username)
);

INSERT INTO score (username, score, score_out_of) VALUES ('admin', 0, 0), ('users', 0, 0);
