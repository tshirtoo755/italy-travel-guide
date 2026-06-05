const uiTranslations = {
    ar: {
        mainTitle: "إيطاليا التفاعلية",
        subTitle: "دليل السفر والملاحة الذكية 2026",
        secNav: "تخطيط الرحلة والمسارات",
        secExplore: "استكشف المدن والبحث",
        lblFrom: "من:", lblTo: "إلى:", lblMode: "وسيلة التنقل:",
        btnRoute: "ارسم المسار واحسب السعر",
        btnFree: "بحث",
        btnReset: "إعادة التعيين",
        btnGeo: "موقعي",
        placeholder: "ابحث عن أي مكان في العالم...",
        themeLight: "مظهر نهاري",
        themeDark: "مظهر ليلي",
        titleGeo: "📍 الوصف الجغرافي",
        titleLandmarks: "🏛️ أهم المعالم",
        titleFoodHeader: "🍕 المطاعم والمطبخ المحلي",
        titleFoodBody: "🍽️ الوجبة المقترحة",
        titleActivities: "🛶 الأنشطة والتجارب",
        titleHotels2: "🏨 فنادق اقتصادية (2 نجوم)",
        titleHotels3: "🏨 فنادق متميزة (3 نجوم)",
        alertMatch: "محطة القيام والوصول متطابقتان!",
        alertNoFree: "الرجاء كتابة اسم مكان للبحث عنه!",
        alertFreeErr: "عذراً، لم نتمكن من العثور على هذا الموقع.",
        loadingRoute: "جاري حساب المسار...",
        loadingSearch: "جاري البحث...",
        errorRoute: "تعذر رسم المسار، يرجى التحقق من الاتصال والمحاولة لاحقاً.",
        errorSearch: "تعذر البحث، يرجى المحاولة لاحقاً.",
        errorGeo: "تعذر تحديد موقعك، يرجى التأكد من تفعيل خدمة الموقع الجغرافي.",
        successGeo: "تم تحديد موقعك بنجاح!",
        modeCar: "🚗 سيارة",
        modeWalk: "🚶 مشي",
        modeBike: "🚲 دراجة",
        routeLabelCar: "مسار القيادة الفعلي",
        routeLabelWalk: "مسار المشي",
        routeLabelBike: "مسار الدراجة",
        closeBtn: "إغلاق"
    },
    en: {
        mainTitle: "Interactive Italy",
        subTitle: "Smart Travel & Navigation Guide 2026",
        secNav: "Trip Planning & Routes",
        secExplore: "Explore Cities & Search",
        lblFrom: "From:", lblTo: "To:", lblMode: "Transport Mode:",
        btnRoute: "Draw Route & Calculate Price",
        btnFree: "Search",
        btnReset: "Reset View",
        btnGeo: "My Location",
        placeholder: "Search for any place worldwide...",
        themeLight: "Light Mode",
        themeDark: "Dark Mode",
        titleGeo: "📍 Geo Description",
        titleLandmarks: "🏛️ Top Landmarks",
        titleFoodHeader: "🍕 Restaurants & Local Cuisine",
        titleFoodBody: "🍽️ Suggested Dish",
        titleActivities: "🛶 Activities & Experiences",
        titleHotels2: "🏨 Budget Hotels (2 Stars)",
        titleHotels3: "🏨 Premium Hotels (3 Stars)",
        alertMatch: "Departure and destination cities are identical!",
        alertNoFree: "Please type a location name to search!",
        alertFreeErr: "Sorry, could not find this location.",
        loadingRoute: "Calculating route...",
        loadingSearch: "Searching...",
        errorRoute: "Failed to draw route. Please check your connection and try again.",
        errorSearch: "Search failed. Please try again later.",
        errorGeo: "Could not determine your location. Please enable location services.",
        successGeo: "Your location has been identified successfully!",
        modeCar: "🚗 Car",
        modeWalk: "🚶 Walking",
        modeBike: "🚲 Cycling",
        routeLabelCar: "Driving Route",
        routeLabelWalk: "Walking Route",
        routeLabelBike: "Cycling Route",
        closeBtn: "Close"
    }
};

const transportModes = {
    'driving-car': { icon: 'fa-car', labelAr: 'سيارة', labelEn: 'Car' },
    'foot-walking': { icon: 'fa-person-walking', labelAr: 'مشي', labelEn: 'Walking' },
    'cycling-regular': { icon: 'fa-bicycle', labelAr: 'دراجة', labelEn: 'Cycling' }
};

