puts "Clearing User/Trailhead/Amenity/Hike/TrailheadAmenity/Difficulty/HikeDifficulty/Visit's old data..." 
User.destroy_all 
Trailhead.destroy_all 
Amenity.destroy_all
TrailheadAmenity.destroy_all
Hike.destroy_all 
Difficulty.destroy_all
HikeDifficulty.destroy_all
Visit.destroy_all 

puts "👤 Users..."
sandy = User.create( username: "Sandy", email: "sandy@gmail.com", password: "042823" ) 
hunter = User.create( username: "Hunter", email: "hunter11@gmail.com", password: "iamadog" ) 
william = User.create( username: "William", email: "will24@gmail.com", password: "112233" ) 

puts "📍 Trailheads..." 
zion_national_park = Trailhead.create(
 name: "Zion National Park",
 location: "Utah",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203063.4883494186!2d-113.20804134019475!3d37.321977867967696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80caead08844f8d9%3A0x7c2e3a15aa3656f5!2sZion%20National%20Park!5e0!3m2!1sen!2sus!4v1682534770514!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Zion+National+Park,+Utah/@37.3220096,-113.1833194,11z/data=!4m17!1m7!3m6!1s0x80caead08844f8d9:0x7c2e3a15aa3656f5!2sZion+National+Park!8m2!3d37.2982022!4d-113.0263005!16zL20vMDE2MjZ4!4m8!1m0!1m5!1m1!1s0x80caead08844f8d9:0x7c2e3a15aa3656f5!2m2!1d-113.0263005!2d37.2982022!3e2",
 latitude: "37.269939",
 longitude: "-113.107468",
 fees: "Zion Annual Pass - $70.00, Passes are non-transferable, $35 per vehicle"
)
yosemite_national_park = Trailhead.create(
 name: "Yosemite National Park",
 location: "California",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403240.0035873217!2d-119.8312959809544!3d37.85297716348046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e0!3m2!1sen!2sus!4v1682533509259!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Yosemite+National+Park,+California/@37.8535194,-119.8313002,10z/data=!4m17!1m7!3m6!1s0x8096f09df58aecc5:0x2d249c2ced8003fe!2sYosemite+National+Park!8m2!3d37.8651011!4d-119.5383294!16zL20vMGNfeTg!4m8!1m0!1m5!1m1!1s0x8096f09df58aecc5:0x2d249c2ced8003fe!2m2!1d-119.5383294!2d37.8651011!3e2",
 latitude: "37.746540",
 longitude: "-119.590584",
 fees: "$35 per vehicle"
)
glacier_national_park = Trailhead.create(
 name: "Glacier National Park",
 location: "Montana",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10362241.76954224!2d-123.87451939178334!3d50.64858491471743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5368901555555555%3A0xaf16bc2215c55dec!2sGlacier%20National%20Park!5e0!3m2!1sen!2sus!4v1682534726337!5m2!1sen!2sus" ,
 # direction: "https://www.google.com/maps/dir/40.7107117,-73.9945162/Glacier+National+Park,+Montana/@43.310324,-111.8143785,4z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x5368901555555555:0xaf16bc2215c55dec!2m2!1d-113.7870225!2d48.7596128!3e2",
 latitude: "36.845200",
 longitude: "-118.717640",
 fees: "$35 This is a entrance fee for all persons traveling in a single, private, non-commercial vehicle"
)
grand_canyon_national_park = Trailhead.create(
 name: "Grand Canyon National Park",
 location: "Arizona",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625435.4959180183!2d-111.36664491817338!3d37.2790454047128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873312ae759b4d15%3A0x1f38a9bec9912029!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sen!2sus!4v1682534692531!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Grand+Canyon+National+Park,+Arizona/@36.2678855,-112.913828,10z/data=!4m18!1m8!3m7!1s0x873312ae759b4d15:0x1f38a9bec9912029!2sGrand+Canyon+National+Park!8m2!3d36.2678855!4d-112.3535253!15sCh9HcmFuZCBDYW55b24gTmF0aW9uYWwgUGFyayBoaWtlWiEiH2dyYW5kIGNhbnlvbiBuYXRpb25hbCBwYXJrIGhpa2WSAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5UZGtsbGIzUjNSUkFC4AEA!16zL20vMGNucnI!4m8!1m0!1m5!1m1!1s0x873312ae759b4d15:0x1f38a9bec9912029!2m2!1d-112.3535253!2d36.2678855!3e2",
 latitude: "35.965000",
 longitude: "-111.973793",
 fees: "National Park (North and South rims) entrance fees - $30 per vehicle. West Rim entrance package - $46.65 per person. Helicopter tours - South Rim - $199 per person."
)
rocky_mountain_national_park = Trailhead.create(
 name: "Rocky Mountain National Park",
 location: "Colorado",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194600.1416105063!2d-105.8412847759822!3d40.35061499502729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876979e4455903e9%3A0xfa27ee43a78e8217!2sRocky%20Mountain%20National%20Park!5e0!3m2!1sen!2sus!4v1682534662826!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Rocky+Mountain+National+Park,+Colorado/@40.3427932,-106.8042444,9z/data=!4m18!1m8!3m7!1s0x876979e4455903e9:0xfa27ee43a78e8217!2sRocky+Mountain+National+Park!8m2!3d40.3427932!4d-105.6836389!15sCitSb2NreSBNb3VudGFpbiBOYXRpb25hbCBQYXJrIGhpa2UgYW1lbml0aWVzWi0iK3JvY2t5IG1vdW50YWluIG5hdGlvbmFsIHBhcmsgaGlrZSBhbWVuaXRpZXOSAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJWZDNWVFpVcDNFQUXgAQA!16zL20vMDFwX3p2!4m8!1m0!1m5!1m1!1s0x876979e4455903e9:0xfa27ee43a78e8217!2m2!1d-105.6836389!2d40.3427932!3e2",
 latitude: "40.187141",
 longitude: "-105.867958",
 fees: "Annual Pass $70, 7 Day Vehicle Pass $35, 7 Day Motorcycle Pass $30, 1 Day Vehicle Pass $30"
)
bryce_canyon_national_park = Trailhead.create(
 name: "Bryce Canyon National Park",
 location: "Utah",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50567.20776702277!2d-112.19176846615798!3d37.615089975790845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87356bc602c3eb2d%3A0x6be9d8fbbeac6d06!2sBryce%20Canyon%20National%20Park!5e0!3m2!1sen!2sus!4v1682534480846!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Bryce+Canyon+National+Park,+Utah/@37.597706,-112.2574552,12z/data=!4m18!1m8!3m7!1s0x87356bc602c3eb2d:0x6be9d8fbbeac6d06!2sBryce+Canyon+National+Park!8m2!3d37.5930377!4d-112.1870895!15sCh9CcnljZSBDYW55b24gTmF0aW9uYWwgUGFyayBoaWtlWiEiH2JyeWNlIGNhbnlvbiBuYXRpb25hbCBwYXJrIGhpa2WSAQ1uYXRpb25hbF9wYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJyYUY5UWRHRm5FQUXgAQA!16zL20vMGNuc3A!4m8!1m0!1m5!1m1!1s0x87356bc602c3eb2d:0x6be9d8fbbeac6d06!2m2!1d-112.1870895!2d37.5930377!3e2?hl=en-US",
 latitude: "37.627361",
 longitude: "-112.185257",
 fees: "Vehicle fee of $30 plus a per-person fee of $20 for those 16 years of age and older"
)
arches_canyon_national_park = Trailhead.create(
 name: "Arches National Park",
 location: "Utah",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805186.2078462587!2d-112.03447980391573!3d37.97109332746818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80caa664d8217ca5%3A0x2128e93282918c15!2sArch%20Canyon!5e0!3m2!1sen!2sus!4v1682534582271!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Arches+National+Park,+Utah/@38.7315008,-109.865827,10z/data=!4m17!1m7!3m6!1s0x80caf61a860daa51:0x4f42ea69d128c495!2sArches+National+Park!8m2!3d38.733081!4d-109.5925139!16zL20vMGxndA!4m8!1m0!1m5!1m1!1s0x80caf61a860daa51:0x4f42ea69d128c495!2m2!1d-109.5925139!2d38.733081!3e2",
 latitude: "38.733082",
 longitude: "-109.592514",
 fees: "Annual Pass: $80; Annual Military Pass: Free, Private Vehicle Fee - $30.00, Motorcycle Fee - $25.00, Per Person - $15.00(Admits one individual with no car), Timed Entry Ticket Fee - $2.00"
)
olympic_national_park = Trailhead.create(
 name: "Olympic National Park",
 location: "3002 Mt Angeles Rd, Port Angeles, WA 98362",
 direction: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343150.4575037559!2d-124.2639238033191!3d47.78410548203219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548e8009cf0472d1%3A0x2087abb27d7951!2sOlympic%20National%20Park!5e0!3m2!1sen!2sus!4v1682534634327!5m2!1sen!2sus",
 # direction: "https://www.google.com/maps/dir//Olympic+National+Park,+3002+Mt+Angeles+Rd,+Port+Angeles,+WA+98362/@47.8095721,-124.200399,9z/data=!4m18!1m8!3m7!1s0x548e8009cf0472d1:0x2087abb27d7951!2sOlympic+National+Park!8m2!3d47.8021067!4d-123.6043524!15sChpvbHltcGljIG5hdGlvbmFsIHBhcmsgaGlrZVocIhpvbHltcGljIG5hdGlvbmFsIHBhcmsgaGlrZZIBDW5hdGlvbmFsX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkNNR0pVYkdKQkVBReABAA!16zL20vMDE1bnJu!4m8!1m0!1m5!1m1!1s0x548e8009cf0472d1:0x2087abb27d7951!2m2!1d-123.6043524!2d47.8021067!3e2",
 latitude: "36.845200",
 longitude: "-118.717640",
 fees: "Annual Pass: $55, entrance fee is $30 for a private, non-commercial vehicle, $25 for individuals entering on a motorcycle, or $15 for individuals entering on foot or bicycle. Entrance fees are good for seven consecutive days. Annual, interagency, military, senior, 4th grade, and access passes are also available."
)

