// Merchant Category Codes (MCC) for US
// Stripe requires this info to comply with US legistlation
// This data is extracted from https://stripe.com/docs/issuing/authorizations/categories

// prettier-ignore
const merchantCategoryCodes = [
  { "mcc": "7623", "label": "A/C, Refrigeration Repair", "category": "ac_refrigeration_repair" },
  { "mcc": "8931", "label": "Accounting/Bookkeeping Services", "category": "accounting_bookkeeping_services" },
  { "mcc": "7311", "label": "Advertising Services", "category": "advertising_services" },
  { "mcc": "0763", "label": "Agricultural Cooperative", "category": "agricultural_cooperative" },
  { "mcc": "4511", "label": "Airlines, Air Carriers", "category": "airlines_air_carriers" },
  { "mcc": "4582", "label": "Airports, Flying Fields", "category": "airports_flying_fields" },
  { "mcc": "4119", "label": "Ambulance Services", "category": "ambulance_services" },
  { "mcc": "7996", "label": "Amusement Parks/Carnivals", "category": "amusement_parks_carnivals" },
  { "mcc": "5937", "label": "Antique Reproductions", "category": "antique_reproductions" },
  { "mcc": "5932", "label": "Antique Shops", "category": "antique_shops" },
  { "mcc": "7998", "label": "Aquariums", "category": "aquariums" },
  { "mcc": "8911", "label": "Architectural/Surveying Services", "category": "architectural_surveying_services" },
  { "mcc": "5971", "label": "Art Dealers and Galleries", "category": "art_dealers_and_galleries" },
  { "mcc": "5970", "label": "Artists Supply and Craft Shops", "category": "artists_supply_and_craft_shops" },
  { "mcc": "7531", "label": "Auto Body Repair Shops", "category": "auto_body_repair_shops" },
  { "mcc": "7535", "label": "Auto Paint Shops", "category": "auto_paint_shops" },
  { "mcc": "7538", "label": "Auto Service Shops", "category": "auto_service_shops" },
  { "mcc": "5531", "label": "Auto and Home Supply Stores", "category": "auto_and_home_supply_stores" },
  { "mcc": "6011", "label": "Automated Cash Disburse", "category": "automated_cash_disburse" },
  { "mcc": "5542", "label": "Automated Fuel Dispensers", "category": "automated_fuel_dispensers" },
  { "mcc": "8675", "label": "Automobile Associations", "category": "automobile_associations" },
  { "mcc": "5533", "label": "Automotive Parts and Accessories Stores", "category": "automotive_parts_and_accessories_stores" },
  { "mcc": "5532", "label": "Automotive Tire Stores", "category": "automotive_tire_stores" },
  { "mcc": "9223", "label": "Bail and Bond Payments (payment to the surety for the bond, not the actual bond paid to the government agency)", "category": "bail_and_bond_payments" },
  { "mcc": "5462", "label": "Bakeries", "category": "bakeries" },
  { "mcc": "7929", "label": "Bands, Orchestras", "category": "bands_orchestras" },
  { "mcc": "7230", "label": "Barber and Beauty Shops", "category": "barber_and_beauty_shops" },
  { "mcc": "7995", "label": "Betting/Casino Gambling", "category": "betting_casino_gambling" },
  { "mcc": "5940", "label": "Bicycle Shops", "category": "bicycle_shops" },
  { "mcc": "7932", "label": "Billiard/Pool Establishments", "category": "billiard_pool_establishments" },
  { "mcc": "5551", "label": "Boat Dealers", "category": "boat_dealers" },
  { "mcc": "4457", "label": "Boat Rentals and Leases", "category": "boat_rentals_and_leases" },
  { "mcc": "5942", "label": "Book Stores", "category": "book_stores" },
  { "mcc": "5192", "label": "Books, Periodicals, and Newspapers", "category": "books_periodicals_and_newspapers" },
  { "mcc": "7933", "label": "Bowling Alleys", "category": "bowling_alleys" },
  { "mcc": "4131", "label": "Bus Lines", "category": "bus_lines" },
  { "mcc": "8244", "label": "Business/Secretarial Schools", "category": "business_secretarial_schools" },
  { "mcc": "7278", "label": "Buying/Shopping Services", "category": "buying_shopping_services" },
  { "mcc": "4899", "label": "Cable, Satellite, and Other Pay Television and Radio", "category": "cable_satellite_and_other_pay_television_and_radio" },
  { "mcc": "5946", "label": "Camera and Photographic Supply Stores", "category": "camera_and_photographic_supply_stores" },
  { "mcc": "5441", "label": "Candy, Nut, and Confectionery Stores", "category": "candy_nut_and_confectionery_stores" },
  { "mcc": "7512", "label": "Car Rental Agencies", "category": "car_rental_agencies" },
  { "mcc": "7542", "label": "Car Washes", "category": "car_washes" },
  { "mcc": "5511", "label": "Car and Truck Dealers (New & Used) Sales, Service, Repairs Parts and Leasing", "category": "car_and_truck_dealers_new_used" },
  { "mcc": "5521", "label": "Car and Truck Dealers (Used Only) Sales, Service, Repairs Parts and Leasing", "category": "car_and_truck_dealers_used_only" },
  { "mcc": "1750", "label": "Carpentry Services", "category": "carpentry_services" },
  { "mcc": "7217", "label": "Carpet/Upholstery Cleaning", "category": "carpet_upholstery_cleaning" },
  { "mcc": "5811", "label": "Caterers", "category": "caterers" },
  { "mcc": "8398", "label": "Charitable and Social Service Organizations - Fundraising", "category": "charitable_and_social_service_organizations_fundraising" },
  { "mcc": "5169", "label": "Chemicals and Allied Products (Not Elsewhere Classified)", "category": "chemicals_and_allied_products" },
  { "mcc": "5641", "label": "Chidrens and Infants Wear Stores", "category": "chidrens_and_infants_wear_stores" },
  { "mcc": "8351", "label": "Child Care Services", "category": "child_care_services" },
  { "mcc": "8049", "label": "Chiropodists, Podiatrists", "category": "chiropodists_podiatrists" },
  { "mcc": "8041", "label": "Chiropractors", "category": "chiropractors" },
  { "mcc": "5993", "label": "Cigar Stores and Stands", "category": "cigar_stores_and_stands" },
  { "mcc": "8641", "label": "Civic, Social, Fraternal Associations", "category": "civic_social_fraternal_associations" },
  { "mcc": "7349", "label": "Cleaning and Maintenance", "category": "cleaning_and_maintenance" },
  { "mcc": "7296", "label": "Clothing Rental", "category": "clothing_rental" },
  { "mcc": "8220", "label": "Colleges, Universities", "category": "colleges_universities" },
  { "mcc": "5046", "label": "Commercial Equipment (Not Elsewhere Classified)", "category": "commercial_equipment" },
  { "mcc": "5139", "label": "Commercial Footwear", "category": "commercial_footwear" },
  { "mcc": "7333", "label": "Commercial Photography, Art and Graphics", "category": "commercial_photography_art_and_graphics" },
  { "mcc": "4111", "label": "Commuter Transport, Ferries", "category": "commuter_transport_and_ferries" },
  { "mcc": "4816", "label": "Computer Network Services", "category": "computer_network_services" },
  { "mcc": "7372", "label": "Computer Programming", "category": "computer_programming" },
  { "mcc": "7379", "label": "Computer Repair", "category": "computer_repair" },
  { "mcc": "5734", "label": "Computer Software Stores", "category": "computer_software_stores" },
  { "mcc": "5045", "label": "Computers, Peripherals, and Software", "category": "computers_peripherals_and_software" },
  { "mcc": "1771", "label": "Concrete Work Services", "category": "concrete_work_services" },
  { "mcc": "5039", "label": "Construction Materials (Not Elsewhere Classified)", "category": "construction_materials" },
  { "mcc": "7392", "label": "Consulting, Public Relations", "category": "consulting_public_relations" },
  { "mcc": "8241", "label": "Correspondence Schools", "category": "correspondence_schools" },
  { "mcc": "5977", "label": "Cosmetic Stores", "category": "cosmetic_stores" },
  { "mcc": "7277", "label": "Counseling Services", "category": "counseling_services" },
  { "mcc": "7997", "label": "Country Clubs", "category": "country_clubs" },
  { "mcc": "4215", "label": "Courier Services", "category": "courier_services" },
  { "mcc": "9211", "label": "Court Costs, Including Alimony and Child Support - Courts of Law", "category": "court_costs" },
  { "mcc": "7321", "label": "Credit Reporting Agencies", "category": "credit_reporting_agencies" },
  { "mcc": "4411", "label": "Cruise Lines", "category": "cruise_lines" },
  { "mcc": "5451", "label": "Dairy Products Stores", "category": "dairy_products_stores" },
  { "mcc": "7911", "label": "Dance Hall, Studios, Schools", "category": "dance_hall_studios_schools" },
  { "mcc": "7273", "label": "Dating/Escort Services", "category": "dating_escort_services" },
  { "mcc": "8021", "label": "Dentists, Orthodontists", "category": "dentists_orthodontists" },
  { "mcc": "5311", "label": "Department Stores", "category": "department_stores" },
  { "mcc": "7393", "label": "Detective Agencies", "category": "detective_agencies" },
  { "mcc": "5964", "label": "Direct Marketing - Catalog Merchant", "category": "direct_marketing_catalog_merchant" },
  { "mcc": "5965", "label": "Direct Marketing - Combination Catalog and Retail Merchant", "category": "direct_marketing_combination_catalog_and_retail_merchant" },
  { "mcc": "5967", "label": "Direct Marketing - Inbound Telemarketing", "category": "direct_marketing_inbound_telemarketing" },
  { "mcc": "5960", "label": "Direct Marketing - Insurance Services", "category": "direct_marketing_insurance_services" },
  { "mcc": "5969", "label": "Direct Marketing - Other", "category": "direct_marketing_other" },
  { "mcc": "5966", "label": "Direct Marketing - Outbound Telemarketing", "category": "direct_marketing_outbound_telemarketing" },
  { "mcc": "5968", "label": "Direct Marketing - Subscription", "category": "direct_marketing_subscription" },
  { "mcc": "5962", "label": "Direct Marketing - Travel", "category": "direct_marketing_travel" },
  { "mcc": "5310", "label": "Discount Stores", "category": "discount_stores" },
  { "mcc": "8011", "label": "Doctors", "category": "doctors" },
  { "mcc": "5963", "label": "Door-To-Door Sales", "category": "door_to_door_sales" },
  { "mcc": "5714", "label": "Drapery, Window Covering, and Upholstery Stores", "category": "drapery_window_covering_and_upholstery_stores" },
  { "mcc": "5813", "label": "Drinking Places", "category": "drinking_places" },
  { "mcc": "5912", "label": "Drug Stores and Pharmacies", "category": "drug_stores_and_pharmacies" },
  { "mcc": "5122", "label": "Drugs, Drug Proprietaries, and Druggist Sundries", "category": "drugs_drug_proprietaries_and_druggist_sundries" },
  { "mcc": "7216", "label": "Dry Cleaners", "category": "dry_cleaners" },
  { "mcc": "5099", "label": "Durable Goods (Not Elsewhere Classified)", "category": "durable_goods" },
  { "mcc": "5309", "label": "Duty Free Stores", "category": "duty_free_stores" },
  { "mcc": "5812", "label": "Eating Places, Restaurants", "category": "eating_places_restaurants" },
  { "mcc": "8299", "label": "Educational Services", "category": "educational_services" },
  { "mcc": "5997", "label": "Electric Razor Stores", "category": "electric_razor_stores" },
  { "mcc": "5065", "label": "Electrical Parts and Equipment", "category": "electrical_parts_and_equipment" },
  { "mcc": "1731", "label": "Electrical Services", "category": "electrical_services" },
  { "mcc": "7622", "label": "Electronics Repair Shops", "category": "electronics_repair_shops" },
  { "mcc": "5732", "label": "Electronics Stores", "category": "electronics_stores" },
  { "mcc": "8211", "label": "Elementary, Secondary Schools", "category": "elementary_secondary_schools" },
  { "mcc": "7361", "label": "Employment/Temp Agencies", "category": "employment_temp_agencies" },
  { "mcc": "7394", "label": "Equipment Rental", "category": "equipment_rental" },
  { "mcc": "7342", "label": "Exterminating Services", "category": "exterminating_services" },
  { "mcc": "5651", "label": "Family Clothing Stores", "category": "family_clothing_stores" },
  { "mcc": "5814", "label": "Fast Food Restaurants", "category": "fast_food_restaurants" },
  { "mcc": "6012", "label": "Financial Institutions", "category": "financial_institutions" },
  { "mcc": "9222", "label": "Fines - Government Administrative Entities", "category": "fines_government_administrative_entities" },
  { "mcc": "5718", "label": "Fireplace, Fireplace Screens, and Accessories Stores", "category": "fireplace_fireplace_screens_and_accessories_stores" },
  { "mcc": "5713", "label": "Floor Covering Stores", "category": "floor_covering_stores" },
  { "mcc": "5992", "label": "Florists", "category": "florists" },
  { "mcc": "5193", "label": "Florists Supplies, Nursery Stock, and Flowers", "category": "florists_supplies_nursery_stock_and_flowers" },
  { "mcc": "5422", "label": "Freezer and Locker Meat Provisioners", "category": "freezer_and_locker_meat_provisioners" },
  { "mcc": "5983", "label": "Fuel Dealers (Non Automotive)", "category": "fuel_dealers_non_automotive" },
  { "mcc": "7261", "label": "Funeral Services, Crematories", "category": "funeral_services_crematories" },
  { "mcc": "7641", "label": "Furniture Repair, Refinishing", "category": "furniture_repair_refinishing" },
  { "mcc": "5712", "label": "Furniture, Home Furnishings, and Equipment Stores, Except Appliances", "category": "furniture_home_furnishings_and_equipment_stores_except_appliances" },
  { "mcc": "5681", "label": "Furriers and Fur Shops", "category": "furriers_and_fur_shops" },
  { "mcc": "1520", "label": "General Services", "category": "general_services" },
  { "mcc": "5947", "label": "Gift, Card, Novelty, and Souvenir Shops", "category": "gift_card_novelty_and_souvenir_shops" },
  { "mcc": "5231", "label": "Glass, Paint, and Wallpaper Stores", "category": "glass_paint_and_wallpaper_stores" },
  { "mcc": "5950", "label": "Glassware, Crystal Stores", "category": "glassware_crystal_stores" },
  { "mcc": "7992", "label": "Golf Courses - Public", "category": "golf_courses_public" },
  { "mcc": "9399", "label": "Government Services (Not Elsewhere Classified)", "category": "government_services" },
  { "mcc": "5411", "label": "Grocery Stores, Supermarkets", "category": "grocery_stores_supermarkets" },
  { "mcc": "5251", "label": "Hardware Stores", "category": "hardware_stores" },
  { "mcc": "5072", "label": "Hardware, Equipment, and Supplies", "category": "hardware_equipment_and_supplies" },
  { "mcc": "7298", "label": "Health and Beauty Spas", "category": "health_and_beauty_spas" },
  { "mcc": "5975", "label": "Hearing Aids Sales and Supplies", "category": "hearing_aids_sales_and_supplies" },
  { "mcc": "1711", "label": "Heating, Plumbing, A/C", "category": "heating_plumbing_a_c" },
  { "mcc": "5945", "label": "Hobby, Toy, and Game Shops", "category": "hobby_toy_and_game_shops" },
  { "mcc": "5200", "label": "Home Supply Warehouse Stores", "category": "home_supply_warehouse_stores" },
  { "mcc": "8062", "label": "Hospitals", "category": "hospitals" },
  { "mcc": "7011", "label": "Hotels, Motels, and Resorts", "category": "hotels_motels_and_resorts" },
  { "mcc": "5722", "label": "Household Appliance Stores", "category": "household_appliance_stores" },
  { "mcc": "5085", "label": "Industrial Supplies (Not Elsewhere Classified)", "category": "industrial_supplies" },
  { "mcc": "7375", "label": "Information Retrieval Services", "category": "information_retrieval_services" },
  { "mcc": "6399", "label": "Insurance - Default", "category": "insurance_default" },
  { "mcc": "6300", "label": "Insurance Underwriting, Premiums", "category": "insurance_underwriting_premiums" },
  { "mcc": "9950", "label": "Intra-Company Purchases", "category": "intra_company_purchases" },
  { "mcc": "5944", "label": "Jewelry Stores, Watches, Clocks, and Silverware Stores", "category": "jewelry_stores_watches_clocks_and_silverware_stores" },
  { "mcc": "0780", "label": "Landscaping Services", "category": "landscaping_services" },
  { "mcc": "7211", "label": "Laundries", "category": "laundries" },
  { "mcc": "7210", "label": "Laundry, Cleaning Services", "category": "laundry_cleaning_services" },
  { "mcc": "8111", "label": "Legal Services, Attorneys", "category": "legal_services_attorneys" },
  { "mcc": "5948", "label": "Luggage and Leather Goods Stores", "category": "luggage_and_leather_goods_stores" },
  { "mcc": "5211", "label": "Lumber, Building Materials Stores", "category": "lumber_building_materials_stores" },
  { "mcc": "6010", "label": "Manual Cash Disburse", "category": "manual_cash_disburse" },
  { "mcc": "4468", "label": "Marinas, Service and Supplies", "category": "marinas_service_and_supplies" },
  { "mcc": "1740", "label": "Masonry, Stonework, and Plaster", "category": "masonry_stonework_and_plaster" },
  { "mcc": "7297", "label": "Massage Parlors", "category": "massage_parlors" },
  { "mcc": "8099", "label": "Medical Services", "category": "medical_services" },
  { "mcc": "8071", "label": "Medical and Dental Labs", "category": "medical_and_dental_labs" },
  { "mcc": "5047", "label": "Medical, Dental, Ophthalmic, and Hospital Equipment and Supplies", "category": "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" },
  { "mcc": "8699", "label": "Membership Organizations", "category": "membership_organizations" },
  { "mcc": "5611", "label": "Mens and Boys Clothing and Accessories Stores", "category": "mens_and_boys_clothing_and_accessories_stores" },
  { "mcc": "5691", "label": "Mens, Womens Clothing Stores", "category": "mens_womens_clothing_stores" },
  { "mcc": "5051", "label": "Metal Service Centers", "category": "metal_service_centers" },
  { "mcc": "5699", "label": "Miscellaneous Apparel and Accessory Shops", "category": "miscellaneous_apparel_and_accessory_shops" },
  { "mcc": "5599", "label": "Miscellaneous Auto Dealers", "category": "miscellaneous_auto_dealers" },
  { "mcc": "7399", "label": "Miscellaneous Business Services", "category": "miscellaneous_business_services" },
  { "mcc": "5499", "label": "Miscellaneous Food Stores - Convenience Stores and Specialty Markets", "category": "miscellaneous_food_stores" },
  { "mcc": "5399", "label": "Miscellaneous General Merchandise", "category": "miscellaneous_general_merchandise" },
  { "mcc": "7299", "label": "Miscellaneous General Services", "category": "miscellaneous_general_services" },
  { "mcc": "5719", "label": "Miscellaneous Home Furnishing Specialty Stores", "category": "miscellaneous_home_furnishing_specialty_stores" },
  { "mcc": "2741", "label": "Miscellaneous Publishing and Printing", "category": "miscellaneous_publishing_and_printing" },
  { "mcc": "7999", "label": "Miscellaneous Recreation Services", "category": "miscellaneous_recreation_services" },
  { "mcc": "7699", "label": "Miscellaneous Repair Shops", "category": "miscellaneous_repair_shops" },
  { "mcc": "5999", "label": "Miscellaneous Specialty Retail", "category": "miscellaneous_specialty_retail" },
  { "mcc": "5271", "label": "Mobile Home Dealers", "category": "mobile_home_dealers" },
  { "mcc": "7832", "label": "Motion Picture Theaters", "category": "motion_picture_theaters" },
  { "mcc": "4214", "label": "Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services", "category": "motor_freight_carriers_and_trucking" },
  { "mcc": "5592", "label": "Motor Homes Dealers", "category": "motor_homes_dealers" },
  { "mcc": "5013", "label": "Motor Vehicle Supplies and New Parts", "category": "motor_vehicle_supplies_and_new_parts" },
  { "mcc": "5571", "label": "Motorcycle Shops and Dealers", "category": "motorcycle_shops_and_dealers" },
  { "mcc": "5561", "label": "Motorcycle Shops, Dealers", "category": "motorcycle_shops_dealers" },
  { "mcc": "5733", "label": "Music Stores-Musical Instruments, Pianos, and Sheet Music", "category": "music_stores_musical_instruments_pianos_and_sheet_music" },
  { "mcc": "5994", "label": "News Dealers and Newsstands", "category": "news_dealers_and_newsstands" },
  { "mcc": "6051", "label": "Non-FI, Money Orders", "category": "non_fi_money_orders" },
  { "mcc": "6540", "label": "Non-FI, Stored Value Card Purchase/Load", "category": "non_fi_stored_value_card_purchase_load" },
  { "mcc": "5199", "label": "Nondurable Goods (Not Elsewhere Classified)", "category": "nondurable_goods" },
  { "mcc": "5261", "label": "Nurseries, Lawn and Garden Supply Stores", "category": "nurseries_lawn_and_garden_supply_stores" },
  { "mcc": "8050", "label": "Nursing/Personal Care", "category": "nursing_personal_care" },
  { "mcc": "5021", "label": "Office and Commercial Furniture", "category": "office_and_commercial_furniture" },
  { "mcc": "8043", "label": "Opticians, Eyeglasses", "category": "opticians_eyeglasses" },
  { "mcc": "8042", "label": "Optometrists, Ophthalmologist", "category": "optometrists_ophthalmologist" },
  { "mcc": "5976", "label": "Orthopedic Goods - Prosthetic Devices", "category": "orthopedic_goods_prosthetic_devices" },
  { "mcc": "8031", "label": "Osteopaths", "category": "osteopaths" },
  { "mcc": "5921", "label": "Package Stores-Beer, Wine, and Liquor", "category": "package_stores_beer_wine_and_liquor" },
  { "mcc": "5198", "label": "Paints, Varnishes, and Supplies", "category": "paints_varnishes_and_supplies" },
  { "mcc": "7523", "label": "Parking Lots, Garages", "category": "parking_lots_garages" },
  { "mcc": "4112", "label": "Passenger Railways", "category": "passenger_railways" },
  { "mcc": "5933", "label": "Pawn Shops", "category": "pawn_shops" },
  { "mcc": "5995", "label": "Pet Shops, Pet Food, and Supplies", "category": "pet_shops_pet_food_and_supplies" },
  { "mcc": "5172", "label": "Petroleum and Petroleum Products", "category": "petroleum_and_petroleum_products" },
  { "mcc": "7395", "label": "Photo Developing", "category": "photo_developing" },
  { "mcc": "7221", "label": "Photographic Studios", "category": "photographic_studios" },
  { "mcc": "5044", "label": "Photographic, Photocopy, Microfilm Equipment, and Supplies", "category": "photographic_photocopy_microfilm_equipment_and_supplies" },
  { "mcc": "7829", "label": "Picture/Video Production", "category": "picture_video_production" },
  { "mcc": "5131", "label": "Piece Goods, Notions, and Other Dry Goods", "category": "piece_goods_notions_and_other_dry_goods" },
  { "mcc": "5074", "label": "Plumbing, Heating Equipment, and Supplies", "category": "plumbing_heating_equipment_and_supplies" },
  { "mcc": "8651", "label": "Political Organizations", "category": "political_organizations" },
  { "mcc": "9402", "label": "Postal Services - Government Only", "category": "postal_services_government_only" },
  { "mcc": "5094", "label": "Precious Stones and Metals, Watches and Jewelry", "category": "precious_stones_and_metals_watches_and_jewelry" },
  { "mcc": "8999", "label": "Professional Services", "category": "professional_services" },
  { "mcc": "4225", "label": "Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage", "category": "public_warehousing_and_storage" },
  { "mcc": "7338", "label": "Quick Copy, Repro, and Blueprint", "category": "quick_copy_repro_and_blueprint" },
  { "mcc": "4011", "label": "Railroads", "category": "railroads" },
  { "mcc": "6513", "label": "Real Estate Agents and Managers - Rentals", "category": "real_estate_agents_and_managers_rentals" },
  { "mcc": "5735", "label": "Record Stores", "category": "record_stores" },
  { "mcc": "7519", "label": "Recreational Vehicle Rentals", "category": "recreational_vehicle_rentals" },
  { "mcc": "5973", "label": "Religious Goods Stores", "category": "religious_goods_stores" },
  { "mcc": "8661", "label": "Religious Organizations", "category": "religious_organizations" },
  { "mcc": "1761", "label": "Roofing/Siding, Sheet Metal", "category": "roofing_siding_sheet_metal" },
  { "mcc": "7339", "label": "Secretarial Support Services", "category": "secretarial_support_services" },
  { "mcc": "6211", "label": "Security Brokers/Dealers", "category": "security_brokers_dealers" },
  { "mcc": "5541", "label": "Service Stations", "category": "service_stations" },
  { "mcc": "5949", "label": "Sewing, Needlework, Fabric, and Piece Goods Stores", "category": "sewing_needlework_fabric_and_piece_goods_stores" },
  { "mcc": "7251", "label": "Shoe Repair/Hat Cleaning", "category": "shoe_repair_hat_cleaning" },
  { "mcc": "5661", "label": "Shoe Stores", "category": "shoe_stores" },
  { "mcc": "7629", "label": "Small Appliance Repair", "category": "small_appliance_repair" },
  { "mcc": "5598", "label": "Snowmobile Dealers", "category": "snowmobile_dealers" },
  { "mcc": "1799", "label": "Special Trade Services", "category": "special_trade_services" },
  { "mcc": "2842", "label": "Specialty Cleaning", "category": "specialty_cleaning" },
  { "mcc": "5941", "label": "Sporting Goods Stores", "category": "sporting_goods_stores" },
  { "mcc": "7032", "label": "Sporting/Recreation Camps", "category": "sporting_recreation_camps" },
  { "mcc": "7941", "label": "Sports Clubs/Fields", "category": "sports_clubs_fields" },
  { "mcc": "5655", "label": "Sports and Riding Apparel Stores", "category": "sports_and_riding_apparel_stores" },
  { "mcc": "5972", "label": "Stamp and Coin Stores", "category": "stamp_and_coin_stores" },
  { "mcc": "5111", "label": "Stationary, Office Supplies, Printing and Writing Paper", "category": "stationary_office_supplies_printing_and_writing_paper" },
  { "mcc": "5943", "label": "Stationery Stores, Office, and School Supply Stores", "category": "stationery_stores_office_and_school_supply_stores" },
  { "mcc": "5996", "label": "Swimming Pools Sales", "category": "swimming_pools_sales" },
  { "mcc": "4723", "label": "TUI Travel - Germany", "category": "t_ui_travel_germany" },
  { "mcc": "5697", "label": "Tailors, Alterations", "category": "tailors_alterations" },
  { "mcc": "9311", "label": "Tax Payments - Government Agencies", "category": "tax_payments_government_agencies" },
  { "mcc": "7276", "label": "Tax Preparation Services", "category": "tax_preparation_services" },
  { "mcc": "4121", "label": "Taxicabs/Limousines", "category": "taxicabs_limousines" },
  { "mcc": "4812", "label": "Telecommunication Equipment and Telephone Sales", "category": "telecommunication_equipment_and_telephone_sales" },
  { "mcc": "4814", "label": "Telecommunication Services", "category": "telecommunication_services" },
  { "mcc": "4821", "label": "Telegraph Services", "category": "telegraph_services" },
  { "mcc": "5998", "label": "Tent and Awning Shops", "category": "tent_and_awning_shops" },
  { "mcc": "8734", "label": "Testing Laboratories", "category": "testing_laboratories" },
  { "mcc": "7922", "label": "Theatrical Ticket Agencies", "category": "theatrical_ticket_agencies" },
  { "mcc": "7012", "label": "Timeshares", "category": "timeshares" },
  { "mcc": "7534", "label": "Tire Retreading and Repair", "category": "tire_retreading_and_repair" },
  { "mcc": "4784", "label": "Tolls/Bridge Fees", "category": "tolls_bridge_fees" },
  { "mcc": "7991", "label": "Tourist Attractions and Exhibits", "category": "tourist_attractions_and_exhibits" },
  { "mcc": "7549", "label": "Towing Services", "category": "towing_services" },
  { "mcc": "7033", "label": "Trailer Parks, Campgrounds", "category": "trailer_parks_campgrounds" },
  { "mcc": "4789", "label": "Transportation Services (Not Elsewhere Classified)", "category": "transportation_services" },
  { "mcc": "4722", "label": "Travel Agencies, Tour Operators", "category": "travel_agencies_tour_operators" },
  { "mcc": "7511", "label": "Truck StopIteration", "category": "truck_stop_iteration" },
  { "mcc": "7513", "label": "Truck/Utility Trailer Rentals", "category": "truck_utility_trailer_rentals" },
  { "mcc": "2791", "label": "Typesetting, Plate Making, and Related Services", "category": "typesetting_plate_making_and_related_services" },
  { "mcc": "5978", "label": "Typewriter Stores", "category": "typewriter_stores" },
  { "mcc": "9405", "label": "U.S. Federal Government Agencies or Departments", "category": "u_s_federal_government_agencies_or_departments" },
  { "mcc": "5137", "label": "Uniforms, Commercial Clothing", "category": "uniforms_commercial_clothing" },
  { "mcc": "5931", "label": "Used Merchandise and Secondhand Stores", "category": "used_merchandise_and_secondhand_stores" },
  { "mcc": "4900", "label": "Utilities", "category": "utilities" },
  { "mcc": "5331", "label": "Variety Stores", "category": "variety_stores" },
  { "mcc": "0742", "label": "Veterinary Services", "category": "veterinary_services" },
  { "mcc": "7993", "label": "Video Amusement Game Supplies", "category": "video_amusement_game_supplies" },
  { "mcc": "7994", "label": "Video Game Arcades", "category": "video_game_arcades" },
  { "mcc": "7841", "label": "Video Tape Rental Stores", "category": "video_tape_rental_stores" },
  { "mcc": "8249", "label": "Vocational/Trade Schools", "category": "vocational_trade_schools" },
  { "mcc": "7631", "label": "Watch/Jewelry Repair", "category": "watch_jewelry_repair" },
  { "mcc": "7692", "label": "Welding Repair", "category": "welding_repair" },
  { "mcc": "5300", "label": "Wholesale Clubs", "category": "wholesale_clubs" },
  { "mcc": "5698", "label": "Wig and Toupee Stores", "category": "wig_and_toupee_stores" },
  { "mcc": "4829", "label": "Wires, Money Orders", "category": "wires_money_orders" },
  { "mcc": "5631", "label": "Womens Accessory and Specialty Shops", "category": "womens_accessory_and_specialty_shops" },
  { "mcc": "5621", "label": "Womens Ready-To-Wear Stores", "category": "womens_ready_to_wear_stores" },
  { "mcc": "5935", "label": "Wrecking and Salvage Yards", "category": "wrecking_and_salvage_yards" },
];

export default merchantCategoryCodes;
