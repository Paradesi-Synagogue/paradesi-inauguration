// =====================================================================
//  Pardesi Express — trip content (Hebrew + English)
//  Base content from the trip booklet. Daily times and notes can be
//  overridden live from the Google Sheet (see CONFIG.SCRIPT_URL).
// =====================================================================

window.CONFIG = {
  // Paste the Apps Script web-app URL here after setup (see apps-script/SETUP.md)
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw_Rs1GrtL2eFEoGAGKtJTmfcQp0BzKV2F4XmUX7Gi6SysRzAcxTkATTmN7UcXrsM3r/exec",
  TIMEZONE: "Asia/Kolkata",
  GALLERY_OPEN_HOUR: 20,   // photos of a day open at this hour (India time)
  FLIGHT_DATE: "2026-11-26",
  FLIGHT_TIME: "2026-11-26T20:00:00+02:00",   // update when the exact time is known
  MUSEUM_TIME: "2026-12-07T16:00:00+05:30",
};

window.TRIP = {
  flight: {
    date: "2026-11-26",
    airline: { he: "איתיחאד", en: "Etihad" },
    meet: { he: "שעת ומקום המפגש בנתב״ג יעודכנו כאן", en: "Meeting time and place at Ben Gurion Airport will be posted here" },
    flightNo: { he: "מספר טיסה יעודכן", en: "Flight number TBA" },
  },

  steps: [
    { date: "2026-11-24", icon: "🇮🇳", important: true,
      he: "חובה! את כרטיס הכניסה הדיגיטלי e-Arrival Card ממלאים עד 72 שעות לפני הנחיתה בהודו. בלי זה לא עוברים את ביקורת הגבולות.",
      en: "Required! Within 72 hours before landing in India, fill in the digital e-Arrival Card. Without it you can't pass border control.",
      prep: { he: ["פרטי דרכון", "פרטי ה־e-Visa שאושרה", "פרטי הטיסה: חברת תעופה, מספר טיסה, קוד PNR ומספר מושב אם יש", "כתובת בהודו: מלון Fragrant Nature Kochi או חברת Carnival Holidays"],
              en: ["Passport details", "Your approved e-Visa details", "Flight details: airline, flight number, PNR code and seat number if you have one", "Address in India: Fragrant Nature Kochi hotel or Carnival Holidays"] },
      tip: { he: "מומלץ למלא באפליקציה הרשמית Indian Visa Su-Swagatam: כל מי שנרשם עם אותו מייל ואותה ויזה מופיע שם יחד.", en: "The app is recommended: everyone registered with the same email and visa appears there together." },
      links: [
        { url: "https://play.google.com/store/apps/details?id=org.nic.ivfrt.visitindia&hl=en", he: "🤖 הורדת האפליקציה לאנדרואיד", en: "🤖 Get the app for Android" },
        { url: "https://apps.apple.com/app/id1573902563", he: "🍎 הורדת האפליקציה לאייפון", en: "🍎 Get the app for iPhone" },
        { url: "https://indianvisaonline.gov.in/earrival/", he: "דרך האתר הרשמי", en: "Via the official website" }
      ] },
    { date: "2026-11-25", icon: "✈️", he: "24 שעות לפני: צ׳ק־אין אונליין באיתיחאד עם קוד ההזמנה (PNR) שנשלח בקבוצת הוואטסאפ", en: "24 hours before: Etihad online check-in with your booking code (PNR) sent in the WhatsApp group", link: "https://www.etihad.com/en/manage/check-in", linkLabel: { he: "לצ׳ק־אין", en: "Check in" } },
    { date: "2026-11-26", icon: "🧳", he: "יום הטיסה: מגיעים לנתב״ג בזמן, עם דרכון וויזה", en: "Flight day: arrive at Ben Gurion on time, with passport and visa", link: "" },
  ],

  baggage: [
    { icon: "🎒", he: "תיק אישי · עד 5 ק״ג · 40×30×15 ס״מ · נכנס מתחת למושב", en: "Personal item · up to 5 kg · 40×30×15 cm · fits under the seat" },
    { icon: "🧳", he: "טרולי / מזוודת קבינה · עד 7 ק״ג · 56×36×23 ס״מ (כולל גלגלים וידיות)", en: "Cabin trolley · up to 7 kg · 56×36×23 cm (incl. wheels & handles)" },
    { icon: "🛄", he: "מזוודה לבטן המטוס · עד 25 ק״ג · סך המידות עד 207 ס״מ (אפשר 2 מזוודות קטנות שביחד 25 ק״ג)", en: "Checked bag · up to 25 kg · total dimensions up to 207 cm (two small bags totalling 25 kg are OK)" },
  ],

  beforeFlight: [
    { id: "passport", he: "דרכון בתוקף (לפחות 6 חודשים מיום החזרה)", en: "Passport valid (at least 6 months after return)" },
    { id: "visa", he: "ויזה להודו — הדפסה ושמירה בטלפון", en: "Indian visa — printed and saved on phone" },
    { id: "insurance", he: "ביטוח נסיעות", en: "Travel insurance" },
    { id: "whatsapp", he: "הצטרפתי לקבוצת הוואטסאפ של הטיול", en: "Joined the trip WhatsApp group" },
    { id: "split", he: "חילקתי את המזוודה: חלק לשבת וחלק לימי הרכבת", en: "Split my suitcase: one part for Shabbat, one for the train days" },
    { id: "shabbat-top", he: "בגדי שבת בחלק העליון של המזוודה (מגיעים קרוב לשבת)", en: "Shabbat clothes on top of the suitcase (we arrive close to Shabbat)" },
    { id: "weigh", he: "שקלתי את המזוודה (עד 25 ק״ג)", en: "Weighed my suitcase (max 25 kg)" },
    { id: "lock", he: "מנעול למזוודה ומתאם לשקע ההודי", en: "Suitcase lock and Indian plug adapter" },
    { id: "meds", he: "תרופות אישיות בתיק היד", en: "Personal medication in hand luggage" },
    { id: "forecast", he: "בדקתי תחזית עדכנית שבוע לפני", en: "Checked an up-to-date forecast a week before" },
  ],

  packing: [
    { id: "p-bottle", he: "בקבוק מים אישי למילוי", en: "Personal refillable water bottle" },
    { id: "p-hat", he: "כובע ומשקפי שמש", en: "Hat and sunglasses" },
    { id: "p-sun", he: "קרם הגנה ותרסיס נגד יתושים", en: "Sunscreen and mosquito repellent" },
    { id: "p-fleece", he: "פליז טוב + חולצה ארוכה (לבקרים בצפון)", en: "A good fleece + long-sleeve shirt (northern mornings)" },
    { id: "p-summer", he: "בגדי קיץ קלים", en: "Light summer clothes" },
    { id: "p-modest", he: "בגדים שמכסים כתפיים וברכיים", en: "Clothes covering shoulders and knees" },
    { id: "p-shoes", he: "נעלי הליכה נוחות, גרביים ושקית לנעליים", en: "Comfortable walking shoes, socks and a shoe bag" },
    { id: "p-swim", he: "בגד ים וכפכפי אצבע", en: "Swimsuit and flip-flops" },
    { id: "p-pyjama", he: "פיג׳מה לרכבת", en: "Pyjamas for the train" },
    { id: "p-snacks", he: "נשנושים", en: "Snacks" },
    { id: "p-shabbat", he: "בגדי שבת ובגדים לטקס הפתיחה", en: "Shabbat clothes and clothes for the opening ceremony" },
    { id: "p-mumbai", he: "תיק קטן ללילה במומבאי (בלי מזוודה)", en: "Small overnight bag for Mumbai (no suitcase)" },
  ],

  weeks: [
    { id: 1, he: "פרדסי אקספרס · המסע בהודו", en: "Pardesi Express · the India Journey", sub: { he: "27.11 עד 4.12 · מדלהי ועד קוצ׳י ברכבת", en: "27.11–4.12 · Delhi to Kochi by train" } },
    { id: 2, he: "שבוע פתיחת המוזיאון · קוצ׳י", en: "Museum Opening Week · Kochi", sub: { he: "4.12 עד 13.12 · מצטרפים חדשים מגיעים", en: "4.12–13.12 · new participants join" } },
  ],

  days: [
    {
      n: 1, week: 1, date: "2026-11-27",
      candles: "17:14", parasha: { he: "פרשת וישלח", en: "Parashat Vayishlach" }, title: { he: "נחיתה בדלהי ונסיעה לרנתמבור", en: "Landing in Delhi & On to Ranthambore" },
      place: { he: "דלהי ← רנתמבור", en: "Delhi → Ranthambore" },
      route: { he: "366 ק״מ · כ־6 שעות באוטובוס", en: "366 km · about 6 hours by coach" },
      sleep: { he: "מלון ברנתמבור", en: "Hotel, Ranthambore" },
      weather: { he: "25° ביום / 11° בלילה · ערב קריר", en: "25° day / 11° night · cool evening" },
      plan: [
        { he: "נחיתה, ביקורת דרכונים ואיסוף מזוודות", en: "Landing, passport control and baggage" },
        { he: "פגישה עם המדריך ועלייה לאוטובוסים", en: "Meet our guide and board the coaches" },
        { he: "סיבוב קצר בדלהי: שער הודו ובנייני הממשלה", en: "Short Delhi tour: India Gate and the government buildings" },
        { he: "ארוחת צהריים בדרך", en: "Lunch on the way" },
        { he: "הגעה למלון ברנתמבור", en: "Check in at our hotel in Ranthambore" },
        { he: "קבלת שבת: הדלקת נרות, תפילה וארוחת שבת משותפת", en: "Welcoming Shabbat: candle lighting, prayers and Shabbat dinner together" },
      ],
      see: [
        { t: { he: "דלהי", en: "Delhi" }, d: { he: "בירת הודו, יותר מ־30 מיליון איש. שער הודו — קשת אבן בגובה 42 מטרים לזכר חיילים הודים שנפלו במלחמת העולם הראשונה — ובנייני הממשלה ובית הנשיא.", en: "India's capital, over 30 million people. India Gate — a 42 m arch honouring Indian soldiers who fell in WWI — and the government buildings and President's House." } },
        { t: { he: "רנתמבור", en: "Ranthambore" }, d: { he: "שמורת טבע ברג׳סטאן שבה נמרים חיים חופשי. בתוכה מבצר בן כאלף שנה, אתר מורשת עולמית של אונסק״ו.", en: "A Rajasthan reserve where tigers live free. Inside stands a 1,000-year-old fort, a UNESCO World Heritage Site." } },
      ],
      wear: [
        { he: "נעליים נוחות וגרביים", en: "Comfortable shoes and socks" },
        { he: "פליז טוב, ואפשר חולצה ארוכה מתחת", en: "A good fleece with a long-sleeve shirt underneath" },
        { he: "כובע ומשקפי שמש", en: "Hat and sunglasses" },
        { he: "בגדי שבת בחלק העליון של המזוודה", en: "Shabbat clothes on top of the suitcase" },
      ],
    },
    {
      n: 2, week: 1, date: "2026-11-28",
      havdala: "18:10", parasha: { he: "פרשת וישלח", en: "Parashat Vayishlach" }, title: { he: "שבת שלום ברנתמבור", en: "Shabbat Shalom in Ranthambore" },
      place: { he: "רנתמבור", en: "Ranthambore" },
      route: { he: "יום מנוחה — נשארים במלון, בלי נסיעות", en: "Day of rest — we stay at the hotel" },
      sleep: { he: "מלון ברנתמבור", en: "Hotel, Ranthambore" },
      weather: { he: "27° ביום / 11° בלילה · בוקר וערב קרירים", en: "27° day / 11° night · cool morning and evening" },
      plan: [
        { he: "תפילות בציבור", en: "Communal prayers" },
        { he: "ארוחות שבת משותפות", en: "Shabbat meals together" },
        { he: "טיול רגלי רגוע סביב המלון (לבחירה)", en: "Optional gentle walk around the hotel" },
        { he: "זמן למנוחה, משחקים וחברים", en: "Time to relax, play and be together" },
        { he: "לינה במלון ברנתמבור", en: "Overnight at the Ranthambore hotel" },
      ],
      see: [
        { t: { he: "הטבע סביב המלון", en: "Nature around the hotel" }, d: { he: "טווסים, קופי לנגור וציפורים צבעוניות. מסתכלים מרחוק ולא מאכילים!", en: "Peacocks, langur monkeys and colourful birds. Watch from a distance and never feed them!" } },
        { t: { he: "רג׳סטאן — ״ארץ המלכים״", en: "Rajasthan — \"Land of Kings\"" }, d: { he: "המדינה הגדולה בהודו, מלאה מבצרים וארמונות, ובמערבה מדבר טהאר.", en: "India's largest state, full of forts and palaces, with the Thar Desert in the west." } },
      ],
      wear: [
        { he: "בגדי שבת", en: "Shabbat clothes" },
        { he: "פליז (או צעיף/פשמינה) לבוקר ולערב", en: "A fleece (or scarf/pashmina) for morning and evening" },
        { he: "כובע לשמש", en: "A hat for the sun" },
      ],
    },
    {
      n: 3, week: 1, date: "2026-11-29",
      title: { he: "ספארי נמרים, טאג׳ מהאל ורכבת לילה", en: "Tiger Safari, the Taj Mahal & a Night Train" },
      place: { he: "רנתמבור ← אגרה", en: "Ranthambore → Agra" },
      route: { he: "רנתמבור ← אגרה · 310 ק״מ · כ־7 שעות ברכבת · בלילה לג׳איפור", en: "Ranthambore → Agra · 310 km · about 7 hours by train · night train to Jaipur" },
      sleep: { he: "רכבת: אגרה ← ג׳איפור", en: "Train: Agra → Jaipur" },
      weather: { he: "26° ביום / 11° בלילה · קריר בספארי בבוקר", en: "26° day / 11° night · cool on the morning safari" },
      plan: [
        { time: "07:00", he: "יוצאים לספארי בשמורה", en: "Off on safari in the reserve" },
        { he: "ארוחת בוקר במלון ויציאה לתחנת סוואי מדהופור", en: "Breakfast at the hotel, then to Sawai Madhopur station" },
        { he: "רכבת לאגרה, ארוחת צהריים חמה ברכבת", en: "Train to Agra, hot lunch on board" },
        { he: "ביקור בטאג׳ מהאל וקניות", en: "Visit the Taj Mahal and some shopping" },
        { he: "ארוחת ערב, ובלילה עולים לרכבת לג׳איפור", en: "Dinner, then late at night we board the train to Jaipur" },
      ],
      see: [
        { t: { he: "ספארי ברנתמבור", en: "Ranthambore safari" }, d: { he: "ברכבים פתוחים מחפשים נמרים, צבאים, תנינים ודובים. שומרים על שקט!", en: "In open vehicles we look for tigers, deer, crocodiles and bears. Stay quiet!" } },
        { t: { he: "טאג׳ מהאל, אגרה", en: "Taj Mahal, Agra" }, d: { he: "אחד משבעת פלאי העולם החדשים. השיש משנה צבע: ורדרד בבוקר, לבן בצהריים וזהוב בשקיעה.", en: "One of the New Seven Wonders. The marble turns pinkish in the morning, white at noon and golden at sunset." } },
      ],
      wear: [
        { he: "לספארי: פליז טוב וחולצה ארוכה", en: "For the safari: a good fleece and a long-sleeve shirt" },
        { he: "צבעים טבעיים (חאקי, ירוק, חום)", en: "Natural colours (khaki, green, brown)" },
        { he: "נעליים סגורות וגרביים", en: "Closed shoes and socks" },
        { he: "תיק קטן בלבד — לטאג׳ מהאל אסור להכניס אוכל ותיקים גדולים", en: "Small bag only — no food or big bags allowed into the Taj Mahal" },
      ],
    },
    {
      n: 4, week: 1, date: "2026-11-30",
      title: { he: "העיר הוורודה ג׳איפור ומבצר צ׳יטורגרה", en: "Jaipur, the Pink City, & Chittorgarh Fort" },
      place: { he: "ג׳איפור ← צ׳יטורגרה", en: "Jaipur → Chittorgarh" },
      route: { he: "ג׳איפור ← צ׳יטורגרה · 310 ק״מ · כ־6 שעות", en: "Jaipur → Chittorgarh · 310 km · about 6 hours" },
      sleep: { he: "רכבת: צ׳יטורגרה ← ואדודרה", en: "Train: Chittorgarh → Vadodara" },
      weather: { he: "28° ביום / 13° בלילה · כ־18° במופע הערב", en: "28° day / 13° night · about 18° at the evening show" },
      plan: [
        { he: "בוקר: מגיעים לג׳איפור ומתרעננים ברכבת", en: "Morning: arrive in Jaipur and freshen up on the train" },
        { he: "אוטובוס למבצר אמבר — ארוחת בוקר ברכבת או כריך באוטובוס", en: "Coach to Amber Fort — breakfast on the train or a sandwich on the bus" },
        { he: "רכיבה על פילים במעלה המבצר", en: "Elephant ride up to the fort" },
        { he: "עצירת צילום בהווה מהאל — ״ארמון הרוחות״", en: "Photo stop at Hawa Mahal — the \"Palace of Winds\"" },
        { he: "ארוחת צהריים צמחונית ברכבת לצ׳יטורגרה", en: "Vegetarian lunch on the train to Chittorgarh" },
        { he: "סיור במבצר ומופע אור־קולי בערב", en: "Fort tour and an evening Light & Sound Show" },
        { he: "ארוחת ערב, משחקים וחידונים ולינה ברכבת", en: "Dinner, games & quizzes, and overnight on the train" },
      ],
      see: [
        { t: { he: "ג׳איפור", en: "Jaipur" }, d: { he: "ב־1876 צבעו את העיר העתיקה בוורוד לכבוד נסיך ויילס — ומאז היא ורודה.", en: "In 1876 the old city was painted pink for the Prince of Wales — and it has stayed pink." } },
        { t: { he: "מבצר אמבר", en: "Amber Fort" }, d: { he: "ארמון־מבצר על גבעה, עם ״ארמון המראות״ המנצנץ.", en: "A hilltop palace-fort with the sparkling Hall of Mirrors." } },
        { t: { he: "מבצר צ׳יטורגרה", en: "Chittorgarh Fort" }, d: { he: "המבצר הגדול בהודו, עם מגדל הניצחון בן 9 הקומות.", en: "India's largest fort, with the nine-storey Tower of Victory." } },
      ],
      wear: [
        { he: "חולצה ארוכה ופליז לבוקר — שקל להוריד", en: "Long sleeves and a fleece for the morning — easy to remove" },
        { he: "מכנסיים ארוכים לרכיבה על הפיל", en: "Long trousers for the elephant ride" },
        { he: "נעליים סגורות, כובע וקרם הגנה", en: "Closed shoes, hat and sunscreen" },
      ],
    },
    {
      n: 5, week: 1, date: "2026-12-01",
      title: { he: "ארמון המלכים בואדודרה ונסיעה למומבאי", en: "A Royal Palace in Vadodara & On to Mumbai" },
      place: { he: "ואדודרה ← מומבאי", en: "Vadodara → Mumbai" },
      route: { he: "ואדודרה ← מומבאי · 390 ק״מ · כ־8 שעות ברכבת", en: "Vadodara → Mumbai · 390 km · about 8 hours by train" },
      sleep: { he: "מלון במומבאי (בלי מזוודה!)", en: "Hotel, Mumbai (no suitcase!)" },
      weather: { he: "33° ביום / 23° בלילה · חם ולח — מכאן קיץ", en: "33° day / 23° night · hot and humid — summer from here" },
      plan: [
        { he: "ארוחת בוקר ברכבת בואדודרה", en: "Breakfast on the train in Vadodara" },
        { he: "סיור מודרך בארמון לקשמי וילאס", en: "Guided tour of Laxmi Vilas Palace" },
        { he: "ארוחת צהריים חמה ברכבת למומבאי", en: "Hot lunch on the train to Mumbai" },
        { he: "שער הודו ומלון טאג׳ מהאל פאלאס", en: "Gateway of India and the Taj Mahal Palace Hotel" },
        { he: "בית הכנסת כנסת אליהו — וארוחת ערב שם", en: "Knesset Eliyahu Synagogue — and dinner there" },
        { he: "ערב קניות בקולאבה, ואם יהיה זמן — מרין דרייב", en: "Shopping in Colaba, and if time allows, Marine Drive" },
        { he: "לינה במלון — רק תיק עם בגדים להחלפה", en: "Hotel night — just a bag with a change of clothes" },
      ],
      see: [
        { t: { he: "ארמון לקשמי וילאס", en: "Laxmi Vilas Palace" }, d: { he: "גדול פי ארבעה מארמון בקינגהאם, ומשפחת המלוכה עדיין גרה בו.", en: "About four times the size of Buckingham Palace; the royal family still lives there." } },
        { t: { he: "בית הכנסת כנסת אליהו", en: "Knesset Eliyahu Synagogue" }, d: { he: "בית כנסת בצבע תכלת משנת 1884, שבנתה משפחת ששון.", en: "A sky-blue synagogue built in 1884 by the Sassoon family." } },
      ],
      wear: [
        { he: "בגדי קיץ: כותנה קלה ונושמת", en: "Summer clothes: light, breathable cotton" },
        { he: "בארמון: לבוש מכובד, כתפיים מכוסות", en: "At the palace: modest clothing, shoulders covered" },
        { he: "בקבוק מים תמיד ביד", en: "Always carry a water bottle" },
      ],
    },
    {
      n: 6, week: 1, date: "2026-12-02",
      title: { he: "מערות אלפנטה, בוליווד ורכבת לגואה", en: "Elephanta Caves, Bollywood & a Train to Goa" },
      place: { he: "מומבאי", en: "Mumbai" },
      route: { he: "מעבורת לאי אלפנטה · בלילה: מומבאי ← גואה, 590 ק״מ", en: "Ferry to Elephanta · night train Mumbai → Goa, 590 km" },
      sleep: { he: "רכבת: מומבאי ← גואה", en: "Train: Mumbai → Goa" },
      weather: { he: "33° ביום / 23° בלילה · רוח ים נעימה במעבורת", en: "33° day / 23° night · pleasant sea breeze on the ferry" },
      plan: [
        { he: "ארוחת בוקר במלון", en: "Breakfast at the hotel" },
        { he: "מעבורת משער הודו למערות אלפנטה", en: "Ferry from the Gateway of India to the Elephanta Caves" },
        { he: "ארוחת צהריים חמה בשכונת קולאבה", en: "Hot lunch in Colaba" },
        { he: "אולפן בוליווד: סטים אמיתיים ומופע ריקודים חי", en: "Bollywood studio: real film sets and a live dance show" },
        { he: "זמן לקניות במומבאי", en: "Time for shopping in Mumbai" },
        { he: "ערב: עולים לרכבת — ארוחת ערב, משחקים ונסיעת לילה לגואה", en: "Evening: board the train — dinner, games and the night ride to Goa" },
      ],
      see: [
        { t: { he: "מערות אלפנטה", en: "Elephanta Caves" }, d: { he: "מקדשים חצובים בסלע לפני כ־1,500 שנה, עם פסל שיווה בעל שלושה פרצופים.", en: "Rock-cut temples from about 1,500 years ago, with a three-faced Shiva statue." } },
        { t: { he: "בוליווד", en: "Bollywood" }, d: { he: "הודו מפיקה יותר סרטים מכל מדינה אחרת — וכמעט בכל סרט יש שירים וריקודים!", en: "India makes more films than any other country — and almost every film has songs and dancing!" } },
      ],
      wear: [
        { he: "בגדים קלים שמכסים כתפיים וברכיים", en: "Light clothes covering shoulders and knees" },
        { he: "נעליים נוחות — כ־120 מדרגות", en: "Comfortable shoes — about 120 steps" },
        { he: "חטיפים בתוך התיק — יש קופים חצופים!", en: "Keep snacks inside your bag — cheeky monkeys!" },
      ],
    },
    {
      n: 7, week: 1, date: "2026-12-03",
      title: { he: "גואה: כנסיות, חוף ותבלינים · הפסל הענק במורודשואר", en: "Goa: Churches, Beach & Spices · the Giant Statue at Murudeshwar" },
      place: { he: "גואה ← מורודשואר", en: "Goa → Murudeshwar" },
      route: { he: "גואה ← מורודשואר ← קוצ׳י · 760 ק״מ ברכבת", en: "Goa → Murudeshwar → Kochi · 760 km by train" },
      sleep: { he: "רכבת: מורודשואר ← קוצ׳י", en: "Train: Murudeshwar → Kochi" },
      weather: { he: "33° ביום / 22° בלילה · הים חמים, כ־28°", en: "33° day / 22° night · warm sea, about 28°" },
      plan: [
        { he: "ארוחת בוקר ברכבת", en: "Breakfast on the train" },
        { he: "גואה העתיקה: בזיליקת בום ז׳זוס וקתדרלת סנט קתרין", en: "Old Goa: Basilica of Bom Jesus and the Cathedral of St. Catherine" },
        { he: "זמן חופשי בחוף", en: "Free time at the beach" },
        { he: "סיור במטע תבלינים וארוחת צהריים צמחונית", en: "Spice plantation tour and a vegetarian lunch" },
        { he: "אחר הצהריים: רכבת למורודשואר", en: "Afternoon: train to Murudeshwar" },
        { he: "פסל שיווה הענק ושקיעה מראש מגדל השער", en: "The giant Shiva statue and sunset from the gate tower" },
        { he: "חזרה לרכבת: ארוחת ערב, משחקים ונסיעת לילה לקוצ׳י", en: "Back on the train: dinner, games and the night ride to Kochi" },
      ],
      see: [
        { t: { he: "גואה העתיקה", en: "Old Goa" }, d: { he: "מושבה פורטוגזית כ־450 שנה, עם כנסיות שהן אתר מורשת עולמית.", en: "A Portuguese colony for about 450 years, with World Heritage churches." } },
        { t: { he: "מורודשואר", en: "Murudeshwar" }, d: { he: "פסל שיווה בגובה כ־37 מטרים, ומגדל שער בן 20 קומות עם מעלית.", en: "A Shiva statue about 37 m tall and a 20-storey gate tower with a lift." } },
      ],
      wear: [
        { he: "בגד ים, כפכפים ומגבת לחוף", en: "Swimsuit, flip-flops and a towel" },
        { he: "בגדים שמכסים כתפיים וברכיים — לכנסיות ולמקדש", en: "Shoulders and knees covered — for the churches and temple" },
        { he: "סנדלים שקל לחלוץ", en: "Sandals that are easy to remove" },
      ],
    },
    {
      n: 8, week: 1, date: "2026-12-04",
      candles: "17:44", parasha: { he: "פרשת וישב · שבת חנוכה", en: "Parashat Vayeshev · Shabbat Hanukkah" }, title: { he: "מגיעים הביתה — קוצ׳י", en: "Arriving Home — Kochi" },
      place: { he: "קוצ׳י", en: "Kochi" },
      route: { he: "הגעה לתחנת ארנקולם", en: "Arrival at Ernakulam station" },
      sleep: { he: "מלונות בקוצ׳י", en: "Hotels in Kochi" },
      weather: { he: "31° ביום / 24° בלילה · לח מאוד", en: "31° day / 24° night · very humid" },
      plan: [
        { he: "מתעוררים לנוף של תעלות מים ודקלי קוקוס", en: "Wake up to views of backwaters and coconut palms" },
        { he: "ארוחת בוקר ברכבת", en: "Breakfast on the train" },
        { he: "מגיעים הביתה — תחנת ארנקולם בקוצ׳י", en: "Arriving home — Ernakulam station, Kochi" },
        { time: "12:00", he: "אזכרה לצדיק נחמיה מוטה, ואזכרה כללית בבית העלמין", en: "Memorial for the Tzaddik Nehemiah Mota, and a general memorial at the cemetery" },
        { he: "פיזור למלונות", en: "Everyone goes to their hotels" },
        { he: "בערב: שבת — ונר ראשון של חנוכה 🕎", en: "Evening: Shabbat — and the first Hanukkah candle 🕎" },
      ],
      see: [
        { t: { he: "יהודי קוצ׳י", en: "The Jews of Kochi" }, d: { he: "לפי המסורת, יהודים חיו בקוצ׳י כבר לפני כאלפיים שנה. בית הכנסת פרדסי נבנה ב־1568. ״פרדסי״ פירושו ״זרים״ — בדיוק כמו שם הרכבת שלנו!", en: "By tradition, Jews have lived in Kochi for about 2,000 years. The Paradesi Synagogue was built in 1568. \"Paradesi\" means \"foreigners\" — just like our train!" } },
      ],
      wear: [
        { he: "בגדים קלים ונושמים", en: "Light, breathable clothes" },
        { he: "סנדלים נוחים, כובע וקרם הגנה", en: "Comfortable sandals, hat and sunscreen" },
        { he: "תרסיס נגד יתושים", en: "Mosquito repellent" },
      ],
    },
    // ---------------- Week 2 ----------------
    { n: 9, week: 2, date: "2026-12-05", havdala: "18:38", parasha: { he: "פרשת וישב · שבת חנוכה", en: "Parashat Vayeshev · Shabbat Hanukkah" }, title: { he: "שבת חנוכה משותפת בקוצ׳י", en: "Shabbat Hanukkah together in Kochi" }, place: { he: "קוצ׳י", en: "Kochi" },
      plan: [ { he: "שבת משותפת לכל המשתתפים", en: "Shabbat together for all participants" } ] },
    { n: 10, week: 2, date: "2026-12-06", title: { he: "טיול", en: "Day trip" }, place: { he: "קוצ׳י והסביבה", en: "Kochi area" },
      plan: [ { he: "טיול — הפרטים יעודכנו", en: "Day trip — details to follow" } ] },
    { n: 11, week: 2, date: "2026-12-07", title: { he: "ערב הקהילה ופתיחת המוזיאון הפרטית ✨", en: "Community Evening & Private Museum Opening ✨" }, place: { he: "קוצ׳י", en: "Kochi" }, highlight: true,
      plan: [
        { he: "בוקר: טיול קצר", en: "Morning: short outing" },
        { time: "13:30", he: "ארוחת צהריים משותפת באירוח פרבין צ׳נדרן ומנגל סונדראם", en: "Shared lunch hosted by Praveen Chandren and Mangal Sundaram" },
        { time: "16:00", he: "מתכנסים בבית הכנסת: ערב הקהילה ופתיחת המוזיאון הפרטית", en: "Gathering at the synagogue: community evening and private museum opening" },
      ] },
    { n: 12, week: 2, date: "2026-12-08", title: { he: "פתיחת המוזיאון הפרדסי הרשמית ✨", en: "Official Opening of the Paradesi Museum ✨" }, place: { he: "קוצ׳י", en: "Kochi" }, highlight: true,
      wear: [ { he: "בגדים חגיגיים לטקס הפתיחה", en: "Festive clothes for the opening ceremony" } ],
      plan: [ { he: "יום שלם של הפתיחה הרשמית בהשתתפות מכובדים — הלו״ז המפורט יעודכן", en: "A full day of the official opening with dignitaries — detailed schedule to follow" } ] },
    { n: 13, week: 2, date: "2026-12-09", title: { he: "אפשרויות לטיולים", en: "Optional trips" }, place: { he: "לבחירה", en: "Your choice" },
      plan: [ { he: "אפשרויות לטיולים ונסיעות — הפרטים יעודכנו", en: "Optional trips and outings — details to follow" } ] },
    { n: 14, week: 2, date: "2026-12-10", title: { he: "אפשרויות לטיולים", en: "Optional trips" }, place: { he: "לבחירה", en: "Your choice" },
      plan: [ { he: "אפשרויות לטיולים ונסיעות — הפרטים יעודכנו", en: "Optional trips and outings — details to follow" } ] },
    { n: 15, week: 2, date: "2026-12-11", candles: "17:46", parasha: { he: "פרשת מקץ · שבת חנוכה", en: "Parashat Miketz · Shabbat Hanukkah" }, title: { he: "יום חופשי", en: "Free day" }, place: { he: "קוצ׳י", en: "Kochi" },
      plan: [ { he: "יום חופשי", en: "Free day" }, { he: "בערב: קבלת שבת", en: "Evening: welcoming Shabbat" } ] },
    { n: 16, week: 2, date: "2026-12-12", havdala: "18:40", parasha: { he: "פרשת מקץ · שבת חנוכה", en: "Parashat Miketz · Shabbat Hanukkah" }, title: { he: "שבת אחרונה — סיום משותף", en: "Last Shabbat — closing together" }, place: { he: "קוצ׳י", en: "Kochi" },
      plan: [ { he: "שבת משותפת וסיום המסע ביחד", en: "Shabbat together and closing the journey" }, { he: "מוצאי שבת: טיסות חזרה לחלק מהמשתתפים", en: "Saturday night: return flights for some participants" } ] },
    { n: 17, week: 2, date: "2026-12-13", title: { he: "חזרה הביתה", en: "Heading home" }, place: { he: "קוצ׳י ← ישראל", en: "Kochi → Israel" },
      plan: [ { he: "טיסות חזרה לשאר המשתתפים", en: "Return flights for the remaining participants" } ] },
  ],

  thanks: [
    { org: { he: "בית הכנסת הפרדסי", en: "The Paradesi Synagogue" }, who: { he: "קהילת הפרדסי, ותודה מיוחדת לפרבין צ׳נדרן ולמנגל סונדראם", en: "The Paradesi community, with special thanks to Praveen Chandren and Mangal Sundaram" } },
    { org: { he: "שגרירות הודו בישראל", en: "Embassy of India in Israel" }, who: { he: "השגריר מר ג׳.פ. סינג, גב׳ נאיאנטרה דבריי וגב׳ שרה פרקר", en: "H.E. Mr. J.P. Singh, Ms. Nayantara Dabariy and Ms. Sera Parker" } },
    { org: { he: "שגרירות ישראל בהודו", en: "Embassy of Israel in India" }, who: { he: "השגריר מר ראובן עזר", en: "H.E. Mr. Reuven Azar" } },
    { org: { he: "חברת הנסיעות קרניבל", en: "Carnival Travel" }, who: { he: "מר אסוואני בהאן וגב׳ דיטי (דיפטיפריה) גופטה", en: "Mr. Aswani Bhan and Ms. Diti (Diptipriya) Gupta" } },
  ],

  info: {
    india: [
      { he: "הפרש שעות: בהודו השעה מאוחרת ב־3.5 שעות מישראל", en: "Time difference: India is 3.5 hours ahead of Israel" },
      { he: "מטבע: רופי הודי (₹)", en: "Currency: Indian rupee (₹)" },
      { he: "שותים רק מים מבקבוק סגור — גם לצחצוח שיניים", en: "Drink only bottled water — also for brushing teeth" },
      { he: "במקדשים חולצים נעליים ומכסים כתפיים וברכיים", en: "In temples we take off our shoes and cover shoulders and knees" },
      { he: "האוכל חריף! אפשר לבקש ״לא חריף״", en: "Food is spicy! You can ask for \"not spicy\"" },
      { he: "בשווקים נהוג להתמקח על המחיר", en: "Bargaining is normal in the markets" },
      { he: "מבקשים רשות לפני שמצלמים אנשים", en: "Ask permission before photographing people" },
    ],
    words: [
      ["Namaste", "נמסטה", "שלום", "Hello"],
      ["Dhanyavaad", "דהניאוואד", "תודה", "Thank you"],
      ["Haan / Nahin", "האן / נהין", "כן / לא", "Yes / No"],
      ["Accha", "אצ׳הא", "טוב, בסדר", "Good, OK"],
      ["Paani", "פאני", "מים", "Water"],
      ["Kitna?", "קיתנה?", "כמה זה עולה?", "How much is it?"],
    ],
    malayalam: [
      ["Namaskaram", "נַמַסְקָרַם", "שלום", "Hello"],
      ["Nanni", "נָאנִי", "תודה", "Thank you"],
      ["Athe / Alla", "אָתֶה / אַלָּה", "כן / לא", "Yes / No"],
      ["Sukhamano?", "סוּקָמָנוֹ?", "מה שלומך?", "How are you?"],
      ["Kollaam", "קוֹלָאם", "טוב, יפה", "Good, nice"],
      ["Vellam", "וֶלָּם", "מים", "Water"],
      ["Chaaya / Kaapi", "צָ׳איָה / קָאפִּי", "תה / קפה", "Tea / Coffee"],
      ["Ethra aanu?", "אֶתְרָה אָנוּ?", "כמה זה עולה?", "How much is it?"],
      ["Manassilaayi", "מַנַסִּילָאיִי", "הבנתי", "I understand"],
    ],
    train: [
      { he: "12 קרונות, מתוכם 6 קרונות שינה AC First Class", en: "12 cars, including 6 AC First Class sleeper cars" },
      { he: "תאים של 4 ושל 2, עם מצעים, כרית ושמיכה בכל מיטה", en: "Cabins for 4 and for 2, with linen, pillow and blanket on every bed" },
      { he: "3 שירותים ומקלחון אחד בכל קרון", en: "3 toilets and 1 shower in each car" },
      { he: "ארוחות צמחוניות חמות ומים מינרליים בלי הגבלה", en: "Hot vegetarian meals and unlimited mineral water" },
      { he: "שקעים בתאים — כדאי מתאם לשקע ההודי", en: "Sockets in the cabins — bring an Indian plug adapter" },
      { he: "בכל ערב משחקים וחידונים — בואו עם מצב רוח טוב!", en: "Games and quizzes every evening — bring a good mood!" },
    ],
  },
};