const fallbackData = [
    {
        "id": "rome",
        "name": {
            "ar": "روما",
            "en": "Rome"
        },
        "lat": 41.9028,
        "lng": 12.4964,
        "images": [
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1529260839332-3d744c5a59bb?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80"
        ],
        "province": {
            "ar": "إقليم لاتسيو - عاصمة إيطاليا التاريخية على ضفاف نهر التيبر.",
            "en": "Lazio Region - Italy's historic capital on the Tiber River."
        },
        "landmarks": {
            "ar": "الكولوسيوم، نافورة تريفي، ودولة الفاتيكان.",
            "en": "The Colosseum, Trevi Fountain, and Vatican City."
        },
        "food": {
            "ar": "مكرونة كاربونارا الأصلية في Osteria da Fortunata.",
            "en": "Authentic Pasta Carbonara at Osteria da Fortunata."
        },
        "science": {
            "ar": "تضم روما أقدم أنظمة قنوات المياه الممتدة منذ العهد الروماني.",
            "en": "Rome features ancient active underground aqueduct systems."
        },
        "yt": {
            "landmark": "https://www.youtube.com/results?search_query=Rome+Colosseum+Guide",
            "food": "https://www.youtube.com/results?search_query=Best+Carbonara+in+Rome"
        },
        "station": {
            "name": "Roma Termini",
            "lat": 41.9009,
            "lng": 12.502
        },
        "activities": [
            {
                "name": {
                    "ar": "جولة إرشادية داخل الكولوسيوم والممرات السفلية",
                    "en": "Guided tour inside the Colosseum tunnels"
                },
                "price": "35€"
            },
            {
                "name": {
                    "ar": "زيارة متحف الفاتيكان وكنيسة سيستينا",
                    "en": "Visit Vatican Museums & Sistine Chapel"
                },
                "price": "28€"
            },
            {
                "name": {
                    "ar": "جولة مشي في ساحة نافونا وساحة القديس بطرس",
                    "en": "Walking tour of Piazza Navona & St. Peter's Square"
                },
                "price": "Free"
            },
            {
                "name": {
                    "ar": "زيارة كنيسة سانتا ماريا ماجيوري العريقة",
                    "en": "Visit the ancient Santa Maria Maggiore Basilica"
                },
                "price": "Free"
            },
            {
                "name": {
                    "ar": "استكشاف منتدى روما القديم والتلة الكابيتولية",
                    "en": "Explore Roman Forum & Capitoline Hill"
                },
                "price": "22€"
            }
        ],
        "hotels2": [
            {
                "name": "Hotel Termini",
                "lat": 41.9015,
                "lng": 12.5035,
                "price": "65€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Termini+Rome",
                "distance_to_transport": "50m من محطة Roma Termini (قطار/مترو)"
            },
            {
                "name": "Hotel Marsala",
                "lat": 41.902,
                "lng": 12.501,
                "price": "58€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Marsala+Rome",
                "distance_to_transport": "150m من محطة Roma Termini (قطار/مترو/باص)"
            },
            {
                "name": "Hotel Texas",
                "lat": 41.8985,
                "lng": 12.505,
                "price": "72€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Texas+Rome",
                "distance_to_transport": "200m من محطة Roma Termini (قطار/مترو)"
            }
        ],
        "hotels3": [
            {
                "name": "IQ Hotel Roma",
                "lat": 41.901,
                "lng": 12.4938,
                "price": "140€",
                "yt": "https://www.youtube.com/results?search_query=IQ+Hotel+Roma",
                "distance_to_transport": "300m من محطة Repubblica (مترو A) / 600m من Roma Termini"
            },
            {
                "name": "Hotel Artis",
                "lat": 41.899,
                "lng": 12.498,
                "price": "125€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Artis+Rome",
                "distance_to_transport": "200m من محطة Roma Termini (قطار/مترو/باص)"
            },
            {
                "name": "Hotel Miami",
                "lat": 41.903,
                "lng": 12.491,
                "price": "155€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Miami+Rome",
                "distance_to_transport": "400m من محطة Castro Pretorio (مترو B) / 700m من Roma Termini"
            }
        ],
        "transport": {
            "train": {
                "september": {
                    "price": "35€",
                    "departures": [
                        "06:30",
                        "08:15",
                        "10:00",
                        "12:45",
                        "15:30",
                        "18:00",
                        "20:15"
                    ]
                },
                "october": {
                    "price": "38€",
                    "departures": [
                        "07:00",
                        "09:00",
                        "11:30",
                        "14:00",
                        "16:45",
                        "19:15",
                        "21:30"
                    ]
                }
            },
            "bus": {
                "september": {
                    "price": "18€",
                    "departures": [
                        "07:00",
                        "09:30",
                        "12:00",
                        "14:30",
                        "17:00",
                        "19:30",
                        "22:00"
                    ]
                },
                "october": {
                    "price": "20€",
                    "departures": [
                        "07:30",
                        "10:00",
                        "12:30",
                        "15:00",
                        "17:30",
                        "20:00",
                        "22:30"
                    ]
                }
            }
        }
    },
    {
        "id": "milan",
        "name": {
            "ar": "ميلان",
            "en": "Milan"
        },
        "lat": 45.4642,
        "lng": 9.19,
        "images": [
            "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1608914371941-2df44005cf39?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1543837173-6c26bc89937b?auto=format&fit=crop&w=600&q=80"
        ],
        "province": {
            "ar": "إقليم لومبارديا - عاصمة الموضة والمال في شمال إيطاليا.",
            "en": "Lombardy Region - The capital of fashion and finance in northern Italy."
        },
        "landmarks": {
            "ar": "كاتدرائية ميلانو (Duomo) ورواق غاليريا الشهير.",
            "en": "Duomo di Milano and Galleria Vittorio Emanuele II."
        },
        "food": {
            "ar": "ريزوتو الزعفران الميلاني الأصيل في Trattoria Milanese.",
            "en": "Traditional Saffron Risotto at Trattoria Milanese."
        },
        "science": {
            "ar": "تحتوي على نظام قنوات Navigli المائي الذي صممه ليوناردو دا فينشي.",
            "en": "Features the Navigli canals engineered by Leonardo da Vinci."
        },
        "yt": {
            "landmark": "https://www.youtube.com/results?search_query=Milan+Duomo+Tour",
            "food": "https://www.youtube.com/results?search_query=Milanese+Risotto"
        },
        "station": {
            "name": "Milano Centrale",
            "lat": 45.4858,
            "lng": 9.2037
        },
        "activities": [
            {
                "name": {
                    "ar": "صعود أسطح كاتدرائية الدومو البانورامية",
                    "en": "Rooftop walk on Duomo di Milano"
                },
                "price": "15€"
            },
            {
                "name": {
                    "ar": "زيارة متحف اللوفر في ميلانو",
                    "en": "Visit Museo del Novecento & Pinacoteca di Brera"
                },
                "price": "12€"
            },
            {
                "name": {
                    "ar": "جولة في ساحة ديلا سكالا وساحة ديلوومو",
                    "en": "Tour Piazza della Scala & Piazza del Duomo"
                },
                "price": "Free"
            },
            {
                "name": {
                    "ar": "زيارة كنيسة سانتا ماريا ديلي غراتسي (العشاء الأخير)",
                    "en": "Visit Santa Maria delle Grazie (The Last Supper)"
                },
                "price": "18€"
            },
            {
                "name": {
                    "ar": "استكشاف قلعة سفورزيسكو التاريخية",
                    "en": "Explore Sforzesco Castle & its museums"
                },
                "price": "10€"
            }
        ],
        "hotels2": [
            {
                "name": "Hotel Central Station",
                "lat": 45.4842,
                "lng": 9.2012,
                "price": "70€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Central+Station+Milan",
                "distance_to_transport": "80m من Milano Centrale (قطار/مترو/باص)"
            },
            {
                "name": "Hotel Gioia",
                "lat": 45.483,
                "lng": 9.205,
                "price": "62€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Gioia+Milan",
                "distance_to_transport": "300m من Milano Centrale (قطار/مترو)"
            },
            {
                "name": "Hotel Mennini",
                "lat": 45.4855,
                "lng": 9.2025,
                "price": "75€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Mennini+Milan",
                "distance_to_transport": "120m من Milano Centrale (قطار/مترو/باص)"
            }
        ],
        "hotels3": [
            {
                "name": "Starhotels Anderson",
                "lat": 45.4851,
                "lng": 9.2051,
                "price": "125€",
                "yt": "https://www.youtube.com/results?search_query=Starhotels+Anderson+Milan",
                "distance_to_transport": "150m من Milano Centrale (قطار/مترو/باص)"
            },
            {
                "name": "Hotel Glam Milano",
                "lat": 45.486,
                "lng": 9.204,
                "price": "135€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Glam+Milano",
                "distance_to_transport": "100m من Milano Centrale (قطار/مترو/باص)"
            },
            {
                "name": "Hotel Berna",
                "lat": 45.4835,
                "lng": 9.206,
                "price": "145€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Berna+Milan",
                "distance_to_transport": "200m من Milano Centrale (قطار/مترو/باص)"
            }
        ],
        "transport": {
            "train": {
                "september": {
                    "price": "42€",
                    "departures": [
                        "05:45",
                        "08:00",
                        "10:30",
                        "13:15",
                        "16:00",
                        "18:30",
                        "21:00"
                    ]
                },
                "october": {
                    "price": "45€",
                    "departures": [
                        "06:15",
                        "08:45",
                        "11:15",
                        "14:00",
                        "16:30",
                        "19:00",
                        "21:45"
                    ]
                }
            },
            "bus": {
                "september": {
                    "price": "22€",
                    "departures": [
                        "06:30",
                        "09:00",
                        "11:30",
                        "14:00",
                        "16:30",
                        "19:00",
                        "21:30"
                    ]
                },
                "october": {
                    "price": "25€",
                    "departures": [
                        "07:00",
                        "09:30",
                        "12:00",
                        "14:30",
                        "17:00",
                        "19:30",
                        "22:00"
                    ]
                }
            }
        }
    },
    {
        "id": "florence",
        "name": {
            "ar": "فلورنسا",
            "en": "Florence"
        },
        "lat": 43.7696,
        "lng": 11.2558,
        "images": [
            "https://images.unsplash.com/photo-1541300154611-6679b362140a?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=600&q=80"
        ],
        "province": {
            "ar": "إقليم توسكانا - مهد عصر النهضة والفنون العالمية بجانب نهر أرنو.",
            "en": "Tuscany Region - The cradle of the Renaissance by the Arno River."
        },
        "landmarks": {
            "ar": "كاتدرائية سانتا ماريا وجسر بونتي فيكيو الأثري.",
            "en": "Santa Maria del Fiore and Ponte Vecchio bridge."
        },
        "food": {
            "ar": "شطيرة اللامبريدوتو الشعبية في كشك Da Nerbone التاريخي.",
            "en": "Legendary Lampredotto sandwich at Da Nerbone."
        },
        "science": {
            "ar": "قبة برونelleschi في كاتدرائيتها هي أكبر قبة بنائية طوبية في العالم.",
            "en": "Brunelleschi's Dome is the world's largest masonry dome."
        },
        "yt": {
            "landmark": "https://www.youtube.com/results?search_query=Florence+Duomo+Dome",
            "food": "https://www.youtube.com/results?search_query=Da+Nerbone+Florence"
        },
        "station": {
            "name": "Firenze SMN",
            "lat": 43.7766,
            "lng": 11.2479
        },
        "activities": [
            {
                "name": {
                    "ar": "مشاهدة تمثال داود الأصلي في معرض الأكاديمية",
                    "en": "See Michelangelo's original David statue"
                },
                "price": "22€"
            },
            {
                "name": {
                    "ar": "زيارة متحف أوفيزي ومعرض بوتيتشيلي",
                    "en": "Visit Uffizi Gallery & Botticelli collection"
                },
                "price": "24€"
            },
            {
                "name": {
                    "ar": "جولة في ساحة السينيوريا وساحة ديل دومو",
                    "en": "Tour Piazza della Signoria & Piazza del Duomo"
                },
                "price": "Free"
            },
            {
                "name": {
                    "ar": "زيارة كنيسة سانتا كروتشي (دفن ميكيلانجيلو)",
                    "en": "Visit Santa Croce Basilica (Michelangelo's tomb)"
                },
                "price": "8€"
            },
            {
                "name": {
                    "ar": "تسلق قمة برونليسكي في كاتدرائية فلورنسا",
                    "en": "Climb Brunelleschi's Dome in Florence Cathedral"
                },
                "price": "20€"
            }
        ],
        "hotels2": [
            {
                "name": "Hotel Sampaoli",
                "lat": 43.7791,
                "lng": 11.2581,
                "price": "60€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Sampaoli+Florence",
                "distance_to_transport": "400m من Firenze SMN (قطار/باص)"
            },
            {
                "name": "Hotel Veneto",
                "lat": 43.7775,
                "lng": 11.249,
                "price": "55€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Veneto+Florence",
                "distance_to_transport": "250m من Firenze SMN (قطار/باص/ترام)"
            },
            {
                "name": "Hotel Aline",
                "lat": 43.78,
                "lng": 11.255,
                "price": "68€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Aline+Florence",
                "distance_to_transport": "350m من Firenze SMN (قطار/باص)"
            }
        ],
        "hotels3": [
            {
                "name": "c-hotels Ambasciatori",
                "lat": 43.7758,
                "lng": 11.2465,
                "price": "115€",
                "yt": "https://www.youtube.com/results?search_query=C+Hotels+Ambasciatori+Florence",
                "distance_to_transport": "50m من Firenze SMN (قطار/باص/ترام)"
            },
            {
                "name": "Hotel Roma",
                "lat": 43.7745,
                "lng": 11.248,
                "price": "130€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Roma+Florence",
                "distance_to_transport": "150m من Firenze SMN (قطار/باص)"
            },
            {
                "name": "Hotel Atlantic Palace",
                "lat": 43.7765,
                "lng": 11.245,
                "price": "148€",
                "yt": "https://www.youtube.com/results?search_query=Atlantic+Palace+Florence",
                "distance_to_transport": "100m من Firenze SMN (قطار/باص/ترام)"
            }
        ],
        "transport": {
            "train": {
                "september": {
                    "price": "28€",
                    "departures": [
                        "06:00",
                        "08:30",
                        "11:00",
                        "13:30",
                        "16:00",
                        "18:30",
                        "21:00"
                    ]
                },
                "october": {
                    "price": "30€",
                    "departures": [
                        "06:30",
                        "09:00",
                        "11:30",
                        "14:00",
                        "16:30",
                        "19:00",
                        "21:30"
                    ]
                }
            },
            "bus": {
                "september": {
                    "price": "15€",
                    "departures": [
                        "07:00",
                        "09:30",
                        "12:00",
                        "14:30",
                        "17:00",
                        "19:30",
                        "22:00"
                    ]
                },
                "october": {
                    "price": "17€",
                    "departures": [
                        "07:30",
                        "10:00",
                        "12:30",
                        "15:00",
                        "17:30",
                        "20:00",
                        "22:30"
                    ]
                }
            }
        }
    },
    {
        "id": "venice",
        "name": {
            "ar": "البندقية",
            "en": "Venice"
        },
        "lat": 45.4408,
        "lng": 12.3155,
        "images": [
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1512100356131-70234a49c909?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=600&q=80"
        ],
        "province": {
            "ar": "إقليم فينيتو - المدينة المائية العائمة المبنية على 118 جزيرة.",
            "en": "Veneto Region - The floating city built on 118 small islands."
        },
        "landmarks": {
            "ar": "ساحة سان ماركو، القناة الكبرى، وجسر ريالتو الشهير.",
            "en": "St. Mark's Square, Grand Canal, and Rialto Bridge."
        },
        "food": {
            "ar": "مقبلات شيكيتي البحرية اللذيذة في Cantina Do Mori الشهير.",
            "en": "Delicious Cicchetti tapas at Cantina Do Mori."
        },
        "science": {
            "ar": "المدينة ترتكز فوق ملايين الجذوع الخشبية الغاطسة المقاومة للتعفن.",
            "en": "The entire city rests on ancient rot-proof wooden piles."
        },
        "yt": {
            "landmark": "https://www.youtube.com/results?search_query=Venice+Grand+Canal+Tour",
            "food": "https://www.youtube.com/results?search_query=Venice+Cicchetti+Food"
        },
        "station": {
            "name": "Venezia Santa Lucia",
            "lat": 45.4411,
            "lng": 12.3211
        },
        "activities": [
            {
                "name": {
                    "ar": "جولة كلاسيكية رومانسية في قارب الجندول",
                    "en": "Romantic Gondola ride across canals"
                },
                "price": "33€"
            },
            {
                "name": {
                    "ar": "زيارة متحف دوقي القصر وقاعة المجلس الكبير",
                    "en": "Visit Doge's Palace & Great Council Chamber"
                },
                "price": "26€"
            },
            {
                "name": {
                    "ar": "جولة في ساحة سان ماركو وبرج الجرس",
                    "en": "Tour St. Mark's Square & Campanile Tower"
                },
                "price": "10€"
            },
            {
                "name": {
                    "ar": "زيارة كنيسة سان ماركو البيزنطية الذهبية",
                    "en": "Visit St. Mark's Basilica (Golden Byzantine)"
                },
                "price": "5€"
            },
            {
                "name": {
                    "ar": "استكشاف جزيرة مورانو (زجاج فينيسيا)",
                    "en": "Explore Murano Island (Venetian Glass)"
                },
                "price": "15€"
            }
        ],
        "hotels2": [
            {
                "name": "Hotel Ungaro",
                "lat": 45.4851,
                "lng": 12.239,
                "price": "55€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Ungaro+Venice",
                "distance_to_transport": "100m من محطة Venezia Mestre (قطار/باص)"
            },
            {
                "name": "Hotel Aaron",
                "lat": 45.483,
                "lng": 12.242,
                "price": "48€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Aaron+Venice",
                "distance_to_transport": "200m من محطة Venezia Mestre (قطار/باص/ترام)"
            },
            {
                "name": "Hotel Plaza",
                "lat": 45.486,
                "lng": 12.237,
                "price": "62€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Plaza+Venice+Mestre",
                "distance_to_transport": "80m من محطة Venezia Mestre (قطار/باص)"
            }
        ],
        "hotels3": [
            {
                "name": "Hotel Splendid",
                "lat": 45.4358,
                "lng": 12.3372,
                "price": "160€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Splendid+Venice",
                "distance_to_transport": "200m من محطة Venezia Santa Lucia (قطار/فابوريتو)"
            },
            {
                "name": "Hotel Carlton",
                "lat": 45.437,
                "lng": 12.336,
                "price": "175€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Carlton+Venice",
                "distance_to_transport": "100m من محطة Venezia Santa Lucia (قطار/فابوريتو)"
            },
            {
                "name": "Hotel Principe",
                "lat": 45.436,
                "lng": 12.338,
                "price": "185€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Principe+Venice",
                "distance_to_transport": "150m من محطة Venezia Santa Lucia (قطار/فابوريتو)"
            }
        ],
        "transport": {
            "train": {
                "september": {
                    "price": "32€",
                    "departures": [
                        "06:15",
                        "08:45",
                        "11:15",
                        "13:45",
                        "16:15",
                        "18:45",
                        "21:15"
                    ]
                },
                "october": {
                    "price": "35€",
                    "departures": [
                        "06:45",
                        "09:15",
                        "11:45",
                        "14:15",
                        "16:45",
                        "19:15",
                        "21:45"
                    ]
                }
            },
            "bus": {
                "september": {
                    "price": "16€",
                    "departures": [
                        "07:15",
                        "09:45",
                        "12:15",
                        "14:45",
                        "17:15",
                        "19:45",
                        "22:15"
                    ]
                },
                "october": {
                    "price": "18€",
                    "departures": [
                        "07:45",
                        "10:15",
                        "12:45",
                        "15:15",
                        "17:45",
                        "20:15",
                        "22:45"
                    ]
                }
            }
        }
    },
    {
        "id": "naples",
        "name": {
            "ar": "نابولي",
            "en": "Naples"
        },
        "lat": 40.8518,
        "lng": 14.2681,
        "images": [
            "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1614531189441-df0711910ef6?auto=format&fit=crop&w=600&q=80"
        ],
        "province": {
            "ar": "إقليم كامبانيا - تقع جنوب البلاد وتطل على الساحل وبركان فيزوف.",
            "en": "Campania Region - Southern coastal city overlooking Mount Vesuvius."
        },
        "landmarks": {
            "ar": "المركز التاريخي القديم، ومدينة بومبي الأثرية المجاورة.",
            "en": "Spaccanapoli and the ancient ruins of Pompeii."
        },
        "food": {
            "ar": "بيتزا مارغريتا النابولية الأصلية في L'Antica Pizzeria da Michele.",
            "en": "Original Neapolitan Pizza at L'Antica Pizzeria da Michele."
        },
        "science": {
            "ar": "تحتوي نابولي على شبكة مدن وأنفاق كاملة تحت الأرض منذ العهد الروماني.",
            "en": "Home to a massive ancient underground city network."
        },
        "yt": {
            "landmark": "https://www.youtube.com/results?search_query=Pompeii+Ruins+Tour",
            "food": "https://www.youtube.com/results?search_query=Da+Michele+Naples+Pizza"
        },
        "station": {
            "name": "Napoli Centrale",
            "lat": 40.853,
            "lng": 14.2705
        },
        "activities": [
            {
                "name": {
                    "ar": "رحلة استكشافية ليوم كامل إلى مدينة بومبي الغامضة",
                    "en": "Full-day excursion to the ruins of Pompeii"
                },
                "price": "28€"
            },
            {
                "name": {
                    "ar": "زيارة المتحف الأثري الوطني في نابولي",
                    "en": "Visit National Archaeological Museum of Naples"
                },
                "price": "15€"
            },
            {
                "name": {
                    "ar": "جولة في ساحة del Plebiscito وساحة Dante",
                    "en": "Tour Piazza del Plebiscito & Piazza Dante"
                },
                "price": "Free"
            },
            {
                "name": {
                    "ar": "زيارة كاتدرائية نابولي وكنيسة سان جينارو",
                    "en": "Visit Naples Cathedral & San Gennaro Chapel"
                },
                "price": "Free"
            },
            {
                "name": {
                    "ar": "صعود فوق جبل فيزوف والاستمتاع بالإطلالة",
                    "en": "Hike Mount Vesuvius & enjoy panoramic views"
                },
                "price": "22€"
            }
        ],
        "hotels2": [
            {
                "name": "Hotel Zara",
                "lat": 40.8542,
                "lng": 14.2711,
                "price": "48€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Zara+Naples",
                "distance_to_transport": "100m من Napoli Centrale (قطار/مترو/باص)"
            },
            {
                "name": "Hotel Colombo",
                "lat": 40.852,
                "lng": 14.269,
                "price": "52€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Colombo+Naples",
                "distance_to_transport": "150m من Napoli Centrale (قطار/مترو)"
            },
            {
                "name": "Hotel Garibaldi",
                "lat": 40.855,
                "lng": 14.272,
                "price": "58€",
                "yt": "https://www.youtube.com/results?search_query=Hotel+Garibaldi+Naples",
                "distance_to_transport": "30m من Napoli Centrale (قطار/مترو/باص)"
            }
        ],
        "hotels3": [
            {
                "name": "Eurostars Excelsior",
                "lat": 40.8322,
                "lng": 14.2504,
                "price": "135€",
                "yt": "https://www.youtube.com/results?search_query=Eurostars+Excelsior+Naples",
                "distance_to_transport": "500m من محطة Toledo (مترو) / 1.2km من Napoli Centrale"
            },
            {
                "name": "Hotel Royal Continental",
                "lat": 40.834,
                "lng": 14.248,
                "price": "150€",
                "yt": "https://www.youtube.com/results?search_query=Royal+Continental+Naples",
                "distance_to_transport": "400m من محطة Toledo (مترو) / 1km من Napoli Centrale"
            },
            {
                "name": "Hotel Palazzo Salgar",
                "lat": 40.836,
                "lng": 14.252,
                "price": "165€",
                "yt": "https://www.youtube.com/results?search_query=Palazzo+Salgar+Naples",
                "distance_to_transport": "300m من محطة Toledo (مترو) / 900m من Napoli Centrale"
            }
        ],
        "transport": {
            "train": {
                "september": {
                    "price": "25€",
                    "departures": [
                        "06:00",
                        "08:30",
                        "11:00",
                        "13:30",
                        "16:00",
                        "18:30",
                        "21:00"
                    ]
                },
                "october": {
                    "price": "27€",
                    "departures": [
                        "06:30",
                        "09:00",
                        "11:30",
                        "14:00",
                        "16:30",
                        "19:00",
                        "21:30"
                    ]
                }
            },
            "bus": {
                "september": {
                    "price": "14€",
                    "departures": [
                        "07:00",
                        "09:30",
                        "12:00",
                        "14:30",
                        "17:00",
                        "19:30",
                        "22:00"
                    ]
                },
                "october": {
                    "price": "15€",
                    "departures": [
                        "07:30",
                        "10:00",
                        "12:30",
                        "15:00",
                        "17:30",
                        "20:00",
                        "22:30"
                    ]
                }
            }
        }
    }
];