puts "🏞️ Amenity..."
am1 = Amenity.create( name: "wheelchair accessible entrance" )
am2 = Amenity.create( name: "wheelchair accessible parking lot" )
am3 = Amenity.create( name: "wheelchair accessible restroom" )
am4 = Amenity.create( name: "dogs allowed" )
am5 = Amenity.create( name: "picnic tables" )
am6 = Amenity.create( name: "good for kids" )
am7 = Amenity.create( name: "public restroom" )
am8 = Amenity.create( name: "open:  24 hours a day, Closed for Season" )
am9 = Amenity.create( name: "open:  24 hours a day, hours might differ on holidays" )
am10 = Amenity.create( name: "LGBTQ+ friendly, Transgender safespace," )

puts "🪵 TrailheadAmenity..."
# JOIN 
TrailheadAmenity.create([
 { trailhead_id: zion_national_park.id, amenity_id: am1.id },
 { trailhead_id: zion_national_park.id, amenity_id: am2.id },
 { trailhead_id: zion_national_park.id, amenity_id: am4.id },
 { trailhead_id: zion_national_park.id, amenity_id: am5.id },
 { trailhead_id: zion_national_park.id, amenity_id: am6.id },
 { trailhead_id: zion_national_park.id, amenity_id: am7.id },
 { trailhead_id: zion_national_park.id, amenity_id: am8.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am1.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am2.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am3.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am4.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am5.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am6.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am7.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am9.id },
 { trailhead_id: yosemite_national_park.id, amenity_id: am10.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am1.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am2.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am4.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am5.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am6.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am7.id },
 { trailhead_id: glacier_national_park.id, amenity_id: am8.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am1.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am2.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am4.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am5.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am6.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am7.id },
 { trailhead_id: grand_canyon_national_park.id, amenity_id: am8.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am1.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am2.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am4.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am5.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am6.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am7.id },
 { trailhead_id: rocky_mountain_national_park.id, amenity_id: am9.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am1.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am2.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am4.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am5.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am6.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am7.id },
 { trailhead_id: bryce_canyon_national_park.id, amenity_id: am8.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am1.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am2.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am4.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am5.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am6.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am7.id },
 { trailhead_id: arches_canyon_national_park.id, amenity_id: am8.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am1.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am2.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am4.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am5.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am6.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am7.id },
 { trailhead_id: olympic_national_park.id, amenity_id: am9.id },
])


