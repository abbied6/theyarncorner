const localeMap = {
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR"
};

const translations = {
    en: {
        "nav.home": "Home",
        "nav.crochet": "Crochet",
        "nav.knit": "Knit",
        "nav.patterns": "Patterns",
        "nav.about": "About Us",
        "nav.contact": "Contact Us",
        "nav.languageSwitcher": "Language Switcher",
        "home.intro": "At The Yarn Corner, we make learning how to crochet and knit simple and accessible for beginners. Explore essential supplies with easy purchasing guides, browse a collection of free and premium patterns, and follow linked YouTube tutorials for step-by-step visual instruction. Everything you need is right here in one convenient spot to kickstart your crafting adventure!",
        "home.crochet.heading": "What is Crochet?",
        "home.crochet.body": "Crochet involves yarn and a hooked needle...that truly is all you need to get started! With these two items, the possibilities for what you can make are unlimited. From coasters, to bags, to blankets, crochet has a wide variety of techniques and stitches which allow crocheters to make anything they could possibly desire.",
        "home.knit.heading": "What is Knitting?",
        "home.knit.body": "Knitting requires two needles and yarn to get started. Similar to crochet, with these two things, the possibilities of what you can knit are unlimited. From sweaters, to beanies, to pot holders, knitting has a wide variety of techniques and patterns which allow knitters to make whatever their heart desires.",
        "home.readmore": "Click here for more!",
        "about.title": "About Us",
        "about.intro": "Here at The Yarn Corner, we are passionate about all things yarn. Our mission is to provide a welcoming space for crafters of all skill levels to explore, learn, and share their love for knitting and crochet. Whether you're a beginner looking to learn the basics or an experienced crafter seeking new challenges, we have something for everyone.",
        "about.story.heading": "Our Story",
        "about.story.body": "The Yarn Corner was founded with the vision of creating a community where yarn enthusiasts could come together to share their passion, learn new techniques, and inspire each other. We hope that over the years we will grow into a vibrant hub for crafters of all ages and skill levels.",
        "about.mission.heading": "Our Mission",
        "about.mission.body": "Our mission is to provide a welcoming space for crafters of all skill levels to explore, learn, and share their love for knitting and crochet. We aim to foster creativity, skill development, and a sense of community among yarn enthusiasts.",
        "about.form.heading": "Questions for Us?",
        "about.form.intro": "Have a question? Please fill out the form below and we will get back to you as soon as possible.",
        "about.form.name.label": "Name",
        "about.form.email.label": "Email",
        "about.form.message.label": "Your Question",
        "about.form.submit": "Submit",
        "about.form.thankyou": "Thank you! We received your message.",
        "contact.title": "Contact Us",
        "contact.faq.heading": "FAQ Section",
        "contact.faq.body": "Have questions about our website, patterns, or anything else? Check out our FAQ section for answers to common questions.",
        "contact.support.heading": "Customer Support",
        "contact.support.body": "If you need further assistance, our customer support team is here to help. Reach out to us via email or phone, and we'll be happy to assist you with any inquiries or issues you may have.",
        "contact.email": "Email: support@theyarncorner.com",
        "contact.phone": "Phone: (123) 456-7890",
        "contact.social.heading": "Social Media",
        "contact.social.body": "Follow us on social media to stay updated on the latest patterns, tips, and community events.",
        "contact.handle": "Our handle on all platforms is @TheYarnCorner",
        "contact.social.instagram": "Instagram",
        "contact.social.tiktok": "TikTok",
        "contact.social.facebook": "Facebook",
        "contact.social.instagram.aria": "Instagram",
        "contact.social.tiktok.aria": "TikTok",
        "contact.social.facebook.aria": "Facebook",
        "contact.faq.q1": "Do I need experience to start crocheting or knitting?",
        "contact.faq.a1": "No experience is needed. Our beginner tutorials and pattern recommendations are designed to help you start from scratch.",
        "contact.faq.q2": "Are your patterns free?",
        "contact.faq.a2": "We share both free and paid options. Each listing clearly labels whether it is a free resource or a pattern to purchase.",
        "contact.faq.q3": "How can I choose the right yarn and hook/needle size?",
        "contact.faq.a3": "Start with medium-weight yarn and the suggested hook or needle size on the yarn label. This is usually the easiest setup for beginners.",
        "contact.faq.q4": "How long does support take to respond?",
        "contact.faq.a4": "We aim to respond within 24 to 48 hours. During busy periods, replies may take slightly longer.",
        "crochet.title": "Crochet",
        "crochet.intro": "Welcome to the Crochet section of The Yarn Corner! Crocheting involves using a hook to pull loops of yarn through each other, which creates \"stitches\". Some of the basic stitches that are invovled in crochet are the chain stitch (which is also known as the foundation stitch), the single crochet, and the double crochet. Beginners must learn how to hold the hook and yarn comfortably, create a starting chain, and build rows or rounds from there. Working one loop at a time makes it very easy to fix any mistakes, which makes crochet a very beginner-friendly entry point into the world of yarn crafts!",
        "crochet.supplies.heading": "Supplies Needed",
        "crochet.supplies.body": "Crocheting only requires a few basic supplies to get started: basic yarn and a crochet hook!",
        "crochet.supplies.item1": "Yarn",
        "crochet.supplies.item2": "Crochet hook",
        "crochet.supplies.item3": "Scissors - for cutting yarn",
        "crochet.supplies.item4": "Yarn needle - to weave in ends",
        "crochet.figure.caption": "While medium weight yarn is the most commonly used...there is a wide variety of weights available for different projects!",
        "crochet.basic.heading": "Basic Stitches",
        "crochet.basic.intro1": "With crocheting there are a few important stitches that are essential for any crafter to master. Before we get into those stitches, it's important to first understand how to make a slip knot.",
        "crochet.basic.intro2": "A slip knot is the most common way to start a crochet project. It's a simple loop that can be adjusted and tightened as needed.",
        "crochet.chain.heading": "Chain Stitch",
        "crochet.chain.body": "The chain stitch (ch) is the most basic stitch in crochet and is used to start most projects by creating a foundation row.",
        "crochet.slip.heading": "Slip Stitch",
        "crochet.slip.body": "The slip stitch (sl st) is a simple stitch used to join rounds or move yarn across stitches without adding any height.",
        "crochet.single.heading": "Single Crochet",
        "crochet.single.body": "The single crochet (sc) is a fundamental tight stitch that creates a dense result and is great for beginners and sturdy projects.",
        "crochet.hdc.heading": "Half Double Crochet",
        "crochet.hdc.body": "The half double crochet (hdc) is a versatile stitch that creates a slightly taller stitch than the single crochet.",
        "crochet.double.heading": "Double Crochet",
        "crochet.double.body": "The double crochet (dc) is a taller stitch that builds up quickly and creates a more airy and open result.",
        "crochet.treble.heading": "Treble Crochet",
        "crochet.treble.body": "The treble crochet (tr) is the tallest basic stitch and creates long loops and a loose and lacy texture.",
        "crochet.tutorials.heading": "Tutorials/Basic Patterns",
        "crochet.tutorials.body": "For visual learners, we have compiled a list of YouTube tutorials that go over some of the basics of crochet.",
        "crochet.tutorials.caption": "This video covers the basic stitches discussed above, starting with the slip knot and ending with the treble crochet.",
        "knit.title": "Knit",
        "knit.intro": "Welcome to the Knit section of The Yarn Corner! Knitting uses two needles to form a series of interconnected loops called stitches. The two foundational stitches in knitting are the knit stitch and the purl stitch, and nearly every knitting pattern is built from a combination of these stitches. Beginners start by learning how to cast on (getting stitches onto the needles), practice basic stitch patterns, and then bind off to finish a piece. While it can be a bit tricky to get the hang of, knitting becomes very rhythmic and relaxing with practice.",
        "knit.supplies.heading": "Supplies Needed",
        "knit.supplies.body": "Knitting requires only a few basic supplies to get started: basic yarn and knitting needles!",
        "knit.supplies.item1": "Yarn",
        "knit.supplies.item2": "Knitting needles",
        "knit.supplies.item3": "Scissors - for cutting yarn",
        "knit.supplies.item4": "Yarn needle - to weave in ends",
        "knit.figure.caption": "Medium weight yarn is the most commonly used yarn weight for knitting, but there is a variety of weights that work best for different projects.",
        "knit.basic.heading": "Basic Stitches",
        "knit.caston.heading": "Cast On",
        "knit.caston.body": "The cast on is the method used to create the first row of loops on your needle and forms the foundation of your project.",
        "knit.knitstitch.heading": "Knit Stitch",
        "knit.knitstitch.body": "The knit stitch is the most basic stitch in knitting and creates a smooth \"V\"-shaped pattern which helps to form the front side of most knitting projects.",
        "knit.purl.heading": "Purl Stitch",
        "knit.purl.body": "The purl stitch is the reverse of the knit stitch which produces a bumpy texture is is often used to create patterns like ribbing.",
        "knit.bindoff.heading": "Bind Off",
        "knit.bindoff.body": "Binding off is the method used to finish a knitting project which helps secure the stitches so they don't unravel.",
        "knit.tutorials.heading": "Tutorials/Basic Patterns",
        "knit.tutorials.body": "For visual learners, we have compiled a list of YouTube tutorials that go over some of the basics of knitting.",
        "knit.tutorials.caption1": "This video covers the very basics of knitting and covers how to cast on, knit, and cast off.",
        "knit.tutorials.caption2": "This video covers the purl stitch.",
        "patterns.title": "Patterns",
        "patterns.intro": "Discover a wide variety of knitting and crochet patterns designed for every skill level, from beginner to advanced. Patterns include a mix of free and paid options, giving you the flexibility to explore new techniques, create beautiful pieces, and grow your skills at your own pace.",
        "patterns.beginner.heading": "Beginner Patterns",
        "patterns.beginner.body": "When it comes to starting crochet and knit, it is important to learn the different stitches, understand how to control tension, and maintain consistency. These patterns are a great place for beginners to start learning these important skills.",
        "patterns.intermediate.heading": "Intermediate Patterns",
        "patterns.intermediate.body": "Once you have mastered the basics, you can start exploring more complex patterns that introduce new stitches, techniques, and design elements. These patterns will help you build on your foundational skills and challenge you to create more intricate and beautiful pieces.",
        "patterns.advanced.heading": "Advanced Patterns",
        "patterns.advanced.body": "For those who have honed their skills and are looking for a challenge, advanced patterns offer intricate designs, complex stitch combinations, and unique construction techniques. These patterns are perfect for experienced crafters who want to push their creativity and craftsmanship to the next level.",
        "patterns.beginner.crochet.washcloth": "Crochet Washcloth",
        "patterns.beginner.crochet.dishcloth": "Farmhouse Dishcloth",
        "patterns.beginner.crochet.scarf1": "Simple Single Color Scarf",
        "patterns.beginner.crochet.scarf2": "Beginner Scarf Pattern",
        "patterns.beginner.crochet.grannysquare1": "Single Color Granny Square",
        "patterns.beginner.crochet.grannysquare2": "Multi Color Granny Square",
        "patterns.beginner.crochet.beanie1": "Basic Beanie Tutorial",
        "patterns.beginner.crochet.beanie2": "Striped Beanie",
        "patterns.beginner.crochet.blanket1": "Basic Striped Blanket",
        "patterns.beginner.knit.scarf1": "Beginner Scarf",
        "patterns.beginner.knit.scarf2": "Ribbed Scarf",
        "patterns.beginner.knit.dishcloth": "Basic One Color Dishcloth",
        "patterns.beginner.knit.potholder1": "Candor Potholder Pattern",
        "patterns.beginner.knit.potholder2": "Multi Color Potholder Pattern",
        "patterns.beginner.knit.headband1": "Autumn Headband Pattern",
        "patterns.beginner.knit.headband2": "Brigitte Headband Pattern",
        "patterns.beginner.knit.hat1": "Rib Knit Hat Pattern",
        "patterns.beginner.knit.hat2": "Knit in the Round Hat Pattern",
        "patterns.beginner.knit.blanket1": "Arctic Throw Blanket",
        "patterns.intermediate.crochet.amigurumi": "Amigurumi Plushies Playlist",
        "patterns.intermediate.crochet.jumper1": "Striped Moss Stitch Crochet Jumper",
        "patterns.intermediate.crochet.jumper2": "Fuzzy Striped Crochet Sweater Pattern",
        "patterns.intermediate.crochet.totebag": "Basic Crochet Tote Bag",
        "patterns.intermediate.crochet.grannysquarebag": "Granny Square Bag Tutorial",
        "patterns.intermediate.crochet.meshbag": "Crochet Mesh Bag",
        "patterns.intermediate.crochet.grannysquareblanket": "Giant Granny Square Blanket",
        "patterns.intermediate.crochet.starblanket": "Star Blanket with a Pom Pom Border",
        "patterns.intermediate.crochet.chevronblanket": "Crochet Chevron Blanket",
        "patterns.intermediate.crochet.argylehat": "Argyle Crochet Hat",
        "patterns.intermediate.knit.sweater1": "Beginner Knit Sweater Pattern",
        "patterns.intermediate.knit.cardigan": "Easy Button Cardigan",
        "patterns.intermediate.knit.socks1": "Easy Sock Pattern",
        "patterns.intermediate.knit.mittens": "Easy Knit Mittens - 3 Different Sizes",
        "patterns.intermediate.knit.gloves": "Easy Knit Gloves",
        "patterns.intermediate.knit.scarf1": "Celtic Cable Scarf",
        "patterns.intermediate.knit.hat1": "Cable Knit Hat",
        "patterns.intermediate.knit.socks2": "Knit Colorwork Socks - Fair Isle Sock",
        "patterns.advanced.crochet.dress1": "Ivy Dress Crochet Tutorial",
        "patterns.advanced.crochet.dress2": "Summery Babydoll Dress Tutorial",
        "patterns.advanced.crochet.top": "Leaf Drop Top Crochet Tutorial",
        "patterns.advanced.crochet.bottoms": "Crochet Pants & Shorts Tutorial",
        "patterns.advanced.crochet.lacymotif": "Lacy Motif Crochet Tutorial",
        "patterns.advanced.crochet.bookmark": "Crochet Floral Lace Bookmark",
        "patterns.advanced.crochet.mosaicblanket": "Overlay Mosaic Crochet Blanket Playlist",
        "patterns.advanced.knit.arcticsweater": "Arctic Light Sweater Part 1",
        "patterns.advanced.knit.icelandicsweater": "Knitted Icelandic Sweater Part 1",
        "patterns.advanced.knit.laceshawl": "Victorian Shetland Lace Shawl Knit",
        "patterns.advanced.knit.socks1": "Knit Lyon Memories Socks Tutorial",
        "patterns.advanced.knit.cablepatterns": "Detailed Cable Patterns Playlist",
        "patterns.beginner.crochet.washcloth.desc": "This Crochet Washcloth pattern is a beginner-friendly project that helps you practice basic stitches while creating a simple, useful item for everyday use.",
        "patterns.beginner.crochet.dishcloth.desc": "This Farmhouse Dishcloth tutorial teaches beginners how to make a stylish, textured dishcloth perfect for kitchen use.",
        "patterns.beginner.crochet.scarf1.desc": "This Simple Single Color Scarf tutorial walks beginners through creating a classic one-color scarf using basic crochet stitches.",
        "patterns.beginner.crochet.scarf2.desc": "This Beginner Scarf Pattern offers another easy scarf design for new crocheters, helping build confidence while creating a wearable finished piece.",
        "patterns.beginner.crochet.grannysquare1.desc": "This Single Color Granny Square tutorial teaches beginners how to create a classic granny square using one yarn color, making it a great project for learning stitch structure.",
        "patterns.beginner.crochet.grannysquare2.desc": "This Multi Color Granny Square tutorial shows how to build a traditional granny square while changing colors, helping beginners practice color transitions and pattern repetition.",
        "patterns.beginner.crochet.beanie1.desc": "This Basic Beanie Tutorial is an easy step-by-step guide for crocheting a simple beanie, perfect as a first wearable project.",
        "patterns.beginner.crochet.beanie2.desc": "This Striped Beanie tutorial teaches beginners how to make a beanie with color changes for a fun striped design.",
        "patterns.beginner.crochet.blanket1.desc": "This Basic Striped Blanket tutorial helps beginners create a cozy striped blanket while practicing stitch repetition and row consistency.",
        "patterns.beginner.knit.scarf1.desc": "This Beginner Scarf tutorial walks beginners through knitting a simple, cozy scarf while practicing foundational stitches.",
        "patterns.beginner.knit.scarf2.desc": "This Ribbed Scarf tutorial shows beginners how to knit a stretchy ribbed scarf, perfect for practicing knit and purl combinations.",
        "patterns.beginner.knit.dishcloth.desc": "This Basic One Color Dishcloth tutorial is ideal for beginners to practice simple knit stitches while creating a functional dishcloth.",
        "patterns.beginner.knit.potholder1.desc": "This Candor Potholder Pattern tutorial guides beginners through knitting a practical potholder in a simple, beginner-friendly style.",
        "patterns.beginner.knit.potholder2.desc": "This Multi Color Potholder Pattern tutorial teaches beginners how to combine yarn colors while knitting a functional potholder.",
        "patterns.beginner.knit.headband1.desc": "This Autumn Headband Pattern tutorial guides beginners through knitting a cozy seasonal headband with a simple, stylish design.",
        "patterns.beginner.knit.headband2.desc": "This Brigitte Headband Pattern tutorial shows how to knit a stylish headband, perfect for practicing basic stitches and finishing techniques.",
        "patterns.beginner.knit.hat1.desc": "This Rib Knit Hat Pattern tutorial teaches beginners to knit a warm ribbed hat, perfect for practicing knit and purl combinations.",
        "patterns.beginner.knit.hat2.desc": "This Knit in the Round Hat Pattern tutorial demonstrates how to knit a seamless hat in the round, perfect for beginners ready to try circular knitting.",
        "patterns.beginner.knit.blanket1.desc": "This Arctic Throw Blanket tutorial guides beginners through knitting a cozy throw blanket while practicing stitch repetition and pattern consistency.",
        "patterns.intermediate.crochet.amigurumi.desc": "This Amigurumi Plushies Playlist includes 67 different crochet tutorials that guide beginners through creating a variety of stuffed animals and plush projects.",
        "patterns.intermediate.crochet.jumper1.desc": "This Striped Moss Stitch Crochet Jumper tutorial teaches crocheters how to create a cozy striped sweater while practicing moss stitch texture and garment construction.",
        "patterns.intermediate.crochet.jumper2.desc": "This Fuzzy Striped Crochet Sweater Pattern tutorial walks users through creating a soft, textured sweater with stylish stripes and a fuzzy finish.",
        "patterns.intermediate.crochet.totebag.desc": "This Basic Crochet Tote Bag tutorial helps beginners create a simple and functional tote bag while practicing foundational stitches.",
        "patterns.intermediate.crochet.grannysquarebag.desc": "This Granny Square Bag Tutorial shows how to combine classic granny squares into a stylish crochet bag project.",
        "patterns.intermediate.crochet.meshbag.desc": "This Crochet Mesh Bag tutorial guides users through creating a lightweight, reusable mesh bag perfect for everyday use.",
        "patterns.intermediate.crochet.grannysquareblanket.desc": "This Giant Granny Square Blanket tutorial helps crocheters create a bold blanket design using an oversized granny square pattern.",
        "patterns.intermediate.crochet.starblanket.desc": "This Star Blanket with a Pom Pom Border tutorial teaches users how to create a decorative star-shaped blanket finished with a playful pom pom edge.",
        "patterns.intermediate.crochet.chevronblanket.desc": "This Crochet Chevron Blanket tutorial walks users through creating a classic chevron pattern blanket with bold zigzag rows.",
        "patterns.intermediate.crochet.argylehat.desc": "This Argyle Crochet Hat tutorial introduces more advanced shaping techniques while creating a stylish patterned hat.",
        "patterns.intermediate.knit.sweater1.desc": "This Beginner Knit Sweater Pattern tutorial guides beginners through creating a simple sweater, making it a great first clothing project for knitters ready to level up.",
        "patterns.intermediate.knit.cardigan.desc": "This Easy Button Cardigan tutorial walks knitters through making a cozy cardigan with buttons, perfect for learning basic garment construction.",
        "patterns.intermediate.knit.socks1.desc": "This Easy Sock Pattern tutorial teaches beginners how to knit a simple pair of socks while practicing shaping and working in the round.",
        "patterns.intermediate.knit.mittens.desc": "This Easy Knit Mittens - 3 Different Sizes tutorial shows beginners how to create warm mittens with size options for a customizable fit.",
        "patterns.intermediate.knit.gloves.desc": "This Easy Knit Gloves tutorial walks knitters through creating simple gloves while practicing shaping and finger construction.",
        "patterns.intermediate.knit.scarf1.desc": "This Celtic Cable Scarf tutorial introduces knitters to cable work while creating a beautiful textured scarf pattern.",
        "patterns.intermediate.knit.hat1.desc": "This Cable Knit Hat tutorial teaches knitters how to create a classic cable hat with beautiful texture and shaping.",
        "patterns.intermediate.knit.socks2.desc": "This Knit Colorwork Socks - Fair Isle Sock tutorial helps knitters practice colorwork techniques while creating patterned socks with a Fair Isle design.",
        "patterns.advanced.crochet.dress1.desc": "This Ivy Dress Crochet Tutorial guides advanced crocheters through creating a fitted dress with detailed shaping and garment construction techniques.",
        "patterns.advanced.crochet.dress2.desc": "This Summery Babydoll Dress Tutorial teaches crocheters how to create a lightweight fitted dress with more advanced shaping and styling details.",
        "patterns.advanced.crochet.top.desc": "This Leaf Drop Top Crochet Tutorial walks users through creating a stylish fitted top with intricate stitch work and detailed garment shaping.",
        "patterns.advanced.crochet.bottoms.desc": "This Crochet Pants & Shorts Tutorial introduces advanced garment construction techniques while guiding users through fitted bottoms projects.",
        "patterns.advanced.crochet.lacymotif.desc": "This Lacy Motif Crochet Tutorial teaches advanced crocheters how to create delicate lace motifs with detailed stitch combinations and intricate pattern work.",
        "patterns.advanced.crochet.bookmark.desc": "This Crochet Floral Lace Bookmark tutorial helps users practice delicate lace techniques while creating an elegant decorative bookmark.",
        "patterns.advanced.crochet.mosaicblanket.desc": "This Overlay Mosaic Crochet Blanket Playlist contains 9 advanced tutorials that guide users through intricate overlay and mandala-style blanket designs.",
        "patterns.advanced.knit.arcticsweater.desc": "This Arctic Light Sweater tutorial series guides advanced knitters through creating a fitted sweater using multiple shaping and construction techniques.",
        "patterns.advanced.knit.icelandicsweater.desc": "This Knitted Icelandic Sweater tutorial series teaches advanced knitters how to create a detailed Icelandic-style sweater with intricate shaping and colorwork.",
        "patterns.advanced.knit.laceshawl.desc": "This Victorian Shetland Lace Shawl Knit tutorial introduces advanced knitters to delicate lacework techniques while creating an elegant shawl design.",
        "patterns.advanced.knit.socks1.desc": "This Knit Lyon Memories Socks Tutorial walks advanced knitters through detailed sock construction, including shaping and heel variations.",
        "patterns.advanced.knit.cablepatterns.desc": "This Detailed Cable Patterns Playlist includes 15 videos that guide knitters through advanced cable stitch techniques and intricate textured designs.",
        "patterns.filter.all": "All Patterns",
        "patterns.filter.crochet": "Crochet Only",
        "patterns.filter.knit": "Knit Only",
        "patterns.filter.ariaLabel": "Pattern filters",
        "patterns.filter.noresults": "No patterns match this filter.",
        "footer.updated": "Last updated:"
    },
    es: {
        "nav.home": "Inicio",
        "nav.crochet": "Crochet",
        "nav.knit": "Tejido",
        "nav.patterns": "Patrones",
        "nav.about": "Sobre Nosotros",
        "nav.contact": "Contáctanos",
        "nav.languageSwitcher": "Selector de idioma",
        "home.intro": "En The Yarn Corner, hacemos que aprender crochet y tejido sea simple y accesible para principiantes. Explora materiales esenciales con guías de compra fáciles, revisa una colección de patrones gratuitos y premium, y sigue tutoriales de YouTube paso a paso. Todo lo que necesitas está aquí en un solo lugar para comenzar tu aventura de tejido.",
        "home.crochet.heading": "¿Qué es el Crochet?",
        "home.crochet.body": "El crochet utiliza hilo y una aguja con gancho...¡eso es realmente todo lo que necesitas para empezar! Con estos dos elementos, las posibilidades de lo que puedes crear son ilimitadas. Desde posavasos, hasta bolsos, hasta mantas, el crochet ofrece una gran variedad de técnicas y puntos que permiten crear todo lo que imagines.",
        "home.knit.heading": "¿Qué es el Tejido?",
        "home.knit.body": "Tejer requiere dos agujas e hilo para empezar. Al igual que el crochet, con estas dos cosas las posibilidades de lo que puedes tejer son ilimitadas. Desde suéteres, hasta gorros, hasta agarraderas, el tejido ofrece una gran variedad de técnicas y patrones que permiten crear lo que desees.",
        "home.readmore": "¡Haz clic aquí para más!",
        "about.title": "Sobre Nosotros",
        "about.intro": "Aquí en The Yarn Corner, nos apasiona todo lo relacionado con el hilo. Nuestra misión es ofrecer un espacio acogedor para que artesanos de todos los niveles exploren, aprendan y compartan su amor por el tejido y el crochet. Ya seas principiante o tengas experiencia, tenemos algo para ti.",
        "about.story.heading": "Nuestra Historia",
        "about.story.body": "The Yarn Corner se fundó con la visión de crear una comunidad donde los amantes del hilo pudieran reunirse para compartir su pasión, aprender nuevas técnicas e inspirarse mutuamente. Esperamos crecer con los años hasta convertirnos en un centro vibrante para artesanos de todas las edades y niveles.",
        "about.mission.heading": "Nuestra Misión",
        "about.mission.body": "Nuestra misión es proporcionar un espacio acogedor para que artesanos de todos los niveles exploren, aprendan y compartan su amor por el tejido y el crochet. Buscamos fomentar la creatividad, el desarrollo de habilidades y el sentido de comunidad.",
        "about.form.heading": "¿Tienes preguntas para nosotros?",
        "about.form.intro": "Envíanos un mensaje rápido y te responderemos lo antes posible.",
        "about.form.name.label": "Nombre",
        "about.form.email.label": "Correo electrónico",
        "about.form.message.label": "Tu pregunta",
        "about.form.submit": "Enviar mensaje",
        "about.form.thankyou": "Gracias! Recibimos tu mensaje.",
        "contact.title": "Contáctanos",
        "contact.faq.heading": "Sección de Preguntas Frecuentes",
        "contact.faq.body": "¿Tienes preguntas sobre nuestro sitio web, patrones o cualquier otra cosa? Consulta nuestra sección de preguntas frecuentes para ver respuestas comunes.",
        "contact.support.heading": "Atención al Cliente",
        "contact.support.body": "Si necesitas más ayuda, nuestro equipo de atención al cliente está aquí para ayudarte. Comunícate por correo electrónico o teléfono y con gusto te ayudaremos con cualquier duda o problema.",
        "contact.email": "Correo electrónico: support@theyarncorner.com",
        "contact.phone": "Teléfono: (123) 456-7890",
        "contact.social.heading": "Redes Sociales",
        "contact.social.body": "Síguenos en redes sociales para mantenerte al día con los últimos patrones, consejos y eventos de la comunidad.",
        "contact.handle": "Nuestro usuario en todas las plataformas es @TheYarnCorner",
        "contact.social.instagram": "Instagram",
        "contact.social.tiktok": "TikTok",
        "contact.social.facebook": "Facebook",
        "contact.social.instagram.aria": "Instagram",
        "contact.social.tiktok.aria": "TikTok",
        "contact.social.facebook.aria": "Facebook",
        "contact.faq.q1": "Necesito experiencia para comenzar con crochet o tejido?",
        "contact.faq.a1": "No necesitas experiencia. Nuestros tutoriales para principiantes y recomendaciones de patrones están diseñados para ayudarte a empezar desde cero.",
        "contact.faq.q2": "Sus patrones son gratuitos?",
        "contact.faq.a2": "Compartimos opciones gratuitas y de pago. Cada recurso indica claramente si es gratis o si el patrón es de compra.",
        "contact.faq.q3": "Como elijo el hilo y el tamaño correcto de gancho o aguja?",
        "contact.faq.a3": "Empieza con hilo de grosor medio y el tamaño de gancho o aguja sugerido en la etiqueta del hilo. Suele ser la opcion mas facil para principiantes.",
        "contact.faq.q4": "Cuanto tarda el soporte en responder?",
        "contact.faq.a4": "Nuestro objetivo es responder en 24 a 48 horas. En periodos de alta demanda, la respuesta puede tardar un poco mas.",
        "crochet.title": "Crochet",
        "crochet.intro": "¡Bienvenido a la sección de Crochet de The Yarn Corner! El crochet consiste en usar un gancho para pasar bucles de hilo entre sí, creando \"puntos\". Algunos de los puntos básicos son cadeneta, punto bajo y punto alto. Es una excelente puerta de entrada para principiantes en el mundo de las manualidades con hilo.",
        "crochet.supplies.heading": "Materiales Necesarios",
        "crochet.supplies.body": "¡El crochet solo requiere unos pocos materiales básicos para comenzar: hilo y un gancho de crochet!",
        "crochet.supplies.item1": "Hilo",
        "crochet.supplies.item2": "Gancho de crochet",
        "crochet.supplies.item3": "Tijeras - para cortar hilo",
        "crochet.supplies.item4": "Aguja lanera - para rematar hebras",
        "crochet.figure.caption": "Aunque el hilo de grosor medio es el más común, hay una gran variedad de grosores para distintos proyectos.",
        "crochet.basic.heading": "Puntos Básicos",
        "crochet.basic.intro1": "Hay varios puntos importantes que todo tejedor de crochet debe dominar. Antes de ellos, conviene aprender a hacer un nudo corredizo.",
        "crochet.basic.intro2": "El nudo corredizo es la forma más común de comenzar un proyecto de crochet.",
        "crochet.chain.heading": "Cadeneta",
        "crochet.chain.body": "La cadeneta (ch) es el punto más básico del crochet y se usa para iniciar la mayoría de los proyectos.",
        "crochet.slip.heading": "Punto Raso",
        "crochet.slip.body": "El punto raso (sl st) se usa para unir vueltas o mover el hilo sin añadir altura.",
        "crochet.single.heading": "Punto Bajo",
        "crochet.single.body": "El punto bajo (sc) es un punto firme ideal para principiantes y proyectos resistentes.",
        "crochet.hdc.heading": "Medio Punto Alto",
        "crochet.hdc.body": "El medio punto alto (hdc) es versátil y algo más alto que el punto bajo.",
        "crochet.double.heading": "Punto Alto",
        "crochet.double.body": "El punto alto (dc) es más alto, avanza rápido y crea un tejido más aireado.",
        "crochet.treble.heading": "Punto Alto Doble",
        "crochet.treble.body": "El punto alto doble (tr) es el más alto de los básicos y crea una textura suelta y calada.",
        "crochet.tutorials.heading": "Tutoriales/Patrones Básicos",
        "crochet.tutorials.body": "Para quienes aprenden mejor con apoyo visual, recopilamos tutoriales de YouTube sobre fundamentos de crochet.",
        "crochet.tutorials.caption": "Este video cubre los puntos básicos mencionados, desde el nudo corredizo hasta el punto alto doble.",
        "knit.title": "Tejido",
        "knit.intro": "¡Bienvenido a la sección de Tejido de The Yarn Corner! Tejer usa dos agujas para formar una serie de bucles conectados llamados puntos. Los puntos base son punto derecho y punto revés. Con práctica, el tejido se vuelve rítmico y relajante.",
        "knit.supplies.heading": "Materiales Necesarios",
        "knit.supplies.body": "¡Tejer requiere solo unos pocos materiales básicos para comenzar: hilo y agujas de tejer!",
        "knit.supplies.item1": "Hilo",
        "knit.supplies.item2": "Agujas de tejer",
        "knit.supplies.item3": "Tijeras - para cortar hilo",
        "knit.supplies.item4": "Aguja lanera - para rematar hebras",
        "knit.figure.caption": "El hilo de grosor medio es el más común para tejer, pero hay distintos grosores según el proyecto.",
        "knit.basic.heading": "Puntos Básicos",
        "knit.caston.heading": "Montaje",
        "knit.caston.body": "El montaje es el método para crear la primera fila de bucles en la aguja.",
        "knit.knitstitch.heading": "Punto Derecho",
        "knit.knitstitch.body": "El punto derecho crea un patrón en forma de \"V\" muy usado en proyectos de tejido.",
        "knit.purl.heading": "Punto Revés",
        "knit.purl.body": "El punto revés es el inverso del derecho y aporta una textura con relieve.",
        "knit.bindoff.heading": "Remate",
        "knit.bindoff.body": "El remate finaliza el proyecto y asegura los puntos para que no se deshagan.",
        "knit.tutorials.heading": "Tutoriales/Patrones Básicos",
        "knit.tutorials.body": "Para aprendices visuales, recopilamos tutoriales de YouTube sobre fundamentos de tejido.",
        "knit.tutorials.caption1": "Este video cubre lo más básico del tejido: montar, tejer y rematar.",
        "knit.tutorials.caption2": "Este video cubre el punto revés.",
        "patterns.title": "Patrones",
        "patterns.intro": "Descubre una gran variedad de patrones de tejido y crochet para todos los niveles, de principiante a avanzado.",
        "patterns.beginner.heading": "Patrones para Principiantes",
        "patterns.beginner.body": "Al comenzar, es importante aprender puntos, controlar la tensión y mantener consistencia.",
        "patterns.intermediate.heading": "Patrones Intermedios",
        "patterns.intermediate.body": "Una vez dominadas las bases, puedes explorar patrones más complejos con nuevas técnicas.",
        "patterns.advanced.heading": "Patrones Avanzados",
        "patterns.advanced.body": "Para quienes buscan un reto, los patrones avanzados ofrecen diseños intrincados y técnicas complejas.",
        "patterns.beginner.crochet.washcloth": "Paño de Crochet",
        "patterns.beginner.crochet.dishcloth": "Paño de Granja",
        "patterns.beginner.crochet.scarf1": "Bufanda Simple de Un Color",
        "patterns.beginner.crochet.scarf2": "Patrón de Bufanda para Principiantes",
        "patterns.beginner.crochet.grannysquare1": "Cuadrado de Abuela de Un Color",
        "patterns.beginner.crochet.grannysquare2": "Cuadrado de Abuela Multicolor",
        "patterns.beginner.crochet.beanie1": "Tutorial de Gorro Básico",
        "patterns.beginner.crochet.beanie2": "Gorro a Rayas",
        "patterns.beginner.crochet.blanket1": "Manta a Rayas Básica",
        "patterns.beginner.knit.scarf1": "Bufanda para Principiantes",
        "patterns.beginner.knit.scarf2": "Bufanda Acanalada",
        "patterns.beginner.knit.dishcloth": "Paño de Un Color Básico",
        "patterns.beginner.knit.potholder1": "Patrón de Agarradera Candor",
        "patterns.beginner.knit.potholder2": "Patrón de Agarradera Multicolor",
        "patterns.beginner.knit.headband1": "Patrón de Diadema de Otoño",
        "patterns.beginner.knit.headband2": "Patrón de Diadema Brigitte",
        "patterns.beginner.knit.hat1": "Patrón de Gorro Acanalado",
        "patterns.beginner.knit.hat2": "Patrón de Gorro Tejido en Redondo",
        "patterns.beginner.knit.blanket1": "Manta de Tiro Ártico",
        "patterns.intermediate.crochet.amigurumi": "Lista de Reproducción de Peluches Amigurumi",
        "patterns.intermediate.crochet.jumper1": "Jersey de Crochet con Punto de Musgo a Rayas",
        "patterns.intermediate.crochet.jumper2": "Patrón de Jersey de Crochet Esponjoso a Rayas",
        "patterns.intermediate.crochet.totebag": "Bolso de Crochet Básico",
        "patterns.intermediate.crochet.grannysquarebag": "Tutorial de Bolso de Cuadrado de Abuela",
        "patterns.intermediate.crochet.meshbag": "Bolso de Malla de Crochet",
        "patterns.intermediate.crochet.grannysquareblanket": "Manta de Cuadrado de Abuela Gigante",
        "patterns.intermediate.crochet.starblanket": "Manta Estrella con Orilla de Pompones",
        "patterns.intermediate.crochet.chevronblanket": "Manta de Chevron de Crochet",
        "patterns.intermediate.crochet.argylehat": "Gorro de Crochet Argyle",
        "patterns.intermediate.knit.sweater1": "Patrón de Jersey de Tejido para Principiantes",
        "patterns.intermediate.knit.cardigan": "Cardigan Fácil con Botones",
        "patterns.intermediate.knit.socks1": "Patrón de Calcetín Fácil",
        "patterns.intermediate.knit.mittens": "Mitones de Tejido Fáciles - 3 Tamaños Diferentes",
        "patterns.intermediate.knit.gloves": "Guantes de Tejido Fáciles",
        "patterns.intermediate.knit.scarf1": "Bufanda de Cable Celta",
        "patterns.intermediate.knit.hat1": "Gorro de Cable Tejido",
        "patterns.intermediate.knit.socks2": "Calcetines de Tejido Colorido - Calcetín Fair Isle",
        "patterns.advanced.crochet.dress1": "Tutorial de Vestido de Crochet Ivy",
        "patterns.advanced.crochet.dress2": "Tutorial de Vestido Camisero de Verano",
        "patterns.advanced.crochet.top": "Tutorial de Top de Crochet Leaf Drop",
        "patterns.advanced.crochet.bottoms": "Tutorial de Pantalones y Shorts de Crochet",
        "patterns.advanced.crochet.lacymotif": "Tutorial de Motivo de Encaje de Crochet",
        "patterns.advanced.crochet.bookmark": "Marcapáginas de Encaje Floral de Crochet",
        "patterns.advanced.crochet.mosaicblanket": "Lista de Reproducción de Manta de Mosaico Superpuesto",
        "patterns.advanced.knit.arcticsweater": "Jersey de Luz Ártica Parte 1",
        "patterns.advanced.knit.icelandicsweater": "Jersey Tejido Islandés Parte 1",
        "patterns.advanced.knit.laceshawl": "Chal de Encaje Shetland Victoriano",
        "patterns.advanced.knit.socks1": "Tutorial de Calcetines Lyon Memories",
        "patterns.advanced.knit.cablepatterns": "Lista de Reproducción de Patrones de Cable Detallados",
        "patterns.beginner.crochet.washcloth.desc": "Este patrón de Paño de Crochet es un proyecto amigable para principiantes que te ayuda a practicar puntos básicos mientras creas un artículo simple y útil para el uso diario.",
        "patterns.beginner.crochet.dishcloth.desc": "Este tutorial de Paño de Granja enseña a los principiantes cómo hacer un paño elegante y texturizado perfecto para usar en la cocina.",
        "patterns.beginner.crochet.scarf1.desc": "Este tutorial de Bufanda Simple de Un Color guía a los principiantes a través de la creación de una bufanda clásica de un solo color utilizando puntos de crochet básicos.",
        "patterns.beginner.crochet.scarf2.desc": "Este Patrón de Bufanda para Principiantes ofrece otro diseño fácil de bufanda para nuevos ganchilleros, ayudando a generar confianza mientras creas una pieza terminada y usable.",
        "patterns.beginner.crochet.grannysquare1.desc": "Este tutorial de Cuadrado de Abuela de Un Color enseña a los principiantes cómo crear un cuadrado de abuela clásico usando un color de hilo, lo que lo hace un excelente proyecto para aprender la estructura del punto.",
        "patterns.beginner.crochet.grannysquare2.desc": "Este tutorial de Cuadrado de Abuela Multicolor muestra cómo construir un cuadrado de abuela tradicional mientras cambias colores, ayudando a los principiantes a practicar transiciones de color y repetición de patrones.",
        "patterns.beginner.crochet.beanie1.desc": "Este Tutorial de Gorro Básico es una guía fácil paso a paso para tejer al crochet un gorro simple, perfecto como primer proyecto usable.",
        "patterns.beginner.crochet.beanie2.desc": "Este tutorial de Gorro a Rayas enseña a los principiantes cómo hacer un gorro con cambios de color para un diseño divertido a rayas.",
        "patterns.beginner.crochet.blanket1.desc": "Este tutorial de Manta a Rayas Básica ayuda a los principiantes a crear una manta a rayas cómoda mientras practica la repetición de puntos y la consistencia de filas.",
        "patterns.beginner.knit.scarf1.desc": "Este tutorial de Bufanda para Principiantes guía a los principiantes a través del tejido de una bufanda simple y cómoda mientras practica puntos fundamentales.",
        "patterns.beginner.knit.scarf2.desc": "Este tutorial de Bufanda Acanalada muestra a los principiantes cómo tejer una bufanda acanalada elástica, perfecta para practicar combinaciones de punto derecho y revés.",
        "patterns.beginner.knit.dishcloth.desc": "Este tutorial de Paño de Un Color Básico es ideal para que los principiantes practiquen puntos de tejido simples mientras crean un paño funcional.",
        "patterns.beginner.knit.potholder1.desc": "Este tutorial de Patrón de Agarradera Candor guía a los principiantes a través del tejido de una agarradera práctica en un estilo simple y amigable para principiantes.",
        "patterns.beginner.knit.potholder2.desc": "Este tutorial de Patrón de Agarradera Multicolor enseña a los principiantes cómo combinar colores de hilo mientras tejen una agarradera funcional.",
        "patterns.beginner.knit.headband1.desc": "Este tutorial de Patrón de Diadema de Otoño guía a los principiantes a través del tejido de una diadema cómoda de estación con un diseño simple y elegante.",
        "patterns.beginner.knit.headband2.desc": "Este tutorial de Patrón de Diadema Brigitte muestra cómo tejer una diadema elegante, perfecta para practicar puntos básicos y técnicas de acabado.",
        "patterns.beginner.knit.hat1.desc": "Este tutorial de Patrón de Gorro Acanalado enseña a los principiantes a tejer un gorro acanalado cálido, perfecto para practicar combinaciones de punto derecho y revés.",
        "patterns.beginner.knit.hat2.desc": "Este tutorial de Patrón de Gorro Tejido en Redondo demuestra cómo tejer un gorro sin costuras en redondo, perfecto para principiantes listos para probar el tejido circular.",
        "patterns.beginner.knit.blanket1.desc": "Este tutorial de Manta de Tiro Ártico guía a los principiantes a través del tejido de una manta cómoda mientras practica la repetición de puntos y la consistencia del patrón.",
        "patterns.intermediate.crochet.amigurumi.desc": "Esta Lista de Reproducción de Peluches Amigurumi incluye 67 tutoriales de crochet diferentes que guían a los principiantes a través de la creación de una variedad de animales de peluche y proyectos de felpa.",
        "patterns.intermediate.crochet.jumper1.desc": "Este tutorial de Jersey de Crochet con Punto de Musgo a Rayas enseña a los ganchilleros cómo crear un suéter acogedor a rayas mientras practica la textura del punto de musgo y la construcción de prendas.",
        "patterns.intermediate.crochet.jumper2.desc": "Este tutorial de Patrón de Jersey de Crochet Esponjoso a Rayas guía a los usuarios a través de la creación de un suéter suave y texturizado con rayas elegantes y acabado esponjoso.",
        "patterns.intermediate.crochet.totebag.desc": "Este tutorial de Bolso de Crochet Básico ayuda a los principiantes a crear un bolso simple y funcional mientras practica puntos fundamentales.",
        "patterns.intermediate.crochet.grannysquarebag.desc": "Este Tutorial de Bolso de Cuadrado de Abuela muestra cómo combinar cuadrados de abuela clásicos en un proyecto de bolso de crochet elegante.",
        "patterns.intermediate.crochet.meshbag.desc": "Este tutorial de Bolso de Malla de Crochet guía a los usuarios a través de la creación de un bolso de malla ligero y reutilizable perfecto para el uso diario.",
        "patterns.intermediate.crochet.grannysquareblanket.desc": "Este tutorial de Manta de Cuadrado de Abuela Gigante ayuda a los ganchilleros a crear un diseño de manta atrevido usando un patrón de cuadrado de abuela agrandado.",
        "patterns.intermediate.crochet.starblanket.desc": "Este tutorial de Manta Estrella con Orilla de Pompones enseña a los usuarios cómo crear una manta decorativa en forma de estrella terminada con un borde divertido de pompones.",
        "patterns.intermediate.crochet.chevronblanket.desc": "Este tutorial de Manta de Chevron de Crochet guía a los usuarios a través de la creación de una manta con patrón de chevron clásico con filas de zigzag audaces.",
        "patterns.intermediate.crochet.argylehat.desc": "Este tutorial de Gorro de Crochet Argyle presenta técnicas de formación más avanzadas mientras crea un gorro con patrón elegante.",
        "patterns.intermediate.knit.sweater1.desc": "Este tutorial de Patrón de Jersey de Tejido para Principiantes guía a los principiantes a través de la creación de un suéter simple, lo que lo hace un excelente primer proyecto de ropa para tejedores listos para mejorar.",
        "patterns.intermediate.knit.cardigan.desc": "Este tutorial de Cardigan Fácil con Botones guía a los tejedores a través de hacer un cardigan acogedor con botones, perfecto para aprender la construcción básica de prendas.",
        "patterns.intermediate.knit.socks1.desc": "Este tutorial de Patrón de Calcetín Fácil enseña a los principiantes cómo tejer un par simple de calcetines mientras practica la formación y el trabajo en redondo.",
        "patterns.intermediate.knit.mittens.desc": "Este tutorial de Mitones de Tejido Fáciles - 3 Tamaños Diferentes muestra a los principiantes cómo crear mitones cálidos con opciones de tamaño para un ajuste personalizable.",
        "patterns.intermediate.knit.gloves.desc": "Este tutorial de Guantes de Tejido Fáciles guía a los tejedores a través de la creación de guantes simples mientras practica la formación y la construcción de dedos.",
        "patterns.intermediate.knit.scarf1.desc": "Este tutorial de Bufanda de Cable Celta presenta a los tejedores el trabajo de cable mientras crean un hermoso patrón de bufanda texturizada.",
        "patterns.intermediate.knit.hat1.desc": "Este tutorial de Gorro de Cable Tejido enseña a los tejedores cómo crear un gorro de cable clásico con hermosa textura y formación.",
        "patterns.intermediate.knit.socks2.desc": "Este tutorial de Calcetines de Tejido Colorido - Calcetín Fair Isle ayuda a los tejedores a practicar técnicas de trabajo de color mientras crean calcetines con patrón con un diseño Fair Isle.",
        "patterns.advanced.crochet.dress1.desc": "Este Tutorial de Vestido de Crochet Ivy guía a los ganchilleros avanzados a través de la creación de un vestido ajustado con formación detallada y técnicas de construcción de prendas.",
        "patterns.advanced.crochet.dress2.desc": "Este Tutorial de Vestido Camisero de Verano enseña a los ganchilleros cómo crear un vestido ajustado ligero con formación más avanzada y detalles de estilo.",
        "patterns.advanced.crochet.top.desc": "Este Tutorial de Top de Crochet Leaf Drop guía a los usuarios a través de la creación de un top ajustado elegante con trabajo de punto intricado y formación detallada de prendas.",
        "patterns.advanced.crochet.bottoms.desc": "Este Tutorial de Pantalones y Shorts de Crochet introduce técnicas avanzadas de construcción de prendas mientras guía a los usuarios a través de proyectos de partes inferiores ajustadas.",
        "patterns.advanced.crochet.lacymotif.desc": "Este Tutorial de Motivo de Encaje de Crochet enseña a los ganchilleros avanzados cómo crear motivos de encaje delicados con combinaciones de puntos detalladas y trabajo de patrón intricado.",
        "patterns.advanced.crochet.bookmark.desc": "Este tutorial de Marcapáginas de Encaje Floral de Crochet ayuda a los usuarios a practicar técnicas de encaje delicadas mientras crean un marcapáginas decorativo elegante.",
        "patterns.advanced.crochet.mosaicblanket.desc": "Esta Lista de Reproducción de Manta de Mosaico Superpuesto contiene 9 tutoriales avanzados que guían a los usuarios a través de diseños intricados de manta superpuesta y estilo mandala.",
        "patterns.advanced.knit.arcticsweater.desc": "Esta serie de tutoriales de Jersey de Luz Ártica guía a los tejedores avanzados a través de la creación de un suéter ajustado utilizando múltiples técnicas de formación y construcción.",
        "patterns.advanced.knit.icelandicsweater.desc": "Esta serie de tutoriales de Jersey Tejido Islandés enseña a los tejedores avanzados cómo crear un suéter detallado de estilo islandés con formación intricada y trabajo de color.",
        "patterns.advanced.knit.laceshawl.desc": "Este tutorial de Chal de Encaje Shetland Victoriano presenta a los tejedores avanzados técnicas de encaje delicadas mientras crean un diseño de chal elegante.",
        "patterns.advanced.knit.socks1.desc": "Este Tutorial de Calcetines Lyon Memories guía a los tejedores avanzados a través de la construcción detallada de calcetines, incluyendo formación y variaciones de talón.",
        "patterns.advanced.knit.cablepatterns.desc": "Esta Lista de Reproducción de Patrones de Cable Detallados incluye 15 videos que guían a los tejedores a través de técnicas avanzadas de punto de cable y diseños texturizados intricados.",
        "patterns.filter.all": "Todos los Patrones",
        "patterns.filter.crochet": "Solo Crochet",
        "patterns.filter.knit": "Solo Tejido",
        "patterns.filter.ariaLabel": "Filtros de patrones",
        "patterns.filter.noresults": "No hay patrones que coincidan con este filtro.",
        "footer.updated": "Última actualización:"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.crochet": "Crochet",
        "nav.knit": "Tricot",
        "nav.patterns": "Patrons",
        "nav.about": "À propos",
        "nav.contact": "Contact",
        "nav.languageSwitcher": "Sélecteur de langue",
        "home.intro": "Chez The Yarn Corner, nous rendons l'apprentissage du crochet et du tricot simple et accessible aux débutants. Découvrez le matériel essentiel avec des guides d'achat faciles, parcourez une collection de patrons gratuits et premium, et suivez des tutoriels YouTube étape par étape. Tout ce dont vous avez besoin est ici, au même endroit, pour lancer votre aventure créative.",
        "home.crochet.heading": "Qu'est-ce que le Crochet ?",
        "home.crochet.body": "Le crochet utilise du fil et un crochet...c'est vraiment tout ce qu'il faut pour commencer ! Avec ces deux éléments, les possibilités de création sont illimitées. Des dessous de verre, aux sacs, aux couvertures, le crochet propose une grande variété de techniques et de points qui permettent de créer tout ce que vous souhaitez.",
        "home.knit.heading": "Qu'est-ce que le Tricot ?",
        "home.knit.body": "Le tricot nécessite deux aiguilles et du fil pour commencer. Comme pour le crochet, avec ces deux éléments, les possibilités de création sont illimitées. Des pulls, aux bonnets, aux maniques, le tricot offre une grande variété de techniques et de patrons qui permettent de créer ce que vous voulez.",
        "home.readmore": "Cliquez ici pour en savoir plus !",
        "about.title": "À propos",
        "about.intro": "Chez The Yarn Corner, nous sommes passionnés par tout ce qui touche au fil. Notre mission est d'offrir un espace accueillant où les créateurs de tous niveaux peuvent explorer, apprendre et partager leur amour du tricot et du crochet. Que vous soyez débutant ou expérimenté, nous avons quelque chose pour vous.",
        "about.story.heading": "Notre Histoire",
        "about.story.body": "The Yarn Corner a été fondé avec la vision de créer une communauté où les passionnés de fil peuvent se réunir pour partager leur passion, apprendre de nouvelles techniques et s'inspirer mutuellement. Nous espérons devenir, au fil des années, un lieu vivant pour les créateurs de tous âges et niveaux.",
        "about.mission.heading": "Notre Mission",
        "about.mission.body": "Notre mission est de proposer un espace accueillant où les créateurs de tous niveaux peuvent explorer, apprendre et partager leur passion pour le tricot et le crochet. Nous cherchons à encourager la créativité, le développement des compétences et l'esprit de communauté.",
        "about.form.heading": "Des questions pour nous ?",
        "about.form.intro": "Envoyez-nous un message rapide et nous vous repondrons des que possible.",
        "about.form.name.label": "Nom",
        "about.form.email.label": "E-mail",
        "about.form.message.label": "Votre question",
        "about.form.submit": "Envoyer le message",
        "about.form.thankyou": "Merci! Nous avons bien recu votre message.",
        "contact.title": "Contact",
        "contact.faq.heading": "Section FAQ",
        "contact.faq.body": "Vous avez des questions sur notre site, nos patrons ou autre chose ? Consultez notre section FAQ pour trouver les réponses aux questions les plus fréquentes.",
        "contact.support.heading": "Service Client",
        "contact.support.body": "Si vous avez besoin d'une aide supplémentaire, notre équipe du service client est là pour vous aider. Contactez-nous par e-mail ou par téléphone et nous serons ravis de vous assister.",
        "contact.email": "E-mail : support@theyarncorner.com",
        "contact.phone": "Téléphone : (123) 456-7890",
        "contact.social.heading": "Réseaux Sociaux",
        "contact.social.body": "Suivez-nous sur les réseaux sociaux pour rester informé des derniers patrons, conseils et événements de la communauté.",
        "contact.handle": "Notre identifiant sur toutes les plateformes est @TheYarnCorner",
        "contact.social.instagram": "Instagram",
        "contact.social.tiktok": "TikTok",
        "contact.social.facebook": "Facebook",
        "contact.social.instagram.aria": "Instagram",
        "contact.social.tiktok.aria": "TikTok",
        "contact.social.facebook.aria": "Facebook",
        "contact.faq.q1": "Ai-je besoin d'experience pour commencer le crochet ou le tricot ?",
        "contact.faq.a1": "Aucune experience n'est necessaire. Nos tutoriels debutants et nos recommandations de patrons vous aident a commencer depuis zero.",
        "contact.faq.q2": "Vos patrons sont-ils gratuits ?",
        "contact.faq.a2": "Nous proposons des options gratuites et payantes. Chaque ressource indique clairement si elle est gratuite ou si le patron est payant.",
        "contact.faq.q3": "Comment choisir le bon fil et la bonne taille de crochet/aiguille ?",
        "contact.faq.a3": "Commencez avec un fil de poids moyen et la taille de crochet ou d'aiguille conseillee sur l'etiquette du fil. C'est generalement le choix le plus simple pour debuter.",
        "contact.faq.q4": "En combien de temps le support repond-il ?",
        "contact.faq.a4": "Nous visons une reponse sous 24 a 48 heures. En periode chargee, cela peut prendre un peu plus de temps.",
        "crochet.title": "Crochet",
        "crochet.intro": "Bienvenue dans la section Crochet de The Yarn Corner ! Le crochet consiste à tirer des boucles de fil avec un crochet pour former des points. C'est une excellente porte d'entrée pour les débutants dans l'univers des arts du fil.",
        "crochet.supplies.heading": "Fournitures Nécessaires",
        "crochet.supplies.body": "Le crochet ne nécessite que quelques fournitures de base : du fil et un crochet.",
        "crochet.supplies.item1": "Fil",
        "crochet.supplies.item2": "Crochet",
        "crochet.supplies.item3": "Ciseaux - pour couper le fil",
        "crochet.supplies.item4": "Aiguille à laine - pour rentrer les fils",
        "crochet.figure.caption": "Même si le fil de poids moyen est le plus courant, il existe de nombreux poids pour différents projets.",
        "crochet.basic.heading": "Points de Base",
        "crochet.basic.intro1": "Il existe quelques points importants à maîtriser. Avant cela, il faut comprendre le nœud coulant.",
        "crochet.basic.intro2": "Le nœud coulant est la façon la plus courante de commencer un projet de crochet.",
        "crochet.chain.heading": "Maille en l'air",
        "crochet.chain.body": "La maille en l'air (ch) est le point le plus basique et sert de base à la plupart des projets.",
        "crochet.slip.heading": "Maille coulée",
        "crochet.slip.body": "La maille coulée (sl st) sert à joindre des tours ou déplacer le fil sans hauteur.",
        "crochet.single.heading": "Maille serrée",
        "crochet.single.body": "La maille serrée (sc) est un point dense idéal pour les débutants.",
        "crochet.hdc.heading": "Demi-bride",
        "crochet.hdc.body": "La demi-bride (hdc) est polyvalente et un peu plus haute que la maille serrée.",
        "crochet.double.heading": "Bride",
        "crochet.double.body": "La bride (dc) monte vite et crée un rendu plus aéré.",
        "crochet.treble.heading": "Double bride",
        "crochet.treble.body": "La double bride (tr) est le plus haut des points de base et donne une texture ajourée.",
        "crochet.tutorials.heading": "Tutoriels/Patrons de Base",
        "crochet.tutorials.body": "Pour les apprenants visuels, nous avons compilé des tutoriels YouTube sur les bases du crochet.",
        "crochet.tutorials.caption": "Cette vidéo couvre les points de base présentés, du nœud coulant à la double bride.",
        "knit.title": "Tricot",
        "knit.intro": "Bienvenue dans la section Tricot de The Yarn Corner ! Le tricot utilise deux aiguilles pour former des mailles. Avec la pratique, le tricot devient rythmé et relaxant.",
        "knit.supplies.heading": "Fournitures Nécessaires",
        "knit.supplies.body": "Le tricot nécessite seulement quelques fournitures de base : du fil et des aiguilles à tricoter.",
        "knit.supplies.item1": "Fil",
        "knit.supplies.item2": "Aiguilles à tricoter",
        "knit.supplies.item3": "Ciseaux - pour couper le fil",
        "knit.supplies.item4": "Aiguille à laine - pour rentrer les fils",
        "knit.figure.caption": "Le fil de poids moyen est le plus courant en tricot, mais différents poids conviennent selon le projet.",
        "knit.basic.heading": "Points de Base",
        "knit.caston.heading": "Montage",
        "knit.caston.body": "Le montage permet de créer la première rangée de mailles sur l'aiguille.",
        "knit.knitstitch.heading": "Point Endroit",
        "knit.knitstitch.body": "Le point endroit forme un motif en \"V\" caractéristique en tricot.",
        "knit.purl.heading": "Point Envers",
        "knit.purl.body": "Le point envers est l'inverse du point endroit et crée une texture bosselée.",
        "knit.bindoff.heading": "Rabattre",
        "knit.bindoff.body": "Rabattre permet de terminer l'ouvrage et de sécuriser les mailles.",
        "knit.tutorials.heading": "Tutoriels/Patrons de Base",
        "knit.tutorials.body": "Pour les apprenants visuels, nous avons compilé des tutoriels YouTube sur les bases du tricot.",
        "knit.tutorials.caption1": "Cette vidéo couvre les bases du tricot : montage, point endroit et rabattage.",
        "knit.tutorials.caption2": "Cette vidéo couvre le point envers.",
        "patterns.title": "Patrons",
        "patterns.intro": "Découvrez une grande variété de patrons de tricot et de crochet pour tous les niveaux, de débutant à avancé.",
        "patterns.beginner.heading": "Patrons Débutants",
        "patterns.beginner.body": "Au départ, il est important d'apprendre les points, de contrôler la tension et de rester régulier.",
        "patterns.intermediate.heading": "Patrons Intermédiaires",
        "patterns.intermediate.body": "Une fois les bases maîtrisées, vous pouvez explorer des patrons plus complexes.",
        "patterns.advanced.heading": "Patrons Avancés",
        "patterns.advanced.body": "Pour celles et ceux qui cherchent un défi, les patrons avancés proposent des techniques et constructions complexes.",
        "patterns.beginner.crochet.washcloth": "Torchon au Crochet",
        "patterns.beginner.crochet.dishcloth": "Torchon Campagnard",
        "patterns.beginner.crochet.scarf1": "Foulard Monochrome Simple",
        "patterns.beginner.crochet.scarf2": "Patron d'Echarpe Débutant",
        "patterns.beginner.crochet.grannysquare1": "Carré Grand-mère Monochrome",
        "patterns.beginner.crochet.grannysquare2": "Carré Grand-mère Multicolore",
        "patterns.beginner.crochet.beanie1": "Tutoriel de Bonnet Basique",
        "patterns.beginner.crochet.beanie2": "Bonnet Rayé",
        "patterns.beginner.crochet.blanket1": "Couverture Rayée Basique",
        "patterns.beginner.knit.scarf1": "Foulard Débutant",
        "patterns.beginner.knit.scarf2": "Foulard Côtelé",
        "patterns.beginner.knit.dishcloth": "Torchon Monochrome Basique",
        "patterns.beginner.knit.potholder1": "Patron de Manique Candor",
        "patterns.beginner.knit.potholder2": "Patron de Manique Multicolore",
        "patterns.beginner.knit.headband1": "Patron de Bandeau d'Automne",
        "patterns.beginner.knit.headband2": "Patron de Bandeau Brigitte",
        "patterns.beginner.knit.hat1": "Patron de Bonnet Côtelé",
        "patterns.beginner.knit.hat2": "Patron de Bonnet Tricoté en Rond",
        "patterns.beginner.knit.blanket1": "Couverture Polaire Arctique",
        "patterns.intermediate.crochet.amigurumi": "Liste de Lecture Peluches Amigurumi",
        "patterns.intermediate.crochet.jumper1": "Pull Tricoté au Crochet Rayure Point de Mouche",
        "patterns.intermediate.crochet.jumper2": "Patron de Pull Crochet Doux Rayé",
        "patterns.intermediate.crochet.totebag": "Sac Fourre-tout Crochet Basique",
        "patterns.intermediate.crochet.grannysquarebag": "Tutoriel de Sac Carré Grand-mère",
        "patterns.intermediate.crochet.meshbag": "Sac Filet au Crochet",
        "patterns.intermediate.crochet.grannysquareblanket": "Couverture Carré Grand-mère Gant",
        "patterns.intermediate.crochet.starblanket": "Couverture Étoile avec Orli Pompons",
        "patterns.intermediate.crochet.chevronblanket": "Couverture Chevron au Crochet",
        "patterns.intermediate.crochet.argylehat": "Bonnet Crochet Losanges",
        "patterns.intermediate.knit.sweater1": "Patron de Pull Tricoté Débutant",
        "patterns.intermediate.knit.cardigan": "Cardigan Facile avec Boutons",
        "patterns.intermediate.knit.socks1": "Patron de Chaussette Facile",
        "patterns.intermediate.knit.mittens": "Moufles Tricotées Faciles - 3 Tailles Différentes",
        "patterns.intermediate.knit.gloves": "Gants Tricotés Faciles",
        "patterns.intermediate.knit.scarf1": "Foulard Tresse Celtique",
        "patterns.intermediate.knit.hat1": "Bonnet Tresse Tricoté",
        "patterns.intermediate.knit.socks2": "Chaussettes Tricotées Multicolores - Chaussette Fair Isle",
        "patterns.advanced.crochet.dress1": "Tutoriel Robe Crochet Ivy",
        "patterns.advanced.crochet.dress2": "Tutoriel Robe Babydoll d'Été",
        "patterns.advanced.crochet.top": "Tutoriel Haut Crochet Feuille",
        "patterns.advanced.crochet.bottoms": "Tutoriel Pantalon et Short Crochet",
        "patterns.advanced.crochet.lacymotif": "Tutoriel Motif Dentelle Crochet",
        "patterns.advanced.crochet.bookmark": "Marque-page Dentelle Florale Crochet",
        "patterns.advanced.crochet.mosaicblanket": "Liste de Lecture Couverture Mosaïque Superposée",
        "patterns.advanced.knit.arcticsweater": "Pull Lumière Arctique Partie 1",
        "patterns.advanced.knit.icelandicsweater": "Pull Tricoté Islandais Partie 1",
        "patterns.advanced.knit.laceshawl": "Châle Dentelle Shetland Victorien",
        "patterns.advanced.knit.socks1": "Tutoriel Chaussettes Lyon Memories",
        "patterns.advanced.knit.cablepatterns": "Liste de Lecture Patron Tresse Détaillé",
        "patterns.beginner.crochet.washcloth.desc": "Ce patron de Torchon au Crochet est un projet accueillant pour les débutants qui vous aide à pratiquer les points de base tout en créant un article simple et utile pour un usage quotidien.",
        "patterns.beginner.crochet.dishcloth.desc": "Ce tutoriel de Torchon Campagnard enseigne aux débutants comment faire un torchon élégant et texturé parfait pour la cuisine.",
        "patterns.beginner.crochet.scarf1.desc": "Ce tutoriel de Foulard Monochrome Simple guide les débutants à travers la création d'une écharpe classique d'une seule couleur en utilisant les points de crochet de base.",
        "patterns.beginner.crochet.scarf2.desc": "Ce Patron d'Echarpe Débutant offre une autre conception facile d'une écharpe pour les nouveaux crocheteurs, aidant à générer la confiance tout en créant une pièce portée terminée.",
        "patterns.beginner.crochet.grannysquare1.desc": "Ce tutoriel de Carré Grand-mère Monochrome enseigne aux débutants comment créer un carré grand-mère classique en utilisant une couleur de fil, ce qui en fait un excellent projet pour apprendre la structure des points.",
        "patterns.beginner.crochet.grannysquare2.desc": "Ce tutoriel de Carré Grand-mère Multicolore montre comment construire un carré grand-mère traditionnel tout en changeant de couleurs, aidant les débutants à pratiquer les transitions de couleurs et la répétition de motifs.",
        "patterns.beginner.crochet.beanie1.desc": "Ce Tutoriel de Bonnet Basique est un guide facile étape par étape pour crocheter un bonnet simple, parfait comme premier projet porté.",
        "patterns.beginner.crochet.beanie2.desc": "Ce tutoriel de Bonnet Rayé enseigne aux débutants comment faire un bonnet avec des changements de couleurs pour une conception rayée amusante.",
        "patterns.beginner.crochet.blanket1.desc": "Ce tutoriel de Couverture Rayée Basique aide les débutants à créer une couverture rayée confortable tout en pratiquant la répétition des points et la cohérence des rangées.",
        "patterns.beginner.knit.scarf1.desc": "Ce tutoriel de Foulard Débutant guide les débutants à travers le tricot d'une écharpe simple et confortable tout en pratiquant les points fondamentaux.",
        "patterns.beginner.knit.scarf2.desc": "Ce tutoriel de Foulard Côtelé montre aux débutants comment tricoter une écharpe côtelée élastique, parfaite pour pratiquer les combinaisons de points endroit et envers.",
        "patterns.beginner.knit.dishcloth.desc": "Ce tutoriel de Torchon Monochrome Basique est idéal pour que les débutants pratiquent des points de tricot simples tout en créant un torchon fonctionnel.",
        "patterns.beginner.knit.potholder1.desc": "Ce tutoriel de Patron de Manique Candor guide les débutants à travers le tricot d'une manique pratique dans un style simple et accueillant pour les débutants.",
        "patterns.beginner.knit.potholder2.desc": "Ce tutoriel de Patron de Manique Multicolore enseigne aux débutants comment combiner des couleurs de fil tout en tricotant une manique fonctionnelle.",
        "patterns.beginner.knit.headband1.desc": "Ce tutoriel de Patron de Bandeau d'Automne guide les débutants à travers le tricot d'un bandeau confortable avec une conception simple et élégante.",
        "patterns.beginner.knit.headband2.desc": "Ce tutoriel de Patron de Bandeau Brigitte montre comment tricoter un bandeau élégant, parfait pour pratiquer les points de base et les techniques de finition.",
        "patterns.beginner.knit.hat1.desc": "Ce tutoriel de Patron de Bonnet Côtelé enseigne aux débutants comment tricoter un bonnet côtelé chaud, parfait pour pratiquer les combinaisons de points endroit et envers.",
        "patterns.beginner.knit.hat2.desc": "Ce tutoriel de Patron de Bonnet Tricoté en Rond démontre comment tricoter un bonnet sans couture en rond, parfait pour les débutants prêts à essayer le tricot circulaire.",
        "patterns.beginner.knit.blanket1.desc": "Ce tutoriel de Couverture Polaire Arctique guide les débutants à travers le tricot d'une couverture confortable tout en pratiquant la répétition des points et la cohérence des motifs.",
        "patterns.intermediate.crochet.amigurumi.desc": "Cette Liste de Lecture Peluches Amigurumi comprend 67 tutoriels de crochet différents qui guident les débutants à travers la création de diverses peluches et projets douillet.",
        "patterns.intermediate.crochet.jumper1.desc": "Ce tutoriel de Pull Tricoté au Crochet Rayure Point de Mouche enseigne aux crocheteurs comment créer un pull rayé confortable tout en pratiquant la texture des points de mouche et la construction de vêtements.",
        "patterns.intermediate.crochet.jumper2.desc": "Ce tutoriel de Patron de Pull Crochet Doux Rayé guide les utilisateurs à travers la création d'un pull doux et texturé avec des rayures élégantes et une finition duveteuse.",
        "patterns.intermediate.crochet.totebag.desc": "Ce tutoriel de Sac Fourre-tout Crochet Basique aide les débutants à créer un sac simple et fonctionnel tout en pratiquant les points fondamentaux.",
        "patterns.intermediate.crochet.grannysquarebag.desc": "Ce Tutoriel de Sac Carré Grand-mère montre comment combiner les carrés grand-mère classiques en un projet de sac au crochet élégant.",
        "patterns.intermediate.crochet.meshbag.desc": "Ce tutoriel de Sac Filet au Crochet guide les utilisateurs à travers la création d'un sac filet léger et réutilisable parfait pour un usage quotidien.",
        "patterns.intermediate.crochet.grannysquareblanket.desc": "Ce tutoriel de Couverture Carré Grand-mère Gant aide les crocheteurs à créer une conception de couverture audacieuse en utilisant un motif carré grand-mère aggrandi.",
        "patterns.intermediate.crochet.starblanket.desc": "Ce tutoriel de Couverture Étoile avec Orli Pompons enseigne aux utilisateurs comment créer une couverture décorative en forme d'étoile terminée avec une orli amusante de pompons.",
        "patterns.intermediate.crochet.chevronblanket.desc": "Ce tutoriel de Couverture Chevron au Crochet guide les utilisateurs à travers la création d'une couverture à motif chevron classique avec des rangées de chevrons audacieuses.",
        "patterns.intermediate.crochet.argylehat.desc": "Ce tutoriel de Bonnet Crochet Losanges présente des techniques de mise en forme plus avancées tout en créant un bonnet à motif élégant.",
        "patterns.intermediate.knit.sweater1.desc": "Ce tutoriel de Patron de Pull Tricoté Débutant guide les débutants à travers la création d'un pull simple, ce qui en fait un excellent premier projet vêtu pour les tricoteurs prêts à progresser.",
        "patterns.intermediate.knit.cardigan.desc": "Ce tutoriel de Cardigan Facile avec Boutons guide les tricoteurs à travers la création d'un cardigan confortable avec des boutons, parfait pour apprendre la construction de vêtements de base.",
        "patterns.intermediate.knit.socks1.desc": "Ce tutoriel de Patron de Chaussette Facile enseigne aux débutants comment tricoter une paire simple de chaussettes tout en pratiquant la mise en forme et le travail en rond.",
        "patterns.intermediate.knit.mittens.desc": "Ce tutoriel de Moufles Tricotées Faciles - 3 Tailles Différentes montre aux débutants comment créer des moufles chaudes avec options de taille pour un ajustement personnalisable.",
        "patterns.intermediate.knit.gloves.desc": "Ce tutoriel de Gants Tricotés Faciles guide les tricoteurs à travers la création de gants simples tout en pratiquant la mise en forme et la construction des doigts.",
        "patterns.intermediate.knit.scarf1.desc": "Ce tutoriel de Foulard Tresse Celtique initie les tricoteurs au travail de tresse tout en créant un beau motif d'écharpe texturé.",
        "patterns.intermediate.knit.hat1.desc": "Ce tutoriel de Bonnet Tresse Tricoté enseigne aux tricoteurs comment créer un bonnet tresse classique avec une belle texture et mise en forme.",
        "patterns.intermediate.knit.socks2.desc": "Ce tutoriel de Chaussettes Tricotées Multicolores - Chaussette Fair Isle aide les tricoteurs à pratiquer les techniques de travail multicolore tout en créant des chaussettes à motif avec une conception Fair Isle.",
        "patterns.advanced.crochet.dress1.desc": "Ce Tutoriel Robe Crochet Ivy guide les crocheteurs avancés à travers la création d'une robe ajustée avec mise en forme détaillée et techniques de construction de vêtements.",
        "patterns.advanced.crochet.dress2.desc": "Ce Tutoriel Robe Babydoll d'Été enseigne aux crocheteurs comment créer une robe ajustée légère avec une mise en forme plus avancée et des détails de style.",
        "patterns.advanced.crochet.top.desc": "Ce Tutoriel Haut Crochet Feuille guide les utilisateurs à travers la création d'un haut ajusté élégant avec un travail de point intriqué et une mise en forme détaillée de vêtements.",
        "patterns.advanced.crochet.bottoms.desc": "Ce Tutoriel Pantalon et Short Crochet introduit des techniques avancées de construction de vêtements tout en guidant les utilisateurs à travers des projets de bas ajustés.",
        "patterns.advanced.crochet.lacymotif.desc": "Ce Tutoriel Motif Dentelle Crochet enseigne aux crocheteurs avancés comment créer des motifs de dentelle délicats avec des combinaisons de points détaillées et un travail de motif intriqué.",
        "patterns.advanced.crochet.bookmark.desc": "Ce tutoriel de Marque-page Dentelle Florale Crochet aide les utilisateurs à pratiquer les techniques de dentelle délicates tout en créant un marque-page décoratif élégant.",
        "patterns.advanced.crochet.mosaicblanket.desc": "Cette Liste de Lecture Couverture Mosaïque Superposée contient 9 tutoriels avancés qui guident les utilisateurs à travers des conceptions intriquées de couverture superposée et de style mandala.",
        "patterns.advanced.knit.arcticsweater.desc": "Cette série de tutoriels Pull Lumière Arctique guide les tricoteurs avancés à travers la création d'un pull ajusté en utilisant de multiples techniques de mise en forme et de construction.",
        "patterns.advanced.knit.icelandicsweater.desc": "Cette série de tutoriels Pull Tricoté Islandais enseigne aux tricoteurs avancés comment créer un pull détaillé de style islandais avec une mise en forme intriquée et un travail de couleur.",
        "patterns.advanced.knit.laceshawl.desc": "Ce tutoriel de Châle Dentelle Shetland Victorien initie les tricoteurs avancés aux techniques de dentelle délicates tout en créant une conception de châle élégante.",
        "patterns.advanced.knit.socks1.desc": "Ce Tutoriel Chaussettes Lyon Memories guide les tricoteurs avancés à travers la construction détaillée des chaussettes, y compris la mise en forme et les variations de talón.",
        "patterns.advanced.knit.cablepatterns.desc": "Cette Liste de Lecture Patron Tresse Détaillé comprend 15 vidéos qui guident les tricoteurs à travers les techniques avancées de points de tresse et les conceptions texturées intriquées.",
        "patterns.filter.all": "Tous les patrons",
        "patterns.filter.crochet": "Crochet seulement",
        "patterns.filter.knit": "Tricot seulement",
        "patterns.filter.ariaLabel": "Filtres de patrons",
        "patterns.filter.noresults": "Aucun patron ne correspond a ce filtre.",
        "footer.updated": "Dernière mise à jour :"
    }
};

