puts "Clearing User/Trailhead/Hike/Visit's old data..." 
User.destroy_all 
Trailhead.destroy_all 
Hike.destroy_all 
Visit.destroy_all 

puts "👤 Users..."
sandy = User.create(
 username: "Sandy",
 email: "sandy@gmail.com",
 password: "042823"
) 
hunter = User.create(
 username: "Hunter",
 email: "hunter11@gmail.com",
 password: "iamadog"
) 
william = User.create(
 username: "William",
 email: "will24@gmail.com",
 password: "112233"
) 

puts "📍 Trailheads..." 

zion_national_park = Trailhead.create(
 name: "Zion National Park",
 location: "Utah",
 direction: "https://www.google.com/maps/dir//Zion+National+Park,+Utah/@37.3220096,-113.1833194,11z/data=!4m17!1m7!3m6!1s0x80caead08844f8d9:0x7c2e3a15aa3656f5!2sZion+National+Park!8m2!3d37.2982022!4d-113.0263005!16zL20vMDE2MjZ4!4m8!1m0!1m5!1m1!1s0x80caead08844f8d9:0x7c2e3a15aa3656f5!2m2!1d-113.0263005!2d37.2982022!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open:  24 hours a day, Closed for Season",
 fees: "Zion Annual Pass - $70.00, Passes are non-transferable, $35 per vehicle"
)
yosemite_national_park = Trailhead.create(
 name: "Yosemite National Park",
 location: "California",
 direction: "https://www.google.com/maps/dir//Yosemite+National+Park,+California/@37.8535194,-119.8313002,10z/data=!4m17!1m7!3m6!1s0x8096f09df58aecc5:0x2d249c2ced8003fe!2sYosemite+National+Park!8m2!3d37.8651011!4d-119.5383294!16zL20vMGNfeTg!4m8!1m0!1m5!1m1!1s0x8096f09df58aecc5:0x2d249c2ced8003fe!2m2!1d-119.5383294!2d37.8651011!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, wheelchair accessible restroom, hiking, dogs allowed, picnic tables, good for kids, public restroom, LGBTQ+ friendly, Transgender safespace, open: 24 hours a day, Closed for Season",
 fees: "$35 per vehicle"
)
glacier_national_park = Trailhead.create(
 name: "Glacier National Park",
 location: "Montana",
 direction: "https://www.google.com/maps/dir/40.7107117,-73.9945162/Glacier+National+Park,+Montana/@43.310324,-111.8143785,4z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x5368901555555555:0xaf16bc2215c55dec!2m2!1d-113.7870225!2d48.7596128!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open: 24 hours a day 365 days of the year",
 fees: "$35 This is a entrance fee for all persons traveling in a single, private, non-commercial vehicle"
)
grand_canyon_national_park = Trailhead.create(
 name: "Grand Canyon National Park",
 location: "Arizona",
 direction: "https://www.google.com/maps/dir//Grand+Canyon+National+Park,+Arizona/@36.2678855,-112.913828,10z/data=!4m18!1m8!3m7!1s0x873312ae759b4d15:0x1f38a9bec9912029!2sGrand+Canyon+National+Park!8m2!3d36.2678855!4d-112.3535253!15sCh9HcmFuZCBDYW55b24gTmF0aW9uYWwgUGFyayBoaWtlWiEiH2dyYW5kIGNhbnlvbiBuYXRpb25hbCBwYXJrIGhpa2WSAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5UZGtsbGIzUjNSUkFC4AEA!16zL20vMGNucnI!4m8!1m0!1m5!1m1!1s0x873312ae759b4d15:0x1f38a9bec9912029!2m2!1d-112.3535253!2d36.2678855!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open: 24 hours a day 365 days of the year unless hours might differ for holidays",
 fees: "National Park (North and South rims) entrance fees - $30 per vehicle. West Rim entrance package - $46.65 per person. Helicopter tours - South Rim - $199 per person."
)
rocky_mountain_national_park = Trailhead.create(
 name: "Rocky Mountain National Park",
 location: "Colorado",
 direction: "https://www.google.com/maps/dir//Rocky+Mountain+National+Park,+Colorado/@40.3427932,-106.8042444,9z/data=!4m18!1m8!3m7!1s0x876979e4455903e9:0xfa27ee43a78e8217!2sRocky+Mountain+National+Park!8m2!3d40.3427932!4d-105.6836389!15sCitSb2NreSBNb3VudGFpbiBOYXRpb25hbCBQYXJrIGhpa2UgYW1lbml0aWVzWi0iK3JvY2t5IG1vdW50YWluIG5hdGlvbmFsIHBhcmsgaGlrZSBhbWVuaXRpZXOSAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJWZDNWVFpVcDNFQUXgAQA!16zL20vMDFwX3p2!4m8!1m0!1m5!1m1!1s0x876979e4455903e9:0xfa27ee43a78e8217!2m2!1d-105.6836389!2d40.3427932!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open: 24 hours a day 365 days of the year unless hours might differ for holidays",
 fees: "Annual Pass $70, 7 Day Vehicle Pass $35, 7 Day Motorcycle Pass $30, 1 Day Vehicle Pass $30"
)
bryce_canyon_national_park = Trailhead.create(
 name: "Bryce Canyon National Park",
 location: "Utah",
 direction: "https://www.google.com/maps/dir//Bryce+Canyon+National+Park,+Utah/@37.597706,-112.2574552,12z/data=!4m18!1m8!3m7!1s0x87356bc602c3eb2d:0x6be9d8fbbeac6d06!2sBryce+Canyon+National+Park!8m2!3d37.5930377!4d-112.1870895!15sCh9CcnljZSBDYW55b24gTmF0aW9uYWwgUGFyayBoaWtlWiEiH2JyeWNlIGNhbnlvbiBuYXRpb25hbCBwYXJrIGhpa2WSAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJyYUY5UWRHRm5FQUXgAQA!16zL20vMGNuc3A!4m8!1m0!1m5!1m1!1s0x87356bc602c3eb2d:0x6be9d8fbbeac6d06!2m2!1d-112.1870895!2d37.5930377!3e2?hl=en-US",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open: 24 hours a day 365 days of the year unless hours might differ for holidays",
 fees: "Vehicle fee of $30 plus a per-person fee of $20 for those 16 years of age and older"
)
arches_canyon_national_park = Trailhead.create(
 name: "Arches National Park",
 location: "Utah",
 direction: "https://www.google.com/maps/dir//Arches+National+Park,+Utah/@38.7315008,-109.865827,10z/data=!4m17!1m7!3m6!1s0x80caf61a860daa51:0x4f42ea69d128c495!2sArches+National+Park!8m2!3d38.733081!4d-109.5925139!16zL20vMGxndA!4m8!1m0!1m5!1m1!1s0x80caf61a860daa51:0x4f42ea69d128c495!2m2!1d-109.5925139!2d38.733081!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open: 24 hours a day 365 days of the year unless hours might differ for holidays",
 fees: "Annual Pass: $80; Annual Military Pass: Free, Private Vehicle Fee - $30.00, Motorcycle Fee - $25.00, Per Person - $15.00(Admits one individual with no car), Timed Entry Ticket Fee - $2.00"
)
olympic_national_park = Trailhead.create(
 name: "Olympic National Park",
 location: "3002 Mt Angeles Rd, Port Angeles, WA 98362",
 direction: "https://www.google.com/maps/dir//Olympic+National+Park,+3002+Mt+Angeles+Rd,+Port+Angeles,+WA+98362/@47.8095721,-124.200399,9z/data=!4m18!1m8!3m7!1s0x548e8009cf0472d1:0x2087abb27d7951!2sOlympic+National+Park!8m2!3d47.8021067!4d-123.6043524!15sChpvbHltcGljIG5hdGlvbmFsIHBhcmsgaGlrZVocIhpvbHltcGljIG5hdGlvbmFsIHBhcmsgaGlrZZIBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkNNR0pVYkdKQkVBReABAA!16zL20vMDE1bnJu!4m8!1m0!1m5!1m1!1s0x548e8009cf0472d1:0x2087abb27d7951!2m2!1d-123.6043524!2d47.8021067!3e2",
 amenities: "Wheelchair accessible entrance, wheelchair accessible parking lot, hiking, dogs allowed, picnic tables, good for kids, public restroom, open: 24 hours a day 365 days of the year unless hours might differ for holidays",
 fees: "Annual Pass: $55, entrance fee is $30 for a private, non-commercial vehicle, $25 for individuals entering on a motorcycle, or $15 for individuals entering on foot or bicycle. Entrance fees are good for seven consecutive days. Annual, interagency, military, senior, 4th grade, and access passes are also available."
)