let citiesData = [];
let map;
let currentTileLayer;
let currentLang = localStorage.getItem('italy_lang') || 'ar';
let currentTheme = localStorage.getItem('italy_theme') || 'light';
let dynamicSubMarkers = [];
let freeSearchMarkers = [];
let activeRouteLine = null;
let currentCarouselIndex = 0;
let currentCityImages = [];
let userLocationMarker = null;
const infoCard = document.getElementById('infoCard');
const orsApiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjM5YTU2ZGRmOGYxZDQyMTFiOWE2YTA3ODVmYWNhNDYwIiwiaCI6Im11cm11cjY0In0=";

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'error') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = type === 'error' ? 'fa-circle-exclamation' : type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 5000);
}

// ==================== LOADING STATES ====================
function setButtonLoading(btnId, isLoading, loadingText) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    if (isLoading) {
        btn.classList.add('loading');
        btn.disabled = true;
        if (loadingText) {
            const textSpan = btn.querySelector('.btn-text');
            if (textSpan) textSpan.dataset.original = textSpan.innerHTML;
            if (textSpan) textSpan.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${loadingText}`;
        }
    } else {
        btn.classList.remove('loading');
        btn.disabled = false;
        const textSpan = btn.querySelector('.btn-text');
        if (textSpan && textSpan.dataset.original) {
            textSpan.innerHTML = textSpan.dataset.original;
        }
    }
}

// ==================== DATA LOADING ====================
async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to load data.json');
        citiesData = await response.json();
        console.log('✅ Loaded data from data.json');
    } catch (err) {
        console.warn('⚠️ Could not fetch data.json, using fallback data. Error:', err.message);
        citiesData = fallbackData;
    }
    initMap();
}

function initMap() {
    if (map) return;
    map = L.map('liveMap', { zoomControl: true }).setView([42.5041, 12.6463], 6);
    setMapLayer();
    applyThemeStyles();
    applyLanguageStrings();
    renderCityElements();
}

function renderCityElements() {
    const btnContainer = document.getElementById('cityButtonsContainer');
    btnContainer.innerHTML = '';

    citiesData.forEach(city => {
        const btn = document.createElement('button');
        btn.className = 'city-btn';
        btn.innerText = city.name[currentLang];
        btn.dataset.id = city.id;
        btn.onclick = () => selectCity(city.id);
        btnContainer.appendChild(btn);

        const cityIcon = L.divIcon({ className: 'custom-map-marker marker-city', html: '<i class="fa-solid fa-location-dot"></i>', iconSize: [36, 36] });
        L.marker([city.lat, city.lng], { icon: cityIcon })
         .addTo(map)
         .bindTooltip(city.name[currentLang], { permanent: true, direction: 'top', className: 'custom-tooltip' })
         .on('click', () => selectCity(city.id));
    });
}

function setMapLayer() {
    if (currentTileLayer) map.removeLayer(currentTileLayer);
    let layerUrl = currentTheme === 'dark'
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    currentTileLayer = L.tileLayer(layerUrl, { attribution: '© OpenStreetMap' }).addTo(map);
}

function toggleMapTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('italy_theme', currentTheme);
    setMapLayer();
    applyThemeStyles();
    applyLanguageStrings();
}

function applyThemeStyles() {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('italy_lang', currentLang);

    const htmlEl = document.getElementById('appHtml');
    if (currentLang === 'en') {
        htmlEl.setAttribute('dir', 'ltr');
        htmlEl.setAttribute('lang', 'en');
    } else {
        htmlEl.setAttribute('dir', 'rtl');
        htmlEl.setAttribute('lang', 'ar');
    }

    applyLanguageStrings();
    renderCityElements();
    const activeBtn = document.querySelector('.city-btn.active');
    if (activeBtn) selectCity(activeBtn.dataset.id);
}

function applyLanguageStrings() {
    const tr = uiTranslations[currentLang];
    document.getElementById('txtMainTitle').innerText = tr.mainTitle;
    document.getElementById('txtSubTitle').innerText = tr.subTitle;
    document.getElementById('txtSectionNav').innerText = tr.secNav;
    document.getElementById('txtSectionExplore').innerText = tr.secExplore;
    document.getElementById('lblFrom').innerText = tr.lblFrom;
    document.getElementById('lblTo').innerText = tr.lblTo;
    document.getElementById('lblMode').innerText = tr.lblMode;
    document.getElementById('btnGeoText').innerText = tr.btnGeo;

    const routeBtn = document.getElementById('btnRouteSearch');
    const textSpan = routeBtn.querySelector('.btn-text');
    if (textSpan && !routeBtn.classList.contains('loading')) {
        textSpan.innerHTML = `<i class="fa-solid fa-route"></i> ${tr.btnRoute}`;
    }

    document.getElementById('btnFreeSearch').querySelector('.btn-text').innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
    document.getElementById('btnResetMap').innerHTML = `<i class="fa-solid fa-rotate-right"></i> ${tr.btnReset}`;
    document.getElementById('freeSearchInput').placeholder = tr.placeholder;
    document.getElementById('btnLangText').innerText = currentLang === 'ar' ? 'English' : 'العربية';
    document.getElementById('btnThemeText').innerText = currentTheme === 'dark' ? uiTranslations[currentLang].themeLight : uiTranslations[currentLang].themeDark;

    document.getElementById('titleGeo').innerText = tr.titleGeo;
    document.getElementById('titleLandmarks').innerText = tr.titleLandmarks;
    document.getElementById('titleFoodHeader').innerText = tr.titleFoodHeader;
    document.getElementById('titleFoodBody').innerText = tr.titleFoodBody;
    document.getElementById('titleActivities').innerText = tr.titleActivities;
    document.getElementById('titleHotels2').innerText = tr.titleHotels2;
    document.getElementById('titleHotels3').innerText = tr.titleHotels3;
    document.getElementById('titleTransport').innerText = tr.titleTransport;
    document.getElementById('txtTransportTitle').innerText = tr.txtTransportTitle;
    document.getElementById('txtTrain').innerText = tr.txtTrain;
    document.getElementById('txtBus').innerText = tr.txtBus;
    document.getElementById('txtTrainPrice').innerText = tr.txtTrainPrice;
    document.getElementById('txtBusPrice').innerText = tr.txtBusPrice;
    document.getElementById('txtDepartures').innerText = tr.txtDepartures;
    document.getElementById('txtBusDepartures').innerText = tr.txtBusDepartures;
    document.getElementById('txtCityTrain').innerText = tr.txtCityTrain;
    document.getElementById('txtCityBus').innerText = tr.txtCityBus;
    document.getElementById('txtCityTrainSep').innerText = tr.txtCityTrainSep;
    document.getElementById('txtCityTrainOct').innerText = tr.txtCityTrainOct;
    document.getElementById('txtCityBusSep').innerText = tr.txtCityBusSep;
    document.getElementById('txtCityBusOct').innerText = tr.txtCityBusOct;

    // Update transport mode options
    const modeSelect = document.getElementById('transportMode');
    if (modeSelect) {
        modeSelect.options[0].text = tr.modeCar;
        modeSelect.options[1].text = tr.modeWalk;
        modeSelect.options[2].text = tr.modeBike;
    }
}

function selectCity(cityId) {
    document.querySelectorAll('.city-btn').forEach(b => b.classList.remove('active'));
    const city = citiesData.find(c => c.id === cityId);
    if (!city) return;

    const targetBtn = document.querySelector(`.city-btn[data-id="${cityId}"]`);
    if (targetBtn) targetBtn.classList.add('active');

    clearSubMarkers();

    currentCityImages = city.images;
    currentCarouselIndex = 0;
    updateCarousel();

    document.getElementById('cardTitle').innerText = city.name[currentLang];
    document.getElementById('cardScience').innerText = `🔬 ${city.science[currentLang]}`;
    document.getElementById('cardProvince').innerText = city.province[currentLang];
    document.getElementById('cardLandmarks').innerText = city.landmarks[currentLang];
    document.getElementById('cardFood').innerText = city.food[currentLang];
    document.getElementById('yt-landmark').href = city.yt.landmark;
    document.getElementById('yt-food').href = city.yt.food;

    const stationIcon = L.divIcon({ className: 'custom-map-marker marker-station', html: '<i class="fa-solid fa-train"></i>', iconSize: [34, 34] });
    const stationMarker = L.marker([city.station.lat, city.station.lng], { icon: stationIcon })
                           .addTo(map)
                           .bindPopup(`<b>${city.station.name}</b>`);
    dynamicSubMarkers.push(stationMarker);

    // Update city transport info
    updateCityTransport(city);

    const actContainer = document.getElementById('cardActivitiesContainer');
    actContainer.innerHTML = '';
    city.activities.forEach((act, idx) => {
        const row = document.createElement('div');
        row.className = 'data-row';
        const icons = ['fa-star', 'fa-landmark', 'fa-church', 'fa-mountain-sun', 'fa-palette'];
        const icon = icons[idx % icons.length];
        row.innerHTML = `<span><i class="fa-solid ${icon}" style="color:var(--italy-gold); margin-left:6px;"></i> ${act.name[currentLang]}</span><span class="price-badge">${act.price}</span>`;
        actContainer.appendChild(row);
    });

    const h2Container = document.getElementById('cardHotels2Container');
    h2Container.innerHTML = '';
    city.hotels2.forEach(hotel => {
        const h2Icon = L.divIcon({ className: 'custom-map-marker marker-hotel2', html: '<i class="fa-solid fa-hotel"></i>', iconSize: [30, 30] });
        const hMarker = L.marker([hotel.lat, hotel.lng], { icon: h2Icon })
                         .addTo(map)
                         .bindPopup(`<b>${hotel.name} (2★)</b><br>Price: ${hotel.price}`);
        dynamicSubMarkers.push(hMarker);

        const row = document.createElement('div');
        row.className = 'data-row';
        row.style.flexDirection = 'column';
        row.style.alignItems = 'flex-start';
        row.style.gap = '6px';
        const distText = hotel.distance_to_transport ? `<div style="font-size:12px; color:var(--text-muted); margin-top:2px;"><i class="fa-solid fa-location-dot" style="color:var(--italy-green); margin-left:4px;"></i> ${hotel.distance_to_transport}</div>` : '';
        row.innerHTML = `<div style="display:flex; justify-content:space-between; width:100%; align-items:center;"><span>${hotel.name}</span><span style="display:flex; align-items:center; gap:8px;"><span class="price-badge">${hotel.price}</span><a class="yt-link" target="_blank" href="${hotel.yt}"><i class="fa-brands fa-youtube"></i></a></span></div>${distText}`;
        h2Container.appendChild(row);
    });

    const h3Container = document.getElementById('cardHotels3Container');
    h3Container.innerHTML = '';
    city.hotels3.forEach(hotel => {
        const h3Icon = L.divIcon({ className: 'custom-map-marker marker-hotel3', html: '<i class="fa-solid fa-building"></i>', iconSize: [30, 30] });
        const hMarker = L.marker([hotel.lat, hotel.lng], { icon: h3Icon })
                         .addTo(map)
                         .bindPopup(`<b>${hotel.name} (3★)</b><br>Price: ${hotel.price}`);
        dynamicSubMarkers.push(hMarker);

        const row = document.createElement('div');
        row.className = 'data-row';
        row.style.flexDirection = 'column';
        row.style.alignItems = 'flex-start';
        row.style.gap = '6px';
        const distText = hotel.distance_to_transport ? `<div style="font-size:12px; color:var(--text-muted); margin-top:2px;"><i class="fa-solid fa-location-dot" style="color:var(--italy-green); margin-left:4px;"></i> ${hotel.distance_to_transport}</div>` : '';
        row.innerHTML = `<div style="display:flex; justify-content:space-between; width:100%; align-items:center;"><span>${hotel.name}</span><span style="display:flex; align-items:center; gap:8px;"><span class="price-badge">${hotel.price}</span><a class="yt-link" target="_blank" href="${hotel.yt}"><i class="fa-brands fa-youtube"></i></a></span></div>${distText}`;
        h3Container.appendChild(row);
    });

    infoCard.style.display = 'block';
    map.flyTo([city.lat, city.lng], 12, { animate: true, duration: 1.2 });
}

function closeInfoCard() {
    infoCard.style.display = 'none';
    document.querySelectorAll('.city-btn').forEach(b => b.classList.remove('active'));
}

function moveCarousel(direction) {
    currentCarouselIndex += direction;
    if (currentCarouselIndex >= currentCityImages.length) currentCarouselIndex = 0;
    if (currentCarouselIndex < 0) currentCarouselIndex = currentCityImages.length - 1;
    updateCarousel();
}

function updateCarousel() {
    for (let i = 0; i < 3; i++) {
        const slide = document.getElementById(`imgSlide${i}`);
        slide.src = currentCityImages[i] || "";
        slide.classList.remove('active');
    }
    document.getElementById(`imgSlide${currentCarouselIndex}`).classList.add('active');
}

function calculateRoute() {
    const fromId = document.getElementById('searchFrom').value;
    const toId = document.getElementById('searchTo').value;
    const transportMode = document.getElementById('transportMode').value;
    const resultsDiv = document.getElementById('routeResults');
    const tr = uiTranslations[currentLang];

    if (fromId === toId) {
        showToast(tr.alertMatch, 'info');
        return;
    }

    const fromCity = citiesData.find(c => c.id === fromId);
    const toCity = citiesData.find(c => c.id === toId);

    setButtonLoading('btnRouteSearch', true, tr.loadingRoute);

    const url = `https://api.openrouteservice.org/v2/directions/${transportMode}?api_key=${orsApiKey}&start=${fromCity.lng},${fromCity.lat}&end=${toCity.lng},${toCity.lat}`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(resData => {
            setButtonLoading('btnRouteSearch', false);

            if (resData.features && resData.features.length > 0) {
                const coords = resData.features[0].geometry.coordinates;
                const properties = resData.features[0].properties.summary;
                const leafletCoords = coords.map(c => [c[1], c[0]]);

                if (activeRouteLine) map.removeLayer(activeRouteLine);

                const routeColor = transportMode === 'driving-car' ? '#ce2b37' : 
                                   transportMode === 'foot-walking' ? '#1a73e8' : '#009246';
                activeRouteLine = L.polyline(leafletCoords, { color: routeColor, weight: 5, opacity: 0.85 }).addTo(map);

                const distanceKm = (properties.distance / 1000).toFixed(1);
                const durationHr = (properties.duration / 3600).toFixed(1);
                const estimatedPrice = transportMode === 'driving-car' ? (distanceKm * 0.14).toFixed(2) : '0.00';

                const modeLabel = transportMode === 'driving-car' ? tr.routeLabelCar :
                                  transportMode === 'foot-walking' ? tr.routeLabelWalk : tr.routeLabelBike;
                const modeIcon = transportMode === 'driving-car' ? 'fa-car' :
                                 transportMode === 'foot-walking' ? 'fa-person-walking' : 'fa-bicycle';

                document.querySelector('.transport-type').innerHTML = `<i class="fa-solid ${modeIcon}"></i> ${modeLabel}`;

                if (currentLang === 'ar') {
                    document.getElementById('routeDistance').innerHTML = `📏 <b>المسافة:</b> ${distanceKm} كم`;
                    document.getElementById('routeDuration').innerHTML = `⏱️ <b>المدة:</b> ${durationHr} ساعة`;
                } else {
                    document.getElementById('routeDistance').innerHTML = `📏 <b>Distance:</b> ${distanceKm} km`;
                    document.getElementById('routeDuration').innerHTML = `⏱️ <b>Duration:</b> ${durationHr} hours`;
                }
                document.getElementById('routePrice').innerText = `${estimatedPrice} €`;
                resultsDiv.style.display = 'flex';

                selectCity(toId);
                updateTransportDisplay();
                setTimeout(() => { map.fitBounds(activeRouteLine.getBounds(), { padding: [50, 50] }); }, 1000);
            } else {
                showToast(tr.errorRoute, 'error');
            }
        })
        .catch(err => {
            setButtonLoading('btnRouteSearch', false);
            console.error("Routing Error:", err);
            showToast(tr.errorRoute, 'error');
        });
}

