from .database import Base, engine, SessionLocal
from .models import Character

def seed_data():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    if db.query(Character).count() == 0:
        characters = [
            Character(
                name="Anakin Skywalker",
                gender="Male",
                homeworld="Tatooine",
                side="Empire",
                birth_year="41.9BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
                short_description="Jedi Knight who fell to the dark side and became Darth Vader.",
                description=[
                    {"type": "paragraph", "text": "Anakin Skywalker was once a heroic Jedi Knight, a gifted pilot, and the Chosen One destined to bring balance to the Force. His fall to the dark side transformed him into Darth Vader, one of the most feared figures in galactic history."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Exceptionally strong connection to the Force.",
                        "Impulsive and emotionally driven.",
                        "Loyal but prone to fear and anger.",
                        "Struggled between love, duty, and destiny."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Discovered on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi.",
                        "Trained as a Jedi Knight and fought heroically during the Clone Wars.",
                        "Turned to the dark side under Palpatine’s influence, becoming Darth Vader.",
                        "Redeemed by his son Luke Skywalker, sacrificing himself to destroy the Emperor."
                    ]},
                    {"type": "paragraph", "text": "Anakin’s life remains a tragic story of lost potential and ultimate redemption."}
                ],
                featured=True
            ),
            Character(
                name="Padmé Amidala",
                gender="Female",
                homeworld="Naboo",
                side="Rebels",
                birth_year="46BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"],
                short_description="Queen and later Senator of Naboo, wife of Anakin Skywalker.",
                description=[
                    {"type": "paragraph", "text": "Padmé Amidala served as Queen and later Senator of Naboo, standing as a symbol of diplomacy, courage, and compassion. Despite her pacifist ideals, she played a crucial role during the Clone Wars."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Brilliant orator and skilled diplomat.",
                        "Deeply compassionate and morally grounded.",
                        "Determined to preserve democracy in the Republic."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Elected Queen of Naboo and defended her planet from the Trade Federation.",
                        "Married Anakin Skywalker in secret.",
                        "Gave birth to twins Luke and Leia before dying of heartbreak after Anakin’s fall."
                    ]}
                ],
                featured=False
            ),
            Character(
                name="Luke Skywalker",
                gender="Male",
                homeworld="Tatooine",
                side="Rebels",
                birth_year="19BBY",
                films=["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Last Jedi", "The Rise of Skywalker"],
                short_description="Jedi Knight and hero of the Rebellion.",
                description=[
                    {"type": "paragraph", "text": "Luke Skywalker, son of Anakin and Padmé, became the last Jedi Knight and a central figure in the Rebellion’s victory over the Empire."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Strong in the Force with natural piloting skills.",
                        "Optimistic and guided by moral clarity.",
                        "Believed in the power of redemption."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Trained under Obi-Wan Kenobi and Yoda.",
                        "Destroyed the Death Star at the Battle of Yavin.",
                        "Redeemed his father Anakin and helped defeat the Emperor.",
                        "Rebuilt the Jedi Order after the fall of the Empire."
                    ]}
                ],
                featured=True
            ),
            Character(
                name="Leia Organa",
                gender="Female",
                homeworld="Alderaan",
                side="Rebels",
                birth_year="19BBY",
                films=["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"],
                short_description="Princess, senator, and leader of the Rebellion.",
                description=[
                    {"type": "paragraph", "text": "Leia Organa is one of the most iconic figures in the Star Wars saga. Born as Leia Amidala Skywalker, she was adopted by Alderaan’s royal family and became a symbol of hope and resistance."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Intelligent and persuasive, with strong diplomatic skills.",
                        "Brave and decisive in moments of crisis.",
                        "Deeply loyal to her allies, but unafraid to challenge them when needed.",
                        "Naturally strong in the Force, though she focused more on leadership than Jedi training."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Battle of Yavin: Helped transmit the Death Star plans.",
                        "Escape from Jabba’s Palace: Fought her captor and rescued Han Solo.",
                        "Battle of Endor: Led the ground assault that destroyed the second Death Star.",
                        "Founded the New Republic and later the Resistance."
                    ]},
                    {"type": "section", "title": "Important Relationships", "items": [
                        "Luke Skywalker: her twin brother.",
                        "Han Solo: her husband, father of Ben Solo.",
                        "Bail Organa: her adoptive father and moral compass."
                    ]}
                ],
                featured=True
            ),
            Character(
                name="Ben Solo / Kylo Ren",
                gender="Male",
                homeworld="Chandrila",
                side="Empire",
                birth_year="5ABY",
                films=["The Force Awakens", "The Last Jedi", "The Rise of Skywalker"],
                short_description="Son of Leia and Han Solo, tempted by the Dark Side.",
                description=[
                    {"type": "paragraph", "text": "Ben Solo, later known as Kylo Ren, was the son of Leia Organa and Han Solo. Trained by his uncle Luke Skywalker, he fell under Snoke’s influence and turned to the dark side."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Powerful yet conflicted Force user.",
                        "Driven by inner turmoil and legacy of his family.",
                        "Struggles between light and dark."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Destroyed Luke’s Jedi temple and joined the First Order.",
                        "Killed Han Solo in a moment of anguish.",
                        "Redeemed by Rey, helping to defeat Emperor Palpatine."
                    ]}
                ],
                featured=False
            ),
            Character(
                name="Darth Vader",
                gender="Male",
                homeworld="Tatooine",
                side="Empire",
                birth_year="41.9BBY",
                films=["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
                short_description="Once a Jedi Knight, later became the Sith Lord Darth Vader.",
                description=[
                    {"type": "paragraph", "text": "Darth Vader, formerly Anakin Skywalker, became the enforcer of the Galactic Empire and apprentice to Emperor Palpatine."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Mastery of the dark side and combat.",
                        "Driven by guilt, anger, and loss.",
                        "Feared across the galaxy but ultimately redeemed."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Hunted the Jedi after Order 66.",
                        "Revealed himself to Luke as his father.",
                        "Sacrificed himself to save his son and destroy the Emperor."
                    ]}
                ],
                featured=True
            ),
            Character(
                name="Shmi Skywalker",
                gender="Female",
                homeworld="Tatooine",
                side="Rebels",
                birth_year="72BBY",
                films=["The Phantom Menace"],
                short_description="Mother of Anakin Skywalker who raised him on Tatooine.",
                description=[
                    {"type": "paragraph", "text": "Shmi Skywalker was the caring mother of Anakin Skywalker, living as a slave on Tatooine before her son was discovered by the Jedi."},
                    {"type": "section", "title": "Legacy", "items": [
                        "Believed in her son’s destiny to bring balance to the Force.",
                        "Her loss deeply affected Anakin and contributed to his eventual fall."
                    ]}
                ],
                featured=False
            ),
            Character(
                name="Lando Calrissian",
                gender="Male",
                homeworld="Socorro",
                side="Rebels",
                birth_year="31BBY",
                films=["The Empire Strikes Back", "Return of the Jedi", "The Rise of Skywalker"],
                short_description="Charming gambler turned Rebel general.",
                description=[
                    {"type": "paragraph", "text": "Once a smuggler and entrepreneur, Lando Calrissian became a key ally of the Rebellion after aiding in the Battle of Endor."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Charismatic and confident leader.",
                        "Strategic thinker and loyal friend.",
                        "Seeks redemption through bravery."
                    ]}
                ],
                featured=True
            ),
            Character(
                name="Obi-Wan Kenobi",
                gender="Male",
                homeworld="Stewjon",
                side="Rebels",
                birth_year="57BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope"],
                short_description="Jedi Master who trained Anakin and Luke Skywalker.",
                description=[
                    {"type": "paragraph", "text": "Obi-Wan Kenobi was one of the most noble and skilled Jedi Masters of his era. He trained both Anakin and Luke Skywalker, shaping the destiny of the galaxy."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Wise, patient, and deeply disciplined.",
                        "Exceptional swordsman and strategist.",
                        "Embodied the Jedi Code even in exile."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Defeated Darth Maul during the Battle of Naboo.",
                        "Trained Anakin Skywalker as his Padawan.",
                        "Fought Anakin on Mustafar, leading to his fall as Darth Vader.",
                        "Guided Luke from beyond the Force after his death."
                    ]}
                ],
                featured=False
            ),
            Character(
                name="Yoda",
                gender="Male",
                homeworld="Unknown",
                side="Rebels",
                birth_year="896BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Empire Strikes Back", "Return of the Jedi"],
                short_description="Grand Master of the Jedi Order for over 800 years.",
                description=[
                    {"type": "paragraph", "text": "Yoda was one of the wisest and most powerful Jedi Masters in history, guiding generations of Jedi and serving as Grand Master of the Jedi Council."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Profound wisdom and mastery of the Force.",
                        "Teacher and mentor to countless Jedi.",
                        "Humility and patience as guiding virtues."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Trained countless Jedi during the Republic’s height.",
                        "Fought Darth Sidious in the Senate duel during the Clone Wars.",
                        "Guided Luke Skywalker during his Jedi training on Dagobah.",
                        "Became one with the Force after his death."
                    ]}
                ],
                featured=False
            ),
                        # --- QUI-GON JINN ---
            Character(
                name="Qui-Gon Jinn",
                gender="Male",
                homeworld="Coruscant",
                side="Rebels",
                birth_year="92BBY",
                films=["The Phantom Menace"],
                short_description="Maverick Jedi Master who discovered Anakin Skywalker.",
                description=[
                    {"type": "paragraph", "text": "Qui-Gon Jinn was a wise yet unconventional Jedi Master who believed in following the living Force over the rigid rules of the Jedi Council."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Independent thinker guided by intuition.",
                        "Compassionate and morally grounded.",
                        "Mentor to Obi-Wan Kenobi."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Discovered Anakin Skywalker on Tatooine.",
                        "Trained Obi-Wan Kenobi and mentored him to knighthood.",
                        "Killed by Darth Maul during the Battle of Naboo.",
                        "Became the first Jedi to achieve immortality through the Force."
                    ]}
                ],
                featured=False
            ),

            # --- HAN SOLO ---
            Character(
                name="Han Solo",
                gender="Male",
                homeworld="Corellia",
                side="Rebels",
                birth_year="29BBY",
                films=["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens"],
                short_description="Smuggler turned hero and husband of Leia Organa.",
                description=[
                    {"type": "paragraph", "text": "Han Solo was a cynical smuggler who became a key hero of the Rebellion, piloting the Millennium Falcon alongside Chewbacca."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Charming and resourceful pilot.",
                        "Reluctant hero with a good heart.",
                        "Loyal to his friends despite his roguish nature."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Rescued Princess Leia from the Death Star.",
                        "Played a crucial role in destroying the Death Star.",
                        "Froze in carbonite on Cloud City and later rescued by Leia.",
                        "Fought with the Resistance before his death at Kylo Ren’s hand."
                    ]}
                ],
                featured=False
            ),

            # --- CHEWBACCA ---
            Character(
                name="Chewbacca",
                gender="Male",
                homeworld="Kashyyyk",
                side="Rebels",
                birth_year="200BBY",
                films=["Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens"],
                short_description="Loyal Wookiee warrior and co-pilot of the Millennium Falcon.",
                description=[
                    {"type": "paragraph", "text": "Chewbacca, a towering Wookiee from Kashyyyk, was a skilled warrior and loyal companion to Han Solo and the heroes of the Rebellion."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Brave and fiercely loyal.",
                        "Skilled mechanic and fighter.",
                        "Communicates through Shyriiwook roars understood by close friends."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Escaped Imperial enslavement with Han Solo.",
                        "Fought in numerous battles for the Rebellion.",
                        "Helped destroy both Death Stars.",
                        "Continued to serve the Resistance after the fall of the Empire."
                    ]}
                ],
                featured=False
            ),

            # --- DARTH SIDIOUS / EMPEROR PALPATINE ---
            Character(
                name="Darth Sidious / Emperor Palpatine",
                gender="Male",
                homeworld="Naboo",
                side="Empire",
                birth_year="82BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "Return of the Jedi", "The Rise of Skywalker"],
                short_description="Dark Lord of the Sith who rose to become Emperor of the Galaxy.",
                description=[
                    {"type": "paragraph", "text": "Darth Sidious, also known as Emperor Palpatine, masterminded the fall of the Galactic Republic and the destruction of the Jedi Order."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Cunning strategist and manipulator.",
                        "Master of the dark side of the Force.",
                        "Obsessed with immortality and control."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Engineered the Clone Wars to seize control of the Republic.",
                        "Transformed the Republic into the Galactic Empire.",
                        "Trained Darth Vader as his apprentice.",
                        "Returned through dark science and sorcery to challenge the Resistance."
                    ]}
                ],
                featured=False
            ),

            # --- COUNT DOOKU ---
            Character(
                name="Count Dooku",
                gender="Male",
                homeworld="Serenno",
                side="Empire",
                birth_year="102BBY",
                films=["Attack of the Clones", "Revenge of the Sith"],
                short_description="Former Jedi Master turned Sith Lord and leader of the Separatists.",
                description=[
                    {"type": "paragraph", "text": "Count Dooku, once a respected Jedi, fell to the dark side under Darth Sidious, becoming Darth Tyranus and leading the Separatist movement."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Elegant, refined, and politically ambitious.",
                        "Master lightsaber duelist.",
                        "Disillusioned with Jedi hypocrisy."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Left the Jedi Order after losing faith in the Republic.",
                        "Mentored Qui-Gon Jinn before his fall.",
                        "Led the Separatist army in the Clone Wars.",
                        "Killed by Anakin Skywalker under Palpatine’s orders."
                    ]}
                ],
                featured=False
            ),

            # --- DARTH MAUL ---
            Character(
                name="Darth Maul",
                gender="Male",
                homeworld="Dathomir",
                side="Empire",
                birth_year="54BBY",
                films=["The Phantom Menace", "Solo: A Star Wars Story"],
                short_description="Sith apprentice known for his double-bladed lightsaber and hatred of the Jedi.",
                description=[
                    {"type": "paragraph", "text": "Darth Maul was the fierce Zabrak apprentice of Darth Sidious. Though presumed dead after Naboo, he survived, consumed by vengeance."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Silent, disciplined, and deadly.",
                        "Driven by hatred for Obi-Wan Kenobi.",
                        "Master of lightsaber combat."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Killed Qui-Gon Jinn during the Battle of Naboo.",
                        "Survived his defeat and built a criminal empire.",
                        "Confronted Obi-Wan Kenobi years later on Tatooine, meeting his final end."
                    ]}
                ],
                featured=False
            ),

            # --- REY SKYWALKER ---
            Character(
                name="Rey Skywalker",
                gender="Female",
                homeworld="Jakku",
                side="Rebels",
                birth_year="15ABY",
                films=["The Force Awakens", "The Last Jedi", "The Rise of Skywalker"],
                short_description="Scavenger who became the last Jedi and heir to the Skywalker legacy.",
                description=[
                    {"type": "paragraph", "text": "Rey was a scavenger from Jakku who discovered her strong connection to the Force, later becoming the last Jedi and symbol of hope in the galaxy."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Resilient and independent.",
                        "Inquisitive with strong moral compass.",
                        "Determined to find her place in the galaxy."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Discovered the Force after meeting BB-8 and Finn.",
                        "Trained under Luke Skywalker and Leia Organa.",
                        "Defeated Emperor Palpatine with the power of all past Jedi.",
                        "Chose the name 'Skywalker' to honor her mentors."
                    ]}
                ],
                featured=True
            ),

            # --- FINN ---
            Character(
                name="Finn",
                gender="Male",
                homeworld="Unknown",
                side="Rebels",
                birth_year="11ABY",
                films=["The Force Awakens", "The Last Jedi", "The Rise of Skywalker"],
                short_description="Former stormtrooper who defected to join the Resistance.",
                description=[
                    {"type": "paragraph", "text": "Finn was a stormtrooper trained by the First Order who found the courage to defect and join the Resistance, becoming one of its bravest fighters."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Courageous and compassionate.",
                        "Driven by conscience rather than command.",
                        "Protective of his friends and allies."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Escaped the First Order with Poe Dameron.",
                        "Helped destroy Starkiller Base.",
                        "Fought alongside Rey against the First Order.",
                        "Became a Resistance leader who inspired hope among former stormtroopers."
                    ]}
                ],
                featured=False
            ),

            # --- POE DAMERON ---
            Character(
                name="Poe Dameron",
                gender="Male",
                homeworld="Yavin IV",
                side="Rebels",
                birth_year="2ABY",
                films=["The Force Awakens", "The Last Jedi", "The Rise of Skywalker"],
                short_description="Starfighter pilot and leader in the Resistance.",
                description=[
                    {"type": "paragraph", "text": "Poe Dameron was a skilled pilot and commander in the Resistance, known for his daring missions and unwavering loyalty to General Leia Organa."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Confident and charismatic leader.",
                        "Exceptional pilot with fearless instincts.",
                        "Loyal and deeply respectful of Leia Organa."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Led the daring attack on Starkiller Base.",
                        "Clashed with Vice Admiral Holdo during the Resistance crisis.",
                        "Flew the Millennium Falcon during the final battle against the Sith fleet.",
                        "Helped rebuild the Resistance after Leia’s passing."
                    ]}
                ],
                featured=False
            ),

            # --- JYN ERSO ---
            Character(
                name="Jyn Erso",
                gender="Female",
                homeworld="Vallt",
                side="Rebels",
                birth_year="22BBY",
                films=["Rogue One"],
                short_description="Leader of Rogue One who stole the Death Star plans.",
                description=[
                    {"type": "paragraph", "text": "Jyn Erso was the courageous leader of Rogue One, the team that stole the Death Star plans and gave the Rebellion its first real victory against the Empire."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Fearless and determined rebel fighter.",
                        "Disillusioned but ultimately hopeful.",
                        "Inspired unity across divided Rebel cells."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Recruited by the Rebel Alliance to find her father, Galen Erso.",
                        "Led the Rogue One team to Scarif to steal the Death Star plans.",
                        "Transmitted the plans to the Rebel fleet before sacrificing her life.",
                        "Her actions directly enabled the destruction of the first Death Star."
                    ]}
                ],
                featured=True
            ),

            # --- CASSIAN ANDOR ---
            Character(
                name="Cassian Andor",
                gender="Male",
                homeworld="Fest",
                side="Rebels",
                birth_year="26BBY",
                films=["Rogue One"],
                short_description="Rebel intelligence officer and spy in Rogue One.",
                description=[
                    {"type": "paragraph", "text": "Cassian Andor was a skilled intelligence officer for the Rebel Alliance, known for his strategic mind and moral complexity."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Pragmatic and resilient operative.",
                        "Willing to make hard choices for the greater good.",
                        "Believed deeply in the cause of freedom."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Led the mission to capture Jyn Erso and recruit her for Rogue One.",
                        "Infiltrated Scarif alongside Jyn to retrieve the Death Star plans.",
                        "Sacrificed himself in the final transmission of the plans.",
                        "Became a symbol of quiet heroism within the Rebellion."
                    ]}
                ],
                featured=False
            ),

            # --- R2-D2 ---
            Character(
                name="R2-D2",
                gender="None",
                homeworld="Naboo",
                side="Rebels",
                birth_year="33BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi"],
                short_description="Astromech droid who served Padmé, Anakin, and Luke Skywalker.",
                description=[
                    {"type": "paragraph", "text": "R2-D2 was a resourceful astromech droid whose heroics helped shape galactic history, serving three generations of the Skywalker family."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Fearless and loyal companion.",
                        "Expert mechanic and starship assistant.",
                        "Communicates through expressive beeps and chirps."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Saved Queen Amidala’s ship during the invasion of Naboo.",
                        "Carried critical holograms and messages during the Clone Wars.",
                        "Delivered Leia’s message to Obi-Wan Kenobi on Tatooine.",
                        "Accompanied Luke on his missions against the Empire."
                    ]}
                ],
                featured=False
            ),
                        # --- C-3PO ---
            Character(
                name="C-3PO",
                gender="None",
                homeworld="Tatooine",
                side="Rebels",
                birth_year="112BBY",
                films=[
                    "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith",
                    "A New Hope", "The Empire Strikes Back", "Return of the Jedi",
                    "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"
                ],
                short_description="Protocol droid fluent in over six million forms of communication.",
                description=[
                    {"type": "paragraph", "text": "C-3PO was a humanoid protocol droid built by Anakin Skywalker and known for his cautious personality and encyclopedic knowledge of languages."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Polite and anxious personality.",
                        "Expert in translation and diplomacy.",
                        "Loyal companion often caught in dangerous adventures."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Built by young Anakin Skywalker on Tatooine.",
                        "Served alongside R2-D2 throughout the Clone Wars and Rebellion.",
                        "Provided crucial translations for the Resistance in later years.",
                        "Often underestimated, yet vital to galactic peace."
                    ]}
                ],
                featured=False
            ),

            # --- BAIL ORGANA ---
            Character(
                name="Bail Organa",
                gender="Male",
                homeworld="Alderaan",
                side="Rebels",
                birth_year="67BBY",
                films=["Attack of the Clones", "Revenge of the Sith", "Rogue One"],
                short_description="Senator of Alderaan and adoptive father of Leia Organa.",
                description=[
                    {"type": "paragraph", "text": "Bail Organa was a respected senator and one of the earliest architects of the Rebel Alliance. His leadership and compassion helped shape the Rebellion’s ideals."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Wise and pragmatic leader.",
                        "Committed to justice and peace.",
                        "Deeply devoted father figure."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Helped form the Rebel Alliance alongside Mon Mothma.",
                        "Adopted Leia Organa and raised her as Alderaan’s princess.",
                        "Died when Alderaan was destroyed by the Death Star."
                    ]}
                ],
                featured=False
            ),

            # --- MACE WINDU ---
            Character(
                name="Mace Windu",
                gender="Male",
                homeworld="Haruun Kal",
                side="Rebels",
                birth_year="72BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"],
                short_description="Respected Jedi Master and member of the Jedi Council.",
                description=[
                    {"type": "paragraph", "text": "Mace Windu was one of the most powerful Jedi Masters of the Republic era and a leading member of the Jedi High Council. Known for his mastery of lightsaber combat and his unshakable sense of duty."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Disciplined and deeply committed to Jedi ideals.",
                        "Master of Vaapad, a rare and dangerous lightsaber form.",
                        "Wise but rigid in his interpretation of the Force."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Discovered the potential threat of the Sith’s return.",
                        "Led Republic forces during the Battle of Geonosis.",
                        "Confronted Chancellor Palpatine, nearly defeating him before being betrayed by Anakin Skywalker."
                    ]}
                ],
                featured=False
            ),

            # --- GENERAL GRIEVOUS ---
            Character(
                name="General Grievous",
                gender="Male (Cyborg)",
                homeworld="Kalee",
                side="Empire",
                birth_year="Unknown",
                films=["Revenge of the Sith"],
                short_description="Cyborg general of the Separatist droid army, trained in Jedi arts.",
                description=[
                    {"type": "paragraph", "text": "General Grievous was a fearsome cyborg and Supreme Commander of the Separatist Droid Army. Once a Kaleesh warrior, he was transformed into a weapon of terror by Count Dooku."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Brutal and strategic military commander.",
                        "Collected lightsabers from Jedi he defeated.",
                        "Skilled combatant capable of fighting multiple Jedi simultaneously."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Captured Chancellor Palpatine at the beginning of the Clone Wars’ endgame.",
                        "Dueled Obi-Wan Kenobi on Utapau.",
                        "Killed in combat, signaling the collapse of the Separatists."
                    ]}
                ],
                featured=False
            ),

            # --- SUPREME LEADER SNOKE ---
            Character(
                name="Supreme Leader Snoke",
                gender="Male",
                homeworld="Unknown",
                side="Empire",
                birth_year="Unknown",
                films=["The Force Awakens", "The Last Jedi"],
                short_description="Supreme Leader of the First Order and mentor to Kylo Ren.",
                description=[
                    {"type": "paragraph", "text": "Supreme Leader Snoke was a mysterious and powerful dark side wielder who led the First Order. Created by Emperor Palpatine, he manipulated Ben Solo and reignited galactic war."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Cunning and manipulative strategist.",
                        "Powerful in the dark side of the Force.",
                        "Believed in ruling through fear and dominance."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Rebuilt the First Order from the ashes of the Empire.",
                        "Trained Kylo Ren as his apprentice.",
                        "Killed by Kylo Ren during a power struggle for leadership."
                    ]}
                ],
                featured=False
            ),

            # --- AHSOKA TANO ---
            Character(
                name="Ahsoka Tano",
                gender="Female",
                homeworld="Shili",
                side="Rebels",
                birth_year="36BBY",
                films=["The Clone Wars", "Rebels", "Ahsoka (Series)"],
                short_description="Former Jedi Padawan of Anakin Skywalker who became a key Rebel leader.",
                description=[
                    {"type": "paragraph", "text": "Ahsoka Tano was the Padawan of Anakin Skywalker during the Clone Wars. She later became a symbol of independence and moral clarity after leaving the Jedi Order."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Courageous and empathetic leader.",
                        "Strong moral compass and independent thinker.",
                        "Master of dual lightsaber combat."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Fought alongside Anakin and Obi-Wan during the Clone Wars.",
                        "Left the Jedi Order after being falsely accused of treason.",
                        "Aided the early Rebellion under the codename 'Fulcrum'.",
                        "Confronted Darth Vader, realizing he was her former master."
                    ]}
                ],
                featured=True
            ),

            # --- MON MOTHMA ---
            Character(
                name="Mon Mothma",
                gender="Female",
                homeworld="Chandrila",
                side="Rebels",
                birth_year="46BBY",
                films=["Revenge of the Sith", "Rogue One", "Return of the Jedi"],
                short_description="Founder and political leader of the Rebel Alliance.",
                description=[
                    {"type": "paragraph", "text": "Mon Mothma was a visionary leader and one of the founders of the Rebel Alliance, uniting factions across the galaxy to oppose Imperial tyranny."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Charismatic and deeply principled.",
                        "Skilled in diplomacy and negotiation.",
                        "Symbol of unity and justice."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Co-founded the Rebel Alliance with Bail Organa.",
                        "Oversaw operations leading to the destruction of the Death Star.",
                        "Later became the first Chancellor of the New Republic."
                    ]}
                ],
                featured=False
            ),

            # --- JAR JAR BINKS ---
            Character(
                name="Jar Jar Binks",
                gender="Male",
                homeworld="Naboo",
                side="Rebels",
                birth_year="52BBY",
                films=["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"],
                short_description="Gungan from Naboo who played an accidental role in galactic events.",
                description=[
                    {"type": "paragraph", "text": "Jar Jar Binks was a clumsy yet well-meaning Gungan from Naboo whose actions inadvertently shaped galactic history by granting emergency powers to Palpatine."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Good-hearted and loyal.",
                        "Clumsy yet unexpectedly influential.",
                        "Served as a comedic presence amidst darker events."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Befriended Qui-Gon Jinn and Obi-Wan Kenobi during the Naboo crisis.",
                        "Represented Naboo in the Galactic Senate.",
                        "Proposed emergency powers for Palpatine, enabling his rise to Emperor."
                    ]}
                ],
                featured=False
            ),

            # --- BOBA FETT ---
            Character(
                name="Boba Fett",
                gender="Male",
                homeworld="Kamino",
                side="Empire",
                birth_year="32BBY",
                films=[
                    "The Empire Strikes Back", "Return of the Jedi",
                    "The Mandalorian", "The Book of Boba Fett"
                ],
                short_description="Feared bounty hunter who survived the Sarlacc pit.",
                description=[
                    {"type": "paragraph", "text": "Boba Fett was a legendary bounty hunter, cloned from Jango Fett. His armor and reputation made him one of the most feared figures in the galaxy."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Honorable yet ruthless warrior.",
                        "Lived by a strict Mandalorian code.",
                        "Survivor with unmatched combat skill."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Captured Han Solo for Jabba the Hutt.",
                        "Survived the Sarlacc pit after the Battle of Tatooine.",
                        "Reclaimed his armor and ruled Tatooine’s underworld as Daimyo."
                    ]}
                ],
                featured=True
            ),
                        # --- JANGO FETT ---
            Character(
                name="Jango Fett",
                gender="Male",
                homeworld="Concord Dawn",
                side="Empire",
                birth_year="66BBY",
                films=["Attack of the Clones"],
                short_description="Renowned bounty hunter and genetic template for the clone army.",
                description=[
                    {"type": "paragraph", "text": "Jango Fett was a skilled bounty hunter chosen by Count Dooku to serve as the genetic template for the Republic’s clone army. He raised one unaltered clone as his son, Boba Fett."},
                    {"type": "section", "title": "Core Traits", "items": [
                        "Disciplined and calculating professional.",
                        "Expert marksman and martial artist.",
                        "Father figure to his clone son Boba."
                    ]},
                    {"type": "section", "title": "Key Moments", "items": [
                        "Selected to provide DNA for the clone troopers on Kamino.",
                        "Fought Obi-Wan Kenobi on Kamino and Geonosis.",
                        "Killed by Mace Windu during the Battle of Geonosis."
                    ]}
                ],
                featured=False
            ),
        ]

        db.add_all(characters)
        db.commit()
        print("✅ Database seeded with Star Wars characters!")
    else:
        print("ℹ️ Database already seeded.")

    db.close()


if __name__ == "__main__":
    seed_data()