puts "🧗 Hikes..."
hike_zion = Hike.create(
 trailhead_id: zion_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2020/04/Zion-Observation-Point_DP_2400.jpg?crop=535:301&width=1070&enable=upscale",
 difficulty: "Easy, Moderate, and Strenuous",
 elevation_gain: "0.4 miles to 3.5 miles",
 distance: "two to three days"
)
hike_yosemite = Hike.create(
 trailhead_id: yosemite_national_park.id,
 image_url: "https://destinations.rei.com/wp-content/uploads/2018/06/stylesheet-fluid-half.jpg",
 difficulty: "Moderate to Strenuous",
 elevation_gain: "5.5 miles Loop",
 distance: "5 hours 21 minutes"
)
hike_glacier = Hike.create(
 trailhead_id: glacier_national_park.id,
 image_url: "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2021/03/1140-glacier-national-park-hero.imgcache.rev.web.1400.804.jpg",
 difficulty: "Moderate to Strenuous",
 elevation_gain: "3,000 ft",
 distance: "3½ hours to 4 hours"
)
hike_grand = Hike.create(
 trailhead_id: grand_canyon_national_park.id,
 image_url: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/6/14/1/Original_SteveLarese_Nankoweap_IMG_20170324_112609.jpg.rend.hgtvcom.1280.960.suffix/1497478281936.jpeg",
 difficulty: "Very Strenuous",
 elevation_gain: "Rim to river is 4460 ft, along a 7.8 mile trail",
 distance: "4 hours to 5 hours"
)
hike_rocky = Hike.create(
 trailhead_id: rocky_mountain_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2020/04/Zion-Observation-Point_DP_2400.jpg?crop=535:301&width=1070&enable=upscale",
 difficulty: "Moderate to Strenuous",
 elevation_gain: "7,860 ft to 14,259 ft",
 distance: "2 hours to 3 hours"
)
hike_bryce = Hike.create(
 trailhead_id: bryce_canyon_national_park.id,
 image_url: "https://hikingproject.com/assets/photos/hike/7013075_medium_1554822184.jpg?cache=1680304494",
 difficulty: "Moderate",
 elevation_gain: "0.4 miles to 3.5 miles",
 distance: "3 hours to 4 hours"
)
hike_arches = Hike.create(
 trailhead_id: arches_canyon_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2021/02/Arches-DelicateArch-LaSalMountains_DP_1600.jpg",
 difficulty: "Easy to Moderate",
 elevation_gain: "3 ft to 3,261 ft, round-trip",
 distance: "Under 1 hour"
)
hike_olympic = Hike.create(
 trailhead_id: olympic_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2021/02/Arches-DelicateArch-LaSalMountains_DP_1600.jpg",
 difficulty: "Very Moderate",
 elevation_gain: "None to 3,000 ft",
 distance: "6 to 10 miles round trip - 10-15 minutes"
)