puts "🧗 Hikes..."
hike_zion = Hike.create(
 trailhead_id: zion_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2020/04/Zion-Observation-Point_DP_2400.jpg?crop=535:301&width=1070&enable=upscale",
 elevation_gain: "0.4 miles to 3.5 miles",
 distance: "two to three days"
)
hike_yosemite = Hike.create(
 trailhead_id: yosemite_national_park.id,
 image_url: "https://destinations.rei.com/wp-content/uploads/2018/06/stylesheet-fluid-half.jpg",
 elevation_gain: "5.5 miles Loop",
 distance: "5 hours 21 minutes"
)
hike_glacier = Hike.create(
 trailhead_id: glacier_national_park.id,
 image_url: "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2021/03/1140-glacier-national-park-hero.imgcache.rev.web.1400.804.jpg",
 elevation_gain: "3,000 ft",
 distance: "3½ hours to 4 hours"
)
hike_grand = Hike.create(
 trailhead_id: grand_canyon_national_park.id,
 image_url: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/6/14/1/Original_SteveLarese_Nankoweap_IMG_20170324_112609.jpg.rend.hgtvcom.1280.960.suffix/1497478281936.jpeg",
 elevation_gain: "Rim to river is 4460 ft, along a 7.8 mile trail",
 distance: "4 hours to 5 hours"
)
hike_rocky = Hike.create(
 trailhead_id: rocky_mountain_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2020/04/Zion-Observation-Point_DP_2400.jpg?crop=535:301&width=1070&enable=upscale",
 elevation_gain: "7,860 ft to 14,259 ft",
 distance: "2 hours to 3 hours"
)
hike_bryce = Hike.create(
 trailhead_id: bryce_canyon_national_park.id,
 image_url: "https://hikingproject.com/assets/photos/hike/7013075_medium_1554822184.jpg?cache=1680304494",
 elevation_gain: "0.4 miles to 3.5 miles",
 distance: "3 hours to 4 hours"
)
hike_arches = Hike.create(
 trailhead_id: arches_canyon_national_park.id,
 image_url: "https://www.myutahparks.com/wp-content/uploads/2021/02/Arches-DelicateArch-LaSalMountains_DP_1600.jpg",
 elevation_gain: "3 ft to 3,261 ft, round-trip",
 distance: "Under 1 hour"
)
hike_olympic = Hike.create(
 trailhead_id: olympic_national_park.id,
 image_url: "https://www.outdoorproject.com/sites/default/files/styles/hero_image_desktop/public/features/dsc_0315_0.jpg?itok=dle2MRfU",
 elevation_gain: "None to 3,000 ft",
 distance: "6 to 10 miles round trip - 10-15 minutes"
)