function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-aria-label");
        if (!key || !dict[key]) return;
        el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (!key || !dict[key]) return;

        // Keep links and other nested markup intact.
        if (el.children.length > 0) return;

        el.textContent = dict[key];
    });
}

function formatIntl(lang) {
    const locale = localeMap[lang] || "en-US";
    document.querySelectorAll("[data-intl-date]").forEach(function (el) {
        const raw = el.getAttribute("data-intl-date");
        if (!raw) return;
        let parsedDate;
        // Parse YYYY-MM-DD as a local date to avoid timezone day shifts.
        const parts = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (parts) {
            parsedDate = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]));
        } else {
            parsedDate = new Date(raw);
        }
        el.textContent = new Intl.DateTimeFormat(locale, {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(parsedDate);
    });
}

const timer = setInterval(function () {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(timer);
    }
}, 200);

    setTimeout(function () {
        clearInterval(timer);
    }, 4000);

function setLanguage(lang) {
    applyTranslations(lang);
    formatIntl(lang);
    localStorage.setItem("lang", lang);
    setTimeout(function () {
        applyTranslations(lang);
        formatIntl(lang);
    }, 700);
}

function googleTranslateElementInit() {
    if (!window.google || !google.translate) return;
    new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
    );
}

function initPatternFilter() {
    const filterControls = document.querySelector(".filter-controls");
    if (!filterControls) return;

    const buttons = filterControls.querySelectorAll(".filter-btn");
    const craftCards = document.querySelectorAll(".pattern-card[data-craft]");
    const craftHeadings = document.querySelectorAll("h3[data-craft]");
    const noResults = document.getElementById("filter-no-results");

    function applyFilter(filter) {
        let visibleCount = 0;

        craftCards.forEach(function (card) {
            const craftType = card.getAttribute("data-craft");
            const shouldShow = filter === "all" || craftType === filter;
            card.classList.toggle("filter-hidden", !shouldShow);
            if (shouldShow) visibleCount += 1;
        });

        craftHeadings.forEach(function (heading) {
            const craftType = heading.getAttribute("data-craft");
            const shouldShow = filter === "all" || craftType === filter;
            heading.classList.toggle("filter-hidden", !shouldShow);
        });

        buttons.forEach(function (button) {
            const isActive = button.getAttribute("data-filter") === filter;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        if (noResults) {
            noResults.classList.toggle("filter-hidden", visibleCount > 0);
        }
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFilter = button.getAttribute("data-filter") || "all";
            applyFilter(selectedFilter);
        });
    });

    applyFilter("all");
}

function initAboutQuestionForm() {
    const form = document.querySelector(".question-form");
    const thankYouMessage = document.getElementById("about-form-thankyou");
    if (!form || !thankYouMessage) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.reset();
        thankYouMessage.classList.remove("filter-hidden");
    });
}

function initContactFaqAccordion() {
    const toggles = document.querySelectorAll(".faq-toggle[data-faq-toggle]");
    if (!toggles.length) return;

    toggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            const panelId = toggle.getAttribute("data-faq-toggle");
            const panel = panelId ? document.getElementById(panelId) : null;
            if (!panel) return;

            const isExpanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", isExpanded ? "false" : "true");
            panel.classList.toggle("filter-hidden", isExpanded);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("lang") || "en";
    applyTranslations(saved);
    formatIntl(saved);
    initPatternFilter();
    initAboutQuestionForm();
    initContactFaqAccordion();
});