puts "🧗 Visit..."
Visit.create([
 {
  user_id: sandy.id,
  trailhead_id: yosemite_national_park.id,
  visited_date: Date.new(2021,03,02),
  visited: true
 },
 {
  user_id: hunter.id,
  trailhead_id: bryce_canyon_national_park.id,
  visited_date: Date.today,
  visited: false
 },
 {
  user_id: william.id,
  trailhead_id: yosemite_national_park.id,
  visited_date: Date.new(2021,03,10),
  visited: true
 },
 {
  user_id: sandy.id,
  trailhead_id: yosemite_national_park.id,
  visited_date: Date.new(2021,03,10),
  visited: true
 },
 {
  user_id: william.id,
  trailhead_id: olympic_national_park.id,
  visited_date: Date.today,
  visited: false
 },
 {
  user_id: william.id,
  trailhead_id: arches_canyon_national_park.id,
  visited_date: Date.new(2023,10,01),
  visited: true
 },
 {
  user_id: sandy.id,
  trailhead_id: arches_canyon_national_park.id,
  visited_date: Date.today,
  visited: false
 },
 {
  user_id: sandy.id,
  trailhead_id: grand_canyon_national_park.id,
  visited_date: Date.today,
  visited: false
 },
 {
  user_id: sandy.id,
  trailhead_id: olympic_national_park.id,
  visited_date: Date.today,
  visited: false
 }
])