puts " 📉📈 Difficulty..."
dif1 = Difficulty.create(name: "Easy")
dif2 = Difficulty.create(name: "Moderate")
dif3 = Difficulty.create(name: "Strenous")

puts "📈🥾 HikeDifficulty..."
HikeDifficulty.create([
 { hike_id: hike_zion.id, difficulty_id: dif1.id, trailhead_id: zion_national_park.id },
 { hike_id: hike_zion.id, difficulty_id: dif2.id, trailhead_id: zion_national_park.id },
 { hike_id: hike_zion.id, difficulty_id: dif3.id, trailhead_id: zion_national_park.id },
 { hike_id: hike_yosemite.id, difficulty_id: dif2.id, trailhead_id: yosemite_national_park.id },
 { hike_id: hike_yosemite.id, difficulty_id: dif3.id, trailhead_id: yosemite_national_park.id },
 { hike_id: hike_glacier.id, difficulty_id: dif2.id, trailhead_id: glacier_national_park.id },
 { hike_id: hike_glacier.id, difficulty_id: dif3.id, trailhead_id: glacier_national_park.id },
 { hike_id: hike_grand.id, difficulty_id: dif3.id, trailhead_id: grand_canyon_national_park.id },
 { hike_id: hike_rocky.id, difficulty_id: dif2.id, trailhead_id: rocky_mountain_national_park.id },
 { hike_id: hike_rocky.id, difficulty_id: dif3.id, trailhead_id: rocky_mountain_national_park.id },
 { hike_id: hike_bryce.id, difficulty_id: dif2.id, trailhead_id: bryce_canyon_national_park.id },
 { hike_id: hike_arches.id, difficulty_id: dif1.id, trailhead_id: arches_canyon_national_park.id },
 { hike_id: hike_arches.id, difficulty_id: dif2.id, trailhead_id: arches_canyon_national_park.id },
 { hike_id: hike_olympic.id, difficulty_id: dif2.id, trailhead_id: olympic_national_park.id },
])

puts "📍 Visit..."
Visit.create([
 { user_id: sandy.id, trailhead_id: yosemite_national_park.id, visited_date: Date.new(2021,03,02), visited: true },
 { user_id: hunter.id, trailhead_id: bryce_canyon_national_park.id, visited_date: Date.today, visited: true },
 { user_id: william.id, trailhead_id: yosemite_national_park.id, visited_date: Date.new(2021,03,10), visited: true },
 { user_id: hunter.id, trailhead_id: yosemite_national_park.id, visited_date: Date.new(2021,03,10), visited: true },
 { user_id: william.id, trailhead_id: olympic_national_park.id, visited_date: Date.today, visited: false },
 { user_id: william.id, trailhead_id: arches_canyon_national_park.id, visited_date: Date.new(2023,10,01), visited: true },
 { user_id: sandy.id, trailhead_id: arches_canyon_national_park.id, visited_date: Date.new(2019,05,04), visited: true },
 { user_id: sandy.id, trailhead_id: grand_canyon_national_park.id, visited_date: Date.new(2018,10,30), visited: true },
 { user_id: sandy.id, trailhead_id: olympic_national_park.id, visited_date: Date.new(2023,1,02), visited: true }
])