function searchFreeLocation() {
    const query = document.getElementById('freeSearchInput').value;
    const tr = uiTranslations[currentLang];

    if (!query.trim()) {
        showToast(tr.alertNoFree, 'info');
        return;
    }

    setButtonLoading('btnFreeSearch', true, tr.loadingSearch);

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`)
        .then(res => res.json())
        .then(data => {
            setButtonLoading('btnFreeSearch', false);

            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lon = parseFloat(result.lon);

                freeSearchMarkers.forEach(m => map.removeLayer(m));
                freeSearchMarkers = [];

                const searchIcon = L.divIcon({ className: 'custom-map-marker marker-search', html: '<i class="fa-solid fa-star"></i>', iconSize: [36, 36] });
                const newMarker = L.marker([lat, lon], { icon: searchIcon })
                                   .addTo(map)
                                   .bindPopup(`<b>${result.display_name}</b>`)
                                   .openPopup();

                freeSearchMarkers.push(newMarker);
                map.flyTo([lat, lon], 14, { animate: true, duration: 1.5 });
            } else {
                showToast(tr.alertFreeErr, 'info');
            }
        })
        .catch(err => {
            setButtonLoading('btnFreeSearch', false);
            console.error("Search Error:", err);
            showToast(tr.errorSearch, 'error');
        });
}

function getUserLocation() {
    const tr = uiTranslations[currentLang];

    if (!navigator.geolocation) {
        showToast(tr.errorGeo, 'error');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            if (userLocationMarker) map.removeLayer(userLocationMarker);

            const userIcon = L.divIcon({ 
                className: 'custom-map-marker marker-user', 
                html: '<i class="fa-solid fa-user"></i>', 
                iconSize: [36, 36] 
            });
            userLocationMarker = L.marker([lat, lng], { icon: userIcon })
                .addTo(map)
                .bindPopup(currentLang === 'ar' ? '<b>موقعك الحالي</b>' : '<b>Your Location</b>')
                .openPopup();

            map.flyTo([lat, lng], 14, { animate: true, duration: 1.5 });
            showToast(tr.successGeo, 'success');
        },
        (error) => {
            console.error("Geolocation Error:", error);
            showToast(tr.errorGeo, 'error');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

function clearSubMarkers() {
    dynamicSubMarkers.forEach(m => map.removeLayer(m));
    dynamicSubMarkers = [];
}

function resetMap() {
    clearSubMarkers();
    freeSearchMarkers.forEach(m => map.removeLayer(m));
    freeSearchMarkers = [];
    if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
        userLocationMarker = null;
    }
    document.getElementById('freeSearchInput').value = '';
    map.flyTo([42.5041, 12.6463], 6);
    if (activeRouteLine) map.removeLayer(activeRouteLine);
    document.getElementById('routeResults').style.display = 'none';
    infoCard.style.display = 'none';
    document.querySelectorAll('.city-btn').forEach(b => b.classList.remove('active'));
}


// ==================== PUBLIC TRANSPORT FUNCTIONS ====================
let currentTransportTab = 'train';
let currentMonth = 'september';
let currentCityTransportTab = 'train';

function switchTransportTab(tab) {
    currentTransportTab = tab;
    document.querySelectorAll('.transport-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    document.getElementById('trainContent').style.display = tab === 'train' ? 'block' : 'none';
    document.getElementById('busContent').style.display = tab === 'bus' ? 'block' : 'none';
    updateTransportDisplay();
}

function switchMonth(month) {
    currentMonth = month;
    document.querySelectorAll('.month-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.month === month);
    });
    updateTransportDisplay();
}

function updateTransportDisplay() {
    const fromId = document.getElementById('searchFrom').value;
    const toId = document.getElementById('searchTo').value;
    const fromCity = citiesData.find(c => c.id === fromId);
    const toCity = citiesData.find(c => c.id === toId);

    if (!fromCity || !toCity || !fromCity.transport || fromId === toId) {
        document.getElementById('transportSection').style.display = 'none';
        return;
    }

    document.getElementById('transportSection').style.display = 'block';

    // For inter-city transport, we show average prices between cities
    // In a real app, this would be route-specific. Here we show city-based typical prices.
    const transport = fromCity.transport;

    if (currentTransportTab === 'train') {
        const trainData = transport.train[currentMonth];
        document.getElementById('trainPrice').innerText = trainData.price;
        const depContainer = document.getElementById('trainDepartures');
        depContainer.innerHTML = trainData.departures.map(d => `<span class="dep-chip">${d}</span>`).join('');
    } else {
        const busData = transport.bus[currentMonth];
        document.getElementById('busPrice').innerText = busData.price;
        const depContainer = document.getElementById('busDepartures');
        depContainer.innerHTML = busData.departures.map(d => `<span class="dep-chip">${d}</span>`).join('');
    }
}

function switchCityTransportTab(tab) {
    currentCityTransportTab = tab;
    document.querySelectorAll('.tc-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tc === tab);
    });
    document.getElementById('cityTrainInfo').style.display = tab === 'train' ? 'block' : 'none';
    document.getElementById('cityBusInfo').style.display = tab === 'bus' ? 'block' : 'none';
}

function updateCityTransport(city) {
    if (!city.transport) return;

    const tr = uiTranslations[currentLang];

    // Train data
    document.getElementById('cityTrainSepPrice').innerText = city.transport.train.september.price;
    document.getElementById('cityTrainSepTimes').innerText = city.transport.train.september.departures.slice(0, 5).join(', ') + '...';
    document.getElementById('cityTrainOctPrice').innerText = city.transport.train.october.price;
    document.getElementById('cityTrainOctTimes').innerText = city.transport.train.october.departures.slice(0, 5).join(', ') + '...';

    // Bus data
    document.getElementById('cityBusSepPrice').innerText = city.transport.bus.september.price;
    document.getElementById('cityBusSepTimes').innerText = city.transport.bus.september.departures.slice(0, 5).join(', ') + '...';
    document.getElementById('cityBusOctPrice').innerText = city.transport.bus.october.price;
    document.getElementById('cityBusOctTimes').innerText = city.transport.bus.october.departures.slice(0, 5).join(', ') + '...';

    // Reset to train tab
    switchCityTransportTab('train');
}

window.onload = () => {
    const initialHtml = document.getElementById('appHtml');
    if (currentLang === 'en') {
        initialHtml.setAttribute('dir', 'ltr');
        initialHtml.setAttribute('lang', 'en');
    } else {
        initialHtml.setAttribute('dir', 'rtl');
        initialHtml.setAttribute('lang', 'ar');
    }
    loadData();